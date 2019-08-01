<template>
  <div class="Home">
      <!-- 嵌套路由 -->
    <router-view/>
      <!-- 底部选项卡 -->
    <van-tabbar v-model="active">
        <van-tabbar-item 
        v-for="(n,index) in tabbarList" 
        :key="index" 
        @click="barLink(index)"
        :icon="n.iconfont">
        <span>{{n.text}}</span>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
//引入Tabbar
export default {
  data() {
    return {
      active: 0,
      tabbarList: [
        {
          iconfont: "home-o",
          text: "首页"
        },
        {
          iconfont: "browsing-history-o",
          text: "发现"
        },
        {
          iconfont: "description",
          text: "订单"
        },
        {
          iconfont: "contact",
          text: "我的"
        }
      ],
      navList: ["shouye", "faxian", "dingdan", "wode"]
    };
  },
  methods: {
    barLink(id) {
      this.$router.push({
        name: this.navList[id]
      });
    }
  }
};
</script>