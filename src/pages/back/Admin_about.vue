<template v-if="user.isLogin && user.isAdmin">
  <div id="admin_about">
    <q-tab-panel name="about">
      <div class="text-h4 q-mb-md">關於我們</div>
      <p>關於我們 ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
    </q-tab-panel>
  </div>
</template>

<script>
export default {
  name: 'Admin_about'
}
</script>
