<template>
  <div class="btngroup" :class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}">
    <div :class="{'hide': ifHide}">
      <span class="normal btn-left"
              :class="[btnIndex == 0 ? 'selected':'']"
              @click="changeTheme(0)">分布</span>
      <span class="normal btn-right"
              :class="[btnIndex == 1 ? 'selected':'']"
              @click="changeTheme(1)">趋势</span>
    </div>
    <div :class="{'hide': !ifHide}">
      <div class="normal2">数据日期:<span>{{this.dataDate}}</span></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'FenbuQushi',
  data () {
    return {
      ifHide: false,
      btnIndex: 0,
      dataDate: '9999-01-01'
    }
  },
  methods: {
    changeTheme (i) {
      this.btnIndex = i
      this.$emit('comChanged', i + 1)
    },
    setData: function (ifHide, dataDate) {
      this.ifHide = ifHide
      this.dataDate = dataDate
    },
    hideButton: function () {
      this.ifHide = true
    }
  },
  mounted () {
    $(this.$el.firstChild.firstChild).addClass('selected')
  }
}
</script>

<style scoped lang="less">
   @gold : #ddaf59;
   @coffee : #483c39;
   @white : white;
  .themeGold{
    .normal{
      border: 1px solid @gold;
      color: @gold;
      background-color: @white;
    }
    .selected{
      color:@white;
      background-color: @gold;
    }
    .normal2{
      background-color: @white;
    }
  }
  .themeCoffee{
    .normal{
      border: 1px solid @coffee;
      color: @coffee;
      background-color: @white;
    }
    .selected{
      color: @white;
      background-color: @coffee;
    }
    .normal2{
      background-color: @white;
    }
  }
  .btngroup{
    text-align: right;
    padding: 13px 5px 0px 0px;
    color: #999999;
    .hide{
      display: none;
    }
    .normal {
      font-size: 12px;
      line-height: 30px;
      padding:3px 10px;
      margin-right:-6px;
    }
    .btn-left{
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .btn-right{
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
    .normal2 {
      font-size: 12px;
      line-height: 25px;
    }
  }
</style>
