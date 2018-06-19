<template>
  <div class="">
    <mt-header title="审批管理">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">我审批的</mt-tab-item>
      <mt-tab-item id="2">我发起的</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <router-link to="/approvalDetail">
          <div class="card-approval ms">
            <h2 class="title">入驻申请 — XXX商家XXX商家...<span class="date">2017-06-29</span></h2>
            <div class="container">
              <div class="item"><span>商户地区：</span><span>吉林</span></div>
            </div>
            <div class="container">
              <div class="item"><span>所属业务线：</span><span>商城商户</span></div>
            </div>
            <div class="container">
              <div class="item"><span>行业：</span><span>健身</span></div>
            </div>
            <div class="footer process">吉林-城市经理- 王一  审批中</div>
          </div>
        </router-link>
          <div class="card-approval">
            <h2 class="title">入驻申请 — XXX商家XXX商家...<span class="date">2017-06-29</span></h2>
            <div class="container">
              <div class="item"><span>商户地区：</span><span>吉林</span></div>
            </div>
            <div class="container">
              <div class="item"><span>所属业务线：</span><span>商城商户</span></div>
            </div>
            <div class="container">
              <div class="item"><span>行业：</span><span>健身</span></div>
            </div>
            <div class="footer process">吉林-城市经理- 王一  审批中</div>
          </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
          <div class="card-approval ms">
            <h2 class="title">入驻申请 — XXX商家XXX商家...<span class="date">2017-06-29</span></h2>
            <div class="container">
              <div class="item"><span>商户地区：</span><span>吉林</span></div>
            </div>
            <div class="container">
              <div class="item"><span>所属业务线：</span><span>商城商户</span></div>
            </div>
            <div class="container">
              <div class="item"><span>行业：</span><span>健身</span></div>
            </div>
            <div class="footer process">吉林-城市经理- 王一  审批中</div>
          </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
// import card from './common/card'
export default {
  name: 'businessCenter',
  // components: {
  //   card
  // },
  data () {
    return {
      selected: '1'
    }
  },
  methods: {

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
.card-approval {
  background-color: #FFFFFF;
  position: relative;
  background-color: #fff;
  padding: 8px 8px 5px;
  .date {
    float: right;
  }
}
.card-approval h2 {
  padding: 8px 0 4px;
  margin: 0 0 4px;
  font-weight: 100;
  font-size: 16px;
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
  text-align: left;
  padding-bottom: 10px;
}
.footer {
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
  .process {
    color: orange;
  }
  .success {
    color: green;
  }
  .reject {
    color: red;
  }
}

</style>
