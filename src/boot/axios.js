// import Vue from 'vue'
import axios from 'axios'

export default ({ app, router, store, Vue }) => {
  axios.defaults.baseURL = process.env.VUE_APP_API // 從env取得API的網址
  axios.interceptors.request.use((config) => {
    return config
  })
  Vue.prototype.$axios = axios
  // this will allow you to use this.$axios
  // so you won't necessarily have to import axios in each vue file
}
