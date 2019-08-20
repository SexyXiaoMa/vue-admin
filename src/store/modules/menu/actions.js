import * as types from "./types";

export default {
  // 设置菜单
  setMenu({ commit }, data) {
    commit(types.setMenu, data);
  }
};
