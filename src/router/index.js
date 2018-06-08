import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'
// import login from '@/components/login'
// import home from '@/components/home'
// import approval from '@/components/approval'
// import countData from '@/components/countData'
// import createBusiness from '@/components/createBusiness'
// import setPsw from '@/components/setPsw'
// import authPull from '@/components/authPull'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component (resolve) {
        require(['@/components/login'], resolve)
      }
    },
    {
      path: '/home',
      name: 'home',
      component (resolve) {
        require(['@/components/home'], resolve)
      }
      // ,
      // children: [{
      //   path: '/home/userCenter',
      //   name: 'userCenter',
      //   component (resolve) {
      //     require(['@/components/user/userCenter'], resolve)
      //   }
      // }, {
      //   path: '/home/reserPsw',
      //   name: 'reserPsw',
      //   component (resolve) {
      //     require(['@/components/user/resetPsw'], resolve)
      //   }
      // }]
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component (resolve) {
        require(['@/components/user/userCenter'], resolve)
      }
    },
    {
      path: '/resetPsw',
      name: 'resetPsw',
      component (resolve) {
        require(['@/components/user/resetPsw'], resolve)
      }
    },
    {
      path: '/countData',
      name: 'countData',
      component (resolve) {
        require(['@/components/countData'], resolve)
      }
    },
    {
      path: '/approval',
      name: 'approval',
      component (resolve) {
        require(['@/components/approval'], resolve)
      }
    },
    {
      path: '/authPull',
      name: 'authPull',
      component (resolve) {
        require(['@/components/authPull'], resolve)
      }
    },
    {
      path: '/setPsw',
      name: 'setPsw',
      component (resolve) {
        require(['@/components/setPsw'], resolve)
      }
    },
    {
      path: '/createBusiness',
      name: 'createBusiness',
      component (resolve) {
        require(['@/components/createBusiness'], resolve)
      }
    },
    {
      path: '/visitRecord',
      name: 'visitRecord',
      component (resolve) {
        require(['@/components/visitRecord/index.vue'], resolve)
      }
    },
    {
      path: '/creatVisit',
      name: 'creatVisit',
      component (resolve) {
        require(['@/components/visitRecord/createVisit'], resolve)
      }
    },
    {
      path: '/order',
      name: 'order',
      component (resolve) {
        require(['@/components/order/businessOrder'], resolve)
      }
    },
    {
      path: '/businessCenter',
      name: 'businessCenter',
      component (resolve) {
        require(['@/components/businessCenter'], resolve)
      }
    },
    {
      path: '/search',
      name: 'search',
      component (resolve) {
        require(['@/components/businessCenter/search'], resolve)
      }
    },
    {
      path: '/contract',
      name: 'contract',
      component (resolve) {
        require(['@/components/businessCenter/contract'], resolve)
      }
    },
    {
      path: '/detailEnter',
      name: 'detailEnter',
      component (resolve) {
        require(['@/components/businessCenter/detailEnter'], resolve)
      }
    },
    {
      path: '/detailNotEenter',
      name: 'detailNotEenter',
      component (resolve) {
        require(['@/components/businessCenter/detailNotEnter'], resolve)
      }
    },
    {
      path: '/mngChange',
      name: 'mngChange',
      component (resolve) {
        require(['@/components/businessCenter/mngChange'], resolve)
      }
    }
  ]
})
