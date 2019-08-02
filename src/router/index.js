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
    path: '/test',
    name: 'test',
    component: resolve => require(['@/report/test'], resolve)
  }
];
import ydRoutes  from '@/router/yd';
import yjyRoutes from '@/router/yjy'
const routes = baseRoutes.concat(ydRoutes,yjyRoutes);

export default new Router({
  base: 'dashboard-report',
  routes: routes
})
