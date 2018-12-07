/** 
 * 路由配置文件
*/

import Vue from 'vue'

function routerLoad(router){
  //路由跳转之前执行方法
  router.beforeEach((to, from, next) => {
    next();
  });
  //路由跳转之后执行方法
  router.afterEach((to,from) => {
    // $("body").css("background-color","#fff");
  })
}

export default routerLoad;