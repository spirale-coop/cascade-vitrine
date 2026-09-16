<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  features?: Feature[]
}>(), {
  features: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureTile
        v-for="feature in features"
        :key="feature.title"
        :icon="feature.icon"
        :title="feature.title"
        :description="feature.description"
      />
    </UPageGrid>
  </UPageSection>
</template>
