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
      path: '/authentication',
      name: 'authentication',
      component (resolve) {
        require(['@/components/authentication'], resolve)
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
      path: '/home',
      name: 'home',
      component (resolve) {
        require(['@/components/home'], resolve)
      }
      // children: [
      //   {
      //     path: '/authpull',
      //     name: 'authpull',
      //     component (resolve) {
      //       require(['@/components/authPull'], resolve)
      //     }
      //   }
      // ]
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
      path: '/historyData',
      name: 'historyData',
      component (resolve) {
        require(['@/components/historyData'], resolve)
      }
    },
    {
      path: '/dataDetail',
      name: 'dataDetail',
      component (resolve) {
        require(['@/components/historyData/dataDetail'], resolve)
      }
    },
    {
      path: '/approvalCenter',
      name: 'approvalCenter',
      component (resolve) {
        require(['@/components/approvalCenter'], resolve)
      }
    },
    {
      path: '/approvalDetail',
      name: 'approvalDetail',
      component (resolve) {
        require(['@/components/approvalCenter/approvalDetail'], resolve)
      }
    },
    {
      path: '/approval',
      name: 'approval',
      component (resolve) {
        require(['@/components/approvalCenter/approval'], resolve)
      }
    },
    {
      path: '/authPull',
      name: 'authPull',
      component (resolve) {
        require(['@/components/authPull/index'], resolve)
      }
    },
    {
      path: '/pullDetail',
      name: 'pullDetail',
      component (resolve) {
        require(['@/components/authPull/pullDetail'], resolve)
      }
    },
    {
      path: '/createBusiness',
      name: 'createBusiness',
      component (resolve) {
        require(['@/components/businessCenter/createBusiness'], resolve)
      }
    },
    {
      path: '/completeInfo',
      name: 'completeInfo',
      component (resolve) {
        require(['@/components/businessCenter/completeInfo'], resolve)
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
      path: '/visitDetail',
      name: 'visitDetail',
      component (resolve) {
        require(['@/components/visitRecord/visitDetail'], resolve)
      }
    },
    {
      path: '/createVisit',
      name: 'createVisit',
      component (resolve) {
        require(['@/components/visitRecord/createVisit'], resolve)
      }
    },
    {
      path: '/order',
      name: 'order',
      component (resolve) {
        require(['@/components/order'], resolve)
      }
    },
    {
      path: '/orderDetail',
      name: '/orderDetail',
      component (resolve) {
        require(['@/components/order/orderDetail'], resolve)
      }
    },
    {
      path: '/account',
      name: '/account',
      component (resolve) {
        require(['@/components/order/account'], resolve)
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
      path: '/busInfo',
      name: 'busInfo',
      component (resolve) {
        require(['@/components/businessCenter/busInfo'], resolve)
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
      path: '/contractInfo',
      name: 'contractInfo',
      component (resolve) {
        require(['@/components/businessCenter/contractInfo'], resolve)
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
      path: '/detailNotEnter',
      name: 'detailNotEnter',
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
    },
    {
      path: '/filter',
      name: 'filter',
      component (resolve) {
        require(['@/components/common/filter'], resolve)
      }
    }
  ]
})
