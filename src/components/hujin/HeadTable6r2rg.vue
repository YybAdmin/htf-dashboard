<template>
  <div class="tmpDiv">
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
            <span>总销售额</span><annotationIcon v-bind:message="this.annotation"/></div>
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
          <div><span>{{list[2].VALUE1}}</span><span>亿元</span><br/><span>总管理费</span></div>
          <div><span>{{list[2].VALUE4}}</span><span>亿元</span><br/><span>总净收入</span> </div>
        </td>
        <td>
          <div><span>{{list[2].VALUE2}}</span><span>亿元</span><br/><span>自有平台管理费</span></div>
          <div><span>{{list[2].VALUE5}}</span><span>亿元</span><br/><span>自有平台净收入</span></div>
        </td>
        <td>
          <div><span>{{list[2].VALUE3}}</span><span>亿元</span><br/><span>三方平台管理费</span></div>
          <div><span>{{list[2].VALUE6}}</span><span>亿元</span><br/><span>三方平台净收入</span></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import $ from 'jquery'
import DivSplit from '@/components/baseCom/DivSplit'
import annotationIcon from '@/components/baseCom/annotationIcon'
export default {
  name: 'HeadTable6r2rg',
  components: {DivSplit, annotationIcon},
  data: function () {
    return {
      title: '业绩汇总 (本年度)',
      annotation: '销售额:销售额是指纳税人销售货物、提供应税劳务或服务，' +
        '从购买或接受应税劳务方或服务方收取的全部价款和切价外费用，但是不包括向购买方收取的销售税额以及代为',
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
  }
}
</script>

<style scoped>
.tmpDiv {
  margin-top:15px;
  margin-bottom: 10px;
}
.titleDiv{
  height:30px;
  text-align: left;
  margin-bottom: 10px;
}
.normal {
  line-height: 30px;
  font-size: 15px;
  color: #DDAF59;
  background:rgba(254,247,233,1);
  border-radius:0px 100px 100px 0px;
  padding:3px 10px 3px 10px;
}
.tmpTable{
  width: 100%;
  table-layout: fixed;
  border-spacing: unset;
  text-align: center;
  color: #333;
}
.tmpTable tr {
  height:114px;
}
.tmpTable tr div{
  height:50px;
  vertical-align: middle;
}
.tmpTable tr td:nth-of-type(1){
  border-right:1px solid #EEE;
}
.tmpTable tr td:nth-of-type(2){
  border-right:1px solid #EEE;
}
.tmpTable tr td div span:nth-of-type(1){
  font-size: 16px;
}
.tmpTable tr td div span:nth-of-type(2){
  font-size: 14px;
}
.tmpTable tr td div span:nth-of-type(3){
  font-size: 13px;
  color: #999;
}
.selected {
  color:#DDAF59;
  background-color: #FEF7E9;
  position: relative;
}
</style>
