import {
  SET_MAINTARBAR_SHOW
} from "./types";

export default {
  // 设置mainTarBar显示和隐藏
  [SET_MAINTARBAR_SHOW](state, bol) {
    state.mainTarBarShow = bol;
  },
  // 修改token，并将token存入localStorage
  changeToken (state, user) {
    user.Authorization = state.Authorization;
    localStorage.setItem('Authorization', user.Authorization);
  }
};
