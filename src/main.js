import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'boxicons'
import 'boxicons/css/boxicons.min.css'

import axios from "axios";
Vue.use(axios)

import VueQrcodeReader from "vue-qrcode-reader";
Vue.use(VueQrcodeReader);

import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import 'vue-swipe-actions/dist/vue-swipe-actions.css';
Vue.use(VueBottomSheet);

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://iorder-api.herokuapp.com'

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
