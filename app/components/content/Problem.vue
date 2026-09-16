<script setup lang="ts">
interface Symptom {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  symptoms?: Symptom[]
}>(), {
  symptoms: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description" :ui="{ headline: 'text-orange-500 dark:text-orange-400' }">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <FeatureTile
        v-for="symptom in symptoms"
        :key="symptom.title"
        :icon="symptom.icon"
        :title="symptom.title"
        :description="symptom.description"
        color="orange"
      />
    </UPageGrid>
  </UPageSection>
</template>
