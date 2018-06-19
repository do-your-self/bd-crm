<template>
  <div class="bg-con">
    <mt-header title="修改密码">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <h1 class="title">请设置新密码</h1>
    <div class="ml">
      <mt-field label="新密码" placeholder="请输入8~12位的英文+数字组合" type="password" v-model="passwordNew"></mt-field>
      <mt-field label="重复密码" placeholder="请输入密码" type="password" v-model="passwordRep"></mt-field>
    </div>
    <div class="btnm">
      <mt-button size="large" type="primary" @click="submit">确定</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setPsw',
  data () {
    return {
      passwordNew: '',
      passwordRep: ''
    }
  },
  methods: {
    submit () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
