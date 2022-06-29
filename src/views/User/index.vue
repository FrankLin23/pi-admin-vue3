<template>
	<div class="user-container">
		<n-card title="账户信息">
			<n-list bordered>
				<n-list-item v-for="(value, key) in currentUser">
					<n-thing :title="key" :description="value"></n-thing>
				</n-list-item>
			</n-list>
		</n-card>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
const userStore = useUserStore();
const currentUser = userStore.$state.currentUser;
</script>

<style scoped>
.user-container {
	width: 80%;
	margin: auto;
}
</style>
