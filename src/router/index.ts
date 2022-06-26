import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/404",
    component: () => import("@/views/Error/404.vue"),
    meta: {
      title: "404",
    },
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard/index.vue"),
        meta: {
          title: "控制台",
          icon: "dashboard",
        },
      },
      {
        path: "monitor",
        name: "Monitor",
        component: () => import("@/views/Monitor/index.vue"),
        meta: {
          title: "监控台",
        },
      },
      {
        path: "system",
        name: "System",
        component: () => import("@/views/System/index.vue"),
        meta: {
          title: "智能家居管理",
        },
      },
      {
        path: "user",
        name: "User",
        component: () => import("@/views/User/index.vue"),
        meta: {
          title: "个人中心",
        },
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About/index.vue"),
        meta: {
          title: "关于",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/Error/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
