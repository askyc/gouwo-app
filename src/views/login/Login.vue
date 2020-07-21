<template>
  <div>
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input name="account" v-model="loginForm.account" type="text" required/>
          <label>账号</label>
        </div>
        <div class="user-box">
          <input name="password" v-model="loginForm.password" type="password" required/>
          <label>密码</label>
        </div>
        <a href="#" @click="login">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  import {login} from "api/login";

  export default {
    name: "Login",
    components: {},
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    beforeCreate() {
      // 登录界面隐藏mainTarBar
      this.$store.commit("setMainTarBarShow", false)
    },
    methods: {
      ...mapMutations(['changeToken']),
      login() {
        let _this = this;
        if (this.loginForm.account === '' || this.loginForm.password === '') {
          alert('账号或密码不能为空');
        } else {
          let model = {account: this.loginForm.account, password: this.loginForm.password};
          login(model).then(res => {
            _this.userToken = 'Bearer ' + res.data;
            // 将用户token保存到vuex中
            _this.changeToken({Authorization: this.userToken});
            _this.$router.push('/home');
          }).catch(error => {
            console.log(error);
            _this.$router.push('/404');
          });
        }
      },
    }
  }
</script>

<style scoped>
  @import "../../styles/login.css";
</style>
