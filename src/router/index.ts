import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',  
      component: () => import('../pages/PageIndex.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../pages/home/HomeIndex.vue')
        },
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
