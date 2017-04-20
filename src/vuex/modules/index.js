/**
 * Created by liufei.
 */
// import Vue from 'vue'
// import url from '../../config/url'
import * as types from '../../views/Index/types'

export default {
  state: {
    todo: {
      name: '',
      email: '',
      password: '',
      tel: ''
    }
  },
  getters: {
    [types.GETTER_STATE] (state) {
      return state.indexState
    }
  },
  mutations: {
    /*
    [types.UPDATE_STATE] (state, payload) {
      state.loginState = payload ? 'login success!' : 'login failed...'
      state.needVerify = !payload
    }
    */
  },
  actions: {
    /*
    [types.LOGIN_ACTION] ({commit}, payload) {
      return Vue.http.post(url.mobileDeviceLogin3, payload)
    }
    */
  }
}
