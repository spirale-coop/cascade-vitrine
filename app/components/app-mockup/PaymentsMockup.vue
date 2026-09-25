<script setup lang="ts">
type Row = { label: string, org: string, date: string, status: string, color: 'success' | 'warning', icon: string }

// Row color/icon are purely visual and stay out of i18n — text content lives
// in i18n/locales/{fr,en}.json under mockups.paymentsMockup.<scenario>.
const ROW_VISUALS: Record<FeatureScenarioKey, Pick<Row, 'color' | 'icon'>[]> = {
  'tiers-lieux': [
    { color: 'success', icon: 'i-lucide-landmark' },
    { color: 'success', icon: 'i-lucide-arrow-left-right' },
    { color: 'warning', icon: 'i-lucide-credit-card' }
  ],
  cooperatives: [
    { color: 'success', icon: 'i-lucide-arrow-left-right' },
    { color: 'success', icon: 'i-lucide-landmark' },
    { color: 'warning', icon: 'i-lucide-banknote' }
  ],
  ateliers: [
    { color: 'success', icon: 'i-lucide-credit-card' },
    { color: 'success', icon: 'i-lucide-landmark' },
    { color: 'warning', icon: 'i-lucide-banknote' }
  ],
  federation: [
    { color: 'success', icon: 'i-lucide-arrow-left-right' },
    { color: 'success', icon: 'i-lucide-landmark' },
    { color: 'warning', icon: 'i-lucide-arrow-left-right' }
  ],
  creche: [
    { color: 'success', icon: 'i-lucide-landmark' },
    { color: 'success', icon: 'i-lucide-arrow-left-right' },
    { color: 'warning', icon: 'i-lucide-credit-card' }
  ],
  fanfare: [
    { color: 'success', icon: 'i-lucide-arrow-left-right' },
    { color: 'success', icon: 'i-lucide-banknote' },
    { color: 'warning', icon: 'i-lucide-landmark' }
  ]
}

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const rows = computed(() => {
  const entries = resolveI18nMessages<Omit<Row, 'color' | 'icon'>[]>(tm(`mockups.paymentsMockup.${scenario.value}`), rt)
  const visuals = ROW_VISUALS[scenario.value]
  return entries.map((row, i) => ({ ...row, ...visuals[i] }))
})
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.paymentsMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <p class="text-sm font-medium text-highlighted">{{ t('mockups.paymentsMockup.headline') }}</p>

      <div class="flex flex-col gap-2">
        <div
          v-for="row in rows"
          :key="row.label"
          class="flex items-center gap-3 rounded-lg border border-default px-3 py-2.5"
        >
          <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-elevated">
            <UIcon :name="row.icon" class="size-4 text-muted" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-highlighted">{{ row.label }}</p>
            <p class="truncate text-xs text-muted">{{ row.org }}</p>
          </div>
          <div class="flex shrink-0 flex-col items-end gap-1">
            <span class="text-xs text-dimmed">{{ row.date }}</span>
            <UBadge :color="row.color" variant="subtle" size="sm">{{ row.status }}</UBadge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
