<template>
  <div class="dashboard-container">
    <n-card embedded :bordered="true" title="工作台" class="hello-card">
      早安，{{ userStore.$state.username }}，开始您一天的工作吧！
    </n-card>
    <div class="content-wrapper">
      <n-card
        embedded
        :bordered="false"
        title="消息"
        class="message-box"
      ></n-card>
      <n-card
        embedded
        :bordered="false"
        title="操作日志"
        class="quick-navigator"
      >
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from "@/store/modules/user";

  const userStore = useUserStore();
</script>

<style scoped>
  .dashboard-container {
    width: 100%;
  }
  .hello-card {
    margin: 20px 20px 20px 20px;
    max-width: 97%;
    background-color: #42b983;
  }
  .content-wrapper {
    display: flex;
    margin-left: 20px;
    max-width: 97%;
  }
  .message-box {
    width: 48%;
    background-color: cornflowerblue;
  }
  .quick-navigator {
    width: 48%;
    margin-left: 4%;
    background-color: cornflowerblue;
  }
</style>
