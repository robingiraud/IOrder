import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Login from '@/views/auth/Login.vue';
import Home from '../views/pages/Home.vue'
import Store from '../views/Store.vue'
import Receipts from '../views/Receipts.vue'
import ProfilePage from '../views/pages/ProfilePage.vue'
import Register from '@/views/auth/Register.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
    meta: { requiresLogin: true }
  },
  {
    path: '/receipts',
    name: 'Receipts',
    component: Receipts,
    meta: { requiresLogin: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
    meta: { requiresLogin: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) && !store.getters['auth/isAuthenticated']) {
    next('/login')
  } else {
    next()
  }
})

export default router
