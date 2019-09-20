import Vue from 'vue'
import { ApiEndpoints } from './../constants/api-endpoints'
import { Types } from './types'
import { filterForcastList } from './../utility'

export const actions = {
  [Types.GET_WEATHER_DATA]: ({ commit }, city) => {
    commit(Types.GET_WEATHER_DATA)
    const options = [{
      baseURL: ApiEndpoints.baseURL,
      url: ApiEndpoints.weatherApi.replace('[city]', city),
      method: 'get'
    }, {
      baseURL: ApiEndpoints.baseURL,
      url: ApiEndpoints.forcastApi.replace('[city]', city),
      method: 'get'
    }]
    Vue.axios.all([
      Vue.axios.request(options[0]),
      Vue.axios.request(options[1])
    ]).then(Vue.axios.spread((res1, res2) => {
      commit(Types.GET_WEATHER_DATA_SUCCESS, res1.data)
      if (res2.data && res2.data.list && res2.data.list.length > 0) {
        res2.data.list = filterForcastList(res2.data)
        commit(Types.SET_SELECTED_DATE, res2.data.list[0].dt)
      }
      commit(Types.GET_FORCAST_DATA_SUCCESS, res2.data)
    }))
      .catch(() => {
        commit(Types.GET_WEATHER_DATA_ERROR)
      })
  }
}
