let routes = [
  {
    path: '/yidong',
    name: 'yidong',
    component: resolve => require(['@/report/yidong'], resolve)
  },
  {
    path: '/search',
    name: 'search',
    component: resolve => require(['@/components/cmpxCom/search'], resolve)
  },
  {
    path: '/searchRes',
    name: 'searchRes',
    component: resolve => require(['@/components/cmpxCom/searchRes'], resolve)
  },
  {
    path: '/ydSearch',
    name: 'ydSearch',
    component: resolve => require(['@/report/yidong/ydSearch'], resolve)
  },
  {
    path: '/ydDetail',
    name: 'ydDetail',
    component: resolve => require(['@/report/yidong/yddetail'], resolve)
  }]

export default routes;
