import Vue from 'vue';
import App from './App.vue';
//引入第三方组件模块
import vant from './js/vant';
vant();
// 引入样式
import mistercss from './css/mister.css';

Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
}).$mount('#app')