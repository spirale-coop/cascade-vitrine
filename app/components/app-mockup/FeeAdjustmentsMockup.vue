<script setup lang="ts">
const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<{ subtitle: string, provisioned: string, regularized: string, rowLabel: string, rowBefore: string, rowAfter: string }>(tm(`mockups.feeAdjustmentsMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.feeAdjustmentsMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <p class="text-sm font-medium text-highlighted">{{ data.subtitle }}</p>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs text-muted">{{ t('mockups.feeAdjustmentsMockup.provisionedLabel') }}</p>
          <p class="text-lg text-dimmed line-through">{{ data.provisioned }}</p>
        </div>
        <UIcon name="i-lucide-arrow-right" class="size-4 text-muted" />
        <div class="text-right">
          <p class="text-xs text-muted">{{ t('mockups.feeAdjustmentsMockup.regularizedLabel') }}</p>
          <p class="text-lg font-semibold text-highlighted">{{ data.regularized }}</p>
        </div>
      </div>

      <div class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5">
        <div class="min-w-0">
          <p class="truncate text-sm font-medium text-highlighted">{{ data.rowLabel }}</p>
          <div class="mt-1 flex items-center gap-1.5 text-xs text-muted">
            <span class="line-through">{{ data.rowBefore }}</span>
            <UIcon name="i-lucide-arrow-right" class="size-3" />
            <span class="font-medium text-highlighted">{{ data.rowAfter }}</span>
          </div>
        </div>
      </div>

      <div class="flex items-start gap-2 rounded-lg bg-elevated/50 px-4 py-3.5 text-sm">
        <UIcon name="i-lucide-zap" class="mt-0.5 size-4 shrink-0 text-primary" />
        <span class="text-toned">{{ t('mockups.feeAdjustmentsMockup.note') }}</span>
      </div>
    </div>
  </div>
</template>
