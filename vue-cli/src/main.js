import Vue from 'vue'
import App from './App.vue'
import indexCss from './assets/index.css'
import resetCss from './assets/reset.css'

// 设置为false以阻止vue在启动时生成生产提醒
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')