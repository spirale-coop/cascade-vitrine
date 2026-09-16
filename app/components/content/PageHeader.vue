<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  backTo?: string
  backLabel?: string
}>()

const localePath = useLocalePath()

// Hide the sticky back bar on scroll-down (more reading room), bring it
// back on scroll-up (so it's there right when you'd want to leave the
// page) — the usual mobile-toolbar behavior. Only meaningful once
// mounted in the browser, where `window` actually exists.
const isVisible = ref(true)
let lastScrollY = 0

function onScroll() {
  const currentY = window.scrollY
  isVisible.value = currentY <= lastScrollY || currentY < 50
  lastScrollY = currentY
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div
    v-if="backTo"
    class="sticky top-[var(--ui-header-height)] z-10 w-full border-b border-default bg-default/85 backdrop-blur transition-transform duration-300"
    :style="{ transform: isVisible ? 'translateY(0)' : 'translateY(calc(-100% - var(--ui-header-height)))' }"
  >
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <UButton
        :to="localePath(backTo)"
        icon="i-lucide-arrow-left"
        color="neutral"
        variant="ghost"
        class="my-3"
      >
        {{ backLabel }}
      </UButton>
    </div>
  </div>

  <UContainer v-else>
    <UPageHeader :headline="headline" :title="title" :description="description" />
  </UContainer>
</template>
