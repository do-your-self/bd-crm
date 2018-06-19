<template>
  <div class="">
    <mt-header title="BD_CRM系统">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(0)">返回</mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div class="card-title" @click="$router.push({path: '/userCenter'})">
      {{user}}
    </div>
    <router-link to="/historyData">
      <card tag="5月" :card="card"></card>
    </router-link>
    <!-- <card tag="5月" :card="card"></card> -->
    <div class="pull">
      <router-link to="/authPull" slot="left">
        <mt-cell title="拉新用户数" :value="pull+'人'" >
        </mt-cell>
        <mt-cell title="认证用户数" :value="authentic+'人'">
        </mt-cell>
      </router-link>
      <!-- <mt-cell title="拉新用户数" :value="pull+'人'" >
      </mt-cell>
      <mt-cell title="认证用户数" :value="authentic+'人'">
      </mt-cell> -->
    </div>
    <router-link to="/createBusiness">
      <mt-cell title="创建商户" is-link>
      </mt-cell>
    </router-link>
    <mt-cell title="商户管理" is-link to="/businessCenter">
      {{expire}}家<span style="color: red">即将到期</span>
    </mt-cell>
    <mt-cell title="商户订单" is-link to="/order">
      共{{order}}单
    </mt-cell>
    <mt-cell title="拜访记录" is-link to="/visitRecord">
    </mt-cell>
    <mt-cell title="审批管理" is-link to="/approvalCenter">
      {{approve}}条<span style="color: red">审批中</span>
    </mt-cell>
    <div class="btnl">
      <mt-button size="large" type="primary" @click="logout">退出系统</mt-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import card from './common/card.vue'
export default {
  name: '',
  components: {
    card
  },
  data () {
    return {
      user: 'xxx(吉林-客户经理)',
      expire: 3,
      order: 500,
      approve: 3,
      pull: 3000,
      authentic: 3000,
      card: [{
        name: 'GMV',
        value: 3000
      }, {
        name: '入驻商户',
        value: 100
      }, {
        name: '拜访量',
        value: 100
      }]
    }
  },
  methods: {
    logout () {
      // 跳转到指定的路由
      // this.$router.push({
      //   path: '/login'
      // })
      this.$router.push({
        path: '/authpull'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
