<template>
  <div class="bg-con">
    <h1 class="title">hi,欢迎登录BD_CRM系统~</h1>
    <mt-field label="手机号码" placeholder="请输入登录账号" type="tel" v-model.lazy="phone" :attr="{maxlength: 11}" @change="regExp(/^[1][3,4,5,7,8][0-9]{9}$/, phone, '请输入正确的手机号')"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" @change="regExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/, password, '请输入由数字字母组成的不小于8位的密码')"></mt-field>
    <mt-field label="验证码" v-model="captcha" v-if="isCaptcha">
      <img :src="captchaUrl" height="30px" width="100px" @click="changeCaptcha">
    </mt-field>
    <p class="forget"><span @click="$router.push({path: '/authentication'})">忘记密码？</span></p>
    <div class="btnm">
      <mt-button size="large" type="primary" @click="login">登录</mt-button>
    </div>
    <p class="error" v-if="(errCount >= 3)">输入错误5次后，账户将被冻结。您已输入错误{{errCount}}次</p>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      phone: '',
      password: '',
      captcha: '',
      captchaUrl: '',
      errCount: null,
      isCaptcha: false,
      msg: ''
    }
  },
  methods: {
    regExp (reg, val, msg) {
      console.log(reg.test(val))
      if (!reg.test(val)) {
        this.$toast({
          message: msg,
          position: 'model',
          duration: 3000
        })
      }
    },
    changeCaptcha () {
      // this.captcha = url + '/getCaptcha?d='+Math.random()
      this.axios.getCaptcha().then(({ data }) => {
        this.captchaUrl = data.url
      }).catch(error => {
        console.log(error)
      })
    },
    login () {
      this.axios.login({
        phone: this.phone,
        password: this.password
      }).then(({ data }) => {
        console.log(data)
        if (data.admin) {
          this.$store.dispatch({
            type: 'Login',
            admin: data.admin
          })
          // this.$router.push({
          //   path: '/setPsw'
          // })
        }
        if (data.success && data.reset) {
          this.$router.push({
            path: '/setPsw'
          })
        }
        if (data.success && !data.reset) {
          this.$router.push({
            path: '/home'
          })
        }
        if (data.code) {
          this.isCaptcha = true
          this.axios.getCaptcha().then(({ data }) => {
            this.captchaUrl = data.url
          }).catch(error => {
            console.log(error)
          })
        }
        if (data.err) {
          this.errCount = data.err
        }
        this.$toast({
          message: data.msg,
          position: 'model',
          duration: 3000
        })
      }).catch(error => {
        console.log(error)
      })
      // 跳转到指定的路由
      // this.$router.push({
      //   path: '/home'
      // })
    }
  },
  computed: {
    // phone (val) {
    //   var a = /^[1][3,4,5,7,8][0-9]{9}$/.test(val)
    //   console.log(a)
    //   Toast({
    //     message: 'Upload Complete',
    //     position: 'bottom',
    //     duration: 5000
    //   });
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p.forget {
  margin-right: 10px;
  text-align: right;
  font-size: 12px;
  color: #666;
}
p.error {
  color: red;
  font-size: 12px;
  text-align: center;
}
</style>
