<template>
  <div class="">
    <mt-header title="拜访详情">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <cardvisit v-for="(item, index) in items" :key="index" v-bind:data="item" @click.native="$router.push({path: '/visitDetail'})"></cardvisit>
    <!-- <div class="card-record">
      <h2 class="title">青鸟健身朝阳店</h2>
      <div class="container">
        <div class="item"><span>商户主体名称：</span><span>青鸟健身有限公司</span></div>
      </div>
      <div class="container">
        <div class="item"><div>业务线：</div><div>商城</div></div>
      </div>
      <div class="container">
        <div class="item"><div>行业：</div><div>健身</div></div>
      </div>
      <div class="container">
        <div class="item"><div>跟进日期：</div><div>2017-05-17</div></div>
      </div>
      <div class="container">
        <div class="item"><div>跟进方式：</div><div>拜访</div></div>
      </div>
      <div class="container">
        <div class="item"><div>客户经理：</div><div>吉林-客户经理-张三</div></div>
      </div>
      <div class="container">
        <div class="item"><div>跟进内容：</div><div>拜访了某某客户拜访内容拜访了某某客户拜访内容拜访了某某客户拜访内容……</div></div>
      </div>
    </div> -->
  </div>
</template>

<script>
import cardvisit from '../common/cardvisit'
export default {
  name: '',
  components: {
    cardvisit
  },
  data () {
    return {
      items: [{
        title: '青鸟健身朝阳店',
        line: '商城',
        major: '健身',
        followdate: '2017-05-17',
        followtype: '拜访',
        manager: '吉林-客户经理-张三',
        followcon: '拜访了某某客户拜访内容拜访了某某客户拜访内容拜访了某某客户拜访内容……'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
// .card-record {
//   background-color: #fff;
//   padding: 5px 10px;
//   margin: 8px;
//   border-radius: 5px;
// }
// .card-record h2 {
//   padding: 8px 0;
//   font-weight: 100;
//   font-size: 16px;
//   border-bottom: 1px solid #ccc;
// }
// .mint-navbar .mint-tab-item.is-selected {
//   border-bottom: 3px solid #000;
//   color: #000;
// }
// .title {
//   color: #000;
// }
// .container {
//   display: flex;
//   align-items: stretch;
// }
// .item {
//   flex: 1;
//   padding-bottom: 10px;
//   overflow: hidden;
//   line-height: 21px;
//   div:first-child {
//     float: left;
//     width: 80px;
//   }
//   div:last-child {
//     padding-left: 80px;
//   }
// }
</style>
