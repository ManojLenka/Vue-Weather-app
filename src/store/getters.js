import { formatAMPM, formatTempKtoC, formatTempKtoF, formatTextPascal, convertHPatoKPa } from '../utility'

export const getters = {
  getMain: (state) => {
    return (state.data) ? state.data.main : {}
  },
  getTempUnit: (state) => {
    return state.tempUnit
  },
  getTemp: (state, getters) => {
    if (getters.getTempUnit === 'C') {
      return (getters.getMain) ? formatTempKtoC(getters.getMain.temp) : ''
    }
    return (getters.getMain) ? formatTempKtoF(getters.getMain.temp) : ''
  },
  getSys: (state) => {
    return (state.data) ? state.data.sys : {}
  },
  getSunriseSunset: (state, getters) => {
    return (getters.getSys && getters.getSys.sunrise && getters.getSys.sunset)
      ? {sunrise: formatAMPM(getters.getSys.sunrise * 1000), sunset: formatAMPM(getters.getSys.sunset * 1000)} : {sunrise: '-', sunset: '-'}
  },
  getMaxMinTemp: (state, getters) => {
    if (getters.getTempUnit === 'C') {
      return (getters.getMain)
        ? {tempMax: formatTempKtoC(getters.getMain.temp_max), tempMin: formatTempKtoC(getters.getMain.temp_min)} : {tempMax: '', tempMin: ''}
    }
    return (getters.getMain)
      ? {tempMax: formatTempKtoF(getters.getMain.temp_max), tempMin: formatTempKtoF(getters.getMain.temp_min)} : {tempMax: '', tempMin: ''}
  },
  getHumidity: (state, getters) => {
    return (getters.getMain) ? getters.getMain.humidity : ''
  },
  getPressure: (state, getters) => {
    return (getters.getMain) ? convertHPatoKPa(getters.getMain.pressure) : ''
  },
  getWeather: (state) => {
    return (state.data && state.data.weather && state.data.weather.length > 0) ? state.data.weather[0] : null
  },
  getTempDescr: (state, getters) => {
    return (getters && getters.getWeather) ? formatTextPascal(getters.getWeather.description) : ''
  },
  getTempId: (state, getters) => {
    return (getters && getters.getWeather) ? getters.getWeather.id : ''
  },
  getWindSpeed: (state) => {
    return (state.data && state.data.wind) ? state.data.wind.speed : ''
  },
  getDefaultCity: (state) => {
    return state.defaultCity
  },
  getCityName: (state) => {
    return (state.data) ? state.data.name : ''
  },
  getForecastWeather: (state) => {
    return (state.forecast && state.forecast.list) ? state.forecast.list : []
  },
  getSelectedDate: (state) => {
    return state.selectedDate
  }
}
