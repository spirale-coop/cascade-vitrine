<script setup lang="ts">
const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
}>(), {
  side: 'left'
})

// The wave oscillates between MIN_X (closest to the screen edge) and MAX_X
// (closest to the page content), over a tall, gentle PERIOD — a big swing
// relative to a long period reads as an ample, sweeping curve rather than
// a tight wiggle. REPEATS covers a comfortable margin above any realistic
// hero height, so looping by exactly one period never exposes an edge.
const MIN_X = 6
const MAX_X = 24
const PERIOD = 800
// Debug experiment, take 2: shrinking this (4 -> 2) didn't change the
// glitch, so now testing the opposite direction — a much taller animated
// surface (8x) — to see if going bigger makes it worse/different rather
// than better. Safety margin against exposing an edge is
// PERIOD*(REPEATS-1) = 7000px either way, so no visual regression risk.
const REPEATS = 8
const TOTAL = PERIOD * REPEATS

// Extra static offset (on top of the -PERIOD used for seamless looping)
// pushing the whole wave surface further up, so the visible portion never
// starts at the path's flat, unrendered-looking top edge.
const VERTICAL_SHIFT = 200

// One shared <path> (the full curve, all REPEATS periods), referenced 3
// times via <use> for the 3 layers — geometry is written once, never
// duplicated.
function buildWavePath() {
  const half = PERIOD / 2
  const c1 = Math.round(half * 0.341)
  const c2 = Math.round(half * 0.659)
  let d = `M0 0 L${MAX_X} 0`
  for (let i = 0; i < REPEATS; i++) {
    const base = i * PERIOD
    d += ` C${MAX_X} ${base + c1} ${MIN_X} ${base + c2} ${MIN_X} ${base + half}`
    d += ` C${MIN_X} ${base + half + c1} ${MAX_X} ${base + half + c2} ${MAX_X} ${base + PERIOD}`
  }
  d += ` L0 ${TOTAL} Z`
  return d
}

const wavePath = buildWavePath()
const pathId = `cascade-wave-path-${props.side}`

// Left and right run the same 5-layer recipe but out of phase, so the two
// sides never mirror each other frame-for-frame — each layer's delay is
// shifted by a side-specific amount on top of its own base delay.
const SIDE_PHASE_SHIFT = props.side === 'right' ? 4 : 0

// Per-layer opacity (front-to-back depth), static y-offset (a fraction of
// the period, set via the <use> element's own `y` attribute rather than a
// transform — same idea as the reference "CSS Ocean Waves" pattern's
// x/y-offset <use> copies of one shared path — so it composes cleanly with
// the CSS animation instead of being overwritten by it), and independent
// animation timing (duration + delay) so the layers drift in and out of
// sync with each other rather than moving as a single rigid block.
const LAYERS = [
  { opacity: 0.18, offsetFactor: 0, duration: 9, delay: -2 },
  { opacity: 0.26, offsetFactor: 0.05, duration: 12, delay: -3 },
  { opacity: 0.4, offsetFactor: 0.1, duration: 10, delay: -5 },
  { opacity: 0.6, offsetFactor: 0.15, duration: 14, delay: -1 },
  { opacity: 0.9, offsetFactor: 0.2, duration: 6, delay: -6 }
].map(layer => ({
  ...layer,
  y: layer.offsetFactor * PERIOD,
  animationDuration: `${layer.duration}s`,
  animationDelay: `${layer.delay - SIDE_PHASE_SHIFT}s`
}))
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-y-0 hidden w-36 overflow-hidden 2xl:block"
    :class="side === 'left' ? 'left-0' : 'right-0 scale-x-[-1]'"
    :style="{ '--wave-period': `${PERIOD}px` }"
  >
    <svg
      class="wave-parallax absolute inset-x-0 w-full"
      :style="{ top: `-${PERIOD + VERTICAL_SHIFT}px` }"
      :height="TOTAL"
      :viewBox="`0 0 ${MAX_X + 5} ${TOTAL}`"
      preserveAspectRatio="none"
    >
      <defs>
        <path :id="pathId" :d="wavePath" />
      </defs>
      <!--
        Ported from a proven "CSS Ocean Waves" reference: one shared path,
        several <use> copies, each animated INDEPENDENTLY (its own
        animation-delay/duration) rather than animating one shared parent
        transform for the whole group. Earlier versions here animated the
        outer <svg> as a single unit specifically to avoid a periodic
        glitch from multiple large independently-composited layers
        drifting out of sync — but per-layer independent animation is
        exactly what the reference does, and it holds up fine there, so
        the more likely culprit was sheer surface size (this was 5600px
        tall) rather than the layer count. Kept modest here instead.
      -->
      <use
        v-for="(layer, i) in LAYERS"
        :key="i"
        :href="`#${pathId}`"
        fill="var(--ui-primary)"
        :opacity="layer.opacity"
        :y="layer.y"
        :style="{ animationDuration: layer.animationDuration, animationDelay: layer.animationDelay }"
      />
    </svg>
  </div>
</template>

<style scoped>
.wave-parallax > use {
  animation-name: cascade-wave-move;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* The shift is exactly one PERIOD, so however long each layer's own
   duration is, it always loops back to a pixel-identical position —
   the stagger only changes how fast each layer gets there, never where
   it ends up. */
@keyframes cascade-wave-move {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, var(--wave-period), 0); }
}

@media (prefers-reduced-motion: reduce) {
  .wave-parallax > use {
    animation: none;
  }
}
</style>
