import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const baseRoutes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['@/home/index'], resolve)
  }
];
import ydRoutes  from '@/router/yd';
import yjyRoutes from '@/router/yjy'
import hujinRoutes from '@/router/hujin'
const routes = baseRoutes.concat(ydRoutes,yjyRoutes,hujinRoutes);

export default new Router({
  base: 'dashboard-report',
  routes: routes
})
