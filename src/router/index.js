import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/content',
    name: 'content',
    meta: {layout: 'main'},
    component: () => import('../views/Content.vue')
  },
  {
    path: '/statistic',
    name: 'statistic',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Statistic.vue')
  },
  {
    path: '/',
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

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireUser = to.matched.some(record => record.meta.auth)

  if (requireUser && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
