export interface AideModule {
  slug: string
  icon: string
}

/** Display order and icon of each help theme (the Notion "Module" property). Titles come from the i18n files. */
export const AIDE_MODULES: AideModule[] = [
  { slug: 'general', icon: 'i-lucide-compass' },
  { slug: 'cascade-et-organisation', icon: 'i-lucide-building-2' },
  { slug: 'modeles-de-souscription', icon: 'i-lucide-layout-template' },
  { slug: 'souscriptions', icon: 'i-lucide-users-round' },
  { slug: 'contrats-et-signature', icon: 'i-lucide-file-signature' },
  { slug: 'documents-justificatifs', icon: 'i-lucide-files' },
  { slug: 'contributions', icon: 'i-lucide-coins' },
  { slug: 'facturation', icon: 'i-lucide-receipt' },
  { slug: 'paiements', icon: 'i-lucide-credit-card' },
  { slug: 'acces-et-compte', icon: 'i-lucide-circle-user-round' }
]

export function aideModule(slug: string): AideModule | undefined {
  return AIDE_MODULES.find(m => m.slug === slug)
}
