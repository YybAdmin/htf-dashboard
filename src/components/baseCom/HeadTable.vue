<template>
  <div class="tmpDiv" :class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}">
    <div class="titleDiv"> <span>{{title}}</span> </div>
    <table>
      <tr>
        <td>
          <div><span>{{this.data[0].VALUE1}}</span><span>{{this.itemList[0].unit}}</span><br/><span>{{this.itemList[0].name}}</span></div>
        </td>
        <td>
          <div><span>{{this.data[0].VALUE2}}</span><span>{{this.itemList[1].unit}}</span><br/><span>{{this.itemList[1].name}}</span></div>
        </td>
        <td>
          <div><span>{{this.data[0].VALUE3}}</span><span>{{this.itemList[2].unit}}</span><br/><span>{{this.itemList[2].name}}</span></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import DivSplit from '@/components/baseCom/DivSplit'
export default {
  name: 'HeadTable',
  props: ['itemList'],
  components: {DivSplit},
  data () {
    return {
      title: '业绩汇总 (本年度)',
      data: [{VALUE1: '--', VALUE2: '--', VALUE3: '--'}]
    }
  },
  methods: {
    setData (data) {
      this.data = data
    }
  }
}
</script>

<style scoped lang="less">
  @gold : #ddaf59;
  @goldBack: #fef7e9;
  @coffee : #483c39;
  @coffeeBack: #e9e2e0;
  .themeGold{
    .titleDiv{ span{ color: @gold; background: @goldBack; } }
  }
  .themeCoffee{
    .titleDiv{ span{ color: @coffee; background: @coffeeBack; } }
  }
  .tmpDiv {
    margin-top:15px;
    margin-bottom: 10px;
    .titleDiv{
      height:30px;
      text-align: left;
      margin-bottom: 10px;
      span {
        line-height: 30px;
        font-size: 15px;
        border-radius:0px 100px 100px 0px;
        padding:3px 10px 3px 10px;
      }
    }
    table {
      width: 100%;
      table-layout: fixed;
      border-spacing: unset;
      text-align: center;
      color: #333;
      tr {
        height:64px;
        div{
          height:50px;
          vertical-align: middle;
        }
        td:nth-of-type(1) div{ border-right:1px solid #EEE; }
        td:nth-of-type(2) div{ border-right:1px solid #EEE; }
        td div span:nth-of-type(1){ font-size: 16px; }
        td div span:nth-of-type(2){ font-size: 14px; }
        td div span:nth-of-type(3){ font-size: 13px; color: #999; }
      }
    }
  }
</style>
