<template>
  <tar-bar>
    <tar-bar-item path="/home" >
      <img slot="item-icon" src="~assets/images/tentative/shouye.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tentative/shouye.svg" alt="">
      <div slot="item-text">首页</div>
    </tar-bar-item>
    <tar-bar-item path="/chat">
      <img slot="item-icon" src="~assets/images/tentative/liaotian.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tentative/liaotian.svg" alt="">
      <div slot="item-text">与聊</div>
    </tar-bar-item>
    <tar-bar-item path="/">
      <img slot="item-icon" src="~assets/images/tentative/tianjia.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tentative/tianjia.svg" alt="">
      <div slot="item-text"></div>
    </tar-bar-item>
    <tar-bar-item path="/nearby">
      <img slot="item-icon" src="~assets/images/tentative/dingwei.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tentative/dingwei.svg" alt="">
      <div slot="item-text">附近</div>
    </tar-bar-item>
    <tar-bar-item path="/me">
      <img slot="item-icon" src="~assets/images/tentative/wode.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tentative/wode.svg" alt="">
      <div slot="item-text">我的</div>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
  import TarBar from 'components/common/tarbar/TarBar'
  import TarBarItem from 'components/common/tarbar/TarBarItem'

  export default {
    name: "MainTarBar",
    components: {
      TarBar,TarBarItem
    }
  }
</script>

<style scoped>

</style>
