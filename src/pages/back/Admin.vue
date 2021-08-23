<template>
  <div id="admin" v-if="user.isLogin && user.isAdmin">
    <q-splitter
      v-model="splitterModel"
      style="height: calc(100vh - 50px);"
      before-class="bg-amber-1"
    >
      <template v-slot:before>
        <q-tabs
          v-model="sideTab"
          vertical
          class="text-red-7"
        >
          <q-tab name="index"><strong>首頁</strong></q-tab>
          <q-tab name="news"><strong>最新消息</strong></q-tab>
          <q-tab name="about"><strong>關於我們</strong></q-tab>
          <q-tab name="activity"><strong>感動旅行</strong></q-tab>
          <q-tab name="souvenir"><strong>林邊好物</strong></q-tab>
          <q-tab name="info"><strong>在地資訊</strong></q-tab>
          <q-tab name="faq"><strong>FAQ</strong></q-tab>
          <q-tab name="member"><strong>會員管理</strong></q-tab>
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="sideTab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="index">
            <AdminIndex/>
          </q-tab-panel>

          <q-tab-panel name="news">
            <AdminNews/>
          </q-tab-panel>

          <q-tab-panel name="about">
            <AdminAbout/>
          </q-tab-panel>

          <q-tab-panel name="activity">
            <AdminActivity/>
          </q-tab-panel>

          <q-tab-panel name="souvenir">
            <AdminSouvenir/>
          </q-tab-panel>

          <q-tab-panel name="info">
            <AdminInfo/>
          </q-tab-panel>

          <q-tab-panel name="faq">
            <AdminFaq/>
          </q-tab-panel>

          <q-tab-panel name="member">
            <AdminMember/>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import AdminIndex from './Admin_index.vue'
import AdminNews from './Admin_news.vue'
import AdminAbout from './Admin_about.vue'
import AdminActivity from './Admin_activity.vue'
import AdminSouvenir from './Admin_souvenir.vue'
import AdminInfo from './Admin_info.vue'
import AdminFaq from './Admin_faq.vue'
import AdminMember from './Admin_member.vue'
export default {
  name: 'Admin',
  components: {
    AdminIndex,
    AdminNews,
    AdminAbout,
    AdminActivity,
    AdminSouvenir,
    AdminInfo,
    AdminFaq,
    AdminMember
  },
  data () {
    return {
      sideTab: 'index',
      splitterModel: 20
    }
  },
  methods: {
  }
}
</script>

<style>
  .q-tab__label {
    font-weight: 700;
  }
  hr {
    width: 100%;
  }
  /* .sideTabs {
    position: fixed;
  } */
  .adminBox {
    width: 100%;
    height: 100%;
  }
</style>
