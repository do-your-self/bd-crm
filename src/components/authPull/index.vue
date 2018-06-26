<template>
  <div class="">
    <mt-header title="用户认证拉新">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <span class="filter" @click="$router.push({path: '/filter'})">筛选</span>
      </mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">拉新人数</mt-tab-item>
      <mt-tab-item id="2">认证人数</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <pullup @request="request" :allLoaded="allLoaded">
          <cardpull v-for="(item, index) in items" :key="index" v-bind:item="item" @click.native="admin!=='客户经理'?$router.push({path: '/pullDetail'}):''"></cardpull>
        </pullup>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- <pullup @request="request" :allLoaded="allLoaded">
          <cardpull v-for="(item, index) in items" :key="index" v-bind:item="item"></cardpull>
        </pullup> -->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import pullup from '../common/pullup'
import cardpull from '../common/cardpull'
export default {
  name: 'countData',
  components: {
    pullup,
    cardpull
  },
  data () {
    return {
      allLoaded: false,
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
  computed: {
    ...mapState({
      admin: state => state.admin
    })
  },
  methods: {
    handleChange (value) {
    },
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
  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
