/**
 * axios配置文件
 */

import axios from 'axios'   //axios
import qs from 'qs';
import Vue from 'vue';

//axios请求拦截器
//携带cookie
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;
axios.interceptors.request.use(function (config) {
  //利用qs转换
  config.data = qs.stringify(config.data);
  return config;
}, function (error) {
  return Promise.reject(error);
});

//axios响应拦截器
axios.interceptors.response.use(function (response) {
  if(response.data.status == 1404) {
    response.data.message = "登录过期，请重新登录";
    Vue.prototype.router.push({ path: '/login' })
    return response.data;
  }else{
    return response.data;
  }
}, function (error) {
   return Promise.reject(error);
});

//axios默认请求路径
axios.defaults.baseURL = 
'http://39.108.70.214:8080/biz/';
//服务器正式服     
//  'https://www.dingdangshifu.cn/biz/';
//服务器测试服     
  // 'http://39.108.70.214:8080/biz/';
//本地测试服务器    
// 'http://192.168.1.8:8081/biz/';
//曹刚             'http://192.168.1.58:8080/biz/';
//谢词栋          
//  'http://192.168.1.9:8081/biz/';
//邹聪             'http://192.168.2.103:8080/biz/';
//邹聪阿里云        'http://39.106.37.93:8080/biz/';