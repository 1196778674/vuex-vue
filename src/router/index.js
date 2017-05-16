import Vue from 'vue'
import Router from 'vue-router'

// 404
import Nofound from '@/components/tpl/Nofound'
// index
import Index from '@/components/Index'
// list
import List from '@/components/views/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/:list',
      name: 'List',
      component: List
    },
    {
      path: '*',
      name: '404',
      component: Nofound
    }
  ]
})
