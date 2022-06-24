import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
  state: () => {
    return {
      darkThemeFlag: false,
    };
  },
  getters: {},
  actions: {},
});
