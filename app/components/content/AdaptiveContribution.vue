<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
  upcomingLabel?: string
  experimentalNote?: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description" orientation="horizontal">
    <template v-if="headline" #headline>
      <div class="flex flex-col items-start gap-2">
        <UBadge
          v-if="upcomingLabel"
          variant="subtle"
          size="lg"
          class="bg-violet-500/10 text-violet-600 ring-violet-500/25 dark:text-violet-400"
        >
          {{ upcomingLabel }}
        </UBadge>
        <span>{{ headline }}</span>
      </div>
    </template>

    <template v-if="ctaTo" #links>
      <UButton :to="localePath(ctaTo)" trailing-icon="i-lucide-arrow-right">
        {{ ctaLabel }}
      </UButton>
    </template>

    <div class="flex flex-col gap-4">
      <AppMockupAdaptiveContributionDiagram />
      <div
        v-if="experimentalNote"
        class="flex items-start gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-4 py-3 text-sm text-toned"
      >
        <UIcon name="i-lucide-flask-conical" class="mt-0.5 size-4 shrink-0 text-violet-600 dark:text-violet-400" />
        <span>{{ experimentalNote }}</span>
      </div>
    </div>
  </UPageSection>
</template>
