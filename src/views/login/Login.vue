<template>
  <div class="login">
    <LoginBanner/>
  </div>
</template>
<script setup lang="ts">
import LoginBanner from './c-cpns/LoginBanner.vue'
</script>
<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
