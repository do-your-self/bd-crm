<template>
  <div class="">
    <mt-header title="历史统计数据">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <span class="filter" @click="$router.push({path: '/filter'})">筛选</span>
      </mt-button>
    </mt-header>
    <pullup @request="request" :allLoaded="allLoaded">
      <card v-for="(item, index) in items" :key="index" :title="item.title" :card="item.card" @click.native="admin!=='客户经理'?$router.push({path: '/dataDetail'}):''"></card>
    </pullup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import card from '../common/card'
import pullup from '../common/pullup'
export default {
  name: '',
  components: {
    card,
    pullup
  },
  data () {
    return {
      allLoaded: false,
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
      }]
    }
  },
  computed: {
    ...mapState({
      admin: state => state.admin
    })
  },
  methods: {
    request () {
      let lastValue = this.items[this.items.length - 1]
      if (this.items.length <= 20) {
        for (let i = 1; i <= 5; i++) {
          this.items.push(lastValue)
        }
      } else {
        this.allLoaded = true
      }
    }
  },
  created () {
    // for (let i = 1; i <= 20; i++) {
    //   this.items.push(i);
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
