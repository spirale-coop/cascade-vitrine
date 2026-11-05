<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const { modules } = await useAideNav()

const theme = computed(() => modules.value.find(m => m.slug === route.params.module))

if (!theme.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true })
}

const breadcrumb = computed(() => [
  { label: t('aide.breadcrumbRoot'), to: localePath('/aide') },
  { label: theme.value?.title ?? '' }
])

useSeoMeta({ title: `${theme.value.title} — ${t('aide.seoSuffix')}`, description: theme.value.description })
</script>

<template>
  <AideShell v-if="theme">
    <div class="pt-6">
      <UBreadcrumb :items="breadcrumb" />
    </div>

    <UPageHeader
      :title="theme.title"
      :description="theme.description"
    />

    <UPageBody>
      <div class="grid gap-3">
        <template v-for="a in theme.articles" :key="a.path">
          <UPageCard
            v-if="a.status !== 'draft'"
            :title="a.title"
            :description="a.enBref"
            :to="localePath(a.path)"
            variant="outline"
          >
            <template v-if="a.actors.length || a.where" #footer>
              <div class="flex flex-wrap items-center gap-2 text-xs text-muted">
                <UBadge v-for="actor in a.actors" :key="actor" :label="actor" icon="i-lucide-user-round" color="neutral" variant="subtle" size="sm" />
                <span v-if="a.where" class="inline-flex items-center gap-1">
                  <UIcon name="i-lucide-map-pin" class="size-3.5" /> {{ a.where }}
                </span>
              </div>
            </template>
          </UPageCard>

          <div
            v-else
            class="flex items-center justify-between gap-3 rounded-lg border border-dashed border-default px-4 py-3 text-muted"
          >
            <span>{{ a.title }}</span>
            <UBadge :label="t('aide.article.soon')" color="neutral" variant="outline" size="sm" />
          </div>
        </template>
      </div>
    </UPageBody>
  </AideShell>
</template>
