import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFormat from './filters/date.format'

Vue.config.productionTip = false

Vue.filter('dateFormat', dateFormat)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
