<template>
  <div class="">
    <mt-header title="商户详情">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div class="user" @click="$router.push({path: '/userCenter'})">
      {{user}}
    </div>
    <router-link to="/countData">
      <card tag="5月" :card="card"></card>
    </router-link>
    <!-- <card tag="5月" :card="card"></card> -->
    <div class="h60">
      <router-link to="/authPull" slot="left">
        <mt-cell title="拉新用户数" :value="pull+'人'" >
        </mt-cell>
        <mt-cell title="认证用户数" :value="authentic+'人'">
        </mt-cell>
      </router-link>
    </div>
    <mt-field label="客户经理" v-model="mng" class="ms" disabled="false"></mt-field>
    <mt-field label="门店联系人" v-model="lxr"></mt-field>
    <mt-field label="联系电话" v-model="phone"></mt-field>
    <mt-field label="签约日期" v-model="date"></mt-field>
    <mt-field label="我方签约人" v-model="qyr"></mt-field>
    <mt-field label="门店地址" v-model="address"></mt-field>
    <router-link to="/createBusiness" class="color">
      <mt-cell title="商户信息" is-link>
      </mt-cell>
    </router-link>
    <mt-cell title="合同信息" is-link to="/businessCenter">
    </mt-cell>
    <mt-cell title="商户订单" is-link>
    </mt-cell>
  </div>
</template>

<script>
import card from '../common/card.vue'
export default {
  name: '',
  components: {
    card
  },
  data () {
    return {
      mng: '张三（城市-角色名称）',
      lxr: '张三',
      phone: '12838383838',
      date: '2017-8-8',
      qyr: 'xxx(北京-城市经理)',
      address: '北京市 朝阳区 小营北路  靠近和泰大厦（小营北路）',
      user: 'xxx(吉林-客户经理)',
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
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  padding: 16px 8px 0;
}
.h60 {
  padding: 10px 0;
}
.h60 a {
  color: #000;
}
.color {
  color: #000;
}
</style>
