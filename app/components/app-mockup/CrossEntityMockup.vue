<script setup lang="ts">
type Row = { label: string, amount: string }

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<{ root: string, rows: Row[] }>(tm(`mockups.crossEntityMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.crossEntityMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-3 p-4 sm:p-6">
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-network" class="size-4 text-primary" />
        <p class="text-sm font-medium text-highlighted">{{ data.root }}</p>
      </div>

      <div class="flex flex-col gap-2 border-l border-default pl-4">
        <div
          v-for="row in data.rows"
          :key="row.label"
          class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5"
        >
          <p class="truncate text-sm text-toned">{{ row.label }}</p>
          <span class="shrink-0 text-sm font-medium text-highlighted">{{ row.amount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
