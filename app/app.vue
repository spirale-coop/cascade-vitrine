<script setup lang="ts">
const SITE_URL = 'https://www.cascade.coop'

const route = useRoute()
const { locale } = useI18n()

// Set by the catch-all page when an English URL serves French content: that
// URL then points to the French page as canonical and drops the hreflang pair.
const isFallback = useState('seo-fallback', () => false)

// Path without the /en prefix and without a trailing slash ("/" for the home).
const barePath = computed(() => route.path.replace(/^\/en(?=\/|$)/, '').replace(/\/+$/, '') || '/')

function urlFor(code: 'fr' | 'en') {
  if (code === 'fr') return SITE_URL + barePath.value
  return SITE_URL + '/en' + (barePath.value === '/' ? '' : barePath.value)
}

const isEnglish = computed(() => locale.value === 'en')
const canonical = computed(() => urlFor(isEnglish.value && !isFallback.value ? 'en' : 'fr'))

const description = computed(() => isEnglish.value
  ? 'Cascade helps venues, collectives and organizations manage their contracts, subscriptions, invoices and payments.'
  : 'Cascade aide les lieux, collectifs et organisations à gérer leurs contrats, souscriptions, factures et paiements.')

const jsonLd = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Cascade',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      description: description.value
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Cascade',
      inLanguage: ['fr', 'en'],
      publisher: { '@id': `${SITE_URL}/#organization` }
    }
  ]
}))

useHead(() => ({
  htmlAttrs: { lang: isEnglish.value ? 'en' : 'fr' },
  link: [
    { key: 'canonical', rel: 'canonical', href: canonical.value },
    ...(isFallback.value
      ? []
      : [
          { key: 'alt-fr', rel: 'alternate', hreflang: 'fr', href: urlFor('fr') },
          { key: 'alt-en', rel: 'alternate', hreflang: 'en', href: urlFor('en') },
          { key: 'alt-default', rel: 'alternate', hreflang: 'x-default', href: urlFor('fr') }
        ])
  ],
  script: [{ key: 'ld-json', type: 'application/ld+json', innerHTML: jsonLd.value }]
}))

useSeoMeta({
  ogType: 'website',
  ogSiteName: 'Cascade',
  ogUrl: () => canonical.value,
  ogLocale: () => (isEnglish.value ? 'en_US' : 'fr_FR'),
  ogImage: () => SITE_URL + (isEnglish.value ? '/og-image-en.png' : '/og-image.png'),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Cascade',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
