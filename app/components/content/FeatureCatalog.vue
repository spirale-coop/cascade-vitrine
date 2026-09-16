<script setup lang="ts">
interface Lot {
  icon: string
  title: string
  description: string
  features: string[]
  automation: string
  mockup?: 'resources' | 'subscription-model' | 'subscriptions' | 'contributions' | 'invoices' | 'payments' | 'pilotage'
  available?: boolean
}

const props = withDefaults(defineProps<{
  lots?: Lot[]
  availableHeadline?: string
  comingSoonHeadline?: string
}>(), {
  lots: () => []
})

const availableLots = computed(() => props.lots.filter(lot => lot.available !== false))
const comingSoonLots = computed(() => props.lots.filter(lot => lot.available === false))
</script>

<template>
  <FeatureScenarioSwitcher />

  <UPageSection :title="availableHeadline">
    <div class="divide-y divide-default">
      <FeatureCatalogLot v-for="lot in availableLots" :key="lot.title" v-bind="lot" />
    </div>
  </UPageSection>

  <UPageSection v-if="comingSoonLots.length" :title="comingSoonHeadline">
    <div class="divide-y divide-default">
      <FeatureCatalogLot v-for="lot in comingSoonLots" :key="lot.title" v-bind="lot" />
    </div>
  </UPageSection>
</template>
