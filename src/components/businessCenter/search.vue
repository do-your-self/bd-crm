<template>
  <div class="">
    <mt-header title="BD_CRM系统">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="search" cancel-text="X" placeholder="搜索"></mt-search>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>

</style>
