import Vue from 'vue';
import VueRouter from 'vue-router';

import ShoppingMall from '@/components/pages/ShoppingMall';
import Register from '@/components/pages/Register';
import Login from '@/components/pages/Login';
import Goods from '@/components/pages/Goods';
import CategoryList from '@/components/pages/CategoryList';
import Cart from '@/components/pages/Cart';
import Main from '@/components/pages/Main';
import People from '@/components/pages/People';
Vue.use(VueRouter);


export default new VueRouter({
    routes: [{
        path: '/main',
        name: 'Main',
        component: Main,
        children: [{
            path: '/',
            name: 'ShoppingMall',
            component: ShoppingMall
        }, {
            path: '/categoryList',
            name: 'CategoryList',
            component: CategoryList
        }, {
            path: '/cart',
            name: 'Cart',
            component: Cart
        }, {
            path: '/people',
            name: 'People',
            component: People
        }]
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
    }, ]
})