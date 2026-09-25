// Labels live in i18n/locales/{fr,en}.json under mockups.scenarios — this
// constant is a plain module-level export with no access to useI18n(), so
// translation happens where these are actually rendered (FeatureScenarioSwitcher).
export const FEATURE_SCENARIOS = [
  { key: 'tiers-lieux', icon: 'i-lucide-map-pin-house' },
  { key: 'cooperatives', icon: 'i-lucide-building-2' },
  { key: 'ateliers', icon: 'i-lucide-hammer' },
  { key: 'federation', icon: 'i-lucide-trophy' },
  { key: 'creche', icon: 'i-lucide-baby' },
  { key: 'fanfare', icon: 'i-lucide-music' }
] as const

export type FeatureScenarioKey = typeof FEATURE_SCENARIOS[number]['key']

export function useFeatureScenario() {
  return useState<FeatureScenarioKey>('feature-scenario', () => 'tiers-lieux')
}
