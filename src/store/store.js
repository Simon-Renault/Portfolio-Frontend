import Vue from 'vue'
import Vuex from 'vuex'

//partials
import * as getters from './partials/getters.js'
import * as mutations from './partials/mutations.js'
import * as actions from './partials/actions.js'

//modules
import store_projects from './modules/@store_projects.js'
import store_global from './modules/@store_global.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 1
  },
  mutations,
  actions,
  getters,
  modules : {
    store_projects ,
    store_global,
  }
})
