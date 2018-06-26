<template>
  <div class="panel" :class="{'panel': true, 'await': data.tag==='审批中', 'success': data.tag==='入驻中', 'disable': data.tag==='冻结'}">
    <span class="tag" v-if="data.tag">{{data.tag}}</span>
    <div class="panel_hd">{{data.title}}</div>
    <div class="panel_line"><span></span></div>
    <div class="panel_bd">
      <div class="container">
        <div class="item"><div>业务线：</div><div>{{data.line}}</div></div>
        <div class="item"><div>品类：</div><div>{{data.major}}</div></div>
      </div>
      <div class="container">
        <div class="item"><div>客户经理：</div><div>{{data.manager}}</div></div>
      </div>
      <div class="container">
        <div class="item"><div>合同时间：</div><div>{{data.date}}</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.panel {
  background-color: $white;
  margin: 8px 8px 0 8px;
  padding: 10px 5px;
  position: relative;
  border-radius: 7px;
}
.panel_hd {
  padding-bottom: 5px;
  color: $color-primary;
  font-size: $font-middle;
  position: relative;
}
// panel_hd:after
.tag {
  position: absolute;
  top: 8px;
  right: 0;
  z-index: 1;
  color: $font-color-primary;
  font-size: $font-small;
  padding: 2px 5px;
}
.success.panel {
  border: 1px solid green;
  .tag {
    background: green;
  }
}
.await.panel {
  border: 1px solid orange;
  .tag {
    background: orange;
  }
}
.disable.panel {
  border: 1px solid #666;
  .tag {
    background: #666;
  }
}
.panel_line {
  width: 70%;
  border-bottom: 1px solid #E5E5E5;
  span {
    float: right;
    border: 3px solid #E5E5E5;
    transform: rotate(45deg);
    margin-top: -3px;
  }
}
// .card-1px:before {
//   content: " ";
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 200%;
//   border: 1px solid #C7C7C7;
//   color: #C7C7C7;
//   height: 200%;
//   -webkit-transform-origin: left top;
//           transform-origin: left top;
//   -webkit-transform: scale(0.5);
//           transform: scale(0.5);
// }
// .card-1px-r:after {
//   content: " ";
//   position: absolute;
//   right: 0;
//   top: 0;
//   width: 1px;
//   bottom: 0;
//   border-right: 1px solid #C7C7C7;
//   color: #C7C7C7;
//   -webkit-transform-origin: 100% 0;
//           transform-origin: 100% 0;
//   -webkit-transform: scaleX(0.5);
//           transform: scaleX(0.5);
// }
.container {
  display: flex;
  align-items: stretch;
  font-size: $font-small;
  color: $color-primary;
}
.item {
  flex: 1;
  padding-top: 5px;
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
