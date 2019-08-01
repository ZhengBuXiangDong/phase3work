<template>
    <div id="elehead">
        <!-- 定位 -->
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1"/>
        </van-dropdown-menu>
        <!-- 搜索框 -->
        <van-search background="#0094ff" :placeholder="text" v-model="textvalue"/>
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
      false: "false",
      textvalue: "",
      value1: 0,
      option1: [
        {
          text: "广州市人民政府",
          value: 0,
          icon: "location"
        }
      ],
      text: "搜索饿了么商家、商品名称",
      iconList: []
    };
  },
  async created() {
    //   获取宫格数据
    let iconList = await axios.get(
      "https://www.easy-mock.com/mock/5d403943bf069f5f10cf34d5/items"
    );
    this.iconList = iconList.data;
  }
};
</script>

<style>
#elehead .van-dropdown-menu {
  background-color: #0094ff;
  color: #fff;
  font-size: 24px;
  font-weight: bolder;
  border: none;
}

.van-grid-item__icon {
  font-size: 40px;
}

.van-hairline--top-bottom::after {
  border: none;
}

.van-dropdown-menu__item {
  padding-left: 20px;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}
</style>


