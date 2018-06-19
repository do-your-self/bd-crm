<template>
  <div class="panel">
    <span class="tag" v-if="tag">{{tag}}</span>
    <div class="panel_hd" v-if="title">{{title}}</div>
    <div class="panel_bd">
      <div class="vux-card-content">
        <div class="card-demo-flex card-demo-content">
          <div v-for="(list, index) in card" :key="list.name" v-bind:class="[index!=2 ? 'card-1px-r' : '']">
            <div class="count-title">{{list.name}}</div>
            <div class="count-number">{{list.value}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel_ft" v-if="foot"></div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
    }
  },
  props: {
    title: String,
    tag: String,
    foot: String,
    card: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../../css/var.scss";
.panel {
  background-color: $white;
  margin: 8px 8px 0 8px;
  position: relative;
  border-radius: 7px;
  box-shadow: 3px 3px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
}
.panel_hd {
  padding: 10px 0;
  margin: 0 10px;
  color: $color-primary;
  font-size: $font-model;
  position: relative;
  border-bottom: 1px solid #E5E5E5;
}
.tag {
  position: absolute;
  top: 8px;
  right: -8px;
  z-index: 1;
  background: $color-primary;
  color: $font-color-primary;
  padding: 0 5px;
}
.count-title {
  font-size: $font-small;
}
.count-number {
  font-size: $font-large;
}
.card-1px-r {
  position: relative;
}
.card-1px:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  border: 1px solid #C7C7C7;
  color: #C7C7C7;
  height: 200%;
  -webkit-transform-origin: left top;
          transform-origin: left top;
  -webkit-transform: scale(0.5);
          transform: scale(0.5);
}
.card-1px-r:after {
  content: " ";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-right: 1px solid #C7C7C7;
  color: #C7C7C7;
  -webkit-transform-origin: 100% 0;
          transform-origin: 100% 0;
  -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
}
.card-demo-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.card-demo-content {
  padding: 10px 0;
}
.card-demo-content > div > div {
  color: $color-primary;
  padding: 5px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
          flex: 1;
  text-align: center;
  font-size: 12px;
}
/* .card-demo-flex span {
  color: #f74c31;
} */

</style>
