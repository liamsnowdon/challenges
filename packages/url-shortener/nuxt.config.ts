export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
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
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap' },
      ],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

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
