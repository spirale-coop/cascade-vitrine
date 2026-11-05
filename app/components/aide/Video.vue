<script setup lang="ts">
const props = defineProps<{
  /** Local file (/aide/<slug>/video.mp4) or a YouTube / Vimeo URL. Empty while the video is not ready. */
  src?: string
  status?: 'none' | 'script' | 'todo' | 'review' | 'done'
  title: string
  poster?: string
}>()

const { t } = useI18n()

const embed = computed(() => {
  const src = props.src ?? ''
  const youtube = src.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{6,})/)
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}`
  const vimeo = src.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?dnt=1`
  return null
})

// A media fragment makes the browser show a frame two seconds in instead of a black first frame.
const fileSrc = computed(() => (props.src ?? '').includes('#') ? props.src : `${props.src}#t=2`)

const mime = computed(() => {
  const ext = (props.src ?? '').split('?')[0]?.split('.').pop()?.toLowerCase()
  return ({ mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime', m4v: 'video/mp4' } as Record<string, string>)[ext ?? '']
})
</script>

<template>
  <section class="mt-8" :aria-label="t('aide.video.label')">
    <div
      v-if="src"
      class="aspect-video overflow-hidden rounded-xl border border-default bg-black"
    >
      <iframe
        v-if="embed"
        :src="embed"
        :title="title"
        class="size-full"
        loading="lazy"
        allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      />
      <video
        v-else
        class="size-full"
        controls
        playsinline
        preload="metadata"
        :poster="poster"
        :aria-label="title"
      >
        <source :src="fileSrc" :type="mime">
      </video>
    </div>

    <!-- Preview-only placeholder while the video is being produced. -->
    <div
      v-else-if="status && status !== 'none'"
      class="flex aspect-video flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-default bg-muted/50 text-center"
    >
      <span class="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <UIcon name="i-lucide-play" class="size-7" />
      </span>
      <p class="font-medium text-highlighted">
        {{ t('aide.video.preparing') }}
      </p>
      <UBadge :label="t(`aide.video.status.${status}`)" color="warning" variant="outline" />
    </div>
  </section>
</template>
