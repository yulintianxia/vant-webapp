import Vue from 'vue';
import VueRouter from 'vue-router';

import ShoppingMall from "@/components/pages/shoppingMall"
Vue.use(VueRouter);




export default new VueRouter({
  routes: [
    {
      path: '/',
      name:'ShoppingMall',
      component:ShoppingMall
    }
  ]
})
