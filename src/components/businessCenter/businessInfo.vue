<template>
  <div class="">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">基本信息</mt-tab-item>
      <mt-tab-item id="2">商户信息</mt-tab-item>
      <mt-tab-item id="3">门店信息</mt-tab-item>
      <mt-tab-item id="4">财务信息</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" class="ml">
      <mt-tab-container-item id="1">
        <mt-field label="客户经理人" placeholder="请输入客户经理人" v-model="manager"></mt-field>
        <mt-field label="商户主体名称" placeholder="请输入商户名称" v-model="baseInfo.bus_name" class="ms"></mt-field>
        <mt-field label="商户门店简称" placeholder="请输入商户门店简称" v-model="baseInfo.bus_short_name"></mt-field>
        <mt-field label="业务线" placeholder="请输入" v-model="baseInfo.line" class="ms"></mt-field>
        <mt-field label="商户品类" placeholder="请输入" v-model="baseInfo.major"></mt-field>
        <mt-field label="经营地区" placeholder="请输入" v-model="baseInfo.store_area"></mt-field>
        <mt-field label="详细地址" placeholder="请输入详细地址" type="textarea" rows="2" v-model="baseInfo.store_address"></mt-field>
        <mt-field label="业务联系人" placeholder="请输入业务联系人姓名" v-model="baseInfo.link_persion" class="ms"></mt-field>
        <mt-field label="联系人手机" placeholder="请输入" v-model="baseInfo.link_mobile"></mt-field>
        <mt-field label="职务" placeholder="请输入" type="textarea" rows="4" v-model="baseInfo.link_position"></mt-field>
        <div class="btnl">
          <mt-button size="large" type="primary" @click="submit">保存</mt-button>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell title="营业模式" is-link :value="businessInfo.model?businessInfo.model:'请选择'" :class="[businessInfo.model?'left':'right']"></mt-cell>
        <mt-field label="营业执照号" placeholder="请输入" v-model="businessInfo.license_no"></mt-field>
        <mt-cell title="营业执照注册地址" is-link :value="businessInfo.regist_province?businessInfo.regist_province:'请选择'" :class="[businessInfo.regist_province?'left':'right']"></mt-cell>
        <mt-field label="营业执照注册(详细地址)" placeholder="请输入" v-model="businessInfo.regist_address"></mt-field>
        <mt-field label="注册资金(万元)" placeholder="请输入" v-model="businessInfo.regist_capital"></mt-field>
        <mt-cell title="成立日期" is-link :value="businessInfo.date?businessInfo.date:'请选择'" :class="[businessInfo.date?'left':'right']"></mt-cell>
        <mt-cell title="营业期限至" is-link :value="businessInfo.endData?businessInfo.endData:'请选择'" :class="[businessInfo.endData?'left':'right']"></mt-cell>
        <mt-field label="门店数量" placeholder="请输入" v-model="businessInfo" class="ms"></mt-field>
        <mt-field label="法定代表人" placeholder="请输入" v-model="businessInfo.legal_person"></mt-field>
        <mt-field label="法定代表人证件号码" placeholder="请输入" v-model="businessInfo.legal_card"></mt-field>
        <mt-field label="实际负责人" placeholder="请输入" v-model="businessInfo" class="ms"></mt-field>
        <mt-field label="实际负责人证件号码" placeholder="请输入" v-model="businessInfo"></mt-field>
        <mt-field label="实际负责人手机号码" placeholder="请输入" v-model="businessInfo"></mt-field>
        <div class="btnl">
          <mt-button size="large" type="primary" @click="submit">保存</mt-button>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell title="门店类型" is-link :value="storeInfo.store_type?storeInfo.store_type:'请选择'" :class="[storeInfo.store_type?'left':'right']"></mt-cell>
        <!-- <mt-field label="门店简称" placeholder="请输入" v-model="storeInfo."></mt-field> -->
        <mt-field label="门店简称" placeholder="请输入" v-model="storeInfo"></mt-field>
        <mt-cell title="是否独家合作" is-link :value="storeInfo.is_sole?storeInfo.is_sole:'请选择'" :class="[storeInfo.is_sole?'left':'right']"></mt-cell>
        <mt-cell title="配合力度" is-link :value="storeInfo.cooperate_level?storeInfo.cooperate_level:'请选择'" :class="[storeInfo.cooperate_level?'left':'right']"></mt-cell>
        <mt-field label="月营业额（万元）" placeholder="请输入" v-model="storeInfo.month_turnover"></mt-field>
        <!-- <mt-field label="门店介绍" placeholder="请输入" type="textarea" rows="2" v-model="storeInfo."></mt-field> -->
        <mt-field label="门店介绍" placeholder="请输入" type="textarea" rows="2" v-model="storeInfo"></mt-field>
        <mt-field label="门店联系人" placeholder="请输入" v-model="storeInfo.person" class="ms"></mt-field>
        <mt-field label="门店联系人手机号码" placeholder="请输入" v-model="storeInfo.store_mobile"></mt-field>
        <mt-field label="门店联系人职务" placeholder="请输入" v-model="storeInfo.store_position"></mt-field>
        <mt-cell title="营业开始时间" is-link :value="storeInfo.start_time?storeInfo.start_time:'请选择'" :class="[storeInfo.start_time?'left':'right']"></mt-cell>
        <mt-cell title="营业结束时间" is-link :value="storeInfo.end_time?storeInfo.end_time:'请选择'" :class="[storeInfo.end_time?'left':'right']"></mt-cell>
        <mt-field label="员工人数" placeholder="请输入" v-model="storeInfo.total_person"></mt-field>
        <mt-field label="经营面积（㎡）" placeholder="请输入" v-model="storeInfo.busspace"></mt-field>
        <!-- <mt-cell title="门店实际经营地址" is-link :value="storeInfo.?storeInfo.:'请选择'" :class="[storeInfo.?'left':'right']"></mt-cell> -->
        <!-- <mt-field label="门店实际经营详细地址" placeholder="请输入详细地址" type="textarea" rows="2" v-model="storeInfo."></mt-field> -->
        <!-- <mt-cell title="经营场所物业所有权" is-link :value="storeInfo.?storeInfo.:'请选择'" :class="[storeInfo.?'left':'right']"></mt-cell> -->
        <mt-cell title="门店实际经营地址" is-link :value="storeInfo?storeInfo:'请选择'" :class="[storeInfo?'left':'right']"></mt-cell>
        <mt-field label="门店实际经营详细地址" placeholder="请输入详细地址" type="textarea" rows="2" v-model="storeInfo"></mt-field>
        <mt-cell title="经营场所物业所有权" is-link :value="storeInfo?storeInfo:'请选择'" :class="[storeInfo?'left':'right']"></mt-cell>
        <mt-field label="经纬度 X" placeholder="请输入" v-model="storeInfo.cox"></mt-field>
        <mt-field label="经纬度 Y" placeholder="请输入" v-model="storeInfo.coy"></mt-field>
        <div class="btnl">
          <mt-button size="large" type="primary" @click="submit">保存</mt-button>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-field label="收款账号" placeholder="请输入" v-model="financeInfo.bank_card"></mt-field>
        <mt-cell title="账号开户行" is-link :value="financeInfo.account_name?financeInfo.account_name:'请选择'" :class="[financeInfo.account_name?'left':'right']"></mt-cell>
        <mt-field label="开户行所在地" placeholder="请输入" v-model="financeInfo.bank_city"></mt-field>
        <mt-field label="账户（持有账号主体名）" placeholder="请输入" v-model="financeInfo.cardholder"></mt-field>
        <mt-field label="财务联系人" placeholder="请输入" v-model="financeInfo.finance_person" class="ms"></mt-field>
        <mt-field label="财务联系人手机号码" placeholder="请输入" v-model="financeInfo.finance_mobile"></mt-field>
        <mt-field label="财务联系人固定电话" placeholder="请输入" v-model="financeInfo.finance_no"></mt-field>
        <div class="btnl">
          <mt-button size="large" type="primary" @click="submit">保存</mt-button>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      selected: '1',
      baseInfo: {
        manager: '北京-城市经理-张三',
        bus_name: '',
        bus_short_name: '',
        line: '',
        major: '',
        store_area: '',
        store_address: '',
        link_persion: '',
        link_mobile: '',
        link_position: ''
      },
      businessInfo: {
        model: '',
        license_no: '',
        regist_province: '',
        regist_address: '',
        regist_capital: ''
      },
      storeInfo: {
        store_type: '',
        is_sole: '',
        cooperate_level: '',
        month_turnover: '',
        store_person: '',
        store_mobile: '',
        store_position: '',
        start_time: '',
        end_time: '',
        total_person: '',
        busspace: '',
        cox: '',
        coy: ''
      },
      financeInfo: {
        bank_card: '',
        account_name: '',
        bank_province: '',
        bank_city: '',
        cardholder: '',
        finance_person: '',
        finance_mobile: '',
        finance_no: ''
      }
    }
  },
  methods: {
    submit () {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
