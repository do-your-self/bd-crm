<template>
  <div class="panel_access">
    <span class="tag" v-if="tag">{{tag}}</span>
    <div class="panel_hd" v-if="title">{{title}}</div>
    <div class="panel_bd">
      <div class="vux-card-content">
        <div class="card-demo-flex card-demo-content">
          <div v-for="(list, index) in card" :key="list.name" v-bind:class="[index!=2 ? 'card-1px-r' : '']">
            <div class="font14">{{list.name}}</div>
            <div class="font20">{{list.value}}</div>
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

<style scoped>
.panel_access {
  background-color: #FFFFFF;
  margin: 8px 8px 0 8px;
  position: relative;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
}
.panel:first-child {
  margin-top: 0;
}
.panel:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #E5E5E5;
  color: #E5E5E5;
  -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
}
.panel:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #E5E5E5;
  color: #E5E5E5;
  -webkit-transform-origin: 0 100%;
          transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
}
.panel_hd {
  padding: 14px 15px 10px;
  color: #999999;
  font-size: 13px;
  position: relative;
}
.panel_hd:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #E5E5E5;
  color: #E5E5E5;
  -webkit-transform-origin: 0 100%;
          transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
  left: 15px;
}
.tag {
  position: absolute;
  top: 8px;
  right: -8px;
  z-index: 1;
  background: #333;
  color: #ffffff;
  padding: 4px 8px;
}
.font14 {
  font-size: 14px;
}
.font20 {
  font-size: 20px;
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
  color: #000;
  padding: 10px 0 5px;
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
