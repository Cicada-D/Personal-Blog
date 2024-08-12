import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/PagesIndex.vue')
    },{
      path: '/home',
      name: 'home',
      component: () => import('../pages/home/HomeIndex.vue')
    }
  ]
})

export default router
