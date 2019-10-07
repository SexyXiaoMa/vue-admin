const state = {
  avaliable_menu: null, // 可用路由
  complete_menu: null, // 全量路由
}

// actions
const actions = {
  set_avaliable_menu ({commit}, menu) {
    commit('set_avaliable_menu', menu)
  },
  set_complete_menu ({commit}, menu) {
    commit('set_complete_menu', menu)
  }
}

// mutations
const mutations = {
  set_avaliable_menu (state, menu) {
    state.avaliable_menu = menu
  },
  set_complete_menu (state, menu) {
    state.complete_menu = menu
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}