// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

require('!style-loader!css-loader!less-loader!./assets/bootstrap/css/bootstrap.css')
require('!style-loader!css-loader!less-loader!./assets/css/index.less')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
