import { createStore } from "vuex";

export default createStore({
  state: {
    passcode: "Pass!",
    personalInfo: {
      linkedin: "https://www.linkedin.com/in/umanga-eng/",
      github: "https://github.com/umangcodes",
    },
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
