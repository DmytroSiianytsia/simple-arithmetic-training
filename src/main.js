import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import dateFormat from './filters/date.format'
import './registerServiceWorker'
import 'firebase/database'
import 'firebase/auth'

Vue.config.productionTip = false

Vue.filter('dateFormat', dateFormat)

const firebaseConfig = {
  apiKey: "AIzaSyA7Z3AuGTn29Wr4_PWmrmFFt3lmLfyIAUs",
  authDomain: "arithmetic-training.firebaseapp.com",
  databaseURL: "https://arithmetic-training.firebaseio.com",
  projectId: "arithmetic-training",
  storageBucket: "arithmetic-training.appspot.com",
  messagingSenderId: "549151282776",
  appId: "1:549151282776:web:a5bc086a60e4ef59f39c2d",
  measurementId: "G-BDQY1H42VE"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
