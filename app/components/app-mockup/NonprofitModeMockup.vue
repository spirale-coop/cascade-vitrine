<script setup lang="ts">
const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<{ receiptLabel: string, receipt: string, donor: string, amount: string }>(tm(`mockups.nonprofitModeMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.nonprofitModeMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-highlighted">{{ data.receiptLabel }} — {{ data.receipt }}</p>
        <UBadge color="success" variant="subtle" size="sm">{{ t('mockups.nonprofitModeMockup.status') }}</UBadge>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5">
          <span class="text-sm text-muted">{{ t('mockups.nonprofitModeMockup.donorLabel') }}</span>
          <span class="text-sm font-medium text-highlighted">{{ data.donor }}</span>
        </div>
        <div class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5">
          <span class="text-sm text-muted">{{ t('mockups.nonprofitModeMockup.amountLabel') }}</span>
          <span class="text-sm font-medium text-highlighted">{{ data.amount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
