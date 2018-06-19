<template>
  <div class="">
    <mt-header title="审批">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="审批结果" is-link value="2019-03-30"></mt-cell>
    <mt-field label="备注说明" placeholder="请输入" type="textarea" rows="4" v-model="introduction"></mt-field>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      selected: '1',
      introduction: ''
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
  background-color: #fff;
  padding: 0 20px 0 10px;
  margin-bottom: 2px;
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
  text-align: right;
  padding-bottom: 10px;
}
p.foot {
  text-align: right;
  padding: 8px;
  margin: 0 0 0 100px;
  border-top: 1px solid #ccc;
}
</style>
