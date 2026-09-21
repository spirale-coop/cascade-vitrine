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
  <UPageSection class="bg-inverted">
    <template #top>
      <WaveDecoration side="left" />
      <WaveDecoration side="right" />
    </template>

    <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
      <CoopyleftLogo v-if="headline" class="mb-4 size-10 text-inverted" />
      <p v-if="headline" class="text-sm font-semibold tracking-wide text-inverted uppercase" style="opacity: 0.7">
        {{ headline }}
      </p>
      <h2 class="mt-2 text-3xl font-semibold tracking-tight text-inverted sm:text-4xl">
        {{ title }}
      </h2>
      <p class="mt-6 text-lg text-inverted" style="opacity: 0.7">
        {{ description }}
      </p>
      <UButton
        v-if="linkTo"
        :to="linkTo"
        target="_blank"
        color="neutral"
        variant="subtle"
        icon="i-lucide-scale"
        class="mt-8"
      >
        {{ linkLabel }}
      </UButton>
    </div>
  </UPageSection>
</template>
