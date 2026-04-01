export default defineNuxtPlugin(() => {
  if (import.meta.dev || typeof window === 'undefined') {
    return
  }

  const config = useRuntimeConfig()
  const scriptId = 'simple-analytics-script'

  if (document.getElementById(scriptId)) {
    return
  }

  const script = document.createElement('script')
  script.id = scriptId
  script.async = true
  script.defer = true
  script.src = 'https://scripts.simpleanalyticscdn.com/latest.js'
  script.setAttribute('data-hostname', config.public.simpleAnalyticsDomain)
  document.head.appendChild(script)
})
