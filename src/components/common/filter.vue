<template>
  <div class="">
    <!-- <mt-button icon="back" @click="$router.go(-1)">返回</mt-button> -->
    <mt-cell title="开始时间" is-link :value='start' @click.native="openPicker('picker')"></mt-cell>
    <mt-cell title="结束时间" is-link :value="end"></mt-cell>
    <mt-cell title="业务线" is-link value="请选择"></mt-cell>
    <mt-cell title="大区/城市" is-link value="请选择" v-if="admin==='客户经理'"></mt-cell>
    <mt-field label="商户门店名称" placeholder="输入商户名称" v-model="shopName"></mt-field>
    <div class="btnCon">
      <mt-button size="small" type="default" class="btn" @click="$router.go(-1)">取消</mt-button>
      <mt-button size="small" type="primary" class="btn btnR" @click="$router.go(-1)">确定</mt-button>
    </div>
    <mt-datetime-picker
      :modal=true
      ref="picker"
      type="date"
      v-model="value"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {
      end: '请选择结束时间',
      type: 'start',
      value: null,
      startDate: new Date(),
      pickerValue: null,
      shopName: ''
    }
  },
  methods: {
    openPicker (picker) {
      this.$refs[picker].open()
    },
    handleChange (value) {
    }
  },
  computed: {
    ...mapState({
      admin: state => state.admin
    }),
    start () {
      if (this.value) {
        let d = new Date(this.value)
        let resDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        return resDate
      } else {
        return '请选择开始时间'
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
