import { getToken, removeToken, setToken } from "@/utils/auth";
import { defineStore } from "pinia";
import { login } from "@/api/login";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: getToken(),
      username: "Bobby",
      avatar: "",
    };
  },
  getters: {
    token: (state) => state.token,
    username: (state) => state.username,
    avatar: (state) => state.avatar,
  },
  actions: {
    SET_TOKEN(token: string) {
      this.$state.token = token;
    },
    async login(userInfo: LoginInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res) => {
            console.log(res);
            this.SET_TOKEN(res.data.token);
            setToken(res.data.token);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async logOut() {
      removeToken();
      this.SET_TOKEN("");
    },
  },
});
