<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  example: string
  automation: string
  available?: boolean
  comingSoonLabel?: string
}>()
</script>

<template>
  <div class="relative flex flex-col items-center gap-3 rounded-lg border border-default bg-default px-4 py-6 text-center">
    <UBadge
      v-if="available === false && comingSoonLabel"
      variant="subtle"
      size="sm"
      class="absolute top-2 right-2 bg-violet-500/10 text-violet-600 ring-violet-500/25 dark:text-violet-400"
    >
      {{ comingSoonLabel }}
    </UBadge>
    <div class="icon-badge-primary flex size-11 shrink-0 items-center justify-center rounded-full text-primary">
      <UIcon :name="icon" class="size-5" />
    </div>
    <p class="text-sm font-semibold text-highlighted">{{ label }}</p>
    <div class="flex flex-col gap-1">
      <p class="text-xs text-muted">{{ example }}</p>
      <p class="text-xs text-muted">{{ automation }}</p>
    </div>
  </div>
</template>

<style scoped>
/* bg-primary/10 silently fails to render: `primary` is remapped at runtime
   via app.config and isn't in Tailwind's build-time palette, so opacity
   modifiers on it don't work. color-mix against the CSS var is the
   reliable workaround. */
.icon-badge-primary {
  background-color: color-mix(in oklch, var(--ui-primary) 12%, transparent);
}
</style>
