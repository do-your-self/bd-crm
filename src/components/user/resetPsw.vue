<template>
  <div class="bg-con">
    <mt-header title="修改密码">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="m16">
      <mt-field label="当前密码" placeholder="请输入登录密码" type="password" v-model="passwordNow"></mt-field>
      <mt-field label="新密码" placeholder="请输入8~12位的英文+数字组合" type="password" v-model="passwordNew"></mt-field>
      <mt-field label="重复密码" placeholder="请输入密码" type="password" v-model="passwordRep"></mt-field>
    </div>
    <div class="btnCon">
      <mt-button size="large" type="primary" @click="submit">确定</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resetPsw',
  data () {
    return {
      passwordNow: '',
      passwordNew: '',
      passwordRep: ''
    }
  },
  methods: {
    submit () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.m16 {
  margin-top: 16px;
}
.btnCon {
  padding: 0 50px;
  margin-top: 70px;
}
</style>
