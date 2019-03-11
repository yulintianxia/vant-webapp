/**
 * axios配置文件
 */

import axios from 'axios' //axios
import qs from 'qs';
// import Vue from 'vue';

//axios请求拦截器
//携带cookie
// axios.defaults.withCredentials = true;
//注意后台没有对cookie做处理
axios.defaults.timeout = 5000;
axios.interceptors.request.use(function(config) {
    //利用qs转换
    config.data = qs.stringify(config.data);
    return config;
}, function(error) {
    return Promise.reject(error);
});

//axios响应拦截器
// axios.interceptors.response.use(function (response) {
//   if(response.data.status == 1404) {
//     response.data.message = "登录过期，请重新登录";
//     Vue.prototype.router.push({ path: '/login' })
//     return response.data;
//   }else{
//     return response.data;
//   }
// }, function (error) {
//    return Promise.reject(error);
// });


// axios中async的封装
let http = {
    get: function(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                    params: params
                })
                .then((response) => {
                    if (response.status == 200) {
                        resolve(response.data);
                    } else {
                        resolve("请求错误");
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
    post: function(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, {
                    params: params
                })
                .then((response) => {
                    if (response.status == 200) {

                        resolve(response.data);
                    } else {
                        resolve("请求错误");
                    }

                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
};

//axios默认请求路径
axios.defaults.baseURL = 'https://easy-mock.com/mock/5c0ce27eec15f41e9b00ea76/smileVue';
export const LOCALURL = 'http://localhost:3000/';

export default http;