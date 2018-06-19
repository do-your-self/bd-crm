<template>
  <div class="">
    <mt-header title="录入拜访">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-field label="商户名称" placeholder="请输入拜访商户名称" v-model="name"></mt-field>
    <mt-field label="业务线" v-model="line"></mt-field>
    <mt-field label="行业" v-model="industry"></mt-field>
    <mt-field label="联系人" v-model="contact"></mt-field>
    <mt-cell title="跟进方式" is-link value="拜访">
    </mt-cell>
    <mt-cell title="跟进日期" is-link value="2017-06-28">
    </mt-cell>
    <mt-field label="跟进内容" placeholder="请录入内容" type="textarea" rows="2" v-model="content"></mt-field>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      name: '',
      line: '',
      industry: '',
      contact: '',
      content: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
