import mutations from "./mutations";
import actions from "./actions";

const state = {
  first_menu: {}, // 当前选中的一级菜单
  second_menu: {}, // 当前选中的二级菜单
  menu_list: [] // app 菜单数据
};

export default {
  state,
  mutations,
  actions
};
