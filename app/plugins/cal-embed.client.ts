// Cal.com's embed is loaded on demand: nothing is requested from Cal.com until a
// visitor clicks a booking button (any element with a `data-cal-link` attribute).

const EMBED_URL = 'https://app.cal.com/embed/embed.js'
const ORIGIN = 'https://app.cal.com'
const NAMESPACE = 'cascade'

type CalQueue = Array<unknown[] | IArguments>
interface CalApi {
  (...args: unknown[]): void
  loaded?: boolean
  q?: CalQueue
  ns?: Record<string, CalNamespace>
  config?: Record<string, unknown>
}
type CalNamespace = ((...args: unknown[]) => void) & { q?: CalQueue }

declare global {
  interface Window { Cal?: CalApi }
}

/** Official Cal.com loader snippet, ported to TypeScript: it queues calls until embed.js is ready. */
function installCalStub(): CalApi {
  const push = (target: { q?: CalQueue }, args: unknown[] | IArguments) => {
    target.q = target.q ?? []
    target.q.push(args)
  }

  const cal: CalApi = window.Cal ?? function (...args: unknown[]) {
    const self = window.Cal as CalApi
    if (!self.loaded) {
      self.ns = {}
      self.q = self.q ?? []
      const script = document.createElement('script')
      script.src = EMBED_URL
      document.head.appendChild(script)
      self.loaded = true
    }
    if (args[0] === 'init') {
      const api: CalNamespace = (...inner: unknown[]) => push(api, inner)
      const namespace = args[1]
      if (typeof namespace === 'string') {
        self.ns![namespace] = self.ns![namespace] ?? api
        push(self.ns![namespace]!, args)
        push(self, ['initNamespace', namespace])
      } else {
        push(self, args)
      }
      return
    }
    push(self, args)
  }
  window.Cal = cal
  return cal
}

export default defineNuxtPlugin(() => {
  let started = false

  document.addEventListener('click', (event) => {
    if (started) return

    const trigger = (event.target as Element | null)?.closest<HTMLElement>('[data-cal-link]')
    if (!trigger) return

    // First booking click: hold the click, load the embed, then open the booking window ourselves.
    event.preventDefault()
    event.stopPropagation()
    started = true

    const cal = installCalStub()
    cal('init', NAMESPACE, { origin: ORIGIN })
    cal.config = { ...cal.config, forwardQueryParams: true }

    const namespace = cal.ns![NAMESPACE]!
    namespace('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    namespace('modal', {
      calLink: trigger.dataset.calLink,
      config: JSON.parse(trigger.dataset.calConfig ?? '{}')
    })
  }, true)
})
