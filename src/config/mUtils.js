
/**
 * 常用的js方法
 */

import Vue from 'vue'

/**
 * 存储localStorage
 */
Vue.prototype.setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
Vue.prototype.getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
Vue.prototype.removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}


import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'
/**
 * 获取cookie
 */
Vue.prototype.getCookie = CookieKey => {
  return Cookies.get(CookieKey)
}
/**
 * 存储cookie
 */
Vue.prototype.setCookie = (CookieKey,cookie) => {
  return Cookies.set(CookieKey, cookie)
}
/**
 * 删除cookie
 */
Vue.prototype.removeCookie = CookieKey => {
  return Cookies.remove(CookieKey)
}

/**
 * 输入限制
 */
Vue.prototype.validate = (newV,used,value,msg,reg) => {
	if(msg[value] == ''){
		msg[value] == '';
	}else{
		if(reg.test(newV)){
			msg[value] = newV
		}else{
			msg[value] = used
		}
	}
}