<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const collection = useAideCollection()
const { modules } = await useAideNav()
const { bySlug } = useGlossary()

const path = computed(() => `/aide/${route.params.module}/${route.params.slug}`)

const { data: page } = await useAsyncData(
  () => `aide-${collection}-${path.value}`,
  async () => (await queryCollection(collection).path(path.value).first())
    ?? (collection === 'aide_en' ? await queryCollection('aide_fr').path(path.value).first() : null),
  { watch: [path] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true })
}

// "Avant de commencer" / "Before you start": rendered as a framed callout.
const PREREQUISITE_IDS = ['avant-de-commencer', 'before-you-start']

type MinimarkNode = string | [string, Record<string, unknown>, ...unknown[]]

const renderedPage = computed(() => {
  const current = page.value
  const nodes = current?.body?.value as MinimarkNode[] | undefined
  if (!current || !nodes) return current

  const out: MinimarkNode[] = []
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    const isStart = Array.isArray(node) && node[0] === 'h2' && PREREQUISITE_IDS.includes(String(node[1]?.id))
    if (!isStart) {
      out.push(node)
      continue
    }
    const [tag, props, ...children] = node as [string, Record<string, unknown>, ...unknown[]]
    const inside: MinimarkNode[] = [[tag, { ...props, class: '!mt-0 !mb-3 text-lg' }, ...children] as MinimarkNode]
    while (i + 1 < nodes.length && !(Array.isArray(nodes[i + 1]) && (nodes[i + 1] as unknown[])[0] === 'h2')) {
      inside.push(nodes[++i]!)
    }
    out.push(['callout', { color: 'primary' }, ...inside] as MinimarkNode)
  }

  return { ...current, body: { ...current.body, value: out } }
})

const theme = computed(() => modules.value.find(m => m.slug === page.value?.moduleSlug))

const siblings = computed(() => (theme.value?.articles ?? []).filter(a => a.status !== 'draft'))
const index = computed(() => siblings.value.findIndex(a => a.path === path.value))
const previous = computed(() => siblings.value[index.value - 1])
const next = computed(() => siblings.value[index.value + 1])

const terms = computed(() =>
  (page.value?.glossary ?? [])
    .map(slug => bySlug.get(slug))
    .filter((t): t is GlossaryTerm => Boolean(t))
)

const breadcrumb = computed(() => [
  { label: t('aide.breadcrumbRoot'), to: localePath('/aide') },
  { label: theme.value?.title ?? '', to: localePath(`/aide/${page.value?.moduleSlug}`) },
  { label: page.value?.title ?? '' }
])

useSeoMeta({
  title: `${page.value?.title} — ${t('aide.seoSuffix')}`,
  description: page.value?.enBref || undefined
})
</script>

<template>
  <AideShell v-if="page">
    <div class="pt-6">
      <UBreadcrumb :items="breadcrumb" />
    </div>

    <UPageHeader :title="page.title" class="border-b-0 pb-0">
      <template #headline>
        <div class="flex flex-wrap items-center gap-2">
          <UBadge
            v-for="actor in page.actors"
            :key="actor"
            :label="actor"
            icon="i-lucide-user-round"
            color="neutral"
            variant="subtle"
          />
          <UBadge
            v-if="theme"
            :label="theme.title"
            :icon="theme.icon"
            color="primary"
            variant="subtle"
          />
        </div>
      </template>
    </UPageHeader>

    <div v-if="page.enBref" class="mt-6 rounded-lg border border-primary/25 bg-primary/5 p-4">
      <div class="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
        <UIcon name="i-lucide-zap" class="size-3.5" /> {{ t('aide.article.summary') }}
      </div>
      <p class="text-highlighted">
        {{ page.enBref }}
      </p>
    </div>

    <AideVideo
      v-if="page.video"
      :src="page.video"
      :status="page.videoStatus"
      :title="page.title"
    />

    <UPageBody>
      <div v-if="page.body?.value?.length" class="[&_img]:rounded-lg [&_img]:border [&_img]:border-default [&_h2]:mt-24 [&_h2:first-child]:mt-14 [&_h3]:mt-12">
        <ContentRenderer :value="renderedPage" />
      </div>

      <UAlert
        v-else
        icon="i-lucide-pencil-line"
        color="neutral"
        variant="subtle"
        :title="t('aide.article.inProgressTitle')"
        :description="t('aide.article.inProgressDescription')"
      />

      <div v-if="previous || next" class="mt-12 flex flex-wrap items-center justify-between gap-4">
        <UButton
          v-if="previous"
          :to="localePath(previous.path)"
          icon="i-lucide-arrow-left"
          color="neutral"
          variant="outline"
          class="max-w-full"
          :label="previous.title"
        />
        <UButton
          v-if="next"
          :to="localePath(next.path)"
          trailing-icon="i-lucide-arrow-right"
          color="neutral"
          variant="outline"
          class="ms-auto max-w-full"
          :label="next.title"
        />
      </div>
    </UPageBody>

    <template #right>
      <UContentToc
        v-if="page.body?.toc?.links?.length"
        :title="t('aide.article.onThisPage')"
        :links="page.body.toc.links"
      >
        <template v-if="terms.length" #bottom>
          <div class="mt-6">
            <div class="mb-2 text-sm font-semibold text-highlighted">
              {{ t('aide.article.related') }}
            </div>
            <ul class="space-y-2 text-sm">
              <li v-for="t in terms" :key="t.slug">
                <UTooltip :text="t.definition[0]" :content="{ side: 'left' }">
                  <NuxtLink
                    :to="localePath(`/aide/glossaire#terme-${t.slug}`)"
                    class="text-muted underline decoration-dotted underline-offset-4 hover:text-primary"
                  >
                    {{ t.term }}
                  </NuxtLink>
                </UTooltip>
              </li>
            </ul>
          </div>
        </template>
      </UContentToc>
    </template>
  </AideShell>
</template>
