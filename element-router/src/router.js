import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Index from './views/Index.vue'
import Dingdan from './views/Dingdan.vue'
import Faxian from './views/Faxian.vue'
import Wode from './views/Wode.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Home,
      children: [{
        path: '/',
        name: 'shouye',
        component: Index,
      }, {
        path: '/faxian',
        name: 'faxian',
        component: Faxian,
      }, {
        path: '/dingdan',
        name: 'dingdan',
        component: Dingdan,
      }, {
        path: '/wode',
        name: 'wode',
        component: Wode,
      }]
    },
    {
      path: '/about/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    }
  ]
})