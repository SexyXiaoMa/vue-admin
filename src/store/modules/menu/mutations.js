import * as types from "./types";

/**
 * @method
 * @description 置空数组状态
 * @param ary {Array} 数组
 */
function cleanStatus(ary) {
  for (let i = 0, len = ary.length; i < len; i++) {
    ary[i].checked = false;
    ary[i].child.map(item => {
      item.checked = false;
    });
  }
}
let menu_list = [];

function childMenuFormat(menu, arr) {
  for (let i = 0; i < menu.length; i++) {
    let item = menu[i];
    let child = item.child;
    if (child.length > 0) {
      item.child = [childMenuFormat(child)];
      let item_menu = {
        icon: item.icon,
        key: item.key,
        name: item.name,
        type: item.type,
        path: item.path,
        child: item.child
      };
      if (item_menu.type !== -1) {
        arr.push(item_menu);
      }
    } else {
      let item_menu = {
        icon: item.icon,
        key: item.key,
        name: item.name,
        type: item.type,
        path: item.path,
        child: []
      };
      if (item_menu.type !== -1) {
        arr.push(item_menu);
      }
    }
  }
  return arr;
}

function menuFormat(menu) {
  for (let i = 0; i < menu.length; i++) {
    let item = menu[i];
    let child = item.child;
    if (child.length > 0) {
      item.child = childMenuFormat(child, []);
      if (item.type !== -1) {
        menu_list.push(item);
      }
    } else {
      let item_menu = {
        icon: item.icon,
        key: item.key,
        name: item.name,
        type: item.type,
        path: item.path,
        child: []
      };
      if (item_menu.type !== -1) {
        menu_list.push(item_menu);
      }
    }
  }
}

export default {
  /**
   * @method
   * @description 选中菜单(1，2级)
   * @param state {object} state state object;
   * @param data {object} data  data object;
   */
  [types.SELECT_MENU](state, data) {
    // 深拷贝
    let tmp = JSON.parse(JSON.stringify(state.menu_list));
    // 判断（一级，二级）菜单
    if (typeof data.index === "number") {
      // 一级菜单处理
      cleanStatus(tmp);
      // 判断 选中/展开 两种列表状态
      switch (data.type) {
        case 0: // 选中
          state.second_menu = {
            text: ""
          };
          tmp[data.index].checked = true;
          break;
        case 1: // 展开
          cleanStatus(tmp);
          // if (first) {
          //   first = false;
          //   tmp[0].child[0].checked = true;
          //   state.smenu = tmp[0].child[0];
          // }
          tmp[data.index].isopen = !tmp[data.index].isopen;
          tmp[data.index].child[0].checked = true;
          break;
      }
      state.first_menu = tmp[data.index];
    } else {
      // 二级菜单处理
      cleanStatus(tmp);
      tmp[data.index[0]].child[data.index[1]].checked = true;
      state.first_menu = tmp[data.index[0]];
      state.second_menu = tmp[data.index[0]].child[data.index[1]];
    }
    setTimeout(() => {
      state.menu_list = tmp;
    }, 0);
  },
  /**
   * @method
   * @description 初始化菜单数据
   * @param state {object} state state object;
   * @param data {object} data  data object;
   */
  [types.INIT_MENU](state, data) {
    menuFormat(data);
    state.menu_list = menu_list;
  },
  /**
   * @method
   * @description 通过路由选中菜单
   * @param data {string} 路由名称;
   */
  [types.SELECT_MENU_OF_ROUTER](state, data) {
    let name = data;
    for (let i = 0, len = state.menu_list.length; i < len; i++) {
      if (state.menu_list[i].path === name) {
        if (state.menu_list[i].child.length > 0) {
          state.menu_list[i].isopen = true;
          this.dispatch("SELECT_MENU", {
            index: [i, 0],
            type: 1
          });
        } else {
          this.dispatch("SELECT_MENU", {
            index: i,
            type: state.menu_list[i].child.length === 0 ? 0 : 1
          });
        }
      } else {
        for (let j = 0, len = state.menu_list[i].child.length; j < len; j++) {
          if (
            state.menu_list[i].child.length > 0 &&
            state.menu_list[i].child[j].path === name
          ) {
            state.menu_list[i].isopen = true;
            this.dispatch("SELECT_MENU", {
              index: [i, j],
              type: 1
            });
          }
        }
      }
    }
  }
};
