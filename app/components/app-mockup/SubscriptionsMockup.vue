<script setup lang="ts">
type Row = { occupant: string, model: string, contribution: string, statut: string, color: 'success' | 'warning' | 'neutral' }

// Row colors are purely visual and stay out of i18n — text content lives in
// i18n/locales/{fr,en}.json under mockups.subscriptionsMockup.<scenario>.
const ROW_COLORS: Record<FeatureScenarioKey, Row['color'][]> = {
  'tiers-lieux': ['success', 'warning', 'success', 'neutral'],
  cooperatives: ['success', 'warning', 'success', 'neutral'],
  ateliers: ['success', 'warning', 'success', 'neutral'],
  federation: ['success', 'success', 'warning', 'neutral'],
  creche: ['success', 'success', 'warning', 'neutral'],
  fanfare: ['success', 'success', 'warning', 'neutral']
}

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => {
  const entry = resolveI18nMessages<{ subtitle: string, rows: Omit<Row, 'color'>[] }>(tm(`mockups.subscriptionsMockup.${scenario.value}`), rt)
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
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.subscriptionsMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-highlighted">{{ t('mockups.subscriptionsMockup.headline') }}</p>
          <p class="text-xs text-muted">{{ data.subtitle }}</p>
        </div>
        <UButton size="xs" color="neutral" variant="subtle" icon="i-lucide-plus" class="shrink-0 whitespace-nowrap">
          {{ t('mockups.subscriptionsMockup.newButton') }}
        </UButton>
      </div>

      <div class="overflow-hidden rounded-lg border border-default">
        <table class="w-full text-left text-sm">
          <thead class="bg-elevated/50 text-xs text-muted">
            <tr>
              <th class="px-3 py-2 font-medium">{{ t('mockups.subscriptionsMockup.columns.occupant') }}</th>
              <th class="hidden px-3 py-2 font-medium sm:table-cell">{{ t('mockups.subscriptionsMockup.columns.model') }}</th>
              <th class="px-3 py-2 font-medium">{{ t('mockups.subscriptionsMockup.columns.contribution') }}</th>
              <th class="px-3 py-2 font-medium">{{ t('mockups.subscriptionsMockup.columns.status') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-default">
            <tr v-for="row in data.rows" :key="row.occupant">
              <td class="px-3 py-2.5 font-medium text-highlighted">{{ row.occupant }}</td>
              <td class="hidden px-3 py-2.5 text-muted sm:table-cell">{{ row.model }}</td>
              <td class="px-3 py-2.5 text-muted">{{ row.contribution }}</td>
              <td class="px-3 py-2.5">
                <UBadge :color="row.color" variant="subtle" size="sm">{{ row.statut }}</UBadge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
