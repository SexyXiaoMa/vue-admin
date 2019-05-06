// 引入vue
import Vue from "vue";
import Vuex from "vuex";
// 注入vuex
Vue.use(Vuex);
// 引入需要模块
import modules from "./modules";
import * as getters from "./getters";

// 创建store 仓库暴露出去
export default new Vuex.Store({
  modules,
  state: {},
  mutations: {},
  actions: {},
  getters
});
