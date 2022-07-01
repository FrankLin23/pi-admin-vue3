import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
  state: () => {
    return {
      darkThemeFlag: false,
      collapesedFlag: false,
    };
  },
  getters: {},
  actions: {},
});
