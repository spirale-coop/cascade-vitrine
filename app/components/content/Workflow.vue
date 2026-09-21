<script setup lang="ts">
interface Step {
  icon: string
  label: string
  automation: string
  status?: 'available' | 'in-progress' | 'upcoming'
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  steps?: Step[]
  availableLabel?: string
  inProgressLabel?: string
  upcomingLabel?: string
  ctaCardText?: string
  ctaLabel?: string
  ctaTo?: string
}>(), {
  steps: () => []
})

const localePath = useLocalePath()
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <WorkflowStepCard
        v-for="step in steps"
        :key="step.label"
        v-bind="step"
        :available-label="availableLabel"
        :in-progress-label="inProgressLabel"
        :upcoming-label="upcomingLabel"
      />

      <div class="flex flex-col items-center justify-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-4 py-5 text-center">
        <p class="text-sm font-medium text-highlighted">{{ ctaCardText }}</p>
        <UButton :to="localePath(ctaTo ?? '/')" trailing-icon="i-lucide-arrow-right" size="sm">
          {{ ctaLabel }}
        </UButton>
      </div>
    </div>
  </UPageSection>
</template>
