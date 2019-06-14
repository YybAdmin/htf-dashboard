<template>
  <div :class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}">
    <span>{{this.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'tag',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped lang="less">
@gold : #ddaf59;
@coffee : #483c39;
.themeGold {
  span{
    &:before{background-color: @gold;}
  }
}
.themeCoffee{
  span{
    &:before{background-color: @coffee;}
  }
}
div {
  text-align: left;
  span{
    width:100%;
    margin:14px 0px 13px 6px;
    font-size: 13px;
    color: #333;
    background: white;
    text-align: left;
    &:before{
      content: " ";
      display: inline-block;
      width:2px;
      height:11px;
      margin-right:10px;
    }
  }
}
</style>
