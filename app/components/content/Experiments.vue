<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()

const { locale } = useI18n()

const { data: experiments } = await useAsyncData('experiments', () =>
  queryCollection(locale.value === 'en' ? 'experiments_en' : 'experiments_fr').all(),
  { watch: [locale] }
)
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <UPageCard
        v-for="experiment in experiments"
        :key="experiment.id"
      >
        <template #leading>
          <div class="mb-3 flex flex-col gap-3">
            <UBadge v-if="experiment.kind" color="neutral" variant="subtle" size="sm" class="w-fit">
              {{ experiment.kind }}
            </UBadge>
            <div class="flex items-center gap-3">
              <div v-if="experiment.logo" class="flex size-14 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 ring ring-default">
                <img :src="experiment.logo" :alt="experiment.organization" class="size-full object-contain">
              </div>
              <p class="text-base font-semibold text-highlighted">{{ experiment.organization }}</p>
            </div>
          </div>
        </template>

        <template #description>
          <blockquote class="mt-1 border-l-2 border-primary/40 pl-3 text-[15px] text-pretty text-muted italic">
            {{ experiment.quote }}
          </blockquote>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
