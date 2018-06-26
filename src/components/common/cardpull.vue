<template>
  <div class="card-pull ms">
    <h2 class="title">{{item.title}}</h2>
    <div class="container">
      <div class="item">商户拉新</div>
      <div class="item">{{item.buspull}}人</div>
    </div>
    <div class="container">
      <div class="item">个人拉新</div>
      <div class="item">{{item.perpull}}人</div>
    </div>
    <p class="foot">合计：{{item.total}}人</p>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
    }
  },
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
.card-pull {
  background-color: $white;
  padding: 0 10px;
  margin-bottom: 2px;
  color: $color-primary;
}
.card-pull h2.title {
  padding: 10px 0 5px;
  margin: 0 0 5px;
  font-weight: 100;
  font-size: $font-small;
  border-bottom: 1px solid #ccc;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #000;
}
.container {
  display: flex;
  color: $color-primary;
  font-size: $font-small;
}
.item {
  flex: 1;
  text-align: right;
  padding-bottom: 10px;
}
p.foot {
  color: $color-primary;
  font-size: $font-small;
  text-align: right;
  padding: 8px;
  margin: 0 0 0 100px;
  border-top: 1px solid #ccc;
}
</style>
