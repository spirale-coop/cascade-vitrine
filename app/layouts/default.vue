<script setup lang="ts">
const route = useRoute()
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const colorMode = useColorMode()
const showHelpLink = useRuntimeConfig().public.helpCenterLink

const colorModeTooltip = computed(() => colorMode.value === 'dark' ? t('nav.lightMode') : t('nav.darkMode'))

const links = computed(() => [
  { label: t('nav.pourQui'), to: localePath('/pour-qui') },
  { label: t('nav.fonctionnalites'), to: localePath('/fonctionnalites') },
  { label: t('nav.contributionAdaptative'), to: localePath('/contribution-adaptative') },
  { label: t('nav.manifeste'), to: localePath('/manifeste') },
  { label: t('nav.laFederation'), to: localePath('/la-federation') }
])

const footerColumns = computed(() => [
  {
    title: t('footer.discover'),
    links: [
      { label: t('nav.pourQui'), to: localePath('/pour-qui') },
      { label: t('nav.fonctionnalites'), to: localePath('/fonctionnalites') },
      { label: t('nav.contributionAdaptative'), to: localePath('/contribution-adaptative') }
    ]
  },
  {
    title: t('footer.learnMore'),
    links: [
      { label: t('nav.manifeste'), to: localePath('/manifeste') },
      { label: t('nav.laFederation'), to: localePath('/la-federation') },
      { label: t('footer.news'), to: localePath('/changelog') }
    ]
  },
  {
    title: t('footer.contact'),
    links: [
      { label: t('nav.testerCascade'), cal: true },
      { label: t('nav.seConnecter'), to: 'https://app.cascade.coop/login', external: true }
    ]
  }
])

const legalLinks = computed(() => [
  { label: t('footer.legalNotice'), to: localePath('/mentions-legales') },
  { label: t('footer.privacy'), to: localePath('/confidentialite') }
])

const otherLocale = computed(() => locales.value.find(l => l.code !== locale.value))

// useSwitchLocalePath() relies on named per-page routes to match locales,
// but every page here is served by the same [...slug] catch-all — so we
// resolve the equivalent path ourselves: strip any /en prefix off the
// current route, then re-add it only if switching to English.
const otherLocalePath = computed(() => {
  const bare = route.path.replace(/^\/en(?=\/|$)/, '') || '/'
  if (otherLocale.value?.code !== 'en') return bare
  return bare === '/' ? '/en' : `/en${bare}`
})
</script>

<template>
  <div>
    <UHeader :to="localePath('/')" :ui="{ container: 'max-w-none' }">
      <template #title>
        <AppLogo />
      </template>

      <UNavigationMenu :items="links" variant="link" />

      <template #right>
        <UTooltip v-if="otherLocale" :text="otherLocale.name">
          <UButton
            :to="otherLocalePath"
            external
            color="neutral"
            variant="ghost"
            class="hidden uppercase sm:flex"
          >
            {{ otherLocale.code }}
          </UButton>
        </UTooltip>
        <UTooltip v-if="showHelpLink" :text="t('nav.aide')">
          <UButton
            :to="localePath('/aide')"
            icon="i-lucide-life-buoy"
            color="neutral"
            variant="ghost"
            :aria-label="t('nav.aide')"
            class="hidden sm:flex"
          />
        </UTooltip>
        <UTooltip :text="t('nav.changelogTooltip')">
          <UButton
            :to="localePath('/changelog')"
            icon="i-lucide-scroll-text"
            color="neutral"
            variant="ghost"
            :aria-label="t('nav.changelog')"
            class="hidden sm:flex"
          />
        </UTooltip>
        <UTooltip :text="colorModeTooltip">
          <UColorModeButton class="hidden sm:flex" />
        </UTooltip>
        <UButton to="https://app.cascade.coop/login" external color="neutral" variant="ghost" class="hidden whitespace-nowrap sm:flex">
          {{ t('nav.seConnecter') }}
        </UButton>
        <UButton
          trailing-icon="i-lucide-arrow-right"
          class="whitespace-nowrap"
          data-cal-link="spirale-coop/cascade"
          data-cal-namespace="cascade"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >
          {{ t('nav.testerCascade') }}
        </UButton>
      </template>

      <template #body>
        <UNavigationMenu
          :items="links"
          orientation="vertical"
          class="-mx-2.5"
          :ui="{ link: 'text-lg py-3', linkLabel: 'text-lg' }"
        />
        <div class="mt-6 flex items-center gap-3">
          <UColorModeButton size="lg" />
          <UButton
            v-if="showHelpLink"
            :to="localePath('/aide')"
            icon="i-lucide-life-buoy"
            color="neutral"
            variant="ghost"
            size="lg"
            :aria-label="t('nav.aide')"
          />
          <UButton
            :to="localePath('/changelog')"
            icon="i-lucide-scroll-text"
            color="neutral"
            variant="ghost"
            size="lg"
            :aria-label="t('nav.changelog')"
          />
          <UButton
            v-if="otherLocale"
            :to="otherLocalePath"
            external
            color="neutral"
            variant="ghost"
            size="lg"
            class="uppercase"
          >
            {{ otherLocale.code }}
          </UButton>
        </div>
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <USeparator />

    <UFooter :ui="{ top: 'border-b border-default' }">
      <template #top>
        <UContainer class="py-12 lg:py-16">
          <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
            <div>
              <NuxtLink :to="localePath('/')" :aria-label="'Cascade'">
                <AppLogo />
              </NuxtLink>
              <p class="mt-4 max-w-xs text-sm text-muted">
                {{ t('footer.tagline') }}
              </p>
            </div>

            <nav v-for="column in footerColumns" :key="column.title" :aria-label="column.title">
              <h2 class="text-sm font-semibold text-highlighted">
                {{ column.title }}
              </h2>
              <ul class="mt-4 space-y-3">
                <li v-for="link in column.links" :key="link.label">
                  <button
                    v-if="link.cal"
                    type="button"
                    class="text-sm text-muted transition-colors hover:text-highlighted"
                    data-cal-link="spirale-coop/cascade"
                    data-cal-namespace="cascade"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  >
                    {{ link.label }}
                  </button>
                  <ULink
                    v-else
                    :to="link.to"
                    :external="link.external"
                    class="text-sm text-muted transition-colors hover:text-highlighted"
                  >
                    {{ link.label }}
                  </ULink>
                </li>
              </ul>
            </nav>
          </div>
        </UContainer>
      </template>

      <template #left>
        <div class="flex items-center gap-2">
          <CoopyleftLogo class="size-4 shrink-0 text-muted" />
          <p class="text-sm text-muted">
            {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
        </div>
      </template>

      <template #right>
        <nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" :aria-label="t('footer.legalNotice')">
          <ULink
            v-for="link in legalLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm text-muted transition-colors hover:text-highlighted"
          >
            {{ link.label }}
          </ULink>
        </nav>
      </template>
    </UFooter>
  </div>
</template>
