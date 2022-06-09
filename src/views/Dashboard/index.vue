<template>
  <div class="dashboard-container">
    <n-card embedded :bordered="true" title="工作台" class="hello-card">
      早安，Bobby，开始您一天的工作吧！
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
        title="快捷操作"
        class="quick-navigator"
      >
        <div class="quick-btn-area">
          <div class="card-area">
            <div class="card">
              <n-icon>
                <Videocam />
              </n-icon>
              <span>监控台</span>
            </div>
            <div class="card">
              <n-icon>
                <Information />
              </n-icon>
              <span>关于</span>
            </div>
          </div>
          <div class="card-area">
            <div class="card">
              <n-icon>
                <Home />
              </n-icon>
              <span>智能家居管理</span>
            </div>
            <div class="card">
              <n-icon>
                <Person />
              </n-icon>
              <span>用户管理</span>
            </div>
          </div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Videocam,
  InformationCircle as Information,
  Home,
  Person,
} from "@vicons/ionicons5";
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
  background-color: lavenderblush;
}

.quick-btn-area {
  display: flex;
  flex-direction: column;
}

.card-area {
  width: 100%;
  height: 50px;
  display: flex;
  margin: 5px;
}

.card {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: #fff;
}
</style>
