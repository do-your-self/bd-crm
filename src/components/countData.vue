<template>
  <div class="">
    <mt-header title="历史统计数据">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right"><span class="filter">筛选</span></mt-button>
    </mt-header>
    <card v-for="(item, index) in items" :key="index" :title="item.title" :card="item.card"></card>
  </div>
</template>

<script>
import card from './common/card'
export default {
  name: 'countData',
  components: {
    card
  },
  data () {
    return {
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
  }
}
</script>

<style lang="scss" scoped>

</style>
