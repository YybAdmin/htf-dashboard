// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import API_LIST from '@/assets/js/com/apiList'
import myUtil from '@/assets/js/com/myUtil'
import echartUtil from '@/assets/js/com/echartUtil'
import '@/mock/hujin'
import '@/mock/jingpin'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$API_LIST = API_LIST
Vue.prototype.$myUtil = myUtil
Vue.prototype.$echartUtil = echartUtil
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
