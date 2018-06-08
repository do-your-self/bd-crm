<template>
  <div class="">
    <mt-header title="历史统计数据">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <span class="filter">筛选</span>
        <mt-button icon="add" slot="right"></mt-button>
      </mt-button>
      <div class="card-record">
        <h2 class="title">{{title}}</h2>
        <div class="container">
          <div class="item">商户拉新</div>
          <div class="item">3000人</div>
        </div>
        <div class="container">
          <div class="item">个人拉新</div>
          <div class="item">300人</div>
        </div>
        <p class="foot">合计：3300人</p>
      </div>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.card-record {
  background-color: #fff;
  padding: 0 20px 0 10px;
  margin-bottom: 2px;
}
.card-record h2 {
  padding: 8px 0 4px;
  margin: 0 0 4px;
  font-weight: 100;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #000;
  color: #000;
}
.title {
  color: #000;
}
.container {
  display: flex;
}
.item {
  flex: 1;
  text-align: right;
  padding-bottom: 10px;
}
p.foot {
  text-align: right;
  padding: 8px;
  margin: 0 0 0 100px;
  border-top: 1px solid #ccc;
}
</style>
