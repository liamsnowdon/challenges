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
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap' },
      ],
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
