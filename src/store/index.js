import Vue from 'vue'
import Vuex from 'vuex'

import users from './users'

import createPersistedState from 'vuex-persistedstate'
import { LocalStorage } from 'quasar'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      users
    },
    plugins: [
      createPersistedState({
        key: '317Linbian',
        path: [
          'users'
        ],
        storage: {
          getItem: key => LocalStorage.getItem(key),
          setItem: (key, value) => LocalStorage.set(key, value),
          removeItem: key => LocalStorage.remove(key)
        }
      })
    ],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
