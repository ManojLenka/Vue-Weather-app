import { Weekday, Months } from './utility.constant'

export function formatAMPM (timestamp) {
  let date = new Date(timestamp)
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours || 12
  minutes = minutes < 10 ? '0' + minutes : minutes
  let strTime = hours + ':' + minutes + ' ' + ampm
  return strTime
}

export function formatTempKtoC (temp) {
  return Math.round(temp - 273.15)
}

export function formatTempKtoF (temp) {
  return Math.round(((temp * (9 / 5)) - 459.67))
}

export function getDay (date) {
  return Weekday[date.getDay()]
}

export function getMonth (date) {
  return Months[date.getMonth()]
}

export function formatTextPascal (text) {
  return text.split(' ').map(m => m[0].toUpperCase() + m.slice(1)).join(' ')
}

export function convertHPatoKPa (pressure) {
  return Math.round(pressure / 10)
}

export function getImageName (id) {
  if (id >= 200 && id <= 232) {
    return 'thunder'
  } else if (id >= 300 && id <= 321) {
    return 'dizzle'
  } else if (id >= 500 && id <= 531) {
    return 'rain'
  } else if (id >= 600 && id <= 632) {
    return 'snow'
  } else if (id >= 801 && id <= 804) {
    return 'clouds'
  } else if (id === 701) {
    return 'mist'
  } else if (id === 711) {
    return 'smoke'
  } else if (id === 721) {
    return 'haze'
  } else if (id === 731 || id === 761) {
    return 'dust'
  } else if (id === 741) {
    return 'fog'
  } else if (id === 751) {
    return 'sand'
  } else if (id === 762) {
    return 'ash'
  } else if (id === 771) {
    return 'squall'
  } else if (id === 781) {
    return 'tornado'
  }
  return 'clear'
}

export function filterForcastList (data) {
  let dt = ''
  const timeStamp = 86400000
  return data.list.reduce((acc, weather) => {
    if (dt) {
      if (dt === (weather.dt * 1000)) {
        dt += timeStamp
        weather.sys = { ...weather.sys, sunrise: data.city.sunrise, sunset: data.city.sunset }
        weather = { ...weather, name: data.city.name }
        acc.push(weather)
      }
    } else {
      dt = (weather.dt * 1000) + timeStamp
      weather.sys = { ...weather.sys, sunrise: data.city.sunrise, sunset: data.city.sunset }
      weather = { ...weather, name: data.city.name }
      acc.push(weather)
    }
    return acc
  }, [])
}
