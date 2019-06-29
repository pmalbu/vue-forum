import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import AppDate from '@/components/AppDate'
Vue.component('AppDate', AppDate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
