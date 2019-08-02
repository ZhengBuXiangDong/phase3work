//引入vue
import Vue from 'vue'
//第三方组件
//下拉框
import {
    //下拉框
    DropdownMenu,
    DropdownItem,
    // icon
    Icon,
    //搜索框
    Search,
    // 宫格图标
    Grid,
    GridItem,
    // 分割线
    Divider,
    // 底部标签导航
    Tabbar,
    TabbarItem,
    //列表
    List,
    // 单元格
    Cell,
    CellGroup,
    // 商品卡片
    Card,
    //地址索引栏
    IndexBar,
    IndexAnchor
} from 'vant';


export default () => {
    Vue.use(IndexBar).use(IndexAnchor);
    Vue.use(Card);
    Vue.use(Cell).use(CellGroup);
    Vue.use(List);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Icon);
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
}