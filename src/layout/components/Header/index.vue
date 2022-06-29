<template>
	<n-layout :content-style="layoutHeader">
		<div class="layout-header-trigger layout-header-left" @click="reloadPage">
			<n-icon size="18">
				<ReloadOutline />
			</n-icon>
			<n-breadcrumb v-if="state.crumbSetting" class="layout-bread">
				<template v-for="item in breadCrumbList" key="item.name">
					<n-breadcrumb-item>
						{{ item.meta.title }}
					</n-breadcrumb-item>
				</template>
			</n-breadcrumb>
		</div>
		<div class="layout-header-trigger layout-header-trigger-right">
			<n-switch v-model:value="darkThemeFlag" size="medium">
				<template #checked-icon>
					<n-icon :component="Moon" />
				</template>
				<template #unchecked-icon>
					<n-icon :component="Sunny" />
				</template>
			</n-switch>

			<n-dropdown trigger="hover" :options="avatarOptions">
				<n-button ghost :bordered="false">
					<n-avatar round>
						{{ state.username.toUpperCase().charAt(0) }}
						<template #icon>
							<UserOutlined />
						</template>
					</n-avatar>
				</n-button>
			</n-dropdown>
		</div>
	</n-layout>
</template>

<script setup lang="ts">
import { ReloadOutline, Sunny, Moon } from "@vicons/ionicons5";
import { UserOutlined } from "@vicons/antd";
import { computed, reactive, unref } from "vue";
import { useUserStore } from "@/store/modules/user";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useSettingStore } from "@/store/modules/setting";

const store = useUserStore();
const router = useRouter();
const route = useRoute();

const reloadPage = () => {
	router.push({ path: unref(route).fullPath });
};

const username = store.$state.currentUser.username;

const breadCrumbList = computed(() => {
	return route.matched;
});

const state = reactive({
	username: username || "",
	crumbSetting: true,
});

const avatarOptions = [
	{
		label: "个人设置",
		key: 1,
		props: {
			onClick: () => {
				router.push("/user");
			},
		},
	},
	{
		label: "退出登录",
		key: 2,
		props: {
			onClick: () => {
				store.logOut();
				router.push("/login");
			},
		},
	},
];
const settingStore = useSettingStore();
const { darkThemeFlag } = storeToRefs(settingStore);

const layoutHeader = {
	display: "flex",
	"justify-content": "space-between",
	"align-items": "center",
	padding: 0,
	width: "100%",
	height: "64px",
	"z-index": 11,
	"box-shadow": "0 1px 4px rgb(0 21 41 / 8%)",
};
</script>

<style scoped>
.layout-header-trigger {
	padding: 0 20px;
}

.layout-header-trigger-right {
	display: flex;
	align-items: center;
}

.layout-header-left {
	display: flex;
	justify-content: center;
	align-items: center;
}

.layout-bread {
	margin-left: 10px;
}

.avatar {
	display: flex;
	align-items: center;
	height: 64px;
}
</style>
