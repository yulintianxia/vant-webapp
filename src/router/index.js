import Vue from 'vue';
import VueRouter from 'vue-router';

import ShoppingMall from '@/components/pages/ShoppingMall'
import Register from '@/components/pages/Register'
Vue.use(VueRouter);




export default new VueRouter({
    routes: [{
        path: '/',
        name: 'ShoppingMall',
        component: ShoppingMall
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }]
})