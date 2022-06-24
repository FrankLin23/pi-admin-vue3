<template>
  <div id="app">
    <ApplicationConfig>
      <router-view />
    </ApplicationConfig>
  </div>
</template>

<script setup lang="ts">
  import { ApplicationConfig } from "./components/Application";
</script>

<style scoped>
  #app,
  html,
  body {
    padding: 0;
    margin: 0;
  }
</style>
