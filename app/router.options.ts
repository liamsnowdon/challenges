import type { RouterConfig } from '@nuxt/schema'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: _routes => [
    {
      name: 'index',
      path: '/',
      component: () => import('~/sections/landing/pages/index.vue'),
    },
    {
      name: 'advice-generator',
      path: '/advice-generator',
      component: () => import('~/sections/advice-generator/pages/index.vue'),
    },
  ],
} satisfies RouterConfig
