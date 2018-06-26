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
        <pullup @request="request" :allLoaded="allLoaded">
          <cardbus v-for="(item, index) in items" :key="index" v-bind:data="item" @click.native="admin!=='客户经理'?$router.push({path: '/detailEnter'}):''"></cardbus>
        </pullup>
        <!-- <router-link to="/detailEnter">
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
        </router-link> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <cardbus v-for="(item, index) in items" :key="index" v-bind:data="item" @click.native="admin!=='客户经理'?$router.push({path: '/detailNotEnter'}):''"></cardbus>
        <!-- <div class="card-pull ms">
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
        </div> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!-- <div class="card-pull ms">
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
        </div> -->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import cardbus from '../common/cardbus'
import pullup from '../common/pullup'
export default {
  name: 'businessCenter',
  components: {
    cardbus,
    pullup
  },
  data () {
    return {
      allLoaded: false,
      selected: '1',
      items: [{
        title: '青鸟健身朝阳门店',
        tag: '审批中',
        line: '商城商户',
        major: '健身',
        manager: '城市-角色名称-姓名',
        date: '2017-06-29 - 2018-06-28'
      }, {
        title: '青鸟健身朝阳门店',
        tag: '入驻中',
        line: '商城商户',
        major: '健身',
        manager: '城市-角色名称-姓名',
        date: '2017-06-29 - 2018-06-28'
      }, {
        title: '青鸟健身朝阳门店',
        tag: '冻结',
        line: '商城商户',
        major: '健身',
        manager: '城市-角色名称-姓名',
        date: '2017-06-29 - 2018-06-28'
      }]
    }
  },
  computed: {
    ...mapState({
      admin: state => state.admin
    })
  },
  methods: {
    request () {
      let lastValue = this.items[this.items.length - 1]
      if (this.items.length <= 20) {
        for (let i = 1; i <= 5; i++) {
          this.items.push(lastValue)
        }
      } else {
        this.allLoaded = true
      }
    }
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

</style>
