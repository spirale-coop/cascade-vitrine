import { injectAnalytics } from '@vercel/analytics/nuxt/runtime'
import type { BeforeSend } from '@vercel/analytics'

const EXCLUDE_KEY = 'cascade-analytics-excluded'

// Lets the site owner drop their own visits from Vercel Analytics: visiting
// with ?excludeAnalytics=1 once sets a persistent flag in this browser,
// checked by beforeSend before every event is sent. ?excludeAnalytics=0
// clears it again.
export default defineNuxtPlugin(() => {
  const route = useRoute()
  const flag = route.query.excludeAnalytics

  if (flag === '1') localStorage.setItem(EXCLUDE_KEY, '1')
  else if (flag === '0') localStorage.removeItem(EXCLUDE_KEY)

  const beforeSend: BeforeSend = (event) => {
    if (localStorage.getItem(EXCLUDE_KEY) === '1') return null
    return event
  }

  injectAnalytics({ beforeSend })
})
