import { queryCollection } from '@nuxt/content/server'

const SITE_URL = 'https://www.cascade.coop'

const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;')

/** Every French page, plus its English twin when one exists, with hreflang pairs. */
export default defineEventHandler(async (event) => {
  const [fr, en] = await Promise.all([
    queryCollection(event, 'pages_fr').select('path').all(),
    queryCollection(event, 'pages_en').select('path').all()
  ])

  const english = new Set(en.map(page => page.path))
  const frUrl = (path: string) => SITE_URL + path
  const enUrl = (path: string) => SITE_URL + '/en' + (path === '/' ? '' : path)

  const urls = fr.map((page) => {
    const alternates = english.has(page.path)
      ? `\n    <xhtml:link rel="alternate" hreflang="fr" href="${escape(frUrl(page.path))}"/>`
        + `\n    <xhtml:link rel="alternate" hreflang="en" href="${escape(enUrl(page.path))}"/>`
        + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escape(frUrl(page.path))}"/>`
      : ''
    return `  <url>\n    <loc>${escape(frUrl(page.path))}</loc>${alternates}\n  </url>`
  })

  for (const path of english) {
    urls.push(`  <url>\n    <loc>${escape(enUrl(path))}</loc>\n`
      + `    <xhtml:link rel="alternate" hreflang="fr" href="${escape(frUrl(path))}"/>\n`
      + `    <xhtml:link rel="alternate" hreflang="en" href="${escape(enUrl(path))}"/>\n`
      + `    <xhtml:link rel="alternate" hreflang="x-default" href="${escape(frUrl(path))}"/>\n  </url>`)
  }

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
})
