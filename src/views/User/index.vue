<template>
  <div class="user-container">
    <n-card title="账户信息">
      <n-form ref="formRef" :model="model">
        <n-form-item label="用户名">
          <n-input
            v-model:value="model.username"
            @keydown.enter.prevent
            disabled
          />
        </n-form-item>
        <n-form-item label="昵称">
          <n-input v-model:value="model.nickname" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item label="邮箱">
          <n-input v-model:value="model.email" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item label="手机号">
          <n-input v-model:value="model.phone" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item label="个人简介">
          <n-input v-model:value="model.remark" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" style="width: 100%" @click="updateInfo"
            >更新信息</n-button
          >
        </n-form-item>
      </n-form>
    </n-card>
    <n-card title="账户安全" style="margin-top: 10px">
      <n-thing>
        <template #header>
          <div style="display: flex; align-items: center">
            <n-icon>
              <LockClosed />
            </n-icon>
            <div style="width: 10px"></div>
            <span>密码</span>
          </div>
        </template>
        <template #header-extra>
          <n-tag checkable @click="changePassword">修改密码</n-tag>
        </template>
      </n-thing>
    </n-card>
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from "@/store/modules/user";
  import { FormInst, useMessage } from "naive-ui";
  import { ref } from "vue";
  import { updateUserInfo } from "@/api/user";
  import { LockClosed } from "@vicons/ionicons5";

  const userStore = useUserStore();
  const message = useMessage();

  const currentUser: CurrentUser = userStore.$state.currentUser;
  const formRef = ref<FormInst | null>(null);
  const model = ref<UserInfoType>({
    username: currentUser.username,
    nickname: currentUser.nickname,
    email: currentUser.email,
    phone: currentUser.phone,
    remark: currentUser.remark,
  });
  const updateInfo = () => {
    updateUserInfo(model.value)
      .then(() => {
        message.success("更新成功");
        userStore.fetchCurrentUser().then();
      })
      .catch((error) => {
        message.error("更新失败");
        console.log(error);
      });
  };
  const changePassword = () => {};
</script>

<style scoped>
  .user-container {
    width: 50%;
    margin: auto;
    padding-top: 30px;
  }
</style>
