import {
	getCurrentUser,
	getToken,
	removeToken,
	setCurrentUser,
	setToken,
} from "@/utils/auth";
import { defineStore } from "pinia";
import { login } from "@/api/login";
import { getCurrentUserInfo } from "@/api/user";

export const useUserStore = defineStore("user", {
	state: () => {
		return {
			token: getToken(),
			username: "Bobby",
			currentUser: getCurrentUser(),
		};
	},
	getters: {
		token: (state) => state.token,
		username: (state) => state.username,
		currentUser: (state) => state.currentUser,
	},
	actions: {
		SET_TOKEN(token: string) {
			this.$state.token = token;
		},
		async login(userInfo: LoginInfo) {
			return new Promise((resolve, reject) => {
				login(userInfo)
					.then((res) => {
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
		async fetchCurrentUser() {
			return new Promise((resolve, reject) => {
				getCurrentUserInfo()
					.then((res) => {
						console.log(res.data);
						this.$state.currentUser = res.data;
						setCurrentUser(res.data);
						resolve(res);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
	},
});
