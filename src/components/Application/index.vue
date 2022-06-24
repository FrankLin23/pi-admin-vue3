<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <n-dialog-provider>
        <DialogContent />
        <MessageContent />
        <slot name="default"></slot
      ></n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { MessageContent } from "../MessageContent";
  import { DialogContent } from "../DialogContent";
  import { useSettingStore } from "@/store/modules/setting";
  import { storeToRefs } from "pinia";
  import { ref, watch } from "vue";
  import { darkTheme } from "naive-ui";
  import type { GlobalTheme } from "naive-ui";
  const settingStore = useSettingStore();
  const { darkThemeFlag } = storeToRefs(settingStore);
  const theme = ref<GlobalTheme | null>(null);

  settingStore.$subscribe((mutation, state) => {
    if (state.darkThemeFlag) {
      theme.value = darkTheme;
    } else {
      theme.value = null;
    }
  });
</script>
