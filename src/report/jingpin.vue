<template>
  <div class="action">
    <DivSplit></DivSplit>
    <NameArea v-bind:item="comName.HeadTitle"></NameArea>
    <HeadTableDouble ref="headData" v-bind:itemList="comName.HeadTableList"></HeadTableDouble>
    <DivSplit></DivSplit>
    <BtnGrp v-bind:itemList="comName.DateBtnList" @comChanged="changePageState($event,'f_rankDim')"></BtnGrp>
    <table style="width: 100%;table-layout: fixed;">
      <tr>
        <td><NameArea v-bind:item="comName.TopTitle"></NameArea></td>
        <td><FenbuQushi v-if="this.switch.fenbuRst" @comChanged="changePageState($event,'f_fenbuQushi')"/></td>
      </tr>
    </table>
    <DrawOneBarOneLine id="chartUp" ref="chartUp" v-bind:chartInfo="this.charData.chartUp" @comChanged="changePageState($event,'f_chartUp')"></DrawOneBarOneLine>
    <NameArea v-bind:item="comName.MidTitle"></NameArea>
    <DrawTwoCake id="chartMid" ref="chartMid" v-bind:chartInfo="this.charData.chartMid"></DrawTwoCake>
    <DrawNLine id="jingpinChart" ref="jingpinChart" v-bind:chartInfo="this.charData.chartDwn"></DrawNLine>
    <NameArea v-bind:item="comName.DwnTitle"></NameArea>
    <DataGrid></DataGrid>
  </div>
</template>

<script>

import $ from 'jquery'
import NameArea from '@/components/baseCom/NameArea'
import HeadTableDouble from '@/components/jingpin/HeadTableDouble'
import DataGrid from '@/components/jingpin/jingpingrid'
import DivSplit from '@/components/baseCom/DivSplit'
import BtnGrp from '@/components/baseCom/BtnGrp'
import DrawOneBarOneLine from '@/components/echartCom/DrawOneBarOneLine'
import FenbuQushi from '@/components/baseCom/FenbuQushi'
import DrawTwoCake from '@/components/jingpin/DrawTwoPie'
import DrawNLine from '@/components/echartCom/DrawNLine'
import {dataChart, getGridData, dataRank, getHeadData} from "../service/jingpinApi"


export default {
  name: 'self',
  components: {DivSplit, DataGrid, HeadTableDouble, BtnGrp, NameArea, DrawOneBarOneLine, FenbuQushi, DrawTwoCake, DrawNLine},
  data () {
    return {
      comName: {
        DateBtnList: [{name: '月活度'}, {name: '变化前十'}, {name: '变化后十'}],
        HeadTitle: '现金宝APP(金融理财类)',
        HeadTableList: [{name: '总排行榜', unit: '名'}, {name: '类别排名', unit: '名'}, {name: '月独立设备数', unit: '万台'}, {name: '环比增幅', unit: '%'}],
        TopTitle: 'APP月活排名(前十)',
        MidTitle: 'APP趋势对比(近12个月)',
        DwnTitle: 'APP月活排名Top20'
      },
      switch: {
        proTypeRet: true,
        gmTypeRst: true,
        zhTypeRst: true,
        dateTypeRet: true,
        fenbuRst: true,
        jliOrQdRst: true
      },
      pageVal: {
        rankBtn: 1,//月活度 变化前十 变化后十
        fbOrQs: 1,//上图分布趋势
        pKey: '99999'//柱状图点击
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
      //月活度 变化前十 变化后十
      if (flag === 'f_rankDim') {
        this.changeRankDim(val)
      }
      // chartUp 分布趋势切换
      if (flag === 'f_fenbuQushi') {
        this.changeFenbuQushi(val)
      }
      // chartUp 柱子点击事件
      if (flag === 'f_chartUp') {
        this.onClickChartUpBar(val)
        this.$router.push({path: '/APPDetail', query: {}})
      }
      this.drawChartUp(this.pageVal)
    },
    changeRankDim: function(val) {
      this.pageVal.rankBtn = val
    },
    changeFenbuQushi: function (val) {
      this.pageVal.fbOrQs = val
    },
    onClickChartUpBar: function (val) {
      this.pageVal.pKey = parseInt(val.pKey)
      //TODO 跳转到APP详情页

    },
    setHeadData: function () {
      let headData = this.$refs.headData
      this.$http.post(this.$API_LIST.jingpin.jingpinHeadData).then(res => {
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
      this.$http.post(this.$API_LIST.jingpin.jingpinChartUp, {pageVal: pageVal}).then(res => {
        chartUp.setData(res.data.list, paramsUp)
      })
    },
    drawChartMid: function (pageVal) {
      let chartMid = this.$refs.chartMid
      this.$http.post(this.$API_LIST.jingpin.jingpinChartMid, {pageVal: pageVal}).then(res => {
        chartMid.setData(res.data.list)
      })
    },
    drawChartDwn: function (pageVal) {
      let jingpinChart = this.$refs.jingpinChart
      this.$http.post(this.$API_LIST.jingpin.jingpinChartDwn, {pageVal: pageVal}).then(res => {
        jingpinChart.setData(res.data.list)
      })
    },
    renderAction: function (pageVal) {
      this.drawChartUp(pageVal)
      this.drawChartMid(pageVal)
      this.drawChartDwn(pageVal)
    }
  },
  mounted () {
    let _this = this
    _this.setHeadData()
    _this.renderAction(_this.pageVal)
  }
}
</script>
