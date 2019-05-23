<template>
  <div class="iconDiv">
    <div @click="showAnnotation" class="iconDiv">
      <img id='icon' class='img' src='../../assets/img/des.svg' />
    </div>
    <div ref='msg' class='info' v-if="ifMsg">
      <span>{{ message }}</span>
      <div class='nav nav-border' v-bind:style="{left:navPosition+'px'}"></div>
      <div class='nav nav-background' v-bind:style="{left:navPosition+'px'}"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default{
  name: 'annotationIcon',
  props: ['message'],
  data: function () {
    return {
      // message: '该指标包含归属当前工作日的自有平台实时认购金额和三方渠道BD实时录入数据',
      ifMsg: false,
      navPosition: 20
    }
  },
  methods: {
    showAnnotation () {
      event.stopPropagation() // 阻止事件冒泡
      this.ifMsg = !this.ifMsg
    },
    setMsg (msg) {
      this.message = msg
    }
  },
  mounted () {
    this.navPosition = $('#icon').offset().left - 8 // 找小图标的位置用于定位弹出框箭头
    let that = this
    $(document).click(function (event) { // 点屏幕任意区域隐藏弹出框
      var con = $('#msg')
      if (!con.is(event.target)) {
        that.ifMsg = false
      }
    })
  }
}
</script>

<style scoped>
  .iconDiv{
    display:inline;
  }
  .iconDiv:before { /*扩大div元素可点击区域*/
    content:"";
    position:absolute;
    margin-top:-10px;
    margin-left:-10px;
    width:40px;
    height:40px;
  }
  .img{
    width:14px;
    height:14px;
    display: inline;
    margin-left:4px;
  }
  .info {
    margin-top: 50px;
    position: absolute;
    left:8px;
    margin: 4px auto;
    padding: 11px 16px 10px 18px;
    width: 85%;
    line-height: 18px;
    font-size: 12px;
    letter-spacing:1px;
    text-align: left;
    color: #666666;
    font-family:PingFangSC-Regular;
    background: white;
    box-shadow: 0px 0px 6px 0px #A7A7A7;
    /*border: 1px solid #e5e5e5;*/
    border-radius: 3px;

  }
  .nav {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    border-width: 7px;
    border-style: solid dashed dashed dashed;
  }
  .nav-border {
    top: -14px;
    border-color: transparent transparent #e5e5e5 transparent;
  }
  .nav-background {
    top: -13px;
    border-color: transparent transparent white transparent;
  }
</style>
