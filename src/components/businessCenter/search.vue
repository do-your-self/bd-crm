<template>
  <div class="">
    <mt-header title="BD_CRM系统">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="search" cancel-text="取消" placeholder="搜索">
      <div class="result">
        <pullup @request="request" :allLoaded="allLoaded">
          <cardbus v-for="(item, index) in items" :key="index" v-bind:data="item" @click.native="admin!=='客户经理'?$router.push({path: '/detailEnter'}):''"></cardbus>
        </pullup>
      </div>
    </mt-search>
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
      search: '',
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

<style scoped>
.result {
  margin-top: 50px;
}
.mint-search-list {
  display: block!important;
}
</style>
