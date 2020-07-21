<template>
  <tar-bar>
    <tar-bar-item path="/home" >
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/images/tentative/shouye.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tentative/shouye.svg" alt="">
      <div slot="item-text">首页</div>
    </tar-bar-item>
    <tar-bar-item path="/category">
      <img slot="item-icon" src="~assets/images/tentative/liaotian.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tentative/liaotian.svg" alt="">
      <div slot="item-text">与聊</div>
    </tar-bar-item>
    <tar-bar-item path="/cart">
      <img slot="item-icon" src="~assets/images/tentative/tianjia.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tentative/tianjia.svg" alt="">
    </tar-bar-item>
    <tar-bar-item path="/cart">
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
