<template>
  <div class="">
    <mt-header title="拜访记录">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <span class="filter" @click="$router.push({path: '/filter'})">筛选</span>
        <span>
          <i class="fa fa-plus size" aria-hidden="true" @click="$router.push({path: '/createVisit'})"></i>
        </span>
      </mt-button>
    </mt-header>
    <pullup @request="request" :allLoaded="allLoaded">
      <cardvisit v-for="(item, index) in items" :key="index" v-bind:data="item" @click.native="$router.push({path: '/visitDetail'})"></cardvisit>
    </pullup>
  </div>
</template>

<script>
import cardvisit from '../common/cardvisit'
import pullup from '../common/pullup'
export default {
  name: '',
  components: {
    cardvisit,
    pullup
  },
  data () {
    return {
      allLoaded: false,
      items: [{
        head: '2018-5',
        title: '青鸟健身朝阳店',
        line: '商城',
        major: '健身',
        followdate: '2017-05-17',
        followtype: '拜访',
        manager: '吉林-客户经理-张三',
        followcon: '拜访了某某客户拜访内容拜访了某某客户拜访内容拜访了某某客户拜访内容……'
      }, {
        head: '2018-5',
        title: '青鸟健身朝阳店',
        line: '商城',
        major: '健身',
        followdate: '2017-05-17',
        followtype: '拜访',
        manager: '吉林-客户经理-张三',
        followcon: '拜访了某某客户拜访内容拜访了某某客户拜访内容拜访了某某客户拜访内容……'
      }]
    }
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
  }
}
</script>

<style lang="scss" scoped>
.mint-button-text {
  display: inline-block;
  height: 35px;
  line-height: 35px;
}
.size {
  font-size: 20px;
  padding: 0 10px 0 15px;
  position: relative;
  top: 3px;
}
</style>
