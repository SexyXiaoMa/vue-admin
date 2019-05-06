import * as types from "./types";

export default {
  USER_LOGIN({ commit }, user) {
    commit(types.USER_LOGIN, user);
  },
  USER_LOGOUT({ commit }) {
    commit(types.USER_LOGOUT);
  }
};
