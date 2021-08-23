<template v-if="user.isLogin && user.isAdmin">
  <div id="admin_member">
    <q-tab-panel name="member">
      <div class="text-h4 q-mb-md">會員管理</div>
      <div class="adminBox">
        <q-card>
          <q-tabs
            v-model="memberTab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="memberInfo" label="會員資料" />
            <q-tab name="orderList" label="訂單資料" />
            <q-tab name="preOrderList" label="預購資料" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="memberTab" animated>
            <q-tab-panel name="memberInfo">
              <div class="text-h6">memberInfo</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="orderList">
              <div class="text-h6">orderList</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="preOrderList">
              <div class="text-h6">preOrderList</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </q-tab-panel>
  </div>
</template>

<script>
export default {
  name: 'Admin_member',
  data () {
    return {
      memberTab: 'memberInfo'
    }
  }
}
</script>
