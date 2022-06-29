<template>
	<div class="app-wrapper">
		<n-layout has-sider class="sider-bar">
			<n-layout-sider
				:inverted="true"
				bordered
				collapse-mode="width"
				:collapsed-width="64"
				:width="240"
				:collapsed="collapsed"
				show-trigger
				@collapse="collapsed = true"
				@expand="collapsed = false"
			>
				<h3 class="title" v-if="!collapsed">Pi Admin System</h3>
				<h3 class="title" v-else>Pi</h3>
				<n-menu
					v-model:value="activeKey"
					:collapsed="collapsed"
					:collapsed-width="64"
					:collapsed-icon-size="22"
					:options="menuOptions"
					:inverted="true"
				></n-menu>
			</n-layout-sider>
			<n-layout>
				<n-layout-header>
					<PageHeader />
				</n-layout-header>
				<router-view />
			</n-layout>
		</n-layout>
	</div>
</template>

<script setup lang="ts">
import { PageHeader } from "./components/Header";
import { Component, h, ref } from "vue";
import { MenuOption, NIcon } from "naive-ui";
import {
	Desktop,
	Videocam,
	InformationCircle as Information,
	Home,
	Person,
} from "@vicons/ionicons5";
import { RouterLink } from "vue-router";

function renderIcon(icon: Component) {
	return () => h(NIcon, null, { default: () => h(icon) });
}

const collapsed = ref<boolean>(true);
const activeKey = ref<string | null>(null);
const menuOptions: MenuOption[] = [
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						path: "/dashboard",
					},
				},
				{
					default: () => "工作台",
				}
			),
		key: "dashboard",
		icon: renderIcon(Desktop),
	},
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						path: "/monitor",
					},
				},
				{
					default: () => "监控台",
				}
			),
		key: "monitor",
		icon: renderIcon(Videocam),
	},
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						path: "/system",
					},
				},
				{
					default: () => "智能家居管理",
				}
			),
		key: "system",
		icon: renderIcon(Home),
	},
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						path: "/user",
					},
				},
				{
					default: () => "个人中心",
				}
			),
		key: "user",
		icon: renderIcon(Person),
	},
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						path: "/about",
					},
				},
				{
					default: () => "关于",
				}
			),
		key: "about",
		icon: renderIcon(Information),
	},
];
</script>

<style scoped>
.app-wrapper {
	width: 100vw;
	height: 100vh;
}

.sider-bar {
	height: 100%;
}

.title {
	text-align: center;
}
</style>
