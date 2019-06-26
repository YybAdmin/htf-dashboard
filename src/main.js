// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import API_LIST from './apiList'
import myUtil from '@/assets/js/com/myUtil'
import echartUtil from '@/assets/js/com/echartUtil'

import axios from 'axios'
Vue.prototype.$http = axios

import 'vx-easyui/dist/themes/default/easyui.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'
import '@/assets/css/easyui/myEasyui.css'
import EasyUI from 'vx-easyui'
Vue.use(EasyUI)

Vue.config.productionTip = false
Vue.prototype.$API_LIST = API_LIST
Vue.prototype.$myUtil = myUtil
Vue.prototype.$echartUtil = echartUtil

if(Vue.prototype.$API_LIST.state == 0){
  require('@/mock/hujin')
  require('@/mock/jingpin')
  require('@/mock/datagrid')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
