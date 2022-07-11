<template>
  <div class="about-container">
    <n-card title="关于" embedded>
      pi-admin-vue3 是一个基于 vue3、vite2和TypeScript
      的树莓派家庭监控安防系统的后台管理系统。
    </n-card>
    <n-divider />
    <n-card
      :bordered="false"
      title="开发环境依赖"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-descriptions bordered label-placement="left">
        <n-descriptions-item
          v-for="item in devSchema"
          :key="item.field"
          :label="item.field"
        >
          {{ item.label }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>

    <n-card
      :bordered="false"
      title="生产环境依赖"
      size="small"
      :segmented="{ content: true }"
    >
      <n-descriptions bordered label-placement="left">
        <n-descriptions-item
          v-for="item in schema"
          :key="item.field"
          :label="item.field"
        >
          {{ item.label }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </div>
</template>

<script setup lang="ts">
  import config from "../../../package.json";

  const pkg = config.dependencies;
  const devPkg = config.devDependencies;

  const schema: schemaItem[] = [];
  const devSchema: schemaItem[] = [];

  function isValidKey(
    key: string | number | symbol,
    object: object
  ): key is keyof typeof object {
    return key in object;
  }

  Object.keys(pkg).forEach((key) => {
    if (isValidKey(key, pkg)) {
      schema.push({ field: key, label: pkg[key] });
    }
  });

  Object.keys(devPkg).forEach((key) => {
    if (isValidKey(key, devPkg)) {
      devSchema.push({ field: key, label: devPkg[key] });
    }
  });
</script>

<style scoped></style>
