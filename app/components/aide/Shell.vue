<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()

useSeoMeta({ robots: 'noindex, nofollow' })
const { modules } = await useAideNav()

// Fixed-width side columns, fluid centre, frame up to 1920px.
const navUi = {
  root: 'gap-5',
  label: 'px-3 pb-1 pt-1 text-xs font-semibold uppercase tracking-wide text-dimmed',
  link: 'py-2 px-3 text-sm items-start text-left',
  linkLabel: 'whitespace-normal overflow-visible text-clip text-left',
  childList: 'ms-5 border-s border-default',
  childItem: 'ps-2'
}

const items = computed(() => [
  [
    { label: t('aide.nav.home'), icon: 'i-lucide-life-buoy', to: localePath('/aide'), exact: true },
    { label: t('aide.nav.glossary'), icon: 'i-lucide-book-open-text', to: localePath('/aide/glossaire') },
    { label: t('aide.hub.changelogTitle'), icon: 'i-lucide-scroll-text', to: localePath('/changelog') }
  ],
  [
    { label: t('aide.nav.themes'), type: 'label' as const },
    ...modules.value.map(m => ({
      label: m.title,
      icon: m.icon,
      defaultOpen: route.path.startsWith(`/aide/${m.slug}`),
      children: m.articles.map(a => ({
        label: a.title,
        to: a.status === 'draft' ? undefined : localePath(a.path),
        disabled: a.status === 'draft'
      }))
    }))
  ]
])
</script>

<template>
  <UContainer class="mt-8 max-w-[1920px] lg:mt-16">
    <div class="lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start lg:gap-14">
      <!-- Section latérale -->
      <aside class="hidden lg:sticky lg:top-[calc(var(--ui-header-height)+1.5rem)] lg:block">
        <div class="max-h-[calc(100vh-var(--ui-header-height)-3rem)] overflow-y-auto rounded-xl border border-default bg-default p-3 shadow-md [scrollbar-width:thin]">
          <UNavigationMenu :items="items" orientation="vertical" highlight :ui="navUi" />
        </div>
      </aside>

      <div class="pb-4 lg:hidden">
        <UCollapsible>
          <UButton
            :label="t('aide.nav.browse')"
            icon="i-lucide-menu"
            trailing-icon="i-lucide-chevron-down"
            color="neutral"
            variant="outline"
            block
          />
          <template #content>
            <UNavigationMenu :items="items" orientation="vertical" class="mt-2" />
          </template>
        </UCollapsible>
      </div>

      <!-- Contenu de la page -->
      <div class="min-w-0 p-6 lg:px-12 lg:pb-14 lg:pt-6">
        <div
          class="flex flex-col"
          :class="$slots.right ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-start lg:gap-16' : ''"
        >
          <div class="min-w-0">
            <slot />
          </div>
          <div v-if="$slots.right" class="order-first lg:order-last lg:sticky lg:top-[calc(var(--ui-header-height)+1.5rem)]">
            <slot name="right" />
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
