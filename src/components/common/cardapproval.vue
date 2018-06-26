<template>
  <div class="card-approval">
    <h2 class="title">入驻申请 — XXX商家XXX商家...<span class="date">2017-06-29</span></h2>
    <div class="container">
      <div class="item"><span>商户地区：</span><span>吉林</span></div>
    </div>
    <div class="container">
      <div class="item"><span>所属业务线：</span><span>商城商户</span></div>
    </div>
    <div class="container">
      <div class="item"><span>行业：</span><span>健身</span></div>
    </div>
    <div class="footer process">吉林-城市经理- 王一  审批中</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.card-approval {
  background-color: #FFFFFF;
  position: relative;
  background-color: #fff;
  padding: 8px 8px 5px;
  font-size: $font-small;
  color: $color-primary;
  .date {
    float: right;
  }
  .footer {
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
  }
  .process {
    color: orange;
  }
  .success {
    color: green;
  }
  .reject {
    color: red;
  }
}
.card-approval h2 {
  padding: 8px 0 4px;
  margin: 0 0 4px;
  font-weight: 100;
  font-size: $font-middle;
}
.container {
  display: flex;
}
.item {
  flex: 1;
  text-align: left;
  padding-bottom: 10px;
}
</style>
