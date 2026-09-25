<script setup lang="ts">
type Row = { label: string, org: string, amount: string, status: string, color: 'success' | 'neutral' | 'error' }

// Row colors are purely visual and stay out of i18n — text content lives in
// i18n/locales/{fr,en}.json under mockups.invoicesMockup.<scenario>.
const ROW_COLORS: Record<FeatureScenarioKey, Row['color'][]> = {
  'tiers-lieux': ['success', 'neutral', 'success', 'error'],
  cooperatives: ['success', 'neutral', 'success', 'error'],
  ateliers: ['success', 'neutral', 'success', 'error'],
  federation: ['success', 'neutral', 'success', 'error'],
  creche: ['success', 'neutral', 'success', 'error'],
  fanfare: ['success', 'neutral', 'success', 'error']
}

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => {
  const entry = resolveI18nMessages<{ subtitle: string, rows: Omit<Row, 'color'>[] }>(tm(`mockups.invoicesMockup.${scenario.value}`), rt)
  const colors = ROW_COLORS[scenario.value]
  return {
    subtitle: entry.subtitle,
    rows: entry.rows.map((row, i) => ({ ...row, color: colors[i] }))
  }
})
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.invoicesMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-highlighted">{{ t('mockups.invoicesMockup.headline') }}</p>
          <p class="text-xs text-muted">{{ data.subtitle }}</p>
        </div>
        <UButton size="xs" color="neutral" variant="subtle" icon="i-lucide-plus" class="shrink-0 whitespace-nowrap">
          {{ t('mockups.invoicesMockup.newButton') }}
        </UButton>
      </div>

      <div class="flex flex-col gap-2">
        <div
          v-for="row in data.rows"
          :key="row.label"
          class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5"
        >
          <div class="min-w-0">
            <p class="truncate text-sm font-medium text-highlighted">{{ row.label }}</p>
            <p class="truncate text-xs text-muted">{{ row.org }}</p>
          </div>
          <div class="flex shrink-0 items-center gap-3">
            <span class="text-sm text-toned">{{ row.amount }}</span>
            <UBadge :color="row.color" variant="subtle" size="sm">{{ row.status }}</UBadge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
