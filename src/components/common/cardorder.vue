<template>
  <div class="card-order ms">
    <div class="card-hd">
      青鸟健身朝阳门店
    </div>
    <div class="card-bd">
      <div class="title">订单号 jz6888<span>分期还款中</span></div>
      <div class="container">
        <div class="item">国产隐形车衣国产隐形车衣国产隐形车衣国产隐形车衣国产……</div>
        <div class="item"><span>￥500.00</span><br/><span>x2</span></div>
      </div>
      <div class="footer">
        <p>月供：¥174.17（含服务费¥7.50）x 3</p>
        <p>合计：￥1,000.00（含首付¥500.00）</p>
      </div>
    </div>
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
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.card-order {
  font-size: $font-small;
  color: $color-primary;
  margin: 8px;
  .card-hd {
    border: 1px solid #ccc;
    border-bottom: 1px dashed #ccc;
    border-radius: 5px;
    padding: 10px;
    background: #fff;
  }
  .card-bd {
    border: 1px solid #ccc;
    border-top: 0;
    border-radius: 5px;
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
}
</style>
