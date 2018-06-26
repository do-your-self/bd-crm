<template>
  <div class="content clearFlex">
    <div class="upImg clearFlex">
      <div class="upTitle">{{title}}</div>
      <div class="upWrap">
        <div class="fileWrap">
          <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" @change="upImg(this)"/>
        </div>
        <div class="imgWrap">
          <img src="" alt="" v-show="isImg"/>
          <i class="fa fa-plus" aria-hidden="true" v-show="!isImg"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: String,
    src: String
  },
  data () {
    return {
      allLoaded: false,
      selected: '1',
      isImg: false
    }
  },
  methods: {
    upImg (obj) {
      var imgFile = obj.files[0]
      // var img = new Image()
      var fr = new FileReader()
      fr.onload = function () {
      }
      fr.readAsDataURL(imgFile)
      this.isImg = true
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 130px;
  padding: 10px;
  float: left;
}
.upWrap {
  width: 100%;
  height: 80px;
  position: relative;
}
.upTitle {
  height: 32px;
  color: $color-primary;
  font-weight: 400;
  font-size: $font-small;
  padding-bottom: 5px;
}
.upWrap > .fileWrap, .upWrap > .fileWrap > input[type=file], .upWrap > .imgWrap {
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width:100%;
  top:0;
  left:0;
}
.upWrap > .fileWrap > input[type=file] {
  z-index: 2;
  opacity: 0;
}
.upWrap > .imgWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: 3px dashed $color-primary;
}
.upWrap > .imgWrap > img {
  width:100%;
  height: 100%;
}
.fa-plus {
  font-size: 30px;
  color: $color-primary;
}
.upedImg {
  border: 3px dashed $color-primary;
  z-index: 3 !important;
}
.upedImg > span.deleteImg {
  position:absolute;
  content: 'X';
  width:20px;
  font-size: 16px;
  color:#ff0000;
  background:rgba(0,0,0,0.6);
  height:20px;
  text-align: center;
  line-height: 20px;
  right:0;
  top:0;
  z-index:4;
}
.clearFlex:after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  zoom:1;
}
</style>
