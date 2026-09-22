<script setup lang="ts">
interface Lot {
  icon: string
  title: string
  description: string
  features: string[]
  automation: string
  mockup?: 'resources' | 'subscription-model' | 'subscriptions' | 'contributions' | 'invoices' | 'payments' | 'pilotage'
  status?: 'available' | 'in-progress' | 'upcoming'
}

const props = withDefaults(defineProps<{
  lots?: Lot[]
  availableHeadline?: string
  inProgressHeadline?: string
  comingSoonHeadline?: string
}>(), {
  lots: () => []
})

const availableLots = computed(() => props.lots.filter(lot => !lot.status || lot.status === 'available'))
const inProgressLots = computed(() => props.lots.filter(lot => lot.status === 'in-progress'))
const comingSoonLots = computed(() => props.lots.filter(lot => lot.status === 'upcoming'))
</script>

<template>
  <FeatureScenarioSwitcher />

  <UPageSection :title="availableHeadline">
    <div class="divide-y divide-default">
      <FeatureCatalogLot v-for="lot in availableLots" :key="lot.title" v-bind="lot" />
    </div>
  </UPageSection>

  <UPageSection v-if="inProgressLots.length" :title="inProgressHeadline">
    <div class="divide-y divide-default">
      <FeatureCatalogLot v-for="lot in inProgressLots" :key="lot.title" v-bind="lot" />
    </div>
  </UPageSection>

  <UPageSection v-if="comingSoonLots.length" :title="comingSoonHeadline">
    <div class="divide-y divide-default">
      <FeatureCatalogLot v-for="lot in comingSoonLots" :key="lot.title" v-bind="lot" />
    </div>
  </UPageSection>
</template>
