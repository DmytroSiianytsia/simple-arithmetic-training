import Vue from 'vue'
import Vuex from 'vuex'
import expression from './modules/expression'
import statistic from './modules/statistic'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    expression,
    statistic,
    auth
  }
})
