<script setup lang="ts">
defineProps<{
  /** Plain article layout (legal pages): no timeline rail, no coloured dated headings. */
  plain?: boolean
}>()
</script>

<template>
  <UContainer class="max-w-[900px] py-10 sm:py-14">
    <div
      class="page-prose relative"
      :class="plain
        ? '[&_h2]:mt-12 [&_h2:first-child]:mt-0 [&_h3]:mt-8 [&_h3+p]:mt-0'
        : 'page-prose--timeline ps-8 sm:ps-10 [&_h2]:mt-20 [&_h2:first-child]:mt-0 [&_h3+p]:mt-0'"
    >
      <slot />
    </div>
  </UContainer>
</template>

<style scoped>
/* Timeline: a vertical rail down the left side, with a dot on each H2. */
.page-prose--timeline::before {
  content: '';
  position: absolute;
  inset-block: 1rem 0;
  inset-inline-start: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--ui-border-accented),
    var(--ui-border-accented) 92%,
    transparent
  );
}

.page-prose--timeline :deep(h2)::before {
  content: '';
  position: absolute;
  top: 0.5rem;
  inset-inline-start: calc(-2rem - 6px);
  width: 14px;
  height: 14px;
  border-radius: 9999px;
  background: var(--ui-primary);
  box-shadow: 0 0 0 4px var(--ui-bg);
}

@media (min-width: 640px) {
  .page-prose--timeline :deep(h2)::before {
    inset-inline-start: calc(-2.5rem - 6px);
  }
}

.page-prose--timeline :deep(h2) {
  color: var(--ui-primary);
}
</style>
