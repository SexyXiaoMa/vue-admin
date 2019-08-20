import * as types from "./types";

export default {
  /**
   * @method
   * @description 初始化菜单数据
   * @param state {object} state state object;
   * @param data {object} data  data object;
   */
  [types.setMenu](state, data) {
    state.menu = data;
  }
};
