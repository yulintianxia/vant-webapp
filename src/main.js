// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//重置样式
import './style/reset.css';
//引入判断设备的方法
import './config/device';
//引入适配文件
import './config/auto-size';
//引入常用的方法文件
import './config/mUtils';
//引入路由配置
import './config/routerBefore';
//引入axios配置文件
import './config/axiosConfig';
//引入vantui
import './config/vantUi';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
