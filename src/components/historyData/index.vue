<template>
  <div class="">
    <mt-popup v-model="popupVisible" position="top" popup-transition="popup-fade" :modal=true width="100%">
      <mt-cell title="开始时间" is-link value="请选择开始时间"></mt-cell>
      <mt-cell title="结束时间" is-link value="请选择结束时间"></mt-cell>
      <mt-cell title="业务线" is-link value="请选择"></mt-cell>
      <mt-cell title="大区/城市" is-link value="请选择"></mt-cell>
      <div class="btnCon">
        <mt-button size="small" type="default" class="btn" @click="cancle">取消</mt-button>
        <mt-button size="small" type="primary" class="btn btnR" @click="submit">确定</mt-button>
      </div>
    </mt-popup>
    <mt-header title="历史统计数据">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <span class="filter" @click="handleClick">筛选</span>
      </mt-button>
    </mt-header>
    <card v-for="(item, index) in items" :key="index" :title="item.title" :card="item.card" @click.native="$router.push({path: '/dataDetail'})"></card>
  </div>
</template>

<script>
import card from '../common/card'
export default {
  name: '',
  components: {
    card
  },
  data () {
    return {
      shopName: '',
      popupVisible: false,
      items: [{
        title: '2018年 5月1日~5月21日',
        card: [{
          name: 'GMV',
          value: 3000
        }, {
          name: '入驻商户',
          value: 100
        }, {
          name: '拜访量',
          value: 100
        }]
      }, {
        title: '2018年 5月1日~5月21日',
        card: [{
          name: 'GMV',
          value: 3000
        }, {
          name: '入驻商户',
          value: 100
        }, {
          name: '拜访量',
          value: 100
        }]
      }, {
        title: '2018年 5月1日~5月21日',
        card: [{
          name: 'GMV',
          value: 3000
        }, {
          name: '入驻商户',
          value: 100
        }, {
          name: '拜访量',
          value: 100
        }]
      }]
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

</style>
