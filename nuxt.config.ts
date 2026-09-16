// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/i18n', '@vercel/analytics'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        {
          key: 'cal-embed',
          innerHTML: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "cascade", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
Cal.ns.cascade("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`
        }
      ]
    }
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
