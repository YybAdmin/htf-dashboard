import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: 'dashboard-report',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/home/index'], resolve)
    },
    {
      path: '/hujin',
      name: 'hujin',
      component: resolve => require(['@/report/hujin'], resolve)
    },
    {
      path: '/jingpin',
      name: 'jingpin',
      component: resolve => require(['@/report/jingpin'], resolve)
    },
    {
      path: '/grid',
      name: 'grid',
      component: resolve => require(['@/report/grid'], resolve)
    }
  ]
})
