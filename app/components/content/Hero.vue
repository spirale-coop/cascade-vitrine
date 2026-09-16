<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  secondaryCtaLabel?: string
  secondaryCtaTo?: string
}>()

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="relative">
    <WaveDecoration side="left" />
    <WaveDecoration side="right" />

    <UPageHero :headline="headline" :title="title" :description="description" orientation="horizontal" :ui="{ container: 'lg:items-start' }">
      <template #links>
        <UButton
          v-if="ctaLabel"
          trailing-icon="i-lucide-arrow-right"
          size="lg"
          data-cal-link="paul-balmet-ybl5no/cascade"
          data-cal-namespace="cascade"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >
          {{ ctaLabel }}
        </UButton>
        <UButton
          v-if="secondaryCtaLabel"
          :to="localePath(secondaryCtaTo ?? '/manifeste')"
          color="neutral"
          variant="subtle"
          size="lg"
        >
          {{ secondaryCtaLabel }}
        </UButton>
      </template>

      <div class="flex flex-col gap-4 sm:gap-5">
        <div class="flex flex-wrap items-start gap-2">
          <FeatureScenarioSwitcher :keys="['tiers-lieux', 'amap', 'cooperatives']" compact />
          <UBadge color="neutral" variant="subtle" class="flex h-9 items-center rounded-lg px-3 text-xs">
            {{ t('mockups.scenarioSwitcher.moreBadge') }}
          </UBadge>
        </div>
        <AppMockupContributionsMockup />
        <AppMockupPilotageMockup />
      </div>
    </UPageHero>
  </div>
</template>
