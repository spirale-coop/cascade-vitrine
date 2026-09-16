<script setup lang="ts">
type Row = { label: string, sub: string, status: string, color: 'success' | 'neutral' }

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<{ rows: Row[] }>(tm(`mockups.apiConnectionsMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.apiConnectionsMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-2 p-4 sm:p-6">
      <div
        v-for="row in data.rows"
        :key="row.label"
        class="flex items-center gap-3 rounded-lg border border-default px-3 py-2.5"
      >
        <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-elevated">
          <UIcon name="i-lucide-plug" class="size-4 text-muted" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-highlighted">{{ row.label }}</p>
          <p class="truncate text-xs text-muted">{{ row.sub }}</p>
        </div>
        <UBadge :color="row.color" variant="subtle" size="sm" class="shrink-0">{{ row.status }}</UBadge>
      </div>
    </div>
  </div>
</template>
