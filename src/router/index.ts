import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/newDetails/:newId',
    name: 'newDetails',
    component: () => import('../views/NewDetails.vue')
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: () => import('../views/LogInPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
