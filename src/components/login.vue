<template>
  <div>
    <h1>hi,欢迎登录BD_CRM系统~</h1>
    <mt-field label="手机号码" placeholder="请输入登录账号" type="tel" v-model="phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="container">
      <!-- <div><mt-field label="验证码" placeholder="code" v-model="username"></mt-field></div>
      <div><img src="" /></div> -->
      <mt-field label="验证码" v-model="captcha">
        <img src="../assets/logo.png" height="45px" width="100px">
      </mt-field>
    </div>
    <div class="btnCon">
      <mt-button size="large" type="primary" @click="login">登录</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      password: '',
      captcha: ''
    }
  },
  methods: {
    login () {
      // 跳转到指定的路由
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
  font-size: 20px;
  text-align: left;
  padding: 50px 20px;
}
.btnCon {
  padding: 0 50px;
  margin-top: 70px;
}
</style>
