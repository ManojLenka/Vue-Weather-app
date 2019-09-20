import Vue from 'Vue'
import { Types } from './types'

export const mutations = {
  [Types.GET_WEATHER_DATA]: (state) => {
    Vue.set(state, 'isLoading', true)
  },
  [Types.GET_WEATHER_DATA_SUCCESS]: (state, payload) => {
    Vue.set(state, 'data', payload)
    Vue.set(state, 'isLoading', false)
  },
  [Types.GET_FORCAST_DATA_SUCCESS]: (state, payload) => {
    Vue.set(state, 'forecast', payload)
    Vue.set(state, 'isLoading', false)
  },
  [Types.GET_WEATHER_DATA_ERROR]: (state) => {
    Vue.set(state, 'isLoading', false)
  },
  [Types.CHANGE_TEMP_UNIT]: (state, payload) => {
    Vue.set(state, 'tempUnit', (payload === 'F') ? 'F' : 'C')
  },
  [Types.SET_SELECTED_DATE]: (state, payload) => {
    Vue.set(state, 'selectedDate', payload)
  }
}
