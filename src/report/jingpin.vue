<template>
  <div class="action">
    <DivSplit></DivSplit>
    <NameArea v-bind:item="comName.HeadTitle"></NameArea>
    <HeadTableDouble ref="headData" v-bind:itemList="comName.HeadTableList"></HeadTableDouble>
    <DivSplit></DivSplit>
    <BtnGrp v-bind:itemList="comName.DateBtnList"></BtnGrp>
    <table style="width: 100%;table-layout: fixed;">
      <tr>
        <td><NameArea v-bind:item="comName.TopTitle"></NameArea></td>
        <td><FenbuQushi v-if="this.switch.fenbuRst2" @comChanged="changePageState($event,'f_fenbuQushi2')"/></td>
      </tr>
    </table>
    <DrawOneBarOneLine id="chartUp" ref="chartUp" v-bind:chartInfo="this.charData.chartUp"></DrawOneBarOneLine>
    <NameArea v-bind:item="comName.MidTitle"></NameArea>
    <DrawTwoCake id="chartMid" ref="chartMid" v-bind:chartInfo="this.charData.chartMid"></DrawTwoCake>
    <DrawNLine id="jingpinChart" ref="jingpinChart" v-bind:chartInfo="this.charData.chartDwn"></DrawNLine>
  </div>

</template>

<script>

import $ from 'jquery'
import NameArea from '@/components/baseCom/NameArea'
import HeadTableDouble from '@/components/jingpin/HeadTableDouble'
import DivSplit from '@/components/baseCom/DivSplit'
import BtnGrp from '@/components/baseCom/BtnGrp'
import DrawOneBarOneLine from '@/components/echartCom/DrawOneBarOneLine'
import FenbuQushi from '@/components/baseCom/FenbuQushi'
import DrawTwoCake from '@/components/jingpin/DrawTwoPie'
import DrawNLine from '@/components/echartCom/DrawNLine'

export default {
  name: 'self',
  components: {DivSplit, HeadTableDouble, BtnGrp, NameArea, DrawOneBarOneLine, FenbuQushi, DrawTwoCake, DrawNLine},
  data () {
    return {
      comName: {
        DateBtnList: [{name: '月活度'}, {name: '变化前十'}, {name: '变化后十'}],
        HeadTitle: '现金宝APP(金融理财类)',
        HeadTableList: [{name: '总排行榜', unit: '名'}, {name: '类别排名', unit: '名'}, {name: '月独立设备数', unit: '万台'}, {name: '环比增幅', unit: '%'}],
        TopTitle: 'APP月活排名(前十)',
        MidTitle: 'APP趋势对比(近12个月)'
      },
      switch: {
        proTypeRet: true,
        gmTypeRst: true,
        zhTypeRst: true,
        dateTypeRet: true,
        fenbuRst1: true,
        fenbuRst2: true,
        fenbuRst3: true,
        jliOrQdRst: true
      },
      pageVal: {
        tabTop: 1,
        tabletr: 1,
        proType: 1,
        gmType: 1,
        zhType: 1,
        dateType: 1,
        fbOrQs1: 1,
        pKey1: '99999',
        fbOrQs2: 1,
        pKey2: '99999',
        fbOrQs3: 1,
        pKey3: '99999',
        dataDate: '999999',
        jlOrQd: 1,
        kehuDateType: 1,
        kehuEcCusGrp: 1,
        kehuMeaType: 1
      }
    }
  },

  computed: {
    charData: function () {
      return {
        chartUp: {
          title: ['月独立设备数(单位:万台)', '环比增幅(单位:%)'],
          name: ['设备数', '环比增幅'],
          pKey: this.pageVal.pKey1,
          clickParams: []
        },
        chartMid: {
          title: '趋势分析',
          name1: '设备数',
          name2: '环比增幅',
          pKey: this.pageVal.pKey1,
          clickParams: []
        },
        chartDwn: {
          title: '月独立设备数(单位:万台)',
          name: ['支付宝', '建行APP', '现金宝', '其他'],
          selected: [true, true, true, true]
        },
        TableData: {
          title: ['产品名称', '月独立设备(万台)', '环比增幅']
        }
      }
    }
  },
  methods: {
    changePageState: function (val, flag) {
      var reflashFlag = 'NO'
      // chartUp 分布趋势切换
      if (flag === 'f_fenbuQushi1') {
        reflashFlag = this.changeFenbuQushi1(val)
      }
      if (flag === 'f_chartUp') {
        reflashFlag = this.onClickChartUp(val)
      }
      // chartUp2 趋势图点击切换日期
      if (flag === 'f_chartUp2') {
        this.$refs.sumUp.headData[0].VALUE1 = val[0].data.VALUE1
        this.$refs.sumUp.headData[0].VALUE2 = val[0].data.VALUE2
      }
      // chartUp 日期切换
      if (flag === 'f_dateType') {
        this.pageVal.dateType = val
      }
      // chartMid 分布趋势切换
      if (flag === 'f_fenbuQushi2') {
        reflashFlag = this.changeFenbuQushi2(val)
      }
      // chartMid 柱状图 点击事件
      if (flag === 'f_chartMid') {
        reflashFlag = this.onClickChartMid(val)
      }
      // chartMid2 趋势图点击切换日期
      if (flag === 'f_chartMid2') {
        this.$refs.sumMid.headData[0].VALUE1 = val[0].data.VALUE1
        this.$refs.sumMid.headData[0].VALUE2 = val[0].data.VALUE2
      }
      // chartDwn 分布趋势切换
      if (flag === 'f_fenbuQushi3') {
        reflashFlag = this.changeFenbuQushi3(val)
      }
      // chartDwn 柱状图 点击事件
      if (flag === 'f_chartDwn') {
        reflashFlag = this.onClickChartDwn(val)
      }
      // 业务团队规模对比 三方客户经理三方渠道切换
      if (flag === 'f_jingliQudao') {
        this.pageVal.jlOrQd = val
      }
      //
      if (flag === 'p_kehuDate') {
        this.pageVal.kehuDateType = val
        reflashFlag = 'jingpinChart'
      }
      //
      if (flag === 'p_kehuCusGrp') {
        this.pageVal.kehuDateType = val
        reflashFlag = 'jingpinChart'
      }
      //
      if (flag === 'p_kehuMeaType') {
        this.pageVal.p_kehuMeaType = val
        reflashFlag = 'jingpinChart'
      }
      // pdf
      if (flag === 'f_pdf') {
        if (val === true) {
          $('#chartContent').fadeOut()
          this.$refs.dateDiv.changeBottomStyle()
        } else {
          $('#chartContent').fadeIn()
        }
      }
      this.GetDataAndDraw(this.pageVal, reflashFlag)
    },
    setHeadData: function () {
      let headData = this.$refs.headData
      this.$http.post(this.$API_LIST.jingpinHeadData).then(res => {
        headData.setData(res.data.list)
      })
    },
    drawChartUp: function (pageVal) {
      let chartUp = this.$refs.chartUp
      let paramsUp = {
        label1Show: false,
        label2Show: false,
        labelNum: 1
      }
      this.$http.post(this.$API_LIST.jingpinChartUp, {pageVal: pageVal}).then(res => {
        chartUp.setData(res.data.list, paramsUp)
        chartUp.drawOneBarOneLineChart()
      })
    },
    drawChartMid: function (pageVal) {
      let chartMid = this.$refs.chartMid
      this.$http.post(this.$API_LIST.jingpinChartMid, {pageVal: pageVal}).then(res => {
        chartMid.setData(res.data.list)
      })
    },
    drawChartDwn: function (pageVal) {
      let jingpinChart = this.$refs.jingpinChart
      this.$http.post(this.$API_LIST.jingpinChartDwn, {pageVal: pageVal}).then(res => {
        console.log('jingpinData:' + res.data.list)
        jingpinChart.setData(res.data.list)
        jingpinChart.drawNLine()
      })
    },
    GetDataAndDraw: function (pageVal, flag) {
      this.setHeadData()
      this.drawChartUp(pageVal)
      this.drawChartMid(pageVal)
      this.drawChartDwn(pageVal)
    },
    DataInit: function () {
      $('#chartUp').show()
      this.GetDataAndDraw(this.pageVal, 'INIT')
    }
  },
  mounted () {
    this.DataInit()
  }
}
</script>
