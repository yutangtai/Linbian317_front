// 沒用到
import createPersistedState from 'vuex-persistedstate'
import { LocalStorage } from 'quasar'

export default async ({ app, router, store, Vue }) => {
  window.setTimeout(() => {
    createPersistedState({
      key: '317Linbian',
      paths: [
        'users'
      ],
      storage: {
        getItem: key => LocalStorage.getItem(key),
        setItem: (key, value) => LocalStorage.set(key, value),
        removeItem: key => LocalStorage.remove(key)
      }
    })(store)
  }, 0)
}
