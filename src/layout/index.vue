<template>
  <div class="app-wrapper">
    <n-layout has-sider class="sider-bar">
      <n-layout-sider
        :inverted="true"
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapesedFlag"
        show-trigger
        @collapse="collapesedFlag = true"
        @expand="collapesedFlag = false"
      >
        <SideBar />
      </n-layout-sider>
      <n-layout>
        <n-layout-header>
          <PageHeader />
        </n-layout-header>
        <router-view />
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup lang="ts">
  import { PageHeader } from "./components/Header";
  import { useSettingStore } from "@/store/modules/setting";
  import { storeToRefs } from "pinia";
  import { SideBar } from "./components/Sidebar";

  const settingStore = useSettingStore();
  const { collapesedFlag } = storeToRefs(settingStore);
</script>

<style scoped>
  .app-wrapper {
    width: 100vw;
    height: 100vh;
  }

  .sider-bar {
    height: 100%;
  }
</style>
