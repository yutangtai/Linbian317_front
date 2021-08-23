<template v-if="user.isLogin && user.isAdmin">
  <div id="admin_info">
    <q-tab-panel name="info">
      <div class="text-h4 q-mb-md">在地資訊</div>
      <p>在地資訊 ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
    </q-tab-panel>
  </div>
</template>

<script>
export default {
  name: 'Admin_info'
}
</script>
