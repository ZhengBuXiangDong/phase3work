//引入vue
import Vue from 'vue'
//第三方组件
//下拉框
import {
    DropdownMenu,
    DropdownItem
} from 'vant';
// icon
import {
    Icon
} from 'vant';
//搜索框
import {
    Search
} from 'vant';
// 宫格图标
import {
    Grid,
    GridItem
} from 'vant';
// 分割线
import {
    Divider
} from 'vant';
// 底部标签导航
import {
    Tabbar,
    TabbarItem
} from 'vant';


export default () => {
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Icon);
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
}