import * as types from "./types";

export default {
  // 选择菜单
  SELECT_MENU({ commit }, data) {
    commit(types.SELECT_MENU, data);
  },
  // 初始化菜单
  INIT_MENU({ commit }, data) {
    commit(types.INIT_MENU, data);
  },
  // 路由跳转关联菜单
  SELECT_MENU_OF_ROUTER({ commit }, data) {
    commit(types.SELECT_MENU_OF_ROUTER, data);
  }
};
