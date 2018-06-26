<template>
  <div class="">
    <mt-header title="商户详情">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div class="busInfo" @click="$router.push({path: '/userCenter'})">
      <div class="title">
        {{busInfo.name}}<span>商</span><span>建</span>
      </div>
      <div class="container">
        <span>风评等级：{{busInfo.level}}</span><span>授信额度：{{busInfo.amount}}万</span>
        <!-- <div class="item">风评等级：{{busInfo.level}}</div>
        <div class="item">授信额度：{{busInfo.amount}}万</div> -->
      </div>
      <span class="tag await">{{busInfo.state}}</span>
    </div>
    <router-link to="/countData">
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
    </div>
    <mt-field label="客户经理" placeholder="" v-model="mng" disabled="true">
      <!-- <img src="../assets/100x100.png" height="48px" width="100px"> -->
      <span is-link @click="$router.push({path: '/mngChange'})">变更<i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
      <!-- <span data-v-6183efd0="">变更</span><i class="mint-cell-allow-right"></i> -->
    </mt-field>
    <!-- <mt-cell title="客户经理" is-link to="/mngChange" class="ms">
      <span>变更</span>
    </mt-cell> -->
    <mt-field label="门店联系人" v-model="lxr"></mt-field>
    <mt-field label="联系电话" placeholder="" v-model="mng" disabled="true">
      <span><i class="fa fa-phone-square" aria-hidden="true"></i></span>
    </mt-field>
    <!-- <mt-cell title="联系电话"  to="/mngChange" class="ms" v-model="phone">
      <span><i class="fa fa-phone-square" aria-hidden="true"></i></span>
    </mt-cell> -->
    <mt-field label="签约日期" v-model="date"></mt-field>
    <mt-field label="我方签约人" v-model="qyr"></mt-field>
    <mt-field label="门店地址" v-model="address"></mt-field>
    <mt-cell title="商户信息" is-link class="ml" to="/busInfo">
    </mt-cell>
    <mt-cell title="合同信息" is-link to="/contractInfo">
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
      busInfo: {
        name: 'xxxx商户门店',
        level: 'A',
        amount: '31.11',
        state: '审批中'
      },
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
.busInfo {
  position: relative;
  padding: 10px;
  font-size: $font-middle;
  .title {
    span {
      margin-left: 15px;
      padding: 2px 5px;
      background: $color-primary;
      color: $white;
      border-radius: 3px;
    }
  }
  .tag {
    position: absolute;
    top: 10px;
    right: 0;
    width: 50px;
    padding: 2px 5px;
    text-align: center;
    color: $white;
  }
  .await {
    background: orange;
  }
  .success {
    background: green;
  }
  .disable {
    background: red;
  }
}
.container {
  padding-top: 10px;
  display: flex;
  color: #999;
  font-size: $font-small;
}
// .item {
//   flex: 1;
//   text-align: left;
//   padding-bottom: 10px;
// }
</style>
