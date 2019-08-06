let routes = [
  {
    path: '/jingpin',
    name: 'jingpin',
    component: resolve => require(['@/report/jingpin'], resolve)
  },
  {
    path: '/APPDetail',
    name: 'APPDetail',
    component: resolve => require(['@/components/jingpin/APPDetail'], resolve)
  }]

export default routes;
