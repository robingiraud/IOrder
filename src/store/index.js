import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import cart from '@/store/modules/cart'
import orders from '@/store/modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isScanPageOpen: false,
    activeStore: null,
    geolocation: null
  },
  getters: {
    isScanPageOpen: state => state.isScanPageOpen,

    activeStore: state => state.activeStore,
    geolocation: state => state.geolocation,
  },
  actions: {
    openScanPage: (context) => context.commit('openScanPage'),
    closeScanPage: (context) => context.commit('closeScanPage'),

    setActiveStore: ({ commit}, payload) => commit('setActiveStore', payload),
    checkGeolocation: ({ commit}) => commit('checkGeolocation'),
  },
  mutations: {
    openScanPage: (state) => state.isScanPageOpen = true,
    closeScanPage: (state) => state.isScanPageOpen = false,

    setActiveStore: (state, newStore) => state.activeStore = newStore,
    checkGeolocation: (state) => {
      navigator.geolocation.getCurrentPosition(function(position) {
        state.geolocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })
    },
  },
  modules: {
    auth: auth,
    cart: cart,
    orders: orders
  }
})
