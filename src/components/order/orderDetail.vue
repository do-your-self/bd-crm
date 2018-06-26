<template>
  <div class="">
    <mt-header title="订单详情">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="card-bd mm">
      <div class="title">订单号 jz6888<span>分期还款中</span></div>
      <div class="container">
        <div class="item">国产隐形车衣国产隐形车衣国产隐形车衣国产隐形车衣国产……</div>
        <div class="item"><span>￥500.00</span><br/><span>x2</span></div>
      </div>
      <div class="footer">
        <p>订单生成时间：2017-08-07  18:35</p>
      </div>
      <mt-cell title="首付" value="￥500.00"></mt-cell>
      <mt-cell title="月供" value="￥174.17（）"></mt-cell>
      <mt-cell title="期数" value="3期"></mt-cell>
      <mt-cell title="" is-link value="查看账单" to="/account"></mt-cell>
      <mt-cell title="借款人" value="*冰"></mt-cell>
      <mt-cell title="手机号" value="133********"></mt-cell>
    </div>
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

<style scoped lang="scss">
.card-bd {
  font-size: $font-small;
  color: $color-primary;
  border: 1px solid #ccc;
  border-top: 0;
  // border-radius: 5px;
  background: #fff;
  .title {
    padding: 8px;
    border-bottom: 1px solid #ccc;
    span {
      color: orange;
      float: right;
    }
  }
  .container {
    display: flex;
    align-items: stretch;
    padding: 8px;
    border-bottom: 1px solid #ccc;
    .item:last-child {
      flex: 2;
      text-align: right;
    }
    .item:first-child {
      flex: 3;
      overflow: hidden;
      line-height: 21px;
    }
  }
  .footer {
    text-align: right;
    p {
      margin: 0;
      padding: 15px 5px;
    }
    p:first-child {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
