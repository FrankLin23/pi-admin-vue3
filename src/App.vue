<template>
  <div id="app">
    <Application>
      <router-view />
    </Application>
  </div>
</template>

<script setup lang="ts">
  import Application from "./components/Application/index.vue";
</script>

<style scoped>
  #app,
  html,
  body {
    padding: 0;
    margin: 0;
  }
</style>
