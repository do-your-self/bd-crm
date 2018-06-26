<template>
  <div class="">
    <mt-header title="客户经理变更">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-cell label="原客户经理" v-model="mng"></mt-cell>
    <mt-field label="变更客户经理" placeholder="请输入" v-model="newmng"></mt-field>
    <mt-field label="变更原因" placeholder="请输入" type="textarea" rows="4" v-model="changeDesc"></mt-field>
    <mt-field label="变更生效时间" placeholder="请输入" v-model="date"></mt-field>
    <div class="btnl">
      <mt-button size="large" type="primary" @click="submit">提交</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      mng: '王一',
      newmng: '',
      changeDesc: '',
      date: ''
    }
  },
  methods: {
    submit () {

    }
  }
}
</script>

<style scoped>

</style>
