import Vue from 'vue';
import VueRouter from 'vue-router';

import ShoppingMall from "@/components/pages/shoppingMall"
import SwiperDefault from "@/components/swiper/swiperDefault"
Vue.use(VueRouter);




export default new VueRouter({
  routes: [
    {
      path: '/',
      name:'ShoppingMall',
      component:ShoppingMall
    },{
        path:"/testing",
        name:"SwiperDefault",
        component:SwiperDefault
    }
  ]
})
