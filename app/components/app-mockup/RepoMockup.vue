<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { icon: 'i-lucide-star', label: t('mockups.repoMockup.stats.stars'), value: '128' },
  { icon: 'i-lucide-git-fork', label: t('mockups.repoMockup.stats.forks'), value: '24' },
  { icon: 'i-lucide-scale', label: t('mockups.repoMockup.stats.license'), value: 'Coopyleft' }
])
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">github.com/cascade-coop/cascade</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="flex items-center gap-3">
        <UIcon name="i-simple-icons-github" class="size-6 text-highlighted" />
        <p class="text-sm font-medium text-highlighted">cascade-coop / cascade</p>
      </div>

      <p class="text-sm text-muted">
        {{ t('mockups.repoMockup.description') }}
      </p>

      <div class="flex flex-wrap items-center gap-4">
        <div v-for="stat in stats" :key="stat.label" class="flex items-center gap-1.5 text-sm text-toned">
          <UIcon :name="stat.icon" class="size-4 text-dimmed" />
          <span class="font-medium text-highlighted">{{ stat.value }}</span>
          <span class="text-dimmed">{{ stat.label }}</span>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <UBadge color="neutral" variant="subtle" size="sm">TypeScript</UBadge>
        <UBadge color="neutral" variant="subtle" size="sm">Laravel</UBadge>
      </div>
    </div>
  </div>
</template>
