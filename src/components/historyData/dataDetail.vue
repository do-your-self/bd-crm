<template>
  <div class="">
    <mt-header title="数据详情">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <card v-for="(item, index) in items" :key="index" :title="item.title" :card="item.card"></card>
  </div>
</template>

<script>
import card from '../common/card'
export default {
  name: '',
  components: {
    card
  },
  data () {
    return {
      shopName: '',
      popupVisible: false,
      items: [{
        title: '2018年 5月1日~5月21日',
        card: [{
          name: 'GMV',
          value: 3000
        }, {
          name: '入驻商户',
          value: 100
        }, {
          name: '拜访量',
          value: 100
        }]
      }, {
        title: '2018年 5月1日~5月21日',
        card: [{
          name: 'GMV',
          value: 3000
        }, {
          name: '入驻商户',
          value: 100
        }, {
          name: '拜访量',
          value: 100
        }]
      }, {
        title: '2018年 5月1日~5月21日',
        card: [{
          name: 'GMV',
          value: 3000
        }, {
          name: '入驻商户',
          value: 100
        }, {
          name: '拜访量',
          value: 100
        }]
      }]
    }
  },
  methods: {
    handleClick () {
      this.popupVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
