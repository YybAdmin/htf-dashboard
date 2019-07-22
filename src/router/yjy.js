let routes = [
  {
    path: '/rankAlllist',
    name: '所有研究员排序',
    component: resolve => require(['@/components/baseCom/rankAllList'], resolve)
  }]

export default routes;
