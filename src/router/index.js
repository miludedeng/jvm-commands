import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
