import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/ClientsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { title: 'Clients List' }
    },
    {
      path: '/new-client',
      name: 'new-client',
      component: () => import('../views/NewClientView.vue'),
      props: {title: 'New Client'}
    },
  ]
})

export default router
