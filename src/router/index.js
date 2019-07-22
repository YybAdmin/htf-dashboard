import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const baseRoutes = [
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
  }
];
import ydRoutes from '@/router/yd';
const routes = baseRoutes.concat(ydRoutes);

export default new Router({
  base: 'dashboard-report',
  routes: routes
})
