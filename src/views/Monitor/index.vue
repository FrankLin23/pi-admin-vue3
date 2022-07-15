<template>
  <div class="monitor-container">
    <n-image
      class="video"
      src="http://192.168.0.108:8080/?action=stream"
      alt="video"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .monitor-container {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .video {
    margin: 0 auto;
  }
</style>
