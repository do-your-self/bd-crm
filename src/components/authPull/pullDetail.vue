<template>
  <div class="">
    <mt-header title="数据详情">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <cardpull v-for="(item, index) in items" :key="index" v-bind:item="item"></cardpull>
  </div>
</template>

<script>
import cardpull from '../common/cardpull'
export default {
  name: '',
  components: {
    cardpull
  },
  data () {
    return {
      items: [{
        title: '2018年 4月1日~4月30日',
        buspull: 3000,
        perpull: 300,
        total: 3300
      }, {
        title: '2018年 4月1日~4月30日',
        buspull: 3000,
        perpull: 300,
        total: 3300
      }],
      selected: '1',
      shopName: '',
      value: null,
      startDate: new Date(),
      pickerValue: null
    }
  },
  methods: {
    handleClick () {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
