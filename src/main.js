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
  apiKey: "AIzaSyCGPD2GyqACkEv_6Hv7Fpeb__UiH7sGT0k",
  authDomain: "simple-arithmetic.firebaseapp.com",
  databaseURL: "https://simple-arithmetic.firebaseio.com",
  projectId: "simple-arithmetic",
  storageBucket: "simple-arithmetic.appspot.com",
  messagingSenderId: "799171856557",
  appId: "1:799171856557:web:1e6113ee41897bb54b5e24",
  measurementId: "G-ZMS9S0Q36P"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
