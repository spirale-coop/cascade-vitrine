<script setup lang="ts">
interface OrgType {
  icon: string
  label: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  types?: OrgType[]
}>(), {
  types: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description" :ui="{ root: 'bg-elevated/50' }">
    <div class="flex flex-wrap justify-center gap-3">
      <UBadge
        v-for="type in types"
        :key="type.label"
        color="neutral"
        variant="subtle"
        size="lg"
        :icon="type.icon"
        class="px-4 py-2.5"
      >
        {{ type.label }}
      </UBadge>
    </div>
  </UPageSection>
</template>
