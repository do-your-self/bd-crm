<template>
  <div class="">
    <mt-header title="审批详情">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right"><span class="approval" @click="$router.push({path: '/approval'})">审批</span></mt-button>
    </mt-header>
    <mt-cell title="发起时间" value="2017-06-29 18:00"></mt-cell>
    <mt-cell title="发起人" value="张三"></mt-cell>
    <mt-cell title="发起事项" value="商户入驻"></mt-cell>
    <mt-cell title="商户门店简称" value="xxxx门店"></mt-cell>
    <mt-cell title="商户主体名称" value="商户名称"></mt-cell>
    <mt-cell title="业务线" value="商城商户"></mt-cell>
    <mt-cell title="行业" value="健身行业"></mt-cell>
    <mt-cell title="商户信息" is-link></mt-cell>
    <mt-cell title="合同信息" is-link value="资料版本V1.0"></mt-cell>

  </div>
</template>

<script>
// import card from './common/card'
export default {
  name: 'businessCenter',
  // components: {
  //   card
  // },
  data () {
    return {
      selected: '1'
    }
  },
  methods: {

  },
  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.approval {
    padding: 2px 5px;
    background: #333;
    border-radius: 5px;
}
</style>
