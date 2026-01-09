import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/pages/PortfolioPage.vue'),
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('@/pages/ClientsPage.vue'),
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('@/pages/CareerPage.vue'),
    }
  ]
})

export default router
