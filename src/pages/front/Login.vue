<template>
  <div id="login">
    <div class="container-fluid row justify-center items-center" style="position: relative">
      <div class="bg"></div>
      <q-form
        name="loginForm"
        @submit="onSubmit"
        class="loginForm"
      >
        <div class="loginBox">
          <!-- <div class="loginIcon">
            <i class="far fa-user"></i>
          </div> -->
          <div class="loginTitle">
            <span>登入</span>
          </div>
          <div class="row q-mb-md q-mt-lg">
            <div style="max-width: 250px">
              <q-input
                label="帳號"
                v-model="form.account"
                filled
                dense
                clearable
                clear-icon="close"
                color="light-blue-10"
                bg-color="white"
                :input-style="{ width: '250px' }"
              >
              </q-input>
            </div>
          </div>
          <div class="row q-mb-md">
            <div style="max-width: 250px">
              <q-input
                label="密碼"
                v-model="form.password"
                filled :type="isPwd ? 'password' : 'text'"
                dense
                color="light-blue-10"
                bg-color="white"
                :input-style="{ width: '250px' }"
              >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  @click="isPwd = !isPwd"
                  color="grey-5"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
            </div>
          </div>
          <div class="row q-mb-lg" style="width: 250px">
            <q-btn
              label="送出"
              type="submit"
              color="negative"
              class="full-width"
            >
            </q-btn>
          </div>
          <div class="row justify-between" style="width: 250px">
            <div class="col row">
              忘記密碼
            </div>
            <div class="col row justify-end">
              <router-link to="register">
                註冊帳號
              </router-link>
            </div>
            </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        account: '',
        password: ''
      },
      newForm: {},
      isPwd: true
    }
  },
  methods: {
    // 送出
    async onSubmit () {
      try {
        this.encryptPassword(this.form.password)
        // console.log(this.newForm)
        // const { data } = await this.$axios.post('/users/login', this.form)
        const { data } = await this.$axios.post('/users/login', this.newForm)
        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          message: '登入成功！',
          icon: 'fas fa-check-circle',
          position: 'top',
          timeout: 2500
        })
        console.log(this.$store)
        this.$store.commit('users/login', data)
        this.$router.push('/cart')
      } catch (error) {
        console.log(error)
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          message: error.response.data.message,
          icon: 'fas fa-exclamation-circle',
          position: 'top',
          timeout: 2500
        })
      }
      this.form.account = ''
      this.form.password = ''
    },

    // 密碼加密
    encryptPassword (password) {
      // const salt = bcrypt.genSaltSync(10)
      // const hash = bcrypt.hashSync(password, salt)
      this.newForm.account = this.form.account
      // this.newForm.password = hash
      this.newForm.password = md5(password)
      return this.newForm
    }
  }
}
</script>

<style>
  #login {
    overflow: hidden;
  }
  .bg {
    width: 100%;
    height: 100%;
    background: url('~assets/loginbackground.png') no-repeat center;
    background-size: 1000px, auto, cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (min-width: 576px) {
    .bg {
      background-size: 1200px, auto, cover;
    }
  }
  @media (min-width: 992px) {
    .bg {
      background-size: 100%, auto, cover;
    }
  }
  .loginTitle {
    font-size: 1.75rem;
    font-weight: 700;
  }
  .loginBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 350px;
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 193px;
    position: relative;
  }
  .loginForm::before {
    content: '';
    width: 400px;
    height: 400px;
    border-radius: 10px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
