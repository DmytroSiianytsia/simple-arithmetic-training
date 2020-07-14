import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'content',
    meta: {layout: 'main'},
    component: () => import('../views/Content.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: { layout: 'empty' },
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
