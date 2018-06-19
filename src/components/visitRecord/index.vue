<template>
  <div class="">
    <mt-popup v-model="popupVisible" position="top" popup-transition="popup-fade" :modal=true width="100%">
      <mt-cell title="开始时间" is-link value="请选择开始时间"></mt-cell>
      <mt-cell title="结束时间" is-link value="请选择结束时间"></mt-cell>
      <mt-cell title="业务线" is-link value="请选择"></mt-cell>
      <mt-cell title="大区/城市" is-link value="请选择"></mt-cell>
      <mt-field label="商户门店名称" placeholder="输入商户名称" v-model="shopName"></mt-field>
      <div class="btnCon">
        <mt-button size="small" type="default" class="btn" @click="cancle">取消</mt-button>
        <mt-button size="small" type="primary" class="btn btnR" @click="submit">确定</mt-button>
      </div>
    </mt-popup>
    <mt-header title="拜访记录">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <span class="filter" @click="handleClick">筛选</span>
        <i class="fa fa-plus" aria-hidden="true" @click="$router.push({path: '/createVisit'})"></i>
      </mt-button>
    </mt-header>
    <div class="title" @click="$router.push({path: '/userCenter'})">
      2018-5月
    </div>
    <div class="card-record" @click="$router.push({path: '/visitDetail'})">
      <h2 class="title">青鸟健身朝阳店</h2>
      <div class="container">
        <div class="item"><div>业务线：</div><div>商城</div></div>
        <div class="item"><div>行业：</div><div>健身</div></div>
      </div>
      <div class="container">
        <div class="item"><div>跟进日期：</div><div>2017-05-17</div></div>
        <div class="item"><div>跟进方式：</div><div>拜访</div></div>
      </div>
      <div class="container">
        <div class="item"><div>客户经理：</div><div>吉林-客户经理-张三</div></div>
      </div>
      <div class="container">
        <div class="item"><div>跟进内容：</div><div>拜访了某某客户拜访内容拜访了某某客户拜访内容拜访了某某客户拜访内容……</div></div>
      </div>
    </div>
    <div class="title" @click="$router.push({path: '/userCenter'})">
      2018-5月
    </div>
    <div class="card-record">
      <h2 class="title">青鸟健身朝阳店</h2>
      <div class="container">
        <div class="item"><div>业务线：</div><div>商城</div></div>
        <div class="item"><div>行业：</div><div>健身</div></div>
      </div>
      <div class="container">
        <div class="item"><div>跟进日期：</div><div>2017-05-17</div></div>
        <div class="item"><div>跟进方式：</div><div>拜访</div></div>
      </div>
      <div class="container">
        <div class="item"><div>客户经理：</div><div>吉林-客户经理-张三</div></div>
      </div>
      <div class="container">
        <div class="item"><div>跟进内容：</div><div>拜访了某某客户拜访内容拜访了某某客户拜访内容拜访了某某客户拜访内容……</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      shopName: '',
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
.card-record {
  background-color: #fff;
  padding: 5px 10px;
  margin: 8px;
  border-radius: 5px;
}
.card-record h2 {
  padding: 8px 0;
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
  align-items: stretch;
}
.item {
  flex: 1;
  padding-bottom: 10px;
  overflow: hidden;
  line-height: 21px;
  div:first-child {
    float: left;
    width: 80px;
  }
  div:last-child {
    padding-left: 80px;
  }
}
</style>
