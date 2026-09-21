<script setup lang="ts">
interface Contributor {
  name: string
  color: string
  amount: number
}

const { t, locale } = useI18n()

const props = withDefaults(defineProps<{
  contributors?: Contributor[]
  initialObjective?: number
  minRatio?: number
  conventionalLabel?: string
  cascadeLabel?: string
}>(), {
  contributors: () => [
    { name: 'Lucas', color: '#22d3ee', amount: 25 },
    { name: 'Marie', color: '#3b82f6', amount: 62 },
    { name: 'Sophie', color: '#ef4444', amount: 58 },
    { name: 'Thomas', color: '#22c55e', amount: 27 },
    { name: 'Léa', color: '#f97316', amount: 60 },
    { name: 'Chloé', color: '#a855f7', amount: 39 }
  ],
  initialObjective: 145,
  minRatio: 0.25
})

// No hardcoded French default here anymore — conventionalLabel/cascadeLabel/hint
// fall back to the translated copy whenever the caller doesn't override them.
const conventionalLabelText = computed(() => props.conventionalLabel || t('mockups.adaptiveContributionDiagram.conventionalLabel'))
const cascadeLabelText = computed(() => props.cascadeLabel || t('mockups.adaptiveContributionDiagram.cascadeLabel'))

// fr-FR/en-US number grouping differ (e.g. decimal comma vs point), and the
// € sign sits on the opposite side of the amount in English — so amounts are
// formatted per-locale rather than always as fr-FR.
const numberLocale = computed(() => (locale.value === 'en' ? 'en-US' : 'fr-FR'))
function formatAmount(n: number) {
  const formatted = n.toLocaleString(numberLocale.value)
  return locale.value === 'en' ? `€${formatted}` : `${formatted} €`
}

const total = computed(() => props.contributors.reduce((sum, c) => sum + c.amount, 0))
const minObjective = computed(() => Math.round(total.value * props.minRatio))

const objective = ref(props.initialObjective)
const ratio = computed(() => objective.value / total.value)
const saved = computed(() => total.value - objective.value)

const containerHeight = 320
const lineTop = computed(() => containerHeight * (1 - ratio.value))

const containerRef = ref<HTMLElement | null>(null)
const dragging = ref(false)

// A custom tooltip instead of UTooltip: UTooltip anchors to the trigger's
// own bounding box with an open delay, which reads as sluggish when
// sweeping across many thin, adjacent bar segments. Tracking the cursor
// directly on pointermove and rendering one shared fixed-position tooltip
// shows the value instantly and lets it follow the pointer as it moves.
const hoveredContributor = ref<Contributor | null>(null)
const tooltipPos = reactive({ x: 0, y: 0 })

// The Cascade bar isn't just the conventional bar squashed to fit — with
// adaptive contribution, everyone's amount scales by the same `ratio` so
// the sum lands exactly on the objective. The segment HEIGHTS already
// reflect this correctly (each is a share of the objective-sized wrapper,
// not of the full total), but the figure shown on hover must too, or the
// two bars silently disagree about what each contributor actually pays.
function onSegmentPointerMove(event: PointerEvent, c: Contributor, amount: number) {
  hoveredContributor.value = { ...c, amount }
  tooltipPos.x = event.clientX
  tooltipPos.y = event.clientY
}

function onSegmentPointerLeave() {
  hoveredContributor.value = null
}

function valueFromClientY(clientY: number) {
  const rect = containerRef.value?.getBoundingClientRect()
  if (!rect) return objective.value
  const fromBottom = rect.bottom - clientY
  const clamped = Math.min(Math.max(fromBottom, 0), containerHeight)
  return Math.round((clamped / containerHeight) * total.value / 5) * 5
}

function onPointerMove(event: PointerEvent) {
  if (!dragging.value) return
  const value = valueFromClientY(event.clientY)
  objective.value = Math.min(Math.max(value, minObjective.value), total.value)
}

function onPointerUp() {
  dragging.value = false
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
}

function onPointerDown(event: PointerEvent) {
  dragging.value = true
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  event.preventDefault()
}
</script>

<template>
  <div class="w-full rounded-xl border border-default bg-default p-4 sm:p-8">
    <Teleport to="body">
      <div
        v-if="hoveredContributor"
        class="pointer-events-none fixed z-50 flex h-6 items-center gap-1 rounded-sm bg-default px-2.5 py-1 text-xs whitespace-nowrap text-highlighted shadow-sm ring ring-default"
        :style="{ left: `${tooltipPos.x + 14}px`, top: `${tooltipPos.y + 14}px` }"
      >
        {{ hoveredContributor.name }} — {{ formatAmount(hoveredContributor.amount) }}
      </div>
    </Teleport>

    <!--
      The bar columns below are bottom-aligned (items-end) inside a box
      exactly `containerHeight` tall, but each column's content (label +
      gap + full-height bar) is taller than that box — so the label
      overflows above the box's top edge by design. mt-10 on the container
      clears that overflow (verified against its actual rendered position)
      rather than just leaving a small gap that looks fine in code but
      overlaps on screen.
    -->
    <div ref="containerRef" class="relative mx-auto mt-10" :style="{ height: `${containerHeight}px`, maxWidth: '480px' }">
      <div class="absolute inset-0 flex items-end justify-center gap-16 sm:gap-24">
        <div class="flex flex-col items-center gap-3">
          <p class="text-xs font-medium text-muted sm:text-sm">{{ conventionalLabelText }}</p>
          <div class="relative w-16 overflow-hidden rounded-t-lg sm:w-20" :style="{ height: `${containerHeight}px` }">
            <div class="absolute inset-0 flex flex-col-reverse">
              <div
                v-for="c in contributors"
                :key="c.name"
                class="cursor-default transition-[filter] hover:brightness-110"
                :style="{ height: `${(c.amount / total) * 100}%`, backgroundColor: c.color }"
                @pointermove="onSegmentPointerMove($event, c, c.amount)"
                @pointerleave="onSegmentPointerLeave"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-3">
          <p class="text-xs font-medium text-muted sm:text-sm">{{ cascadeLabelText }}</p>
          <div class="relative w-16 overflow-hidden rounded-t-lg bg-elevated sm:w-20" :style="{ height: `${containerHeight}px` }">
            <div class="absolute bottom-0 inset-x-0 flex flex-col-reverse" :style="{ height: `${ratio * 100}%` }">
              <div
                v-for="c in contributors"
                :key="c.name"
                class="cursor-default transition-[filter] hover:brightness-110"
                :style="{ height: `${(c.amount / total) * 100}%`, backgroundColor: c.color }"
                @pointermove="onSegmentPointerMove($event, c, Math.round(c.amount * ratio))"
                @pointerleave="onSegmentPointerLeave"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute left-0 right-0 flex -translate-y-1/2 touch-none items-center gap-2 select-none"
        :class="dragging ? 'cursor-grabbing' : 'cursor-grab'"
        :style="{ top: `${lineTop}px` }"
        @pointerdown="onPointerDown"
      >
        <div class="h-0.5 flex-1 border-t-2 border-dashed border-primary" />
        <UBadge color="primary" variant="solid" size="sm" class="shrink-0 gap-1 whitespace-nowrap">
          <UIcon name="i-lucide-chevrons-up-down" class="size-3.5" />
          {{ t('mockups.adaptiveContributionDiagram.objective', { amount: objective.toLocaleString(numberLocale) }) }}
        </UBadge>
        <div class="h-0.5 flex-1 border-t-2 border-dashed border-primary" />
      </div>
    </div>

    <div class="mt-6 flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-center sm:gap-6">
      <p class="text-sm font-medium text-highlighted">{{ formatAmount(total) }}</p>
      <p class="text-sm font-medium text-highlighted">{{ formatAmount(objective) }}</p>
    </div>

    <div class="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      <div v-for="c in contributors" :key="c.name" class="flex items-center gap-1.5 text-xs text-toned">
        <span class="size-2.5 rounded-full" :style="{ backgroundColor: c.color }" />
        {{ c.name }}
      </div>
    </div>

    <div class="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-center">
      <span class="font-semibold text-primary">{{ t('mockups.adaptiveContributionDiagram.savedMessage', { amount: saved.toLocaleString(numberLocale) }) }}</span> <span class="text-toned">{{ t('mockups.adaptiveContributionDiagram.savedSuffix') }}</span>
    </div>
  </div>
</template>
