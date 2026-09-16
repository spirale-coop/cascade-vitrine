<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  linkTo?: string
  linkLabel?: string
}>()
</script>

<template>
  <UPageSection
    :headline="headline"
    :title="title"
    :description="description"
    orientation="horizontal"
    :links="[{ label: linkLabel, to: linkTo, target: '_blank', icon: 'i-lucide-scale', color: 'neutral', variant: 'subtle' }]"
  >
    <template #leading>
      <CoopyleftLogo class="size-10 shrink-0 text-primary" />
    </template>

    <AppMockupRepoMockup />
  </UPageSection>
</template>
