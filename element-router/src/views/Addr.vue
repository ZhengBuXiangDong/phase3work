<template>
    <div style="display:flex; flex-direction: column">
        <!-- 头部 -->
        <div class="addrhead">
            <van-icon name="arrow-left" class="arrow" @click="goBack"/>
            选择收货地址
        </div>
        <!-- 搜索框 -->
        <div class="searcha" >
           <span @click="showBar">选择...</span>
           <van-search placeholder="请输入地址" v-model="value" />
        </div>
        <!-- 背景颜色 -->
        <div class="backg">
            <!-- 地址索引栏 -->
            <van-index-bar v-show="isshow">
                <div v-for="(item,index) in addr" :key="index" >
                     <van-index-anchor :index="item.idx" />
                     <div v-for="(n,i) in item.cities" :key="i" >
                        <van-cell  :title="n.city_name"/>
                        </div>
                </div>
            </van-index-bar>
        </div>
    </div>
</template>
<script>
// 引入axios
import axios from "axios";
export default {
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: "",
      isshow: false,
      addr: []
    };
  },
  //   async create() {
  //     //获取店铺列表数据
  //     let addr = await axios.get(
  //       "https://www.easy-mock.com/mock/5d403943bf069f5f10cf34d5/shopList"
  //     );
  //     console.log(addr);
  //   },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showBar() {
      this.isshow = !this.isshow;
    }
  },
  async created() {
    //   获取宫格数据
    let addr = await axios.get(
      "https://www.easy-mock.com/mock/5d403943bf069f5f10cf34d5/addr"
    );
    // console.log(addr.data.data);
    this.addr = addr.data.data.city_nav;
    // // this.onLoad();
  }
};
</script>

<style scoped>
.backg {
  min-height: 500px;
  flex: 1;
  background: #f4f4f4;
}
.addrhead {
  background-color: #0094ff;
  color: #fff;
  font-size: 18px;
  height: 44px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
}
.arrow {
  position: absolute;
  left: 10px;
  top: 16px;
}
.searcha {
  display: flex;
  height: 61px;
  background-color: #fff;
  align-items: center;
  padding-left: 20px;
  justify-content: space-between;
}
.searcha span {
  color: #333;
  font-size: 12px;
}

.searcha span::after {
  content: "";
  position: relative;
  top: 9px;
  right: -9px;
  border: 3px solid;
  border-color: transparent;
  border-top: 3px solid #000;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.searcha .van-cell {
  width: 260px;
  height: 36px;
}
.searcha .van-search__content {
  background: #f2f2f2;
}
</style>


