export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
  ],

  ssr: false,

  components: {
    dirs: [],
  },

  imports: {
    autoImport: false,
  },

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-03-21',

  typescript: {
    typeCheck: true,
    strict: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
