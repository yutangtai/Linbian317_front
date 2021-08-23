<template v-if="user.isLogin && user.isAdmin">
  <div id="admin_index">
    <q-tab-panel name="index" class="column">
      <div class="col text-h4 q-mb-md">首頁</div>
      <div class="col column" style="width: 100%">
        <!-- 輪播圖按鈕 -->
        <div class="col q-mb-sm">
          <QBtn color="teal" icon="add" label="新增資料" @click="openCarouselDialog = true"/>
        </div>
        <!-- 輪播圖 table -->
        <div class="col" style="width: 100%">
          <q-table
            title="【輪播圖】"
            :data="indexDatas"
            :columns="columns"
            :dense="$q.screen.lt.md"
            row-key="name"
            :pagination.sync="pagination"
            title-class= "text-teal-10"
            table-class="table"
            :table-style="{ width: '100%' }"
          >
            <template v-slot:body="props" >
              <q-tr :props="props">
                <q-td key="image" :props="props">
                  <img :src="props.row.image" style="width: auto; height: 50px;">
                </q-td>
                <q-td key="link" :props="props">
                  {{ props.row.link }}
                </q-td>
                <q-td key="time" :props="props">
                  {{ props.row.time[props.row.time.length - 1] }}
                </q-td>
                <q-td key="show" :props="props">
                  <q-badge
                    style="height: 25px"
                    :color="getColor(props.row.show)"
                  >
                  {{ props.row.show ? '是' : '否' }}
                  </q-badge>
                </q-td>
                <q-td key="edit" :props="props">
                  <q-btn flat square text-color="grey-13" icon="fas fa-pen" @click="editData(props.rowIndex)"></q-btn>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
        <!-- 輪播圖表單 -->
        <div class="col">
          <q-dialog v-model="openCarouselDialog">
            <q-card style="width: 100%">
              <q-card-actions class="row q-mx-md q-mt-md justify-between">
                <div v-if="form._id.length > 0" class="col text-h6"><strong>編輯資料</strong></div>
                <div v-else class="col text-h6"><strong>新增資料</strong></div>
                <q-btn @click="indexReset" v-close-popup flat color="teal-2" round icon="close" />
              </q-card-actions>
              <q-card-section>
                <q-form
                  @submit="indexSubmit"
                  @reset="indexReset"
                  class="q-gutter-md column"
                >
                  <!-- 輪播圖 -->
                  <div class="col q-pa-md q-mb-md q-mx-md column bg-teal-1">
                    <div class="col q-pb-md text-h6">【輪播圖】</div>
                    <div class="col q-pb-md">
                      <input type="file" id="file" ref="file" accept="image/*" @change="compressFile">
                      <p class="q-pt-sm text-red-14" style="font-size: 0.5rem">圖片大小不得大於 3 MB</p>
                    </div>
                    <q-input
                      v-model="form.link"
                      outlined
                      bg-color="white"
                      label="相關連結"
                      type="link"
                    />
                    <!-- 圖片顯示與否 -->
                    <div class="col bg-teal-1 q-pa-sm q-mr-md rounded-borders">
                      <div class="q-mb-sm"><strong>顯示與否</strong></div>
                      <q-toggle
                        v-model="form.show"
                        color="green"
                        label="顯示"
                      />
                    </div>
                  </div>
                  <q-separator />
                  <!-- 按鈕 -->
                  <div class="col row justify-center">
                    <q-btn label="送出" type="submit" v-close-popup color="secondary" class="q-mr-md"/>
                    <q-btn label="取消" type="reset" v-close-popup outline color="secondary"/>
                  </div>`
              </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
        <!-- 數據按鈕 -->
        <div class="col q-mt-xl">
          <QBtn v-if="indexNumDatas.length === 0" color="deep-orange-9" icon="add" label="新增資料" @click="openNumDialog = true"/>
          <QBtn v-else color="deep-orange-9" icon="fas fa-pen" label="編輯資料" @click="editNumData(indexNumDatas.length - 1)"/>
        </div>
        <!-- 數據清單 -->
        <div class="col q-mt-sm">
          <q-card>
            <q-card-section class="column">
              <div class="col q-mb-md">
                <div class="col text-h6 text-deep-orange-10">【數據】</div>
              </div>
              <div class="col row justify-between text-center">
                <div class="col column">
                  <div class="col"><strong>環境教育</strong></div>
                  <div v-if="indexNumDatas.length > 0" class="col">{{ indexNumDatas[indexNumDatas.length - 1].num_edu }}</div>
                </div>
                <div class="col column">
                  <div class="col"><strong>深度體驗</strong></div>
                  <div v-if="indexNumDatas.length > 0" class="col">{{ indexNumDatas[indexNumDatas.length - 1].num_exp }}</div>
                </div>
                <div class="col column">
                  <div class="col"><strong>淨灘人數</strong></div>
                  <div v-if="indexNumDatas.length > 0" class="col">{{ indexNumDatas[indexNumDatas.length - 1].num_people }}</div>
                </div>
                <div class="col column">
                  <div class="col"><strong>農廢棄再生</strong></div>
                  <div v-if="indexNumDatas.length > 0" class="col">{{ indexNumDatas[indexNumDatas.length - 1].num_trash }}</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <!-- 數據表單 -->
        <div class="col">
          <q-dialog v-model="openNumDialog">
            <q-card style="width: 100%">
              <q-card-actions class="row q-mx-md q-mt-md justify-between">
                <div v-if="form._id.length > 0" class="col text-h6"><strong>編輯資料</strong></div>
                <div v-else class="col text-h6"><strong>新增資料</strong></div>
                <q-btn @click="indexReset" v-close-popup flat color="teal-2" round icon="close" />
              </q-card-actions>
              <q-card-section>
                <q-form
                  @submit="indexNumSubmit"
                  @reset="indexNumReset"
                  class="q-gutter-md column"
                >
                  <!-- 數據 -->
                  <div class="col q-pa-md q-mb-md q-mx-md column bg-teal-1">
                    <div class="col q-pb-md text-h6">【數據】</div>
                    <div class="col row">
                      <!-- 環境教育 -->
                      <div class="col q-mr-sm column">
                        <div class="col-4"><strong>環境教育：</strong></div>
                        <div class="col-8">
                          <q-input
                            v-model.number="form_num.num_edu"
                            type="number"
                            outlined
                            bg-color="white"
                            style="max-width: 150px"
                          />
                        </div>
                      </div>
                      <!-- 深度體驗 -->
                      <div class="col q-mr-sm column">
                        <div class="col-4"><strong>深度體驗：</strong></div>
                        <div class="col-8">
                          <q-input
                            v-model.number="form_num.num_exp"
                            type="number"
                            outlined
                            bg-color="white"
                            style="max-width: 150px"
                          />
                        </div>
                      </div>
                      <!-- 淨灘人數 -->
                      <div class="col q-mr-sm column">
                        <div class="col-4"><strong>淨灘人數：</strong></div>
                        <div class="col-8">
                          <q-input
                            v-model.number="form_num.num_people"
                            type="number"
                            outlined
                            bg-color="white"
                            style="max-width: 150px"
                          />
                        </div>
                      </div>
                      <!-- 農廢棄再生 -->
                      <div class="col column">
                        <div class="col-4"><strong>農廢棄再生：</strong></div>
                        <div class="col-6">
                          <q-input
                            v-model.number="form_num.num_trash"
                            type="number"
                            outlined
                            bg-color="white"
                            style="max-width: 150px"
                          />
                        </div>
                      </div>
                      </div>
                  </div>
                  <q-separator />
                  <!-- 按鈕 -->
                  <div class="col row justify-center">
                    <q-btn label="送出" type="submit" v-close-popup color="secondary" class="q-mr-md"/>
                    <q-btn label="取消" type="reset" v-close-popup outline color="secondary"/>
                  </div>`
              </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </q-tab-panel>
  </div>
</template>

<script>
import Compressor from 'compressorjs'
export default {
  name: 'Admin_index',
  data () {
    return {
      openCarouselDialog: false,
      openNumDialog: false,
      indexDatas: [],
      indexNumDatas: [],
      columns: [
        {
          label: '圖片',
          name: 'image',
          align: 'center',
          sortable: true,
          required: true
        },
        {
          label: '連結',
          name: 'link',
          align: 'center',
          sortable: true,
          required: true
        },
        {
          label: '建立時間',
          name: 'time',
          align: 'center',
          sortable: true,
          required: true
        },
        {
          label: '顯示與否',
          name: 'show',
          align: 'center',
          sortable: true,
          required: true
        },
        {
          label: '編輯',
          name: 'edit',
          align: 'center',
          required: true
        }
      ],
      pagination: {
        sortBy: 'time',
        descending: true,
        page: 1,
        rowsPerPage: 5
      },
      imageData: null,
      time: [],
      form: {
        link: '',
        show: true,
        _id: ''
      },
      form_num: {
        num_edu: 0,
        num_exp: 0,
        num_people: 0,
        num_trash: 0,
        _id: ''
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

    // 標籤顏色
    getColor (val) {
      if (val) {
        return 'green'
      } else {
        return 'grey'
      }
    },

    // 取得時間
    getTime () {
      const today = new Date()
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      this.time.push(date + ' ' + time)
      return this.time
    },

    // 編輯輪播圖欄位
    editData (index) {
      this.form = {
        _id: this.indexDatas[index]._id,
        image: null,
        time: this.indexDatas[index].time,
        link: this.indexDatas[index].link,
        show: this.indexDatas[index].show
      }
      this.openCarouselDialog = true
    },

    // 編輯數據欄位
    editNumData (index) {
      this.openNumDialog = true
      const fillIn = this.indexNumDatas[index]
      this.form_num = {
        _id: fillIn._id,
        num_edu: fillIn.num_edu,
        num_exp: fillIn.num_exp,
        num_people: fillIn.num_people,
        num_trash: fillIn.num_trash
      }
    },

    // 重置輪播圖欄位
    indexReset () {
      this.imageData = null
      this.form.link = ''
      this.form.show = true
      this.form._id = ''
    },

    // 送出輪播圖資料
    async indexSubmit () {
      try {
        const formData = new FormData()
        if (this.imageData !== null) {
          formData.append('image', this.imageData, this.imageData.name)
        }
        for (const key in this.form) {
          formData.append(key, this.form[key])
        }
        this.getTime()
        formData.append('time', this.time[this.time.length - 1])
        if (this.form._id.length === 0) {
          await this.$axios.post('/indexData', formData, {
            headers: {
              Authorization: `Bearer ${this.$store.state.users.jwt.token}`
            }
          })
        } else {
          await this.$axios.patch('/indexData/' + this.form._id, formData, {
            headers: {
              Authorization: `Bearer ${this.$store.state.users.jwt.token}`
            }
          })
          // console.log(this.indexDatas[this.form.index])
          // this.indexDatas[this.form.index] = {
          //   _id: this.form._id,
          //   image: `${process.env.VUE_APP_API}/files/${data.result.image}`,
          //   time: this.time,
          //   link: this.form.link,
          //   show: this.form.show
          // }
        }
        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          message: '新增/修改成功，請重新整理頁面！',
          icon: 'fas fa-check-circle',
          position: 'top',
          timeout: 2500
        })
      } catch (error) {
        console.log(error)
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          message: '修改或新增失敗',
          icon: 'fas fa-exclamation-circle',
          position: 'top',
          timeout: 2500
        })
      }
      this.imageData = null
      this.time = []
      this.form.link = ''
      this.form.show = true
    },

    // 送出數據資料
    async indexNumSubmit () {
      try {
        const numData = {
          _id: this.form_num._id,
          num_edu: this.form_num.num_edu,
          num_exp: this.form_num.num_exp,
          num_people: this.form_num.num_people,
          num_trash: this.form_num.num_trash
        }
        if (this.form_num._id.length === 0) {
          await this.$axios.post('/indexNumData', numData, {
            headers: {
              Authorization: `Bearer ${this.$store.state.users.jwt.token}`
            }
          })
        } else {
          await this.$axios.patch('/indexNumData/' + this.form_num._id, numData, {
            headers: {
              Authorization: `Bearer ${this.$store.state.users.jwt.token}`
            }
          })
          this.indexNumDatas[this.form_num.index] = {
            _id: this.form_num._id,
            num_edu: this.form_num.num_edu,
            num_exp: this.form_num.num_exp,
            num_people: this.form_num.num_people,
            num_trash: this.form_num.num_trash
          }
        }
        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          message: '新增/修改成功，請重新整理頁面！',
          icon: 'fas fa-check-circle',
          position: 'top',
          timeout: 2500
        })
      } catch (error) {
        console.log(error)
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          message: '修改或新增失敗',
          icon: 'fas fa-exclamation-circle',
          position: 'top',
          timeout: 2500
        })
      }
      this.form_num.num_edu = 0
      this.form_num.num_exp = 0
      this.form_num.num_people = 0
      this.form_num.num_trash = 0
    },

    // 清空數據欄位
    indexNumReset () {
      this.form_num.num_edu = 0
      this.form_num.num_exp = 0
      this.form_num.num_people = 0
      this.form_num.num_trash = 0
    }
  },
  async mounted () {
    try {
      const data = await this.$axios.get('/indexData')
      const data2 = await this.$axios.get('/indexNumData')

      this.indexDatas = data.data.result.map(indexData => {
        if (indexData.image) {
          indexData.image = `${process.env.VUE_APP_API}/files/${indexData.image}`
        }
        return indexData
      })

      this.indexNumDatas = data2.data.result.map(indexNumData => {
        return indexNumData
      })
    } catch (error) {
      console.error(error)
      this.$q.notify({
        color: 'negative',
        textColor: 'white',
        message: '載入資料失敗！',
        icon: 'fas fa-exclamation-circle',
        position: 'top',
        timeout: 2500
      })
    }
  }
}
</script>

<style scoped>
  .table {
    width: calc(100% - 200px);
  }
</style>
