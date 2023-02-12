<template>
  <div class="login-banner">
    <h1 class="title">熊子CMS</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch="true" v-model="activeName">
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <el-icon class="user-icon"><User /></el-icon>
            <span>账号登录</span>
          </template>
          <div>账号登录</div>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <el-icon class="user-icon"><Iphone /></el-icon>
            <span>手机登录</span>
          </template>
          <div>手机登录</div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="control-accounts">
      <el-checkbox v-model="keepPassword" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="my-btn">立即登录</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const keepPassword = ref<boolean>();
const activeName = ref<string>('account');
</script>
<style lang="less" scoped>
.login-banner {
  width: 330px;
}
.control-accounts {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.my-btn {
  width: 100%;
}
.user-icon {
  margin-right: 5px;
}
</style>
