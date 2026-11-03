<script setup lang="ts">
const route = useRoute()
const isFallback = useState('seo-fallback', () => false)
const { locale, t } = useI18n()

// `route.path` includes the `/en` prefix for the English locale (strategy:
// prefix_except_default) — strip it to get the locale-agnostic content path.
const contentPath = computed(() => route.path.replace(/^\/en(?=\/|$)/, '') || '/')

const { data: page } = await useAsyncData('page-' + route.path, async () => {
  isFallback.value = false
  const collection = locale.value === 'en' ? 'pages_en' : 'pages_fr'
  const content = await queryCollection(collection).path(contentPath.value).first()
  if (content) return content
  if (locale.value !== 'fr') {
    const fallback = await queryCollection('pages_fr').path(contentPath.value).first()
    isFallback.value = Boolean(fallback)
    return fallback
  }
  return null
}, { watch: [locale] })

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: t('error.pageNotFound'), fatal: true })
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
