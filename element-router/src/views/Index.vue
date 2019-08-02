<template>
    <div id="elehead">
        <!-- 定位 -->
        <div class="ok">
          <van-icon name="location" />
          <span @click="goAddr" style="margin-left:5px">广州市人民政府</span>
        </div>
        <!-- <van-dropdown-menu class="ok">
            <van-dropdown-item v-model="value1" :options="option1" @click="goAddr"/>
        </van-dropdown-menu> -->
        <!-- 搜索框 -->
        <van-search background="#0094ff" :placeholder="text" v-model="textvalue" :class="{isscoll}"/>
        <!-- 宫格图标 -->
        <van-grid :column-num="5" :border="false">
            <van-grid-item
            v-for="(k,index) in iconList"
            :key="index"
            :icon="k.imgurl"
            :text="k.name"
            :to="`/about/:${index}`"
            />
        </van-grid>
        
        <!-- banner -->
        <Banner />
        <!-- 分割线 -->
        <van-divider :style="{ color: '#000', borderColor: '#999', padding: '0 120px' }">
            推荐商家
        </van-divider>
        <!-- 筛选条件选项卡 -->
        <van-dropdown-menu style="{'backgroundColor': '#fff'}" :class="{isscoll2}">
            <van-dropdown-item v-model="value2" :options="option2"/>
            <van-dropdown-item title="距离最近" disabled=""></van-dropdown-item>
            <van-dropdown-item title="品质联盟" disabled=""></van-dropdown-item>
            <van-dropdown-item title="筛选" disabled=""></van-dropdown-item>
        </van-dropdown-menu>
        <!-- 店铺列表 -->
        <van-list
          style="margin-bottom: 40px"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-card
          v-for="(item,index) in list"
          :key="index"
          :price="item.shipping_time"
          :desc="item.address"  
          :title="item.shopName"
          :thumb="item.picUrl"
        />
        </van-list>
       

    </div>
</template>


<script>
// 引入axios
import axios from "axios";
//引入banner
import Banner from "../components/Banner.vue";
//引入Tabbar
export default {
  components: {
    Banner
  },
  data() {
    return {
      isscoll: false,
      isscoll2: false,
      false: "false",
      textvalue: "",
      value1: 0,
      value2: 0,
      option1: [
        {
          text: "广州市人民政府",
          value: 0,
          icon: "location"
        }
      ],
      option2: [
        {
          text: "综合排序",
          value: 0
        },
        {
          text: "好评优先",
          value: 1
        },
        {
          text: "销量最高",
          value: 2
        },
        {
          text: "起送价最低",
          value: 3
        }
      ],
      text: "搜索饿了么商家、商品名称",
      iconList: [],
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    async onLoad() {
      // 获取商店信息
      //获取店铺列表数据
      let shopList = await axios.get(
        "https://www.easy-mock.com/mock/5d403943bf069f5f10cf34d5/shopList"
      );
      this.list = [...this.list, ...shopList.data.data.shopList];
      // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
      if (this.list.length >= 10) {
        this.finished = true;
      }
    },
    goAddr() {
      this.$router.push({ name: "addr" });
    }
  },
  async created() {
    //   获取宫格数据
    let iconList = await axios.get(
      "https://www.easy-mock.com/mock/5d403943bf069f5f10cf34d5/items"
    );
    this.iconList = iconList.data;
    this.onLoad();
  },
  mounted() {
    window.onscroll = () => {
      if (scrollY >= 388) {
        this.isscoll = true;
        this.isscoll2 = true;
      } else {
        this.isscoll = false;
        this.isscoll2 = false;
      }
    };
  },
  destroyed() {
    window.onscroll = null;
  }
};
</script>

<style >
#elehead .ok {
  background-color: #0094ff;
  color: #fff;
  font-size: 18px;
  height: 50px;
  font-weight: bolder;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.isscoll,
.isscoll2 {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
}
.isscoll2 {
  top: 54px;
}
.van-grid-item__icon {
  font-size: 40px;
}

.van-hairline--top-bottom::after {
  border: none;
  color: #666;
}

.van-dropdown-menu__item {
  padding-left: 20px;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}
.van-dropdown-menu__title::after {
  border: none;
}
.van-ellipsis {
  overflow: visible;
}
</style>


