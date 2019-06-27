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
      path: '/datagrid',
      name: 'datagrid',
      component: resolve => require(['@/report/dataGrid'], resolve)
    },
    {
      path: '/treegrid',
      name: 'treegrid',
      component: resolve => require(['@/report/treegrid'], resolve)
    }
  ]
})
