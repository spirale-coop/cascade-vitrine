<script setup lang="ts">
// `keys` restricts which scenarios are offered (e.g. a 3-scenario picker
// inline in the hero) — defaults to every scenario, matching the full
// picker used at the top of the feature catalog. `compact` swaps the
// sticky, full-bleed page header for a bare tab picker sized to its
// content, for use inline within a narrower layout like the hero.
const props = withDefaults(defineProps<{
  keys?: FeatureScenarioKey[]
  compact?: boolean
}>(), {
  keys: () => FEATURE_SCENARIOS.map(s => s.key),
  compact: false
})

const { t } = useI18n()
const scenario = useFeatureScenario()

const items = computed(() => FEATURE_SCENARIOS
  .filter(s => props.keys.includes(s.key))
  .map(s => ({ value: s.key, label: t(`mockups.scenarios.${s.key}`), icon: s.icon })))
</script>

<template>
  <UTabs
    v-if="compact"
    v-model="scenario"
    :items="items"
    variant="pill"
    color="neutral"
    size="sm"
    class="w-fit"
    :ui="{ list: 'flex-nowrap' }"
  />
  <div v-else class="sticky top-[var(--ui-header-height)] z-10 w-full border-b border-default bg-default/85 backdrop-blur">
    <div class="mx-auto flex w-full max-w-(--ui-container) flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div>
        <p class="text-sm font-semibold text-highlighted">{{ t('mockups.scenarioSwitcher.headline') }}</p>
        <p class="text-sm text-muted">{{ t('mockups.scenarioSwitcher.description') }}</p>
      </div>

      <UTabs
        v-model="scenario"
        :items="items"
        variant="pill"
        color="neutral"
        size="sm"
        class="w-fit shrink-0"
        :ui="{ list: 'flex-nowrap' }"
      />
    </div>
  </div>
</template>
