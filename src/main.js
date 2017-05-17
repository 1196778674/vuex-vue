// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

// 引用样式
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
// require('./assets/css/index.less')

// 引用第三方类库
window.$ = window.jQuery = require('jquery')
window.bootstrap = require('bootstrap')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
