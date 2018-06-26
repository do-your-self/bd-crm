<template>
  <div>
    <div class="head" v-if="data.head">
      {{data.head}}
    </div>
    <div class="card-record">
      <h2 class="title">{{data.title}}</h2>
      <div class="container">
        <div class="item"><div>业务线：</div><div>{{data.line}}</div></div>
        <div class="item"><div>行业：</div><div>{{data.major}}</div></div>
      </div>
      <div class="container">
        <div class="item"><div>跟进日期：</div><div>{{data.followdate}}</div></div>
        <div class="item"><div>跟进方式：</div><div>{{data.followtype}}</div></div>
      </div>
      <div class="container">
        <div class="item"><div>客户经理：</div><div>{{data.manager}}</div></div>
      </div>
      <div class="container">
        <div class="item"><div>跟进内容：</div><div>{{data.followcon}}</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    data: Object
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.head {
  font-size: $font-middle;
  color: $color-primary;
  font-weight: 700;
  padding: 10px 10px 0;
}
.card-record {
  background-color: #fff;
  padding: 5px;
  margin: 8px;
  border-radius: 5px;
}
.card-record h2 {
  padding: 8px 0;
  margin: 0 0 5px;
  font-weight: 400;
  font-size: $font-middle;
  color: $color-primary;
  border-bottom: 1px solid #ccc;
}
.title {
  font-size: $font-small;
  color: $color-primary;
}
.container {
  display: flex;
  align-items: stretch;
  font-size: $font-small;
  color: $color-primary;
}
.item {
  flex: 1;
  padding-bottom: 5px;
  overflow: hidden;
  line-height: 21px;
  div:first-child {
    float: left;
    width: 60px;
    text-align:justify;
    text-justify:distribute-all-lines;
    text-align-last:justify
  }
  div:last-child {
    padding-left: 60px;
    color: #999;
  }
}
</style>
