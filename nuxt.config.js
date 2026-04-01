export default defineNuxtConfig({
  compatibilityDate: '2026-04-01',
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/markdown-it', '~/plugins/highlight.client', '~/plugins/simple-analytics.client'],
  app: {
    head: {
      title: 'Triton',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: "DSC VIT's pastebin and URL shortener",
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://api.dscv.it/api',
      simpleAnalyticsDomain: 'sa.dscv.it',
    },
  },
  nitro: {
    prerender: {
      routes: ['/404.html'],
    },
  },
})
