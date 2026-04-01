import hljs from 'highlight.js'
import 'highlight.js/styles/base16/dracula.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('highlight', {
    mounted(el, binding) {
      el.textContent = binding.value || ''
      hljs.highlightElement(el)
    },
    updated(el, binding) {
      el.textContent = binding.value || ''
      hljs.highlightElement(el)
    },
  })
})
