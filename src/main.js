// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/index.scss'
import App from './App'
import router from './router'
// 引入mockjs
// import mockjs from './mock'
import 'font-awesome/css/font-awesome.min.css'
import axios from './axios.js'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.axios = axios
require('./mock.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
