import Vue from 'vue'
import Axios from "axios"
Vue.prototype.$http=Axios   //原型指向   全局都用的到的东西放在这里
// alias   路由别名
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
//import store from "./store"
import './commer/reset.css'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  el: '#app',
  router
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
    //matched匹配   some过滤、筛选
    console.log('需要登录');
    console.log(localStorage);
    if (localStorage.userId) { // 判断当前的token是否存在 ； 登录存入的token
      next();
    }
    else {
      next({
        path: '/',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});


















