<script setup lang="ts">
type Item = { subscription: string, date: string, paymentMethod: string, amount: string, status: string, color: 'neutral' | 'warning' }

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<{ subtitle: string, items: Item[] }>(tm(`mockups.contributionsMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.contributionsMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-3 p-4 sm:p-6">
      <p class="text-sm font-medium text-highlighted">{{ data.subtitle }}</p>

      <div
        v-for="item in data.items"
        :key="item.subscription"
        class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5"
      >
        <div class="min-w-0">
          <p class="truncate text-sm font-medium text-highlighted">{{ item.subscription }}</p>
          <p class="truncate text-xs text-muted">{{ item.date }} · {{ item.paymentMethod }}</p>
        </div>
        <div class="flex shrink-0 items-center gap-3">
          <span class="text-sm font-medium text-highlighted">{{ item.amount }}</span>
          <UBadge :color="item.color" variant="subtle" size="sm">{{ item.status }}</UBadge>
        </div>
      </div>
    </div>
  </div>
</template>
