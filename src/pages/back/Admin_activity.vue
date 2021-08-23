<template v-if="user.isLogin && user.isAdmin">
  <div id="admin_activity">
    <q-tab-panel name="activity">
      <div class="text-h4 q-mb-md">感動旅行</div>
      <p>感動旅行 ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
    </q-tab-panel>
  </div>
</template>

<script>
export default {
  name: 'Admin_activity'
}
</script>
