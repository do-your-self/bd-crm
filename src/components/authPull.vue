<template>
  <div class="">
    <mt-header title="用户认证拉新">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <!-- <span class="filter" @click="handleClick">筛选</span> -->
        <span class="filter" @click="$router.push({path: '/filter'})">筛选</span>
      </mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">拉新人数</mt-tab-item>
      <mt-tab-item id="2">认证人数</mt-tab-item>
    </mt-navbar>
    <mt-popup v-model="popupVisible" position="top" popup-transition="popup-fade" :modal=true width="100%">
      <mt-cell title="开始时间" is-link value="请选择开始时间" @click="openPicker('picker')"></mt-cell>
      <mt-cell title="结束时间" is-link value="请选择结束时间"></mt-cell>
      <mt-cell title="业务线" is-link value="请选择"></mt-cell>
      <mt-cell title="大区/城市" is-link value="请选择"></mt-cell>
      <div class="btnCon">
        <mt-button size="small" type="default" class="btn" @click="cancle">取消</mt-button>
        <mt-button size="small" type="primary" class="btn btnR" @click="submit">确定</mt-button>
      </div>
    </mt-popup>
    <mt-datetime-picker
      :modal=true
      ref="picker"
      type="date"
      v-model="value"
      @confirm="handleChange">
    </mt-datetime-picker>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="card-pull ms" @click="openPicker('picker')">
          <h2 class="title">{{title}}</h2>
          <div class="container">
            <div class="item">商户拉新</div>
            <div class="item">3000人</div>
          </div>
          <div class="container">
            <div class="item">个人拉新</div>
            <div class="item">300人</div>
          </div>
          <p class="foot">合计：3300人</p>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="card-pull ms">
          <h2 class="title">{{title}}</h2>
          <div class="container">
            <div class="item">商户拉新</div>
            <div class="item">3000人</div>
          </div>
          <div class="container">
            <div class="item">个人拉新</div>
            <div class="item">300人</div>
          </div>
          <p class="foot">合计：3300人</p>
        </div>
        <div class="card-pull">
          <h2 class="title">{{title}}</h2>
          <div class="container">
            <div class="item">商户拉新</div>
            <div class="item">3000人</div>
          </div>
          <div class="container">
            <div class="item">个人拉新</div>
            <div class="item">300人</div>
          </div>
          <p class="foot">合计：3300人</p>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import card from './common/card'
export default {
  name: 'countData',
  components: {
    card
  },
  data () {
    return {
      title: '166666',
      selected: '1',
      shopName: '',
      popupVisible: false,
      value: null,
      startDate: new Date(),
      pickerValue: null
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
    },
    openPicker (picker) {
      this.$refs[picker].open()
    },
    handleChange (value) {
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
