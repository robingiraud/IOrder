import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Receipts from '../views/Receipts.vue'
import ProfilePage from '../views/ProfilePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/receipts',
    name: 'Receipts',
    component: Receipts
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
