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

const token = localStorage.getItem('userToken')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./registerServiceWorker.js').then(function(reg) {
    console.log('Successfully registered service worker', reg);
  }).catch(function(err) {
    console.warn('Error whilst registering service worker', err);
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
