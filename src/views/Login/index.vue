<template>
  <div class="login-container">
    <n-form
      class="login-form"
      ref="loginFormRef"
      :rules="loginRules"
      :model="loginForm"
    >
      <h3 class="title">Pi Admin System</h3>
      <n-form-item path="username" label="用户名">
        <n-input v-model:value="loginForm.username" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="密码">
        <n-input
          v-model:value="loginForm.password"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="captchaCode" label="验证码">
        <n-input
          v-model:value="loginForm.captchaCode"
          @keydown.enter.prevent
          style="width: 66%"
        />
        <div class="captcha-container">
          <img
            :src="captchaImageBase64"
            @click="refreshCaptcha"
            class="captcha-image"
            alt="captcha"
          />
        </div>
      </n-form-item>
      <n-form-item>
        <n-button type="primary" style="width: 100%" @click="handleLogin"
          >登录
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { FormInst, FormRules } from "naive-ui";
import { ref } from "vue";
import { getCaptchaImage } from "@/api/login";
import { useUserStore } from "@/store/modules/user";
import { useRoute, useRouter } from "vue-router";

const store = useUserStore();
const router = useRouter();
const route = useRoute();

const loginForm = ref<LoginInfo>({
  username: null,
  password: null,
  captchaCode: null,
  captchaId: null,
});
const loginFormRef = ref<FormInst | null>(null);
const loginRules: FormRules = {
  username: [
    {
      required: true,
      trigger: ["input", "blur"],
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
  ],
  captchaCode: [
    {
      required: true,
      message: "请输入验证码",
      trigger: ["input", "blur"],
    },
  ],
};

const captchaImageBase64 = ref<string>("");
const refreshCaptcha = async () => {
  const { data } = await getCaptchaImage({
    width: 100,
    height: 50,
  });
  captchaImageBase64.value = data.img;
  loginForm.value.captchaId = data.id;
};
const handleLogin = () => {
  loginFormRef.value?.validate((errors) => {
    if (!errors) {
      store
        .login(loginForm.value)
        .then(() => {
          router.push({ path: "/" });
        })
        .catch((error) => {
          refreshCaptcha();
          console.log(error);
        });
    } else {
      console.log(errors);
    }
  });
};

refreshCaptcha();
</script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("src/assets/bg-image.jpg");
  background-size: cover;
}

.login-form {
  width: 300px;
  background-color: #fff;
  padding: 0 20px;
}

.title {
  text-align: center;
}

.captcha-container {
  width: 33%;
  height: 50px;
}

.captcha-image {
  width: 100%;
  height: 100%;
}
</style>
