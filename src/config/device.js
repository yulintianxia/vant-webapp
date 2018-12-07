/**
 * 判断系统类型
 */

import Vue from 'vue'

Vue.prototype.isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
Vue.prototype.isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

//px比例
var winWidth;
window.innerWidth != 0 ? winWidth = window.innerWidth : winWidth = screen.width;
Vue.prototype.ratio = winWidth / 375;
//设备高度
if(Vue.prototype.isiOS){
  Vue.prototype.deviceHeight = () => {
    return document.documentElement.clientHeight - 20;
  }
}else{
  Vue.prototype.deviceHeight = () => {
    return document.documentElement.clientHeight;
  }
}

//安卓版本号
Vue.prototype.androidVer = '1.0.0606'
//ios版本号
Vue.prototype.iosVer = '1.0.0606'