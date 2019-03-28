import Vue from 'vue';
// 导入布局的组件
import { PullRefresh, Row, Col, Button, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Tab, Tabs } from 'vant';
Vue.use(Field).use(NavBar).use(Row).
use(Col).use(Button).use(Swipe).
use(SwipeItem).use(Lazyload).use(List)
    .use(Field).use(Tab).use(Tabs).use(PullRefresh);