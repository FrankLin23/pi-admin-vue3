<template>
  <div>
    <h3 class="title" v-if="!collapesedFlag">Pi Admin System</h3>
    <h3 class="title" v-else>Pi</h3>
    <n-menu
      v-model:value="activeKey"
      :collapsed="collapesedFlag"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :inverted="true"
    ></n-menu>
  </div>
</template>

<script setup lang="ts">
  import { useSettingStore } from "@/store/modules/setting";
  import { MenuOption, NIcon } from "naive-ui";
  import { storeToRefs } from "pinia";
  import { ref, h, Component } from "vue";
  import { RouterLink } from "vue-router";
  import {
    Desktop,
    Videocam,
    InformationCircle as Information,
    Home,
    Person,
  } from "@vicons/ionicons5";

  const settingStore = useSettingStore();
  const { collapesedFlag } = storeToRefs(settingStore);

  function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
  }

  const activeKey = ref<string | null>(null);
  const menuOptions: MenuOption[] = [
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: "/dashboard",
            },
          },
          {
            default: () => "工作台",
          }
        ),
      key: "dashboard",
      icon: renderIcon(Desktop),
    },
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: "/monitor",
            },
          },
          {
            default: () => "监控台",
          }
        ),
      key: "monitor",
      icon: renderIcon(Videocam),
    },
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: "/system",
            },
          },
          {
            default: () => "智能家居管理",
          }
        ),
      key: "system",
      icon: renderIcon(Home),
    },
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: "/user",
            },
          },
          {
            default: () => "个人中心",
          }
        ),
      key: "user",
      icon: renderIcon(Person),
    },
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: "/about",
            },
          },
          {
            default: () => "关于",
          }
        ),
      key: "about",
      icon: renderIcon(Information),
    },
  ];
</script>

<style>
  .title {
    text-align: center;
  }
</style>
