<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  title: string
  description: string
  color?: 'primary' | 'orange' | 'green'
}>(), {
  color: 'primary'
})

const COLOR_CLASSES = {
  primary: 'icon-badge-primary text-primary',
  orange: 'bg-orange-500/10 text-orange-500 dark:text-orange-400',
  green: 'bg-green-500/10 text-green-500 dark:text-green-400'
}
</script>

<template>
  <div class="flex flex-col items-center gap-3 rounded-lg border border-default bg-default px-6 py-8 text-center">
    <div
      class="flex size-12 shrink-0 items-center justify-center rounded-full"
      :class="COLOR_CLASSES[color]"
    >
      <UIcon :name="icon" class="size-6" />
    </div>
    <p class="text-base font-semibold text-highlighted">{{ title }}</p>
    <p class="text-sm text-pretty text-muted">{{ description }}</p>
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
