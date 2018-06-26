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
      <mt-tab-container-item id="1" class="ms">
        <pullup @request="request" :allLoaded="allLoaded">
          <!-- <cardapproval v-for="(item, index) in items" :key="index" v-bind:item="item"></cardapproval> -->
          <cardapproval @click.native="$router.push({'path': '/approvalDetail'})"></cardapproval>
        </pullup>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="ms">
        <cardapproval @click.native="$router.push({'path': '/approvalDetail'})"></cardapproval>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import cardapproval from '../common/cardapproval'
import pullup from '../common/pullup'
export default {
  name: '',
  components: {
    cardapproval,
    pullup
  },
  data () {
    return {
      allLoaded: false,
      selected: '1'
    }
  },
  methods: {
    request () {
      // let lastValue = this.items[this.items.length - 1]
      // if (this.items.length <= 20) {
      //   for (let i = 1; i <= 5; i++) {
      //     this.items.push(lastValue)
      //   }
      // } else {
      //   this.allLoaded = true
      // }
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
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid $color-primary;
  }
</style>
