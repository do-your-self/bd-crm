<template>
  <div class="bg-con">
    <mt-header title="修改密码">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <h1 class="title">请设置新密码</h1>
    <div class="ml">
      <mt-field label="新密码" placeholder="请输入8~12位的英文+数字组合" :attr="{maxlength: 12}" type="password" v-model="passwordNew"></mt-field>
      <mt-field label="重复密码" placeholder="请输入密码" :attr="{maxlength: 12}" type="password" v-model="passwordRep"></mt-field>
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
      // this.axios.().then(({ data }) => {
      //   this.$toast({
      //     message: '修改成功',
      //     position: 'model',
      //     duration: 3000
      //   })
      //   this.$router.push({
      //     path: '/home'
      //   })
      // }).catch(error => {
      //   console.log(error)
      //   // if (当前密码≠登录密码) { "当前密码错误" }
      //   // if (新密码≠默认密码) { "新密码请勿与初始密码一致" }
      //   // if（重复密码≠新密码）{“两次密码输入不一致”}
      //   // if（新密码不符合校验）{“新密码设置不符合规则”}
      //   if () {
      //     this.$toast({
      //       message: '当前密码错误',
      //       position: 'model',
      //       duration: 3000
      //     })
      //   } else if () {
      //     this.$toast({
      //       message: '新密码请勿与初始密码一致',
      //       position: 'model',
      //       duration: 3000
      //     })
      //   } else if () {
      //     this.$toast({
      //       message: '“两次密码输入不一致”',
      //       position: 'model',
      //       duration: 3000
      //     })
      //   } else if () {
      //     this.$toast({
      //       message: '“新密码设置不符合规则”',
      //       position: 'model',
      //       duration: 3000
      //     })
      //   }
      // })
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
