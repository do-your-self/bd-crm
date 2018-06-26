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
import store from './store'
import card from './components/common/card'
import cardapproval from './components/common/cardapproval'
import cardorder from './components/common/cardorder'
import cardpull from './components/common/cardpull'
import cardvisit from './components/common/cardvisit'
import pullup from './components/common/pullup'
// import timeline from './components/common/timeline'
// import  from './components/common/'
// import  from './components/common/'
import upimg from './components/common/upimg'
Vue.component('card', card)
Vue.component('cardapproval', cardapproval)
Vue.component('cardorder', cardorder)
Vue.component('cardpull', cardpull)
Vue.component('cardvisit', cardvisit)
Vue.component('pullup', pullup)
// Vue.component('timeline', timeline)
// Vue.component('', )
// Vue.component('', )
// Vue.component('', )
Vue.component('upimg', upimg)
Vue.use(VeeValidate)
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.axios = axios
require('./mock.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
