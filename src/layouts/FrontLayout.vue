<template>
  <q-layout view="hHh lpr fFf" style="min-height: 100%">
    <q-header elevated class="bg-white">
        <q-toolbar>
          <q-toolbar-title>
            <div class="row">
              <router-link to="/">
                <q-img src="../assets/logo.png" title="首頁" alt="logo" style="width:170px"></q-img>
              </router-link>
            </div>
          </q-toolbar-title>

          <div class="menu row q-align-end gt-md">
            <router-link to="news">
              <q-btn stretch flat label="最新消息" />
            </router-link>

            <q-btn-dropdown stretch flat label="關於我們">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="association">
                      <q-item-label>林仔邊協會</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="farm">
                      <q-item-label>光采農圃的由來</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <q-btn-dropdown stretch flat label="感動旅行">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="experience">
                      <q-item-label>活動體驗</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="education">
                      <q-item-label>環境教育</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="kitchen">
                      <q-item-label>低碳廚房</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <router-link to="souvenir">
              <q-btn stretch flat label="林邊好物" />
            </router-link>

            <q-btn-dropdown stretch flat label="在地資訊">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="eat">
                      <q-item-label>用餐小吃</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="wander">
                      <q-item-label>散步逗留</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="live">
                      <q-item-label>住宿林邊</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="traffic">
                      <q-item-label>交通指南</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link to="story">
                      <q-item-label>故事人文</q-item-label>
                    </router-link>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <router-link to="faq">
              <q-btn stretch flat label="FAQ" />
            </router-link>

            <router-link to="cart">
              <q-btn stretch flat label="購物車"></q-btn>
            </router-link>

            <router-link v-if="!user.isLogin" to="login">
              <q-btn stretch flat label="登入"></q-btn>
            </router-link>

            <q-btn v-if="user.isLogin" @click="logout" stretch flat label="登出"></q-btn>

            <router-link v-if="user.isLogin && user.isAdmin" to="admin">
              <q-btn stretch flat label="管理"></q-btn>
            </router-link>
          </div>
          <q-btn class="lt-lg menuBtn" flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-drawer
        overlay
        bordered
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: 100%; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-newspaper"/>
              </q-item-section>
              <q-item-section>
                <router-link to="news">
                  最新消息
                </router-link>
              </q-item-section>
            </q-item>

            <q-expansion-item
              group="about"
              label="關於我們"
              icon="fas fa-users"
              expand-separator
              :default-opened="false"
            >
              <router-link to="association">
                <q-card>
                  <q-card-section>
                      <q-item-label>林仔邊協會</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
              <router-link to="farm">
                <q-card>
                  <q-card-section>
                      <q-item-label>光采農圃的由來</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
            </q-expansion-item>

            <q-expansion-item
              group="activity"
              label="感動旅行"
              icon="fas fa-seedling"
              expand-separator
              :default-opened="false"
            >
              <router-link to="experience">
                <q-card>
                  <q-card-section>
                      <q-item-label>活動體驗</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
              <router-link to="education">
                <q-card>
                  <q-card-section>
                      <q-item-label>環境教育</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
              <router-link to="kitchen">
                <q-card>
                  <q-card-section>
                      <q-item-label>低碳廚房</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
            </q-expansion-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-gift" />
              </q-item-section>
              <q-item-section>
                <router-link to="souvenir">
                  林邊好物
                </router-link>
              </q-item-section>
            </q-item>

            <q-expansion-item
              group="info"
              label="在地資訊"
              icon="fas fa-map"
              expand-separator
              :default-opened="false"
            >
              <router-link to="eat">
                <q-card>
                  <q-card-section>
                      <q-item-label>用餐小吃</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
              <router-link to="wander">
                <q-card>
                  <q-card-section>
                      <q-item-label>散步逗留</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
              <router-link to="live">
                <q-card>
                  <q-card-section>
                      <q-item-label>住宿林邊</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
              <router-link to="traffic">
                <q-card>
                  <q-card-section>
                      <q-item-label>交通指南</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
              <router-link to="story">
                <q-card>
                  <q-card-section>
                      <q-item-label>故事人文</q-item-label>
                  </q-card-section>
                </q-card>
              </router-link>
            </q-expansion-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-question-circle" />
              </q-item-section>
              <q-item-section>
                <router-link to="faq">
                  FAQ
                </router-link>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-shopping-cart" />
              </q-item-section>
              <q-item-section>
                <router-link to="cart">
                  購物車
                </router-link>
              </q-item-section>
            </q-item>

            <q-item v-if="!user.isLogin" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-user" />
              </q-item-section>
              <q-item-section>
                <router-link to="login">
                  登入
                </router-link>
              </q-item-section>
            </q-item>

            <q-item v-if="user.isLogin" @click="logout" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-sign-out-alt"/>
              </q-item-section>
              <q-item-section>
                登出
              </q-item-section>
            </q-item>

            <q-item v-if="user.isLogin && user.isAdmin" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-user-cog"/>
              </q-item-section>
              <q-item-section>
                <router-link to="admin">
                  管理
                </router-link>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer class="bg-negative text-white">
      <q-toolbar>
        <q-toolbar-title>
          聯絡我們
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
  </template>

<script>
import { matMenu } from '@quasar/extras/material-icons'
export default {
  name: 'FrontLayout',
  data () {
    return {
      drawer: false
    }
  },
  created () {
    this.matMenu = matMenu
  },
  methods: {
  }
}
</script>

<style scoped>
  .q-btn .q-icon, .q-btn .q-spinner {
    font-size: 0.715rem;
  }
</style>
