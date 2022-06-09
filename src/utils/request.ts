import axios from "axios";
import { useUserStore } from "@/store/modules/user";
import { getToken } from "@/utils/auth";

const service = axios.create({
  baseURL: "http://127.0.0.1:7001",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    const store = useUserStore();
    if (store.token) {
      // @ts-ignore
      config.headers["Authorization"] = getToken();
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      (window as any).$message.error(res.message || "Error", {
        duration: 5 * 1000,
      });
      if (res.code === 10001 || res.code === 10002) {
        (window as any).$dialog.warning({
          title: res.message,
          content: "Login Error",
          positiveText: "Login Again",
          negativeText: "Cancel",
          onPositiveClick: () => {},
          onNegativeClick: () => {},
        });
      }
      const error = new Error(res.message || "UNKNOWN ERROR");
      return Promise.reject(error);
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error);
    (window as any).$message.error(error.message, {
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
