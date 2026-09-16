<script setup lang="ts">
type Step = { label: string, state: 'done' | 'current' }

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<{ subtitle: string, ref: string, steps: Step[] }>(tm(`mockups.contractsMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.contractsMockup.windowTitle') }} {{ data.ref }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <p class="text-sm font-medium text-highlighted">{{ data.subtitle }}</p>

      <div class="flex flex-col gap-2">
        <div
          v-for="step in data.steps"
          :key="step.label"
          class="flex items-center gap-3 rounded-lg border border-default px-3 py-2.5"
        >
          <div
            class="flex size-8 shrink-0 items-center justify-center rounded-full"
            :class="step.state === 'done' ? 'bg-success/10 text-success' : 'bg-elevated text-primary'"
          >
            <UIcon :name="step.state === 'done' ? 'i-lucide-check' : 'i-lucide-clock'" class="size-4" />
          </div>
          <p class="text-sm font-medium text-highlighted">{{ step.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
