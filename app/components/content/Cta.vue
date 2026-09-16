<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  ctaLabel?: string
}>()
</script>

<template>
  <UPageCTA :title="title" :description="description" :ui="{ root: 'rounded-none' }">
    <template #links>
      <UButton
        v-if="ctaLabel"
        trailing-icon="i-lucide-arrow-right"
        size="lg"
        data-cal-link="paul-balmet-ybl5no/cascade"
        data-cal-namespace="cascade"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      >
        {{ ctaLabel }}
      </UButton>
    </template>
  </UPageCTA>
</template>
