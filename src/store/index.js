import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    data: {},
    forecast: {},
    isLoading: false,
    tempUnit: 'C',
    defaultCity: 'Hyderabad',
    selectedDate: ''
  },
  getters: {
    ...getters
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  }
})
