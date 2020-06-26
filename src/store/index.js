import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeToken (state, user) {
      user.Authorization = state.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  },
  actions: {
  },
  modules: {
  }
})


