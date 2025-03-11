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

  colorMode: {
    classSuffix: '',
  },

  imports: {
    autoImport: false,
  },

  devtools: { enabled: true },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-02-27',

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
