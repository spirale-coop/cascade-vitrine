<script setup lang="ts">
const localePath = useLocalePath()
const i18n = useI18n()
const locale = i18n.locale
const { terms } = useGlossary()
const { articles } = await useAideNav()

useSeoMeta({
  title: () => `${i18n.t('aide.glossary.title')} — ${i18n.t('aide.seoSuffix')}`,
  description: () => i18n.t('aide.glossary.description')
})

type Filter = 'all' | 'notions' | 'modele'

const filter = ref<Filter>('all')
const filters = [
  { label: i18n.t('aide.glossary.filterAll'), value: 'all' },
  { label: i18n.t('aide.glossary.filterNotions'), value: 'notions' },
  { label: i18n.t('aide.glossary.filterModel'), value: 'modele' }
]

const natureLabel = (nature: string) => i18n.t(`aide.nature.${nature}`)

const normalize = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toUpperCase()

const visible = computed(() =>
  terms
    .filter((t) => {
      const inModel = t.nature && t.nature !== 'concept'
      if (filter.value === 'notions') return !inModel
      if (filter.value === 'modele') return inModel
      return true
    })
    .sort((a, b) => normalize(a.term).localeCompare(normalize(b.term), locale.value))
)

const groups = computed(() => {
  const map = new Map<string, GlossaryTerm[]>()
  for (const t of visible.value) {
    const letter = normalize(t.term).charAt(0)
    map.set(letter, [...(map.get(letter) ?? []), t])
  }
  return [...map.entries()]
})

const articleBySlug = computed(() =>
  new Map(articles.value.map(a => [a.path.split('/').pop() as string, a]))
)

function linkedArticles(t: GlossaryTerm) {
  return t.articles
    .map(slug => articleBySlug.value.get(slug))
    .filter(a => a && a.status !== 'draft') as AideArticle[]
}
</script>

<template>
  <AideShell>
    <UPageHeader
      :headline="$t('aide.breadcrumbRoot')"
      :title="$t('aide.glossary.title')"
      :description="$t('aide.glossary.description')"
      class="pt-6"
    />

    <div class="mt-6 flex flex-wrap gap-2">
      <UButton
        v-for="f in filters"
        :key="f.value"
        :label="f.label"
        size="sm"
        :color="filter === f.value ? 'primary' : 'neutral'"
        :variant="filter === f.value ? 'solid' : 'outline'"
        @click="filter = f.value as Filter"
      />
    </div>

    <UPageBody>
      <section
        v-for="[letter, list] in groups"
        :id="`lettre-${letter}`"
        :key="letter"
        class="mb-10 scroll-mt-[calc(var(--ui-header-height)+1rem)]"
      >
        <div class="mb-4 border-b border-default pb-2 text-2xl font-bold text-primary">
          {{ letter }}
        </div>

        <div class="space-y-6">
          <article
            v-for="t in list"
            :id="`terme-${t.slug}`"
            :key="t.slug"
            class="scroll-mt-[calc(var(--ui-header-height)+1rem)]"
          >
            <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 class="text-lg font-semibold text-highlighted">
                {{ t.term }}
              </h3>
              <UBadge
                v-if="t.nature && t.nature !== 'concept'"
                :label="natureLabel(t.nature)"
                color="neutral"
                variant="subtle"
                size="sm"
              />
            </div>

            <ul class="mt-2 list-disc space-y-1 ps-5 text-muted">
              <li v-for="line in t.definition" :key="line">
                {{ line }}
              </li>
            </ul>

            <p v-if="t.values" class="mt-2 text-sm">
              <span class="font-medium text-highlighted">{{ $t('aide.glossary.values') }}</span>
              <span class="text-muted"> {{ t.values }}</span>
            </p>

            <p v-if="linkedArticles(t).length" class="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <span class="text-muted">{{ $t('aide.glossary.see') }}</span>
              <NuxtLink
                v-for="a in linkedArticles(t)"
                :key="a.path"
                :to="localePath(a.path)"
                class="text-primary hover:underline"
              >
                {{ a.title }}
              </NuxtLink>
            </p>
          </article>
        </div>
      </section>
    </UPageBody>

    <template #right>
      <div class="hidden lg:block">
        <div class="mb-2 text-sm font-semibold text-highlighted">
          {{ $t('aide.glossary.index') }}
        </div>
        <div class="flex flex-wrap gap-1">
          <a
            v-for="[letter] in groups"
            :key="letter"
            :href="`#lettre-${letter}`"
            class="flex size-8 items-center justify-center rounded-md text-sm font-medium text-muted hover:bg-elevated hover:text-primary"
          >
            {{ letter }}
          </a>
        </div>
      </div>
    </template>
  </AideShell>
</template>
