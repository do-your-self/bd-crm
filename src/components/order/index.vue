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
      <div class="item" @click="handleClick">筛选<i class="fa fa-chevron-down" aria-hidden="true"></i></div>
    </div>
    <mt-popup v-model="popupVisible" position="top" popup-transition="popup-fade" :modal=true width="100%">
      <mt-field label="商户门店简称" value="请输入商户名称"></mt-field>
      <mt-field label="订单号" value="请输入订单号"></mt-field>
      <mt-cell title="开始时间" is-link value="请选择开始时间"></mt-cell>
      <mt-cell title="结束时间" is-link value="请选择结束时间"></mt-cell>
      <div class="btnCon">
        <mt-button size="small" type="default" class="btn" @click="cancle">取消</mt-button>
        <mt-button size="small" type="primary" class="btn btnR" @click="submit">确定</mt-button>
      </div>
    </mt-popup>
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
    <div class="card-order ms">
      <div class="card-hd">
        青鸟健身朝阳门店
      </div>
      <div class="card-bd">
        <div class="title">订单号 jz6888<span>已完结</span></div>
        <div class="container">
          <div class="item">国产隐形车衣国产隐形车衣国产隐形车衣国产隐形车衣国产……</div>
          <div class="item"><span>￥500.00</span><br/><span>x2</span></div>
        </div>
        <div class="footer">
          <p>合计：￥1,000.00（含首付¥500.00）</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
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
  display: flex;
  background:#fff;
  padding: 8px;
  text-align: center;
  .item {
    flex: 1;
  }
}
.card-order {
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
        padding-bottom: 10px;
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
