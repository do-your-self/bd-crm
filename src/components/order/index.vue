<template>
  <div class="">
    <mt-header title="商户订单">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="filterCon">
      <div class="item">业务线<i class="fa fa-chevron-down" aria-hidden="true"></i></div>
      <div class="item">商户状态<i class="fa fa-chevron-down" aria-hidden="true"></i></div>
      <div class="item" @click="$router.push({path: '/filter'})">筛选<i class="fa fa-chevron-down" aria-hidden="true"></i></div>
    </div>
    <cardorder @click.native="$router.push({path: '/orderDetail'})"></cardorder>
  </div>
</template>

<script>
import cardorder from '../common/cardorder'
import pullup from '../common/pullup'
export default {
  name: '',
  components: {
    cardorder,
    pullup
  },
  data () {
    return {
      popupVisible: false
    }
  },
  methods: {
    handleClick () {
      this.popupVisible = true
    },
    cancle () {
      this.popupVisible = false
    },
    submit () {
      this.popupVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.filterCon {
  font-size: $font-small;
  color: $color-primary;
  display: flex;
  background:#fff;
  padding: 8px;
  text-align: center;
  .item {
    flex: 1;
  }
}
</style>
