<script setup lang="ts">
const route = useRoute()
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()

const links = computed(() => [
  { label: t('nav.pourQui'), to: localePath('/pour-qui') },
  { label: t('nav.fonctionnalites'), to: localePath('/fonctionnalites') },
  { label: t('nav.contributionAdaptative'), to: localePath('/contribution-adaptative') },
  { label: t('nav.manifeste'), to: localePath('/manifeste') },
  { label: t('nav.laFederation'), to: localePath('/la-federation') },
  { label: t('nav.documentation'), to: 'https://app.notion.com/p/spiralecoop/Documentation-publique-3d8f99b79d278091b3f1dfcf25b90327?source=copy_link', target: '_blank' }
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
        <UButton
          v-if="otherLocale"
          :to="otherLocalePath"
          external
          color="neutral"
          variant="ghost"
          class="hidden uppercase sm:flex"
        >
          {{ otherLocale.code }}
        </UButton>
        <UColorModeButton class="hidden sm:flex" />
        <UButton to="https://app.cascade.coop/login" external color="neutral" variant="ghost" class="hidden whitespace-nowrap sm:flex">
          {{ t('nav.seConnecter') }}
        </UButton>
        <UButton
          trailing-icon="i-lucide-arrow-right"
          class="whitespace-nowrap"
          data-cal-link="paul-balmet-ybl5no/cascade"
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

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-github"
          to="https://github.com/cascade-coop"
          target="_blank"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </div>
</template>
