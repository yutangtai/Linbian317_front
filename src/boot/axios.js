// import Vue from 'vue'
import axios from 'axios'

export default ({ app, router, store, Vue }) => {
  // axios.defaults.baseURL = process.env.VUE_APP_API // 從env取得API的網址
  // console.log(process.env.API)
  Vue.prototype.$axios = axios.create({ baseURL: process.env.VUE_APP_API })
  // axios.defaults.baseURL = process.env.DEV_URL
  Vue.prototype.$axios.interceptors.request.use((config) => {
    return config
  })
  // this will allow you to use this.$axios
  // so you won't necessarily have to import axios in each vue file
}
