<script setup lang="ts">
type Stat = { label: string, value: string }

// Pure chart data with no linguistic content — kept out of the translation
// files. Only the `stats` labels/values below are routed through i18n.
const BARS: Record<FeatureScenarioKey, number[]> = {
  'tiers-lieux': [40, 55, 48, 62, 58, 70],
  cooperatives: [30, 42, 38, 50, 46, 55],
  ateliers: [20, 28, 25, 33, 30, 38],
  federation: [35, 40, 38, 44, 42, 48],
  creche: [50, 58, 55, 63, 60, 68],
  fanfare: [25, 30, 28, 34, 31, 36]
}

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => ({
  stats: resolveI18nMessages<Stat[]>(tm(`mockups.pilotageMockup.${scenario.value}.stats`), rt),
  bars: BARS[scenario.value]
}))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.pilotageMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="grid grid-cols-2 gap-3">
        <div v-for="stat in data.stats" :key="stat.label" class="rounded-lg border border-default p-3">
          <p class="text-lg font-semibold text-highlighted">{{ stat.value }}</p>
          <p class="mt-1 text-xs text-muted">{{ stat.label }}</p>
        </div>
      </div>

      <div class="rounded-lg border border-default p-3">
        <p class="text-xs text-muted">{{ t('mockups.pilotageMockup.chartCaption') }}</p>
        <div class="mt-3 flex items-end gap-2">
          <div
            v-for="(h, i) in data.bars"
            :key="i"
            class="flex-1 rounded-t bg-primary"
            :style="{ height: `${h}px`, opacity: 0.75 }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
