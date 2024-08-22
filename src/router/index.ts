import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home/HomeIndex.vue'),
      children: [
        {
          path: '/type',
          name: 'type',
          component: () => import('../pages/type/TypeIndex.vue')
        },{
          path: '/archives',
          name: 'archives',
          component: () => import('../pages/archives/ArchivesIndex.vue')
        }, {
          path: '/tages',
          name: 'tages',
          component: () => import('../pages/tages/TagesIndex.vue')
        }
      ]
    }
  ]
})

export default router
