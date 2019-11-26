import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Send',
    name: 'Send',
    component: () => import('@/pages/Send.vue')
  },
  {
    path: '/PageA',
    name: 'PageA',
    component: () => import('@/pages/PageA.vue')
  },
  {
    path: '/PageB',
    name: 'PageB',
    component: () => import('@/pages/PageB.vue')
  },
  {
    path: '/PageC',
    name: 'PageC',
    component: () => import('@/pages/PageC.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
