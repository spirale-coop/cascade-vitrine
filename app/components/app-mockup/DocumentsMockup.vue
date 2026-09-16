<script setup lang="ts">
type Row = { label: string, status: string, color: 'success' | 'warning' }

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<{ subtitle: string, rows: Row[] }>(tm(`mockups.documentsMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.documentsMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <p class="text-sm font-medium text-highlighted">{{ data.subtitle }}</p>

      <div class="flex flex-col gap-2">
        <div
          v-for="row in data.rows"
          :key="row.label"
          class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5"
        >
          <div class="flex items-center gap-3">
            <UIcon name="i-lucide-file-text" class="size-4 shrink-0 text-muted" />
            <p class="text-sm font-medium text-highlighted">{{ row.label }}</p>
          </div>
          <UBadge :color="row.color" variant="subtle" size="sm">{{ row.status }}</UBadge>
        </div>
      </div>
    </div>
  </div>
</template>
