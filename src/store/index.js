import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import cart from '@/store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCartPageOpen: false,
    isScanPageOpen: false,
    activeStore: null,
    geolocation: null
  },
  getters: {
    isCartPageOpen: state => state.isCartPageOpen,
    isScanPageOpen: state => state.isScanPageOpen,

    activeStore: state => state.activeStore,
    geolocation: state => state.geolocation,
  },
  actions: {
    openCartPage: (context) => context.commit('openCartPage'),
    closeCartPage: (context) => context.commit('closeCartPage'),

    openScanPage: (context) => context.commit('openScanPage'),
    closeScanPage: (context) => context.commit('closeScanPage'),

    setActiveStore: ({ commit}, payload) => commit('setActiveStore', payload),
    checkGeolocation: ({ commit}) => commit('checkGeolocation'),
  },
  mutations: {
    openCartPage: (state) => state.isCartPageOpen = true,
    closeCartPage: (state) => state.isCartPageOpen = false,
    openScanPage: (state) => state.isScanPageOpen = true,
    closeScanPage: (state) => state.isScanPageOpen = false,

    setActiveStore: (state, newStore) => state.activeStore = newStore,
    checkGeolocation: (state) => {
      console.log('check geolocation')
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords)
        state.geolocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })
    },
  },
  modules: {
    auth: auth,
    cart: cart
  }
})
