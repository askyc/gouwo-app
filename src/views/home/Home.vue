<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">首页</div>
    </nav-bar>

    <scroller class="home-scroller" ref="scroller" :probe-type="3" @scroll="getPostion">


    </scroller>

    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroller from "components/common/scroller/Scroller";
    import BackTop from "components/contents/backTop/BackTop";

    import {getHomeMultiData, getGoodsData} from "api/home";

    export default {
        name: "Home",
        components:{
            NavBar,
            Scroller,
            BackTop
        },
        data() {
          return {
            isShowBackTop: false
          }
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            }
        },
        created() {

        },
        methods:{
            pTabClick(index) {
                switch (index) {
                  case 0:
                      this.currentType = 'pop';
                      break;
                  case 1:
                      this.currentType = 'new';
                      break;
                  case 2:
                      this.currentType = 'sell';
                      break
              }
            },
            backTopClick() {
                // 通过$refs拿到组件中的对象
                this.$refs.scroller.scrollTo(0, 0, 500)
            },
            getPostion(postion) {
                this.isShowBackTop = -postion.y > 300
            }
        }
    }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }

  .home-tab-control{
    /*两个要混合使用*/
    position: sticky;
    top: 43px;/*顶部navbar的高度*/
    z-index: 9;
  }

  .home-scroller{
    /*height:300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }



</style>
