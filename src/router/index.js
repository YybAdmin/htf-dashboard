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
      path: '/chanpin',
      name: 'chanpin',
      component: resolve => require(['@/report/chanpin'], resolve)
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
    },,
    {
      path: '/yidong',
      name: 'yidong',
      component: resolve => require(['@/report/yidong'], resolve)
    },
    {
      path:'/search',
      name:'search',
      component: resolve => require(['@/components/cmpxCom/search'], resolve)
    },
    {
      path:'/searchRes',
      name:'searchRes',
      component: resolve => require(['@/components/cmpxCom/searchRes'], resolve)
    },
    {
      path:'/ydSearch',
      name:'ydSearch',
      component: resolve => require(['@/report/yidong/ydSearch'], resolve)
    },
    {
      path:'/ydDetail',
      name:'ydDetail',
      component: resolve => require(['@/report/yidong/yddetail'], resolve)
    }

  ]
})
