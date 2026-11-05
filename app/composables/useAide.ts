import glossaryFr from '~/data/aide-glossaire.json'
import glossaryEn from '~/data/aide-glossaire.en.json'

export interface GlossaryTerm {
  slug: string
  term: string
  nature: 'concept' | 'section' | 'option' | 'parametre' | 'champ' | null
  definition: string[]
  values: string | null
  parent: string | null
  articles: string[]
}

export interface AideArticle {
  path: string
  title: string
  module: string
  moduleSlug: string
  order: number
  status: 'draft' | 'review' | 'valid'
  actors: string[]
  enBref: string
  where: string
}

export interface AideThemeEntry extends AideModule {
  title: string
  description: string
  articles: AideArticle[]
  readable: number
}

/** Name of the content collection holding the help articles for the current language. */
export function useAideCollection(): 'aide_fr' | 'aide_en' {
  const { locale } = useI18n()
  return locale.value === 'en' ? 'aide_en' : 'aide_fr'
}

export function useGlossary() {
  const { locale } = useI18n()
  const terms = (locale.value === 'en' ? glossaryEn : glossaryFr) as GlossaryTerm[]
  const bySlug = new Map(terms.map(t => [t.slug, t]))
  return { terms, bySlug }
}

/** Every help article (including drafts), grouped by theme in display order. */
export async function useAideNav() {
  const { t, locale } = useI18n()
  const collection = useAideCollection()

  const { data } = await useAsyncData(`aide-nav-${locale.value}`, () =>
    queryCollection(collection)
      .select('path', 'title', 'module', 'moduleSlug', 'order', 'status', 'actors', 'enBref', 'where')
      .all()
  )

  const articles = computed(() => (data.value ?? []) as AideArticle[])

  const modules = computed<AideThemeEntry[]>(() =>
    AIDE_MODULES.map((m) => {
      const list = articles.value
        .filter(a => a.moduleSlug === m.slug)
        .sort((a, b) => a.order - b.order)
      return {
        ...m,
        title: t(`aide.modules.${m.slug}.title`),
        description: t(`aide.modules.${m.slug}.description`),
        articles: list,
        readable: list.filter(a => a.status !== 'draft').length
      }
    })
  )

  return { articles, modules }
}
