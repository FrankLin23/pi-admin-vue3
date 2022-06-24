<template></template>

<script lang="ts" setup>
  import { useDialog } from "naive-ui";

  (window as any).$dialog = useDialog();
</script>
