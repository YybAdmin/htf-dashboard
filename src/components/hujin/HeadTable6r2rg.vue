<template>
  <div class="tmpDiv" :class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}">
    <div class="titleDiv">
      <span class="normal">{{title}}</span>
    </div>
    <table class="tmpTable">
      <tr @click="changeTheme($event , 1,'manual')" class="normalrm">
        <td>
          <div><span>{{list[0].VALUE1}}</span><span>亿元</span><br/><span>总保有量</span></div>
          <div><span>{{list[0].VALUE4}}</span><span>亿份</span><br/><span>总份额</span> </div>
        </td>
        <td>
          <div><span>{{list[0].VALUE2}}</span><span>亿元</span><br/><span>自有平台保有量</span></div>
          <div><span>{{list[0].VALUE5}}</span><span>亿份</span><br/><span>自有平台份额</span></div>
        </td>
        <td>
          <div><span>{{list[0].VALUE3}}</span><span>亿元</span><br/><span>三方平台保有量</span></div>
          <div><span>{{list[0].VALUE6}}</span><span>亿份</span><br/><span>三方平台份额</span></div>
        </td>
      </tr>
      <tr @click="changeTheme($event , 2,'manual')" class="normalrm">
        <td>
          <div><span>{{list[1].VALUE1}}</span><span>亿元</span><br/>
            <span>总销售额</span><Help ref="help"></Help></div>
          <div><span>{{list[1].VALUE4}}</span><span>亿份</span><br/><span>净申购总金额</span> </div>
        </td>
        <td>
          <div><span>{{list[1].VALUE2}}</span><span>亿元</span><br/><span>自有平台销售额</span></div>
          <div><span>{{list[1].VALUE5}}</span><span>亿元</span><br/><span>自有平台净收额</span></div>
        </td>
        <td>
          <div><span>{{list[1].VALUE3}}</span><span>亿元</span><br/><span>三方平台销售额</span></div>
          <div><span>{{list[1].VALUE6}}</span><span>亿元</span><br/><span>三方平台净收额</span></div>
        </td>
      </tr>
      <tr @click="changeTheme($event , 3,'manual')" class="normalrm">
        <td>
          <div><span>{{list[2].VALUE1}}</span><span>万元</span><br/><span>总管理费</span></div>
          <div><span>{{list[2].VALUE4}}</span><span>万元</span><br/><span>总净收入</span> </div>
        </td>
        <td>
          <div><span>{{list[2].VALUE2}}</span><span>万元</span><br/><span>自有平台管理费</span></div>
          <div><span>{{list[2].VALUE5}}</span><span>万元</span><br/><span>自有平台净收入</span></div>
        </td>
        <td>
          <div><span>{{list[2].VALUE3}}</span><span>万元</span><br/><span>三方平台管理费</span></div>
          <div><span>{{list[2].VALUE6}}</span><span>万元</span><br/><span>三方平台净收入</span></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import $ from 'jquery'
import DivSplit from '@/components/baseCom/DivSplit'
import Help from '@/components/baseCom/Help'
export default {
  name: 'HeadTable6r2rg',
  components: {DivSplit, Help},
  data: function () {
    return {
      title: '业绩汇总 (本年度)',
      annotation: '总销售额 = 申购 + 定期定额申购 + 认购',
      list: [{VALUE1: '--', VALUE2: '--', VALUE3: '--', VALUE4: '--', VALUE5: '--', VALUE6: '--'},
        {VALUE1: '--', VALUE2: '--', VALUE3: '--', VALUE4: '--', VALUE5: '--', VALUE6: '--'},
        {VALUE1: '--', VALUE2: '--', VALUE3: '--', VALUE4: '--', VALUE5: '--', VALUE6: '--'}]
    }
  },
  methods: {
    changeTheme (ev, i, flag) {
      var rmgrp = $(this.$el).find('tr')
      var rmgrp2 = $(this.$el).find('td')
      $(rmgrp).each(function () {
        $(this).removeClass('selected')
      })
      $(rmgrp2).each(function () {
        $(this).css('border-right-color', '#EEE')
      })
      ev.currentTarget.classList.add('selected')
      var selTd = $(ev.currentTarget).find('td')
      selTd.each(function () {
        $(this).css('border-right-color', '#FEF7E9')
      })
      if (flag === 'manual') {
        this.$emit('comChanged', i)
      }
    },
    setData (list) {
      this.list = Object.assign([], this.list, list)
    }
  },
  mounted () {
    $(this.$el.lastChild.firstChild).addClass('selected')
    this.$refs.help.setMsg(this.annotation)
  }
}
</script>

<style scoped lang="less">
@gold : #ddaf59;
@goldBack: #fef7e9;
@coffee : #483c39;
@coffeeFont: #666;
@coffeeBack: #e9e2e0;
@font : #333;
@white : white;
.themeGold{
  .titleDiv{
    span{ color: @gold; background: @goldBack; }
  }
  table{
    .selected { color:@gold; background-color: @goldBack; }
  }
}
.themeCoffee{
  .titleDiv{
    span{ color: @coffee; background: @coffeeBack; }
  }
  table{
    .selected { color:@coffee; background-color: @coffeeBack; }
  }
}
.tmpDiv {
  margin:15px 0px 10px 0px;
  .titleDiv{
    height:30px;
    text-align: left;
    margin-bottom: 10px;
    span {
      line-height: 30px;
      font-size: 15px;
      border-radius:0px 100px 100px 0px;
      padding:5px 10px 5px 10px;
    }
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-spacing: unset;
    text-align: center;
    color: #333;
    tr{
      height:114px;
      div{ height:45px; margin-top: 5px; vertical-align: middle; }
      td:nth-of-type(1){ border-right:1px solid #EEE; }
      td:nth-of-type(2){ border-right:1px solid #EEE; }
      td div span:nth-of-type(1){ font-size: 16px; }
      td div span:nth-of-type(2){ font-size: 14px; }
      td div span:nth-of-type(3){ font-size: 13px; color: #999; }
    }
    .selected{ position: relative; }
  }
}
</style>
