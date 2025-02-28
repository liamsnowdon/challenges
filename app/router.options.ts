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
    {
      name: 'devjobs',
      path: '/devjobs',
      component: () => import('~/modules/devjobs/pages/index.vue'),
    },
    {
      name: 'devjobs-jobs-job',
      path: '/devjobs/jobs/:id',
      component: () => import('~/modules/devjobs/pages/jobs/[id].vue'),
    },
  ],
} satisfies RouterConfig
