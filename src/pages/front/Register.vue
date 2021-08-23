<template>
  <div id="register">
    <div class="container-fluid">
      <div class="mask"></div>
      <div class="registerBox_big">
        <div class="col-md registerBox_left">
          <div class="logo_box q-mb-lg">
            <div class="logoImage">
              <img src="../../assets/logoBlack.png" alt="logo">
            </div>
          </div>
        </div>
        <div class="col col-md registerBox_right">
          <div class="right_title">註冊帳號</div>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-sm"
          >
          <q-input
            label="帳號 *"
            v-model="form.account"
            filled
            dense
            lazy-rules
            :rules="[
              val => val && val.length > 0 || '此為必填欄位',
              val => val && val.length >= 4 || '帳號至少 4 個字',
              val => val && val.length <= 20 || '帳號必須小於 20 個字'
            ]"
          />

          <q-input
            label="密碼 *"
            v-model.lazy="form.password"
            filled :type="isPwd ? 'password' : 'text'"
            dense
            lazy-rules
            :rules="[
              val => val && val.length > 0 || '此為必填欄位',
              val => val && val.length >= 4 || '密碼至少 4 個字',
              val => val && val.length <= 20 || '密碼最多 20 個字'
            ]"
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

          <q-input
            label="Email *"
            v-model="form.email"
            type="email"
            filled
            dense
            lazy-rules
            :rules="[
              val => val && val.length > 0 || '此為必填欄位',
              val => !!val || '信箱格式不正確',
              val => val && val.includes('@') || '信箱格式不正確'
            ]"
          />

          <q-input
            label="手機 *"
            v-model="form.phone"
            filled
            dense
            mask="#### - ### - ###"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || '此為必填欄位',
            ]"
          />

          <div>
            <q-btn label="送出" type="submit" color="red-8"/>
            <q-btn label="重置" type="reset" color="red-8" outline class="q-ml-sm"/>
          </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  name: 'Register',
  data () {
    return {
      form: {
        account: null,
        password: null,
        email: '',
        phone: null
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
        console.log(this.newForm)
        await this.$axios.post('/users', this.newForm)
        // this.form.password = md5(this.form.password)
        // console.log(this.form)
        // await this.$axios.post('/users', this.form)
        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          message: '註冊成功！請重新登入',
          icon: 'fas fa-check-circle',
          position: 'top',
          timeout: 2500
        })
        this.$router.push('/login')
      } catch (error) {
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          message: error.response.data.message,
          icon: 'fas fa-exclamation-circle',
          position: 'top',
          timeout: 2500
        })
      }
    },

    // 密碼加密
    encryptPassword (password) {
      // const salt = bcrypt.genSaltSync(10)
      // const hash = bcrypt.hashSync(password, salt)
      this.newForm.account = this.form.account
      // this.newForm.password = hash
      this.newForm.password = md5(password)
      this.newForm.email = this.form.email
      this.newForm.phone = this.form.phone
      return this.newForm
    },

    // 重置
    onReset () {
      this.form.account = null
      this.form.password = null
      this.form.email = ''
      this.form.phone = null
    }
  }
}
</script>

<style scoped>
  .container-fluid {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../assets/map.jpg') no-repeat center/cover;

    position: relative;
    transform: 1s;
  }
  .mask {
    width: 100%;
    height: 100%;

    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../assets/map.jpg') no-repeat center/cover;
    filter: blur(3px);
  }
  .registerBox_big {
    display: flex;
    width: 85%;
    box-shadow: 1px 2px 5px rgba(0,0,0,0.5);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .registerBox_left {
    display: none;
  }
  .registerBox_right {
    border-radius: 6px;
    background: white;

    padding: 1.7rem 1.5rem;
  }
  .registerBox_right .right_title {
    font-size: 1.2rem;
    font-weight: 700;
    padding-bottom: 0.75rem;
  }
  @media (min-width: 576px) {
    .registerBox_big {
      display: flex;
      width: 85%;
      height: 82%;
    }
    .registerBox_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      border-radius: 6px 0 0 6px;

      background: url('../../assets/map.jpg') no-repeat center/cover;
      padding: 1.5rem;

      color: #eee;
    }
    .logo_box {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logoImage {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: rgb(223, 157, 104);
      box-shadow:
      1px 2px 4px rgba(255, 255, 255, 0.507),
      0px 0px 4px rgba(0, 0, 0, 0.5),
      0px 1px 4px rgba(0, 0, 0, 0.3);

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logoImage img {
      width: 65%;
      height: auto;
    }
    /* .registerBox_left .title {
      font-size: 1.5rem;
      padding: 0;
      margin: 0 0 1rem;
    } */
    .registerBox_left .sub-title {
      font-size: 0.3rem;
      text-align: left;
      text-indent: 2rem;
      letter-spacing: 2px;
      line-height: 1.5rem;
      padding: 0 0 0 0.3rem;
      margin: 0;
    }
    .registerBox_right {
      border-radius: 0 6px 6px 0;
    }
    .registerBox_right .right_title {
      font-size: 1.3rem;
      padding-bottom: 1rem;
    }
  }
  @media (min-width: 768px) {
    .registerBox_big {
      width: 80%;
    }
    /* .registerBox_left .title {
      font-size: 3rem;
    } */
    .registerBox_left .sub-title {
      font-size: 0.8rem;
      padding: 0 0.5rem 0 0.8rem;
    }
    .registerBox_right .right_title {
      font-size: 1.4rem;
      padding-bottom: 1.2rem;
    }
  }
  @media (min-width: 992px) {
    .registerBox_big {
      width: 60%;
    }
    .registerBox_left .title {
      font-size: 4rem;
    }
    .registerBox_left .sub-title {
      font-size: 0.9rem;
      padding: 0 1rem 0 1.3rem;
    }
    .registerBox_right .right_title {
      font-size: 1.5rem;
      padding-bottom: 1.3rem;
    }
  }
</style>
