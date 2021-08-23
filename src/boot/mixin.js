export default async ({ Vue }) => {
  Vue.mixin({
    methods: {
      async logout () {
        console.log(this.user)
        try {
          console.log(this.$store.state.users.jwt)
          await this.$axios.delete('/users/logout', {
            headers: { Authorization: `Bearer ${this.$store.state.users.jwt.token}` }
          })
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            message: '登出成功！',
            icon: 'fas fa-check-circle',
            position: 'top',
            timeout: 2500
          })
          this.$store.commit('users/logout')
          if (this.$route.path !== '/') this.$router.push('/')
          console.log('登出囉!')
        } catch (error) {
          console.log(error)
          this.$q.notify({
            color: 'negative',
            textColor: 'white',
            message: '發生錯誤',
            icon: 'fas fa-exclamation-circle',
            position: 'top',
            timeout: 2500
          })
        }
      }
    },
    computed: {
      user () {
        return this.$store.getters['users/getUserData']
      },
      isLogin () {
        return this.user.account.length !== 0
      }
    }
  })
}
