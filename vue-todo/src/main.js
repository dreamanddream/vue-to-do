// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import是es6的语法，可以理解为require引入
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 这里的el可以是类，也可以是body
  el: '#app',
  // 注册路由
  router,
  // 注册app组件，注册后才能在index.html中使用，这里会自动将驼峰在页面中转化为中划线的
  components: { App },
  template: '<App/>'
})
