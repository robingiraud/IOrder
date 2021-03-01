import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCartPageOpen: false,
    isScanPageOpen: false,
  },
  getters: {
    isCartPageOpen: state => state.isCartPageOpen,
    isScanPageOpen: state => state.isScanPageOpen,
  },
  mutations: {
    openCartPage: (state) => state.isCartPageOpen = true,
    closeCartPage: (state) => state.isCartPageOpen = false,

    openScanPage: (state) => state.isScanPageOpen = true,
    closeScanPage: (state) => state.isScanPageOpen = false
  },
  actions: {
    openCartPage: (context) => context.commit('openCartPage'),
    closeCartPage: (context) => context.commit('closeCartPage'),

    openScanPage: (context) => context.commit('openScanPage'),
    closeScanPage: (context) => context.commit('closeScanPage')
  },
  modules: {}
})
