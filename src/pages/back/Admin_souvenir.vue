<template v-if="user.isLogin && user.isAdmin">
  <div id="admin_souvenir" class="column">
    <q-tab-panel name="souvenir" class="col">
      <div class="text-h4 q-mb-md">林邊好物</div>
      <div class="adminBox" style="max-width: 100%">
        <q-card>
          <q-tabs
            v-model="souvenirTab"
            dense
            inline-label
            outside-arrows
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
            style="max-width: 100%"
          >
            <q-tab
              v-for="(product, index) in products"
              :key="index"
              :name="product.tabNames"
              :label="product.tabLabels"
            />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="souvenirTab" animated>
            <q-tab-panel
              v-for="(product, index) in products"
              :key="index"
              :name="product.tabNames"
            >
              <!-- 編輯和新增按鈕 -->
              <div class="row justify-between">
                <QBtn v-if="product.left.length === 0" color="deep-orange-9" icon="add" label="新增左側欄位" @click="openLeftDialog = true"/>
                <QBtn v-else color="deep-orange-9" icon="fas fa-pen" label="編輯左側欄位" @click="editLeftDialog(product.left[0])"/>
                <QBtn v-if="product.left.length > 0" color="teal" icon="add" label="新增右側品項" @click="openRightDialog = true"/>
                <QBtn v-else color="teal-3" icon="add" label="新增右側品項" disable/>
              </div>

              <!-- 編輯左側欄位 -->
              <div class="row q-mt-md">
                <q-dialog v-model="openLeftDialog">
                  <q-card class="my-card" style="width: 100%">
                    <q-card-actions class="row justify-between">
                      <div v-if="product.left.length > 0" class="text-h6 q-pl-sm"><strong>【編輯左側欄位】</strong></div>
                      <div v-else class="text-h6 q-pl-sm"><strong>【新增左側欄位】</strong></div>
                      <q-btn @click="onLeftReset" v-close-popup flat color="deep-orange-2" round icon="close" />
                    </q-card-actions>
                    <q-card-section>
                      <QForm
                        @submit="onLeftSubmit"
                        @reset="onLeftReset"
                        class="q-gutter-md column"
                      >
                        <!-- 商品種類 * -->
                        <div class="col q-pl-sm"><strong>索引：</strong>{{ index }}</div>
                        <div class="col bg-deep-orange-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商品標籤：</strong>{{ product.tabNames }}</div>
                        </div>

                        <!-- 商品大標題 * -->
                        <div class="col bg-deep-orange-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商品大標題 *</strong></div>
                          <q-input
                            label="商品大標題 *"
                            v-model="form_left.title"
                            filled
                            dense
                            clearable
                            clear-icon="close"
                            color="light-blue-10"
                            bg-color="white"
                            lazy-rules
                            :rules="[
                              val => val && val.length > 0 || '此為必填欄位',
                            ]"
                          />
                        </div>

                        <!-- 商品簡介 * -->
                        <div class="col bg-deep-orange-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商品簡介 *</strong></div>
                          <q-input
                            label="概述、引言、介紹 (段落 1) *"
                            v-model="form_left.intro_para1"
                            type="textarea"
                            clearable
                            clear-icon="close"
                            filled
                            dense
                            color="light-blue-10"
                            bg-color="white"
                            lazy-rules
                            :rules="[
                              val => val && val.length > 0 || '此為必填欄位'
                            ]"
                          />
                          <q-input
                            label="概述、引言、介紹 (段落 2)"
                            v-model="form_left.intro_para2"
                            type="textarea"
                            clearable
                            clear-icon="close"
                            filled
                            dense
                            color="light-blue-10"
                            bg-color="white"
                          />
                          <q-input
                            label="概述、引言、介紹 (段落 3)"
                            v-model="form_left.intro_para3"
                            type="textarea"
                            clearable
                            clear-icon="close"
                            filled
                            dense
                            color="light-blue-10"
                            bg-color="white"
                          />
                        </div>

                        <!-- 保存方式 -->
                        <div class="col bg-deep-orange-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>保存方式</strong></div>
                          <q-input
                            label="保存方式"
                            v-model="form_left.keep"
                            type="textarea"
                            clearable
                            clear-icon="close"
                            filled
                            dense
                            color="light-blue-10"
                            bg-color="white"
                          >
                          </q-input>
                        </div>

                        <!-- 標題底圖 -->
                        <div class="col column bg-deep-orange-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>上傳圖片</strong></div>
                          <div class="col">
                            <input type="file" id="file" ref="file" accept="image/*" @change="compressFile">
                          </div>
                        </div>

                        <q-separator />

                        <!-- 送出、取消按鈕 -->
                        <div class="col q-mr-md" align="right">
                          <q-btn label="送出" type="submit" v-close-popup color="deep-orange-9"/>
                          <q-btn label="取消" type="reset" v-close-popup outline color="deep-orange-9" class="q-ml-sm"/>
                        </div>
                      </QForm>
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </div>
              <!-- 新增右側欄位 -->
              <div class="row q-mt-md">
                <q-dialog v-model="openRightDialog">
                  <q-card class="my-card" style="width: 100%">
                    <q-card-actions class="row justify-between">
                      <div v-if="form_right._id.length > 0" class="text-h6 q-pl-sm"><strong>【編輯右側品項】</strong></div>
                      <div v-else class="text-h6 q-pl-sm"><strong>【新增右側品項】</strong></div>
                      <q-btn @click="onRightReset" v-close-popup flat color="teal-2" round icon="close" />
                    </q-card-actions>
                    <q-card-section>
                      <QForm
                        @submit="onRightSubmit"
                        @reset="onRightReset"
                        class="q-gutter-md column"
                      >
                        <!-- 商品種類 * -->
                        <div class="col q-pl-sm"><strong>索引：</strong>{{ index }}</div>
                        <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商品標籤：</strong>{{ product.tabNames }}</div>
                        </div>

                        <!-- 商品名稱 * -->
                        <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商品名稱或農民名字 *</strong></div>
                          <q-input
                            label="商品名稱或農民名字 *"
                            v-model="form_right.name"
                            filled
                            dense
                            clearable
                            clear-icon="close"
                            color="light-blue-10"
                            bg-color="white"
                            lazy-rules
                            :rules="[
                              val => val && val.length > 0 || '此為必填欄位',
                            ]"
                          />
                        </div>

                        <!-- 商品價格  -->
                        <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商品價格</strong></div>
                          <q-input
                            label="商品價格"
                            v-model.number="form_right.price"
                            type="number"
                            filled
                            dense
                            color="light-blue-10"
                            bg-color="white"
                          />
                        </div>

                        <!-- 商品內容 -->
                        <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商品內容</strong></div>
                          <q-input
                            label="商品內容"
                            v-model="form_right.content"
                            type="textarea"
                            filled
                            dense
                            clearable
                            clear-icon="close"
                            color="light-blue-10"
                            bg-color="white"
                          />
                        </div>

                        <!-- 商家或農民資訊 -->
                        <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商家或農民資訊</strong></div>
                          <q-input
                            label="商家名稱或農民名字"
                            v-model="form_right.contact_name"
                            filled
                            dense
                            clearable
                            clear-icon="close"
                            color="light-blue-10"
                            bg-color="white"
                          />
                          <q-input
                            label="連絡電話"
                            v-model="form_right.contact_phone"
                            type="tel"
                            filled
                            dense
                            clearable
                            clear-icon="close"
                            color="light-blue-10"
                            bg-color="white"
                          />
                          <q-input
                            label="地址"
                            v-model="form_right.contact_address"
                            filled
                            dense
                            clearable
                            clear-icon="close"
                            color="light-blue-10"
                            bg-color="white"
                          />
                        </div>

                        <!-- 商家或農民背景故事連結 -->
                        <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商家或農民背景故事連結</strong></div>
                          <q-input
                            label="網頁網址"
                            v-model="form_right.link"
                            type="url"
                            filled
                            dense
                            clearable
                            clear-icon="close"
                            color="light-blue-10"
                            bg-color="white"
                          />
                        </div>

                        <!-- 商家或農民影片連結 -->
                        <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>商家或農民影片</strong></div>
                          <q-input
                            label="影片網址"
                            v-model="form_right.video"
                            type="url"
                            filled
                            dense
                            clearable
                            clear-icon="close"
                            color="light-blue-10"
                            bg-color="white"
                          />
                        </div>

                        <!-- 商品或農民圖片 -->
                        <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>上傳圖片 *</strong></div>
                          <div class="col">
                            <input type="file" id="file" ref="file" accept="image/*" @change="compressFile">
                          </div>
                        </div>

                        <!-- 上架與否 -->
                        <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                          <div class="q-mb-sm"><strong>上下架</strong></div>
                          <q-toggle
                            v-model="form_right.toggleValue"
                            color="green"
                            label="上架"
                          />
                        </div>

                        <q-separator />

                        <!-- 送出、取消按鈕 -->
                        <div class="col q-mr-md" align="right">
                          <q-btn label="送出" type="submit" v-close-popup color="secondary"/>
                          <q-btn label="取消" type="reset" v-close-popup outline color="secondary" class="q-ml-sm"/>
                        </div>
                      </QForm>
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </div>

              <!-- 資料輸出結果 -->
              <div v-if="product.left.length > 0" class="row">
                <!-- 左側輸出結果 -->
                <div class="col-5 q-pr-sm">
                  <q-card class="my-card">
                    <img v-if="product.left[0]" :src="product.left[0].image" style="height: 100%; width: auto;">

                    <q-card-section>
                      <div class="text-h6">{{ product.left[0].title }}</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      {{ product.left[0].intro_para1 }}
                    </q-card-section>
                  </q-card>
                </div>

                <!-- 右側輸出結果 -->
                <div v-if="product.left[0].right.length > 0" class="col-7 q-ml-auto q-pl-sm">
                  <q-list>
                    <q-item v-for="(item, index) in product.left[0].right" :key="index" clickable v-ripple>
                      <q-item-section thumbnail class="q-pl-sm">
                        <img v-if="item.image" :src="item.image" style="height: 50px; width: auto;">
                      </q-item-section>
                      <q-item-section>{{ item.name }}</q-item-section>
                      <q-item-section class="items-end">{{ item.sell ? '上架' : '下架' }}</q-item-section>
                      <q-item-section>
                        <div class="row justify-end itemBtns">
                          <q-btn flat square text-color="grey-13" icon="fas fa-pen" @click="editRightDialog(item)"></q-btn>
                        </div>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </q-tab-panel>

    <!-- 新增標籤 -->
    <div class="row addTabBtn">
      <!-- 右下角的新增按鈕 -->
      <QBtn
        color="primary"
        icon="add"
        round
        @click="addTabForm = true"
        class="col"
      >
        <q-tooltip content-class="bg-accent">增加商品種類</q-tooltip>
      </QBtn>

      <!-- 彈出表格 -->
      <q-dialog v-model="addTabForm">
        <q-card class="my-card" style="width: 100%">
          <q-card-actions class="row justify-between">
            <div class="text-h6 q-pl-sm"><strong>【新增標籤欄位】</strong></div>
            <q-btn v-close-popup flat color="blue-2" round icon="close" />
          </q-card-actions>
          <q-card-section>
            <QForm
              @submit="addTabSubmit"
              class="q-gutter-md row column"
            >
              <div class="col bg-blue-1 q-pa-sm q-mr-md rounded-borders">
                <div class="q-mb-sm"><strong>標籤中文名稱 *</strong></div>
                <q-input
                  label="標籤中文名稱 (ex. '蘋果') *"
                  v-model="addTabs.label"
                  filled
                  dense
                  clearable
                  clear-icon="close"
                  color="light-blue-10"
                  bg-color="white"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || '此為必填欄位',
                  ]"
                />
              </div>
              <div class="col bg-blue-1 q-pa-sm q-mr-md rounded-borders">
                <div class="q-mb-sm"><strong>標籤英文名稱 *</strong></div>
                <q-input
                  label="標籤英文名稱 (小寫，ex. 'apple') *"
                  v-model="addTabs.name"
                  filled
                  dense
                  clearable
                  clear-icon="close"
                  color="light-blue-10"
                  bg-color="white"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || '此為必填欄位',
                  ]"
                />
              </div>
              <div class="col q-mr-md" align="right">
                <q-btn label="送出" v-close-popup type="submit" color="primary"/>
                <q-btn label="取消" v-close-popup outline color="primary" class="q-ml-sm"/>
              </div>
            </QForm>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { QBtn, QForm } from 'quasar'
import Compressor from 'compressorjs'

export default {
  name: 'Admin_souvenir',
  components: {
    QBtn,
    QForm
  },
  data () {
    return {
      addTabForm: false,
      addTabs: {
        label: '',
        name: ''
      },
      tabs: [],
      // 群組名稱
      groupNames: [],
      souvenirTab: '',
      openLeftDialog: false,
      openRightDialog: false,
      imageData: null,
      products: [],

      form_left: {
        // 判斷正在執行的動作為編輯或新增(有_id:編輯，無_id:新增)
        _id: '',
        // 商品大標題
        title: '',
        // 商品概述、引言、介紹
        intro_para1: '',
        intro_para2: '',
        intro_para3: '',
        // 商品保存方式
        keep: ''
      },
      form_right: {
        // 判斷正在執行的動作為編輯或新增(有_id:編輯，無_id:新增)
        _id: '',
        // 商品名稱
        name: '',
        // 商品價格
        price: 0,
        // 商品內容
        content: '',
        // 商家資訊
        contact_name: '',
        contact_phone: '',
        contact_address: '',
        // 超連結
        link: '',
        // 影片
        video: '',
        // 上下架
        toggleValue: true
      }
    }
  },
  methods: {
    // 壓縮圖片
    compressFile (e) {
      const file = e.target.files[0]
      if (!file) {
        return
      }
      const _this = this
      return new Compressor(file, {
        quality: 0.6,

        success (result) {
          console.log('Compress successed', result)
          _this.imageData = result
        },
        error (err) {
          console.log(err.message)
        }
      })
    },

    // 新增 tab 欄位
    async addTabSubmit () {
      try {
        if (this.tabs.length > 0) {
          if (this.tabs.includes(this.addTabs.name)) {
            // 彈出新增失敗的回饋
            this.$q.notify({
              color: 'negative',
              textColor: 'white',
              message: '新增失敗！此商品標籤已存在',
              icon: 'fas fa-check-circle',
              position: 'top',
              timeout: 2500
            })
            return
          } else {
            // 將輸入的值丟進 tabs 陣列
            this.tabs.push({
              tabLabel: this.addTabs.label,
              tabName: this.addTabs.name
            })

            // 更新 form_left 和 form_right 的值
            this.groupNames.push(this.addTabs.name)

            // 將 tabs 值存入資料庫
            this.addGroupToData(this.tabs)

            // 彈出新增成功的回饋
            this.$q.notify({
              color: 'positive',
              textColor: 'white',
              message: '新增成功！請重新整理頁面',
              icon: 'fas fa-check-circle',
              position: 'top',
              timeout: 2500
            })
          }
        } else {
          // 將輸入的值丟進 tabs 陣列
          this.tabs.push({
            tabLabel: this.addTabs.label,
            tabName: this.addTabs.name
          })

          // 更新 form_left 和 form_right 的值
          this.groupNames.push(this.addTabs.name)

          // 將 tabs 值存入資料庫
          this.addGroupToData(this.tabs)

          // 彈出新增成功的回饋
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            message: '新增成功！請重新整理頁面',
            icon: 'fas fa-check-circle',
            position: 'top',
            timeout: 2500
          })
        }
      } catch (error) {
        console.log(error)
      }
      // 清空欄位
      this.addTabs.label = ''
      this.addTabs.name = ''
    },

    // 將 tabs 值存入資料庫
    async addGroupToData (tag) {
      const result = tag[tag.length - 1]
      await this.$axios.post('/products', result, {
        headers: {
          Authorization: `Bearer ${this.$store.state.users.jwt.token}`
        }
      })
    },

    // tab 起始顯示的標籤
    async firstShowTab (value) {
      if (value.length !== 0) {
        this.souvenirTab = this.products[0].tabNames
      } else {
        this.souvenirTab = ''
      }
      return this.souvenirTab
    },

    // 左側表單送出
    async onLeftSubmit () {
      try {
        const formData = new FormData()
        formData.append('groupNames', this.souvenirTab)
        if (this.imageData !== null) {
          formData.append('image', this.imageData, this.imageData.name)
        }
        for (const key in this.form_left) {
          formData.append(key, this.form_left[key])
        }
        if (this.form_left._id.length === 0) {
          await this.$axios.post('/products', formData, {
            headers: {
              Authorization: `Bearer ${this.$store.state.users.jwt.token}`
            }
          })
        } else {
          await this.$axios.patch('/products/' + this.form_left._id, formData, {
            headers: {
              Authorization: `Bearer ${this.$store.state.users.jwt.token}`
            }
          })
        }
        this.openLeftDialog = false
        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          message: '新增/修改成功，請重新整理頁面',
          icon: 'fas fa-check-circle',
          position: 'top',
          timeout: 2500
        })
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
      this.form_left.title = ''
      this.form_left.intro_para1 = ''
      this.form_left.intro_para2 = ''
      this.form_left.intro_para3 = ''
      this.form_left.keep = ''
      this.imageData = null
    },

    // 左側表單清空
    onLeftReset () {
      this.form_left.title = ''
      this.form_left.intro_para1 = ''
      this.form_left.intro_para2 = ''
      this.form_left.intro_para3 = ''
      this.form_left.keep = ''
      this.imageData = null
    },

    // 編輯左側欄位
    editLeftDialog (item) {
      this.openLeftDialog = true
      this.form_left = {
        _id: item._id,
        title: item.title,
        intro_para1: item.intro_para1,
        intro_para2: item.intro_para2,
        intro_para3: item.intro_para3,
        keep: item.keep,
        image: null
      }
    },

    // 右側表單送出
    async onRightSubmit () {
      try {
        const formData = new FormData()
        formData.append('groupNames', this.souvenirTab)
        if (this.imageData !== null) {
          formData.append('image', this.imageData, this.imageData.name)
        }
        for (const key in this.form_right) {
          formData.append(key, this.form_right[key])
        }
        if (this.form_right._id.length === 0) {
          await this.$axios.post('/products', formData, {
            headers: {
              Authorization: `Bearer ${this.$store.state.users.jwt.token}`
            }
          })
        } else {
          await this.$axios.patch('/products/' + this.form_right._id, formData, {
            headers: {
              Authorization: `Bearer ${this.$store.state.users.jwt.token}`
            }
          })
        }
        this.openRightDialog = false
        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          message: '新增成功，請重新整理頁面',
          icon: 'fas fa-check-circle',
          position: 'top',
          timeout: 2500
        })
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
      this.form_right.name = ''
      this.form_right.price = ''
      this.form_right.content = ''
      this.form_right.contact_name = ''
      this.form_right.contact_phone = ''
      this.form_right.contact_address = ''
      this.form_right.link = ''
      this.form_right.video = ''
      this.form_right.image = null
      this.form_right.toggleValue = true
    },

    // 右側表單清空
    onRightReset () {
      this.form_right.name = ''
      this.form_right.price = ''
      this.form_right.content = ''
      this.form_right.contact_name = ''
      this.form_right.contact_phone = ''
      this.form_right.contact_address = ''
      this.form_right.link = ''
      this.form_right.video = ''
      this.form_right.image = null
      this.form_right.toggleValue = true
    },

    // 編輯右側商品
    editRightDialog (item) {
      console.log(item)
      this.openRightDialog = true
      this.form_right = {
        _id: item._id,
        name: item.name,
        price: item.price,
        content: item.content,
        contact_name: item.contact_name,
        contact_phone: item.contact_phone,
        contact_address: item.contact_address,
        link: item.link,
        video: item.video,
        toggleValue: item.sell,
        image: null
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/products')
      this.products = data.result.map(product => {
        if (product.left.length > 0 && product.left[0].image) {
          product.left[0].image = `${process.env.VUE_APP_API}/files/${product.left[0].image}`
          if (product.left[0].right.length > 0) {
            for (let i = 0; i < product.left[0].right.length; i++) {
              if (product.left[0].right[i].image) {
                product.left[0].right[i].image = `${process.env.VUE_APP_API}/files/${product.left[0].right[i].image}`
              }
            }
          }
        }
        return product
      })
    } catch (error) {
      console.log(error)
      this.$q.notify({
        color: 'negative',
        textColor: 'white',
        message: '取得商品失敗！',
        icon: 'fas fa-exclamation-circle',
        position: 'top',
        timeout: 2500
      })
    }
  }
}
</script>

<style scoped>
  .addTabBtn {
    width: 45px;
    height: 45px;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0 30px 30px;
  }
</style>>
