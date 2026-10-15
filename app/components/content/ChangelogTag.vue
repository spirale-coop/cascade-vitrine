<script setup lang="ts">
type TagType = 'feature' | 'fix' | 'improvement'

defineProps<{ type: TagType }>()

const { t } = useI18n()

const tags = {
  feature: { color: 'primary', icon: 'i-lucide-sparkles' },
  fix: { color: 'warning', icon: 'i-lucide-bug' },
  improvement: { color: 'neutral', icon: 'i-lucide-wrench' }
} as const
</script>

<template>
  <UBadge
    :color="tags[type].color"
    :icon="tags[type].icon"
    variant="subtle"
    class="ms-2 align-middle"
  >
    {{ t(`changelog.tag.${type}`) }}
  </UBadge>
</template>
