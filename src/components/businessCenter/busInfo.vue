<template>
  <div class="">
    <mt-header title="商户信息">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right" class="rightbtn" @click="submit">编辑</mt-button>
    </mt-header>
    <businessInfo></businessInfo>
  </div>
</template>

<script>
import businessInfo from './businessInfo'
export default {
  name: '',
  components: {
    businessInfo
  },
  data () {
    return {
    }
  },
  methods: {
    submit () {
    }
  }
}
</script>

<style lang="scss" scoped>
.rightbtn {
  background: #26a2ff;
  color: $white;
  height: 25px;
  padding: 0 5px;
}
</style>
