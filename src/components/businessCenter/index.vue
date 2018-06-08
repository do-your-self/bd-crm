<template>
  <div class="">
    <mt-header title="商户管理">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button icon="search" slot="right" @click="$router.push({path: '/search'})"></mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">入驻商户</mt-tab-item>
      <mt-tab-item id="2">未入驻商户</mt-tab-item>
      <mt-tab-item id="3">到期商户</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <router-link to="/detailEnter">
          <div class="card-pull ms">
            <h2 class="title">{{title}}<span class="tag">审批中</span></h2>
            <div class="container">
              <div class="item"><span>业务线：</span><span>商城商户</span></div>
              <div class="item"><span>行业：</span><span>健身</span></div>
            </div>
            <div class="container">
              <div class="item"><span>客户经理：</span><span>城市-角色名称-姓名</span></div>
            </div>
            <div class="container">
              <div class="item"><span>合同时间：</span><span>2017-06-29 - 2018-06-28</span></div>
            </div>
          </div>
        </router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="card-pull ms">
          <h2 class="title">{{title}}<span class="tag"></span></h2>
          <div class="container">
            <div class="item"><span>业务线：</span><span>商城商户</span></div>
            <div class="item"><span>行业：</span><span>健身</span></div>
          </div>
          <div class="container">
            <div class="item"><span>客户经理：</span><span>城市-角色名称-姓名</span></div>
          </div>
          <div class="container">
            <div class="item"><span>合同时间：</span><span>2017-06-29 - 2018-06-28</span></div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="card-pull ms">
          <h2 class="title">{{title}}<span class="tag"></span></h2>
          <div class="container">
            <div class="item"><span>业务线：</span><span>商城商户</span></div>
            <div class="item"><span>行业：</span><span>健身</span></div>
          </div>
          <div class="container">
            <div class="item"><span>客户经理：</span><span>城市-角色名称-姓名</span></div>
          </div>
          <div class="container">
            <div class="item"><span>合同时间：</span><span>2017-06-29 - 2018-06-28</span></div>
          </div>
        </div>
        <div class="card-pull ms">
          <h2 class="title">{{title}}<span class="tag"></span></h2>
          <div class="container">
            <div class="item"><span>业务线：</span><span>商城商户</span></div>
            <div class="item"><span>行业：</span><span>健身</span></div>
          </div>
          <div class="container">
            <div class="item"><span>客户经理：</span><span>城市-角色名称-姓名</span></div>
          </div>
          <div class="container">
            <div class="item"><span>合同时间：</span><span>2017-06-29 - 2018-06-28</span></div>
          </div>
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
      title: '青鸟健身朝阳门店',
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
.card-pull {
  background-color: #FFFFFF;
  margin: 8px 8px 0 8px;
  position: relative;
  border-radius: 2px;
  border: 1px solid green;
  background-color: #fff;
  padding-left: 5px ;
  .tag {
    position: absolute;
    top: 5px;
    right: 0;
    z-index: 1;
    background: #333;
    color: #ffffff;
    padding: 2px 8px;
    font-size: 14px;
  }
}
.card-pull h2 {
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
  text-align: left;
  padding-bottom: 10px;
}
</style>
