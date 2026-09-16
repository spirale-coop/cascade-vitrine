<script setup lang="ts">
const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<{ ref: string, fieldLabel: string, before: string, after: string }>(tm(`mockups.amendmentsMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.amendmentsMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="flex items-center justify-between gap-3">
        <p class="text-sm font-medium text-highlighted">{{ data.ref }}</p>
        <UBadge color="warning" variant="subtle" size="sm" class="shrink-0">
          {{ t('mockups.amendmentsMockup.changeLabel') }}
        </UBadge>
      </div>

      <div class="rounded-lg border border-default p-4">
        <p class="text-xs text-muted">{{ data.fieldLabel }}</p>
        <div class="mt-2 flex items-center gap-3">
          <span class="text-lg text-dimmed line-through">{{ data.before }}</span>
          <UIcon name="i-lucide-arrow-right" class="size-4 text-muted" />
          <span class="text-lg font-semibold text-highlighted">{{ data.after }}</span>
        </div>
      </div>

      <div class="flex items-start gap-2 rounded-lg bg-elevated/50 px-4 py-3.5 text-sm">
        <UIcon name="i-lucide-zap" class="mt-0.5 size-4 shrink-0 text-primary" />
        <span class="text-toned">{{ t('mockups.amendmentsMockup.note') }}</span>
      </div>
    </div>
  </div>
</template>
