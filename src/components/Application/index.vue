<template>
  <n-config-provider>
    <n-message-provider>
      <MessageContent />
      <slot name="default"></slot>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
  import MessageContent from "../MessageContent.vue";
</script>
