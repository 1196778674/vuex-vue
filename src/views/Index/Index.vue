<template>
  <div id="index">
    <mt-field label="用户名" placeholder="请输入用户名" type="text" v-model="todo.name"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="todo.email"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="todo.password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="todo.tel"></mt-field>
    <mt-button size="large" type="primary">提交</mt-button>
  </div>
</template>
<script>
  //  import Vue from 'vue'
  // 可以使用已下几个 Helper: mapGetters、mapState、 mapMutations、 mapActions
  import {mapState, mapGetters} from 'vuex'
  // 在此引入UI库
  import {Field} from 'mint-ui'
  import * as types from './types'

  export default {
    name: 'index',
    components: {
      // 使用这种方式声明应用的UI组件
      [Field.name]: Field
    },
    data () {
      return {
        todo: this.$store.state.index.todo
      }
    },
    computed: {
      // 计算属性
      ...mapState([
        'todo'
      ]),

      defaultState () {
        return this.$store.state.index.todo
      },
      ...mapGetters({
        todo: types.GETTER_STATE
      })
    },
    methods: {
      // 方法
    }
  }
</script>
<style>
  #index {

  }
</style>
