<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
const { modules, articles } = await useAideNav()
const { bySlug } = useGlossary()

/** Themes first, then the two cross-cutting sections, in one list of cards. */
const cards = computed(() => [
  ...modules.value.map(m => ({
    key: m.slug,
    title: m.title,
    icon: m.icon,
    description: m.description,
    to: `/aide/${m.slug}`,
    badge: m.readable
      ? { label: t('aide.hub.guidesOf', { x: m.readable, y: m.articles.length }, m.articles.length), color: 'primary' as const }
      : { label: t('aide.hub.comingSoon'), color: 'neutral' as const }
  })),
  {
    key: 'glossaire',
    title: t('aide.nav.glossary'),
    icon: 'i-lucide-book-open-text',
    description: t('aide.hub.glossaryCard'),
    to: '/aide/glossaire'
  },
  {
    key: 'nouveautes',
    title: t('aide.hub.changelogTitle'),
    icon: 'i-lucide-scroll-text',
    description: t('aide.hub.changelogDescription'),
    to: '/changelog'
  }
])

/** Hand-picked for now (there are no usage statistics yet). */
const popularPaths = [
  '/aide/modeles-de-souscription/creer-un-modele-de-souscription',
  '/aide/paiements/connecter-le-compte-stripe',
  '/aide/contributions/creer-une-contribution-ou-un-avoir',
  '/aide/paiements/marquer-une-contribution-comme-payee'
]

const popular = computed(() =>
  popularPaths
    .map((path) => {
      const a = articles.value.find(x => x.path === path)
      if (!a || a.status === 'draft') return null
      return {
        path,
        title: a.title,
        description: a.enBref,
        theme: a.module,
        icon: aideModule(a.moduleSlug)?.icon ?? 'i-lucide-file-text'
      }
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
)

useSeoMeta({
  robots: 'noindex, nofollow',
  title: () => `${t('aide.hub.headline')} — Cascade`,
  description: () => t('aide.hub.seoDescription')
})

const keyNotions = ['modele-de-souscription', 'souscription', 'contribution', 'paiement']
  .map(slug => bySlug.get(slug))
  .filter((t): t is GlossaryTerm => Boolean(t))
</script>

<template>
  <div>
    <section class="bg-primary px-4 pb-44 pt-16 text-center text-inverted sm:pb-40 sm:pt-20">
      <div class="mx-auto max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-wide text-inverted/70">
          {{ t('aide.hub.headline') }}
        </p>
        <h1 class="mt-3 text-4xl font-bold text-pretty sm:text-5xl">
          {{ t('aide.hub.title') }}
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-lg text-pretty text-inverted/80">
          {{ t('aide.hub.description') }}
        </p>
      </div>
    </section>

    <UContainer class="-mt-28 pb-16">
      <div class="grid gap-x-5 gap-y-12 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="c in cards"
          :key="c.key"
          :to="localePath(c.to)"
          class="group relative isolate flex flex-col items-center rounded-lg border border-default bg-default px-6 pb-6 pt-12 text-center shadow-sm transition duration-300 before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-linear-to-b before:from-primary/15 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:before:opacity-100"
        >
          <span
            class="absolute -top-6 flex size-12 items-center justify-center rounded-full bg-primary text-inverted transition duration-300 group-hover:-rotate-6 group-hover:scale-110"
            style="box-shadow: 0 0 0 3px var(--ui-bg)"
          >
            <UIcon :name="c.icon" class="size-6" />
          </span>
          <h2 class="text-lg font-semibold text-highlighted transition-colors duration-300 group-hover:text-primary">
            {{ c.title }}
          </h2>
          <p class="mt-2 text-sm text-pretty text-muted">
            {{ c.description }}
          </p>
          <UBadge
            v-if="c.badge"
            :label="c.badge.label"
            :color="c.badge.color"
            variant="subtle"
            class="mt-4"
          />
        </NuxtLink>
      </div>
    </UContainer>

    <UPageSection
      :headline="t('aide.hub.notionsHeadline')"
      :title="t('aide.hub.notionsTitle')"
      :description="t('aide.hub.notionsDescription')"
      :ui="{ container: 'py-12 sm:py-16' }"
    >
      <div class="flex flex-col gap-4 md:flex-row md:items-stretch">
        <template v-for="(t, i) in keyNotions" :key="t.slug">
          <NuxtLink
            :to="localePath(`/aide/glossaire#terme-${t.slug}`)"
            class="group flex-1 rounded-lg border border-default bg-default p-5 transition hover:border-primary"
          >
            <div class="text-xs font-semibold text-primary">
              {{ i + 1 }}
            </div>
            <div class="mt-1 text-lg font-semibold text-highlighted">
              {{ t.term }}
            </div>
            <p class="mt-2 text-sm text-muted">
              {{ t.definition[0] }}
            </p>
          </NuxtLink>
          <UIcon
            v-if="i < keyNotions.length - 1"
            name="i-lucide-arrow-right"
            class="hidden size-5 shrink-0 self-center text-muted md:block"
          />
        </template>
      </div>
    </UPageSection>

    <UPageSection
      :headline="t('aide.hub.popularHeadline')"
      :title="t('aide.hub.popularTitle')"
      :ui="{ container: 'py-12 sm:py-16' }"
    >
      <div class="grid gap-4 sm:grid-cols-2">
        <NuxtLink
          v-for="p in popular"
          :key="p.path"
          :to="localePath(p.path)"
          class="group flex gap-4 rounded-lg border border-default bg-default p-5 transition hover:border-primary"
        >
          <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <UIcon :name="p.icon" class="size-5" />
          </span>
          <span class="min-w-0">
            <span class="block text-xs font-medium text-primary">{{ p.theme }}</span>
            <span class="mt-0.5 block font-semibold text-highlighted">{{ p.title }}</span>
            <span v-if="p.description" class="mt-1 line-clamp-2 block text-sm text-muted">{{ p.description }}</span>
          </span>
        </NuxtLink>
      </div>
    </UPageSection>
  </div>
</template>
