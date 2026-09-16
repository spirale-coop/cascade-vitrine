<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  features: string[]
  automation: string
  mockup?: 'resources' | 'subscription-model' | 'subscriptions' | 'contributions' | 'invoices' | 'payments' | 'pilotage' | 'contracts' | 'amendments' | 'documents' | 'api-connections' | 'nonprofit-mode' | 'fee-adjustments' | 'cross-entity' | 'adaptive-target'
}>()
</script>

<template>
  <div
    class="grid gap-12 py-16 first:pt-0 last:pb-0"
    :class="mockup ? 'lg:grid-cols-2 lg:items-center lg:gap-16' : ''"
  >
    <div>
      <div class="mb-4 inline-flex items-center justify-center rounded-lg bg-elevated p-2.5">
        <UIcon :name="icon" class="size-5 text-primary" />
      </div>
      <h3 class="text-2xl font-semibold text-highlighted">{{ title }}</h3>
      <p class="mt-3 max-w-md text-muted">{{ description }}</p>

      <ul class="mt-8 flex flex-col gap-3">
        <li v-for="feature in features" :key="feature" class="flex items-start gap-2 text-sm text-toned">
          <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-primary" />
          {{ feature }}
        </li>
      </ul>

      <div class="mt-8 flex items-start gap-2 rounded-lg bg-elevated/50 px-4 py-3.5 text-sm">
        <UIcon name="i-lucide-zap" class="mt-0.5 size-4 shrink-0 text-primary" />
        <span class="text-toned">{{ automation }}</span>
      </div>
    </div>

    <div v-if="mockup">
      <AppMockupResourcesMockup v-if="mockup === 'resources'" />
      <AppMockupSubscriptionModelMockup v-else-if="mockup === 'subscription-model'" />
      <AppMockupSubscriptionsMockup v-else-if="mockup === 'subscriptions'" />
      <AppMockupContributionsMockup v-else-if="mockup === 'contributions'" />
      <AppMockupInvoicesMockup v-else-if="mockup === 'invoices'" />
      <AppMockupPaymentsMockup v-else-if="mockup === 'payments'" />
      <AppMockupPilotageMockup v-else-if="mockup === 'pilotage'" />
      <AppMockupContractsMockup v-else-if="mockup === 'contracts'" />
      <AppMockupAmendmentsMockup v-else-if="mockup === 'amendments'" />
      <AppMockupDocumentsMockup v-else-if="mockup === 'documents'" />
      <AppMockupApiConnectionsMockup v-else-if="mockup === 'api-connections'" />
      <AppMockupNonprofitModeMockup v-else-if="mockup === 'nonprofit-mode'" />
      <AppMockupFeeAdjustmentsMockup v-else-if="mockup === 'fee-adjustments'" />
      <AppMockupCrossEntityMockup v-else-if="mockup === 'cross-entity'" />
      <AppMockupAdaptiveTargetMockup v-else-if="mockup === 'adaptive-target'" />
    </div>
  </div>
</template>
