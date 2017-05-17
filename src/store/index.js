import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

// 定义state初始值
const state = {
  show_header: true,
  title: 'vuex',
  user_name: '一坨小灰灰',
  nav_list: [{id: 1, name: '列表', url: '/list1'}, {id: 2, name: '列表', url: '/list2'}],
  nav_down: [{id: 1, name: '设置'}, {id: 2, name: '个人中心'}, {id: 3, name: '退出'}]
}

// vuex定义的actions,mutations,getters,state的处理方法
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
