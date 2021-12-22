import { createStore } from "vuex";

export default createStore({
  state: {
    passcode: "pass!",
  },
  mutations: {
    SET_PASSCODE(state, payload) {
      state.passcode = payload;
    },
  },
  actions: {
    addPasscode({ commit }, payload) {
      console.log(payload);
      commit("SET_PASSCODE", payload);
    },
  },
  modules: {},
});
