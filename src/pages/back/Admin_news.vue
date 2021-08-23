<template v-if="user.isLogin && user.isAdmin">
  <div id="admin_news">
    <q-tab-panel name="news">
      <div class="text-h4 q-mb-md">最新消息</div>
      <p>ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
    </q-tab-panel>
  </div>
</template>

<script>
export default {
  name: 'Admin_news'
}
</script>
