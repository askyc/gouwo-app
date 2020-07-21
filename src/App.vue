<template>
  <div id="app">
    <keep-alive exclude="ArticlDetail">
      <router-view />
    </keep-alive>
    <!-- 控制MainTarBar示和隐藏 -->
    <main-tar-bar v-show="$store.getters.mainTarBarShow" />
  </div>
</template>

<script>
  import MainTarBar from 'components/contents/maintarbar/MainTarBar'
  export default {
    name: 'app',
    components: {
      MainTarBar
    }
  }
</script>

<style>
  /*css 引入方式*/
  @import "assets/css/base.css";
</style>
