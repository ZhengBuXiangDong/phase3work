// 引入vue
const Vue = require('./js/vue');

//引入样式
require('./style/tab.css');

// 创建实例
const vm = new Vue({
    el: '#tab',
    data: {
        // 显示第一个体育框
        index: 0
    },
    // tamplate: `nihao`
    template: `<div id="box">
                    <div id="menu">
                        <input type="button" value="体育" :class="{active: index===0}" @click="index=0">
                        <input type="button" value="娱乐" :class="{active: index===1}" @click="index=1">
                        <input type="button" value="新闻" :class="{active: index===2}" @click="index=2">
                        <input type="button" value="科技" :class="{active: index===3}" @click="index=3">
                    </div>
                    <div id="con">
                        <div v-show="index===0">体育</div>
                        <div v-show="index===1">娱乐</div>
                        <div v-show="index===2">新闻</div>
                        <div v-show="index===3">科技</div>
                    </div>
                </div>`,
});
