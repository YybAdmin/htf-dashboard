import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: 'dashboard-report',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/components/home/index'], resolve)
    },
    {
      path: '/hujin',
      name: 'hujin',
      component: resolve => require(['@/components/report/hujin'], resolve)
    },
    {
      path: '/jingpin',
      name: 'jingpin',
      component: resolve => require(['@/components/report/jingpin'], resolve)
    },
    {
      path: '/testyyw',
      name: 'testyyw',
      component: resolve => require(['@/components/report/testyyw'], resolve)
    }
  ]
})
