<template>
  <div class="">
    <mt-header title="用户管理">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="m16">
      <router-link slot="left" to="/resetPsw">
        <mt-cell title="密码修改" is-link>
        </mt-cell>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userCenter',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.m16 {
  margin-top: 16px;
}
.m16 a {
  color: #000;
}
</style>
