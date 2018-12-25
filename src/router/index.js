import Vue from 'vue';
import VueRouter from 'vue-router';

import ShoppingMall from '@/components/pages/shoppingMall'
import SwiperDefault from '@/components/swiper/swiperDefault'
import SwipePagination from '@/components/swiper/swiperPagination'
import SwiperDirect from '@/components/swiper/swiperDirect'
Vue.use(VueRouter);




export default new VueRouter({
    routes: [{
        path: '/',
        name: 'ShoppingMall',
        component: ShoppingMall
    }, {
        path: "/swiperDefault",
        name: "SwiperDefault",
        component: SwiperDefault
    }, {
        path: '/swipePagination',
        name: 'swipePagination',
        component: SwipePagination

    }, {
        path: '/swiperDirect',
        name: 'swiperDirect',
        component: SwiperDirect
    }]
})