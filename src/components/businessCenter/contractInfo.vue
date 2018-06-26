<template>
  <div class="">
    <mt-header title="合同信息">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button slot="right" class="rightbtn" @click="submit">编辑</mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">合同信息</mt-tab-item>
      <mt-tab-item id="2">合同附件</mt-tab-item>
      <mt-tab-item id="3">执照附件</mt-tab-item>
      <mt-tab-item id="4">门店照片</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-field label="商户主体名称" placeholder="请输入商户名称" v-model="contractInfo.bus_name" class="ms"></mt-field>
        <mt-field label="商户门店简称" placeholder="请输入商户门店简称" v-model="contractInfo.bus_short_name"></mt-field>
        <mt-field label="法定代表人" placeholder="请输入" v-model="contractInfo.legal_person"></mt-field>
        <mt-field label="法定代表人证件号码" placeholder="请输入" v-model="contractInfo.legal_card"></mt-field>
        <mt-cell title="合作模式" is-link :value="contractInfo.model"></mt-cell>
        <mt-cell title="合同开始日期" is-link :value="contractInfo.start_date"></mt-cell>
        <mt-cell title="合同结束日期" is-link :value="contractInfo.end_data"></mt-cell>
        <mt-field label="备注说明" placeholder="请填写50字以内，可不填" type="textarea" rows="4" v-model="contractInfo.desc"></mt-field>
        <div class="btnl">
          <mt-button size="large" type="primary" @click="submit">保存</mt-button>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="ms">
        <div class="flexImg">
          <upimg title="委托人代收款声明函"></upimg>
          <upimg title="授权委托书"></upimg>
          <upimg title="声明函"></upimg>
          <upimg title="线下商户合作协议"></upimg>
        </div>
        <div class="flexImg mm">
          <upimg title="线下商户合作协议(5张)"></upimg>
          <upimg title=""></upimg>
        </div>
        <div class="flexImg mm">
          <upimg title="授权委托书(选传)"></upimg>
        </div>
        <div class="btnl">
          <mt-button size="large" type="primary" @click="submit">保存</mt-button>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="ms">
        <div class="flexImg">
          <upimg title="营业执照"></upimg>
          <upimg title="组织机构代码证(选传)"></upimg>
          <upimg title="税务登记证(选传)"></upimg>
          <upimg title="特许经营许可证(如无可不提供)"></upimg>
        </div>
        <div class="flexImg mm">
          <upimg title="法定代表人或实际负责人身份证（正面）"></upimg>
          <upimg title="法定代表人或实际负责人身份证（反面）"></upimg>
        </div>
        <div class="flexImg mm">
          <upimg title="银行开户行许可证"></upimg>
        </div>
        <div class="flexImg mm">
          <upimg title="其它"></upimg>
        </div>
        <div class="btnl">
          <mt-button size="large" type="primary" @click="submit">保存</mt-button>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4" class="ms">
        <div class="flexImg">
          <upimg title="店铺室外照片"></upimg>
          <upimg title="店铺室内照片1"></upimg>
          <upimg title="店铺室内照片2"></upimg>
          <upimg title="店铺室内照片3"></upimg>
        </div>
        <div class="flexImg mm">
          <upimg title="BD同签约人手持合同"></upimg>
          <upimg title="经营场地声明函"></upimg>
        </div>
        <div class="btnl">
          <mt-button size="large" type="primary" @click="submit">保存</mt-button>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import upimg from '../common/upimg'
export default {
  name: 'businessCenter',
  components: {
    upimg
  },
  data () {
    return {
      allLoaded: false,
      selected: '1',
      contractInfo: {
        bus_name: '',
        bus_short_name: '',
        legal_person: '',
        legal_card: '',
        model: '请选择',
        start_date: '请选择',
        end_data: '请选择',
        desc: ''
      },
      src: false
    }
  },
  computed: {
    ...mapState({
      admin: state => state.admin
    })
  },
  methods: {
    submit () {

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
.rightbtn {
  background: #26a2ff;
  color: $white;
  height: 25px;
  padding: 0 5px;
}
.flexImg {
  padding: 0 30px;
  background: $white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
