//引入第三方组件模块
import vant from './js/vant';
vant();
import Vue from 'vue';
import App from './App.vue';

// 引入样式
import mistercss from './css/mister.css';

import router from './router'

Vue.config.productionTip = true;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');