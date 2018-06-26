<template>
  <div class="">
    <mt-header title="账单">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="container">
      <div class="item">1/21期</div>
      <div class="item">¥174.17（含服务费¥7.50</div>
    </div>
    <div class="container">
      <div class="item">还款日2017-11-08</div>
      <div class="item"><span>已还清</span></div>
    </div>
    <div class="container">
      <div class="item">1/21期</div>
      <div class="item">¥174.17（含服务费¥7.50</div>
    </div>
    <div class="container">
      <div class="item">还款日2017-11-08</div>
      <div class="item"><span>已还清</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: $white;
  display: flex;
  font-size: $font-small;
  color: $color-primary;
  padding: 0 10px;
  .item {
    flex: 1;
    padding-top: 5px;
    line-height: 21px;
  }
  .item:first-child {
    text-align: left;
  }
  .item:last-child {
    text-align: right;
  }
}
</style>
