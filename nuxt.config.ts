// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/i18n'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      // The help center (/aide) is published but not linked from the header yet:
      // flip to true when it is ready for visitors.
      helpCenterLink: false
    }
  },
  routeRules: {
    // Not indexed while it is only reachable by URL (review phase).
    '/aide/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
    '/en/aide/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow' } }
  },
  i18n: {
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    // The switcher in the header is the only way to change locale — don't
    // silently redirect visitors based on browser language.
    detectBrowserLanguage: false
  },
  content: {
    renderer: {
      // Markdown headings (the changelog) stay plain text: no "#" anchor link.
      anchorLinks: { h2: false, h3: false, h4: false }
    }
  },
  icon: {
    // Without this, Nuxt Icon only pre-bundles Nuxt UI's own default icons
    // and fetches every icon used in our own templates from the Iconify
    // API at runtime — a failure (offline, blocked, slow network) silently
    // breaks whatever layout depends on that icon rendering. Scanning and
    // bundling everything locally removes that runtime dependency.
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    }
  }
})
