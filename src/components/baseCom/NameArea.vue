<template>
  <div :class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}"> <span>{{item}}</span> </div>
</template>

<script>
export default {
  name: 'NameArea',
  props: ['item'],
  data () {
    return {
      title: this.item
    }
  }
}
</script>

<style scoped lang="less">
  @gold: #ddaf59;
  @goldBack: #fef7e9;
  @coffee : #483c39;
  @coffeeBack: #e9e2e0;
  .themeGold{
    span{
      color:@gold;
      background:@goldBack;
    }
  }
  .themeCoffee{
    span{
      color: @coffee;
      background:@coffeeBack;
    }
  }
  div {
    height:30px;
    margin-top:15px;
    margin-bottom: 5px;
    text-align: left;
    span {
      line-height: 30px;
      font-size: 15px;
      border-radius:0px 100px 100px 0px;
      padding:3px 10px 3px 10px;
    }
  }
</style>
