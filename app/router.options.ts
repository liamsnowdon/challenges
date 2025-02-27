import type { RouterConfig } from '@nuxt/schema'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: _routes => [
    {
      name: 'index',
      path: '/',
      component: () => import('~/modules/landing/pages/index.vue'),
    },
    {
      name: 'advice-generator',
      path: '/advice-generator',
      component: () => import('~/modules/advice-generator/pages/index.vue'),
    },
  ],
} satisfies RouterConfig
