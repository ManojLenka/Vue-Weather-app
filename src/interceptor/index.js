import Vue from 'vue'

export function interceptorService () {
  Vue.axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    if (error && error.response && error.response.status === 404) {
      Vue.notify({
        group: 'message',
        clean: true
      })
      Vue.notify({
        group: 'message',
        type: 'error',
        title: 'Error',
        text: 'City not found!',
        duration: 1000
      })
    }
    return Promise.reject(error)
  })
}
