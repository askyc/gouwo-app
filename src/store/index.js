import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const state = {
  // 默认mainTarBarShow显示
  mainTarBarShow: true,
  // 存储token
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {
  },
  modules: {
  }
})
