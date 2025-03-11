// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    // '@nuxtjs/seo',
  ],

  components: {
    dirs: [],
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

  // site: {
  //   url: 'https://challenges.liamsnowdon.uk',
  //   name: 'Liam Snowdon Coding Challenges',
  //   description: 'Random coding challenges showcasing my knowledge',
  //   defaultLocale: 'en',
  // },

  // schemaOrg: {
  //   identity: defineOrganization({
  //     name: 'Liam Snowdon Coding Challenges',
  //     url: 'https://challenges.liamsnowdon.uk',
  //   }),
  // },
})
