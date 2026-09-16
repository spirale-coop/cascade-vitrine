<script setup lang="ts">
interface Column {
  title: string
  points: string[]
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  conventional?: Column
  collective?: Column
}>(), {
  conventional: () => ({ title: '', points: [] }),
  collective: () => ({ title: '', points: [] })
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <template #top>
      <WaveDecoration side="left" />
      <WaveDecoration side="right" />
    </template>

    <div class="grid gap-6 sm:grid-cols-2">
      <div class="rounded-xl border border-default bg-elevated/30 p-6">
        <p class="text-sm font-medium text-dimmed">{{ conventional.title }}</p>
        <ul class="mt-4 flex flex-col gap-3">
          <li v-for="point in conventional.points" :key="point" class="flex items-start gap-2 text-sm text-muted">
            <UIcon name="i-lucide-x" class="mt-0.5 size-4 shrink-0 text-dimmed" />
            {{ point }}
          </li>
        </ul>
      </div>

      <div class="rounded-xl border-2 border-primary bg-elevated/50 p-6">
        <p class="text-sm font-medium text-primary">{{ collective.title }}</p>
        <ul class="mt-4 flex flex-col gap-3">
          <li v-for="point in collective.points" :key="point" class="flex items-start gap-2 text-sm text-toned">
            <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-primary" />
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </UPageSection>
</template>
