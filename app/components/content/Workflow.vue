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
    </div>

    <div class="mt-8 flex justify-center">
      <UButton :to="localePath(ctaTo ?? '/')" trailing-icon="i-lucide-arrow-right" size="sm">
        {{ ctaLabel }}
      </UButton>
    </div>
  </UPageSection>
</template>
