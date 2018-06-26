<template>
  <div class="">
    <mt-header title="创建商户门店">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-field label="客户经理人" placeholder="请输入客户经理人" v-model="manager"></mt-field>
    <mt-field label="商户主体名称" placeholder="请输入商户名称" v-model="name"></mt-field>
    <mt-field label="商户门店简称" placeholder="请输入商户门店简称" v-model="shortName"></mt-field>
    <mt-cell title="业务线" is-link :value="line?line:'请选择'" :class="[line?'left':'right']"></mt-cell>
    <mt-cell title="商户行业" is-link :value="industry?industry:'请选择'" :class="[industry?'left':'right']"></mt-cell>
    <mt-cell title="经营地区" is-link :value="area?area:'请选择'" :class="[area?'left':'right']"></mt-cell>
    <mt-field label="详细地址" placeholder="请输入详细地址" type="textarea" rows="4" v-model="address"></mt-field>
    <mt-field label="业务联系人" placeholder="请输入业务联系人姓名" v-model="contactName"></mt-field>
    <mt-cell title="性别" is-link :value="sex?sex:'请选择'" :class="[sex?'left':'right']"></mt-cell>
    <mt-field label="联系人手机" placeholder="请输入联系人手机号码" type='tel' v-model="phone"></mt-field>
    <mt-field label="职务" placeholder="请输入职务" v-model="job"></mt-field>
    <div class="btnl">
      <mt-button size="large" type="primary" @click="created">创建商户门店</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      manager: '北京-城市经理-张三',
      name: '',
      shortName: '',
      line: '',
      industry: '',
      area: '',
      address: '',
      contactName: '',
      sex: '',
      phone: '',
      job: ''
    }
  },
  methods: {
    created () {
      this.$router.push({
        path: '/completeInfo'
      })
    }
  }
}
</script>
<style scoped lang="scss">
</style>
