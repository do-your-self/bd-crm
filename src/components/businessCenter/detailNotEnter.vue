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
        {{busInfo.name}}
      </div>
      <div class="reject">
        {{busInfo.reject}}
      </div>
      <span class="tag disable">{{busInfo.state}}</span>
    </div>
    <mt-cell title="录入拜访" is-link to="/createVisit" class="ms"></mt-cell>
    <mt-cell title="查看拜访记录" is-link to="/visitRecord"></mt-cell>
    <mt-cell title="去签约" is-link to="/contract"></mt-cell>
    <businessInfo  class="ml"></businessInfo>
  </div>
</template>

<script>
import businessInfo from './businessInfo.vue'
export default {
  name: '',
  components: {
    businessInfo
  },
  data () {
    return {
      busInfo: {
        name: '地区 — 角色名称 — 审批人',
        reject: '拒绝原因',
        state: '拒绝'
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
  }
}
</script>

<style lang="scss" scoped>
.busInfo {
  position: relative;
  padding: 10px;
  font-size: $font-middle;
  .reject {
    padding-top: 10px;
    color: #999;
    font-size: $font-small;
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
// .item {
//   flex: 1;
//   text-align: left;
//   padding-bottom: 10px;
// }
</style>
