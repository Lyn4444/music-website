import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/css/global.css'

Vue.config.productionTip = false

axios.defaults.baseURL = '/api'

Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
