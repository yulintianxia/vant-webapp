import Vue from 'vue';
import VueRouter from 'vue-router';

import ShoppingMall from '@/components/pages/ShoppingMall';
import Register from '@/components/pages/Register';
import Login from '@/components/pages/Login';
import Goods from '@/components/pages/Goods';
import CategoryList from '@/components/pages/CategoryList';
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
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/goods',
        name: 'Goods',
        component: Goods
    }, {
        path: '/categoryList',
        name: 'CategoryList',
        component: CategoryList
    }]
})