<template>
  <div>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <div id="chartContent">
      <tab-top @comChanged="changePageState($event,'f_tabtop')" v-bind:itemList="comName.tabTopList"></tab-top>
      <div id="guimoDiv">
        <HeadTable6r2rg @comChanged="changePageState($event,'f_tabletr')" ref="HeadTable1"></HeadTable6r2rg>
        <DivSplit/>
        <NameArea v-bind:item="comName.TopTitle"></NameArea>
        <TabDim v-if="this.switch.proTypeRet" @comChanged="changePageState($event,'f_protype')" v-bind:itemList="comName.TabDimList"></TabDim>
        <div id="gmDimDiv">
          <swiperOval v-if="this.switch.gmTypeRst" @comChanged="changePageState($event,'f_gmtype')" v-bind:itemList="comName.gmTypeList"></swiperOval>
        </div>
        <div id="zhDimDiv">
          <swiperOval v-if="this.switch.zhTypeRst" @comChanged="changePageState($event,'f_zhtype')" v-bind:itemList="comName.zhTypeList"></swiperOval>
        </div>
        <FenbuQushi  v-if="this.switch.fenbuRst1" @comChanged="changePageState($event,'f_fenbuQushi1')"/>
        <DrawTwoBar id="chartUp" ref="chartUp"  v-bind:chartInfo="this.charData.chartUp" @comChanged="changePageState($event,'f_chartUp')"/>
        <DrawTwoLine id="chartUp2" ref="chartUp2" :chartInfo="this.ChartUpName" @comChanged="changePageState($event,'f_chartUp2')" />
        <DrawThreeBarOneLine id="chartUp3" ref="chartUp3" v-bind:chartInfo="this.charData.chartUp3" @comChanged="changePageState($event,'f_chartUp')"/>
        <TabDimWidth100Up v-if="this.switch.dateTypeRet" @comChanged="changePageState($event,'f_dateType')" v-bind:itemList="comName.TabDimDateList"></TabDimWidth100Up>
        <HeadTableNoTitle id="sumUp" ref="sumUp" v-bind:itemList="comName.SumMeaList"></HeadTableNoTitle>
        <table style="width:100%;">
          <tr>
            <td style="width: 63%;">
              <NameArea v-bind:item="comName.MidTitle" id="MidTitle"></NameArea></td>
            <td style="width: 37%;">
              <FenbuQushi v-if="this.switch.fenbuRst2" ref="fenbuQushi2" @comChanged="changePageState($event,'f_fenbuQushi2')" /> </td>
          </tr>
        </table>
        <Tag id="tagMid" ref="tagMid"/>
        <DrawTwoBar id="chartMid" ref="chartMid"  v-bind:chartInfo="this.charData.chartMid"  @comChanged="changePageState($event,'f_chartMid')"/>
        <DrawTwoLine id="chartMid2" ref="chartMid2" v-bind:chartInfo="this.charData.chartMid"  @comChanged="changePageState($event,'f_chartMid2')" />
        <DrawThreeBarOneLine id="chartMid3" ref="chartMid3" v-bind:chartInfo="this.charData.chartMid3" @comChanged="changePageState($event,'f_chartMid')"/>
        <div v-if="pageVal.fbOrQs2 ===1" style="font-size:11px;font-family:PingFangSC-Regular;color: #999999;padding-bottom:9px;padding-top:3px;letter-spacing:1px" >*图中百分比代表保有量环比增长</div>
        <HeadTableNoTitle id="sumMid" ref="sumMid" v-bind:itemList="comName.SumMeaList"></HeadTableNoTitle>
        <div id="guimoDivDwn">
          <div  id="jlQdDim">
            <TabDimWidth100Dwn v-if="this.switch.jliOrQdRst" @comChanged="changePageState($event,'f_jingliQudao')" v-bind:itemList="comName.TabDimJlOrQdList"></TabDimWidth100Dwn>
          </div>
          <table style="width:100%;">
            <tr>
              <td style="width: 63%;"><NameArea v-bind:item="comName.DwnTitle"></NameArea></td>
              <td style="width: 37%;"><FenbuQushi v-if="this.switch.fenbuRst3" ref="fenbuQushi3"  @comChanged="changePageState($event,'f_fenbuQushi3')" /></td>
            </tr>
          </table>
          <Tag id="tagDwn" ref="tagDwn"/>
          <DrawTwoBar id="chartDwn" ref="chartDwn"  v-bind:chartInfo="this.charData.chartDwn" @comChanged="changePageState($event,'f_chartDwn')"/>
          <DrawTwoLine id="chartDwn2" ref="chartDwn2" v-bind:chartInfo="this.charData.chartDwn"  @comChanged="changePageState($event,'f_chartDwn2')" />
        </div>
      </div>
      <div id="kehuDiv">
        <HeadTable ref="kehuHead" v-bind:itemList="this.comName.kehuHeadList"/>
        <DivSplit/>
        <BtnGrop @comChanged="changePageState($event,'p_kehuDate')" v-bind:itemList="comName.TabDimDateList"/>
        <TabDim  @comChanged="changePageState($event,'p_kehuCusGrp')" v-bind:itemList="comName.EcCusGrpList"></TabDim>
        <swiperOvalNoAll  @comChanged="changePageState($event,'p_kehuMeaType')" v-bind:itemList="comName.kehuMeaType"></swiperOvalNoAll>
        <DrawNLine ref="kehuChart" v-bind:chartInfo="this.charData.kehuChart"/>
      </div>
    </div>
    <downloadPDF @pdfChanged="changePageState($event,'f_pdf')" v-bind:pdfApi="this.pdfApi"></downloadPDF>
    <dateDiv ref="dateDiv"/>
  </div>
</template>

<script>
import $ from 'jquery'
import TabTop from '@/components/baseCom/TabTop'
import HeadTable6r2rg from '@/components/hujin/HeadTable6r2rg'
import DivSplit from '@/components/baseCom/DivSplit'
import NameArea from '@/components/baseCom/NameArea'
import TabDim from '@/components/baseCom/TabDim'
import swiperOval from '@/components/baseCom/swiperOval'
import swiperOvalNoAll from '@/components/baseCom/swiperOvalNoAll'
import FenbuQushi from '@/components/baseCom/FenbuQushi'
import TabDimWidth100Up from '@/components/baseCom/TabDimWidth100Up'
import HeadTableNoTitle from '@/components/baseCom/HeadTableNoTitle'
import HeadTable from '@/components/baseCom/HeadTable'
import TabDimWidth100Dwn from '@/components/baseCom/TabDimWidth100Dwn'
import dateDiv from '@/components/baseCom/dateDiv'
import Tag from '@/components/baseCom/Tag'
import DrawTwoBar from '@/components/echartCom/DrawTwoBar'
import DrawTwoLine from '@/components/echartCom/DrawTwoLine'
import DrawThreeBarOneLine from '@/components/echartCom/DrawThreeBarOneLine'
import downloadPDF from '@/components/baseCom/downloadPDF'
import DrawNLine from '@/components/echartCom/DrawNLine'
import BtnGrop from '@/components/baseCom/BtnGrp'

export default {
  name: 'hujin',
  components: {TabTop, HeadTable6r2rg, BtnGrop, DivSplit, NameArea, TabDim, swiperOval, swiperOvalNoAll, FenbuQushi, TabDimWidth100Up, HeadTableNoTitle, HeadTable, TabDimWidth100Dwn, DrawTwoBar, DrawTwoLine, DrawThreeBarOneLine, DrawNLine, dateDiv, downloadPDF, Tag},
  data () {
    return {
      comName: {
        tabTopList: [{name: '规模'}, {name: '客户数'}],
        TopTitle: '规模对比',
        TabDimList: [{name: '全部'}, {name: '公募'}, {name: '专户'}, {name: '资管', clickDisable: true}],
        gmTypeList: [{name: '货币'}, {name: '权益'}, {name: '债券'}, {name: '理财'}],
        zhTypeList: [{name: '货币'}, {name: '权益'}],
        TabDimDateList: [{name: '当日'}, {name: '月度'}, {name: '季度'}, {name: '年度'}],
        SumMeaList: [{name: '总保有量(亿元)'}, {name: '总份额(亿份)'}],
        SumMeaList2: [{name: '总销售额(万元)'}, {name: '净申购金额(万元)'}],
        SumMeaList3: [{name: '总管理费(万元)'}, {name: '净收入(万元)'}],
        MidTitle: '业务团队规模对比-全部',
        MidTag: '全部团队',
        DwnTitle: '客户经理排名',
        TabDimJlOrQdList: [{name: '三方客户经理'}, {name: '三方渠道'}],
        kehuHeadList: [{name: '总客户数', unit: '万人'}, {name: '自有平台客户数', unit: '万人'}, {name: '三方平台客户数', unit: '万人'}],
        EcCusGrpList: [{name: '自有个人'}, {name: '自有高净值'}, {name: '自有企业'}, {name: '三方平台'}],
        kehuMeaType: [{name: '存量客户'}, {name: '增量客户'}],
        chartMidTeamName: ''
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
        pKey1: '999999',
        fbOrQs2: 1,
        pKey2: '999999',
        fbOrQs3: 1,
        pKey3: '999999',
        dataDate: '999999',
        jlOrQd: 1,
        kehuDateType: 1,
        kehuEcCusGrp: 1,
        kehuMeaType: 1
      },
      pageValName: {
        pKey2Name: '汇总',
        pKey3Name: '汇总',
        gmtypeName: '全部',
        zhtypeName: '全部'
      },
      // pdfApi: this.$API_LIST.hujinPdf
      pdfApi: 'https://iapp.htffund.com/microservice/iapp-dashboard/api/test/pdf'
    }
  },
  computed: {
    charData: function () {
      return {
        chartUp: {
          title: '保有量/份额 (单位:亿)',
          name1: '保有量',
          name2: '份额',
          pKey: this.pageVal.pKey1,
          clickParams: []
        },
        chartUp3: {
          title1: '销售额(单位:万元)',
          title2: '流入流出(单位:万元)',
          name1: '流入',
          name2: '流出',
          name3: '净流入',
          name4: '销售额',
          pKey: this.pageVal.pKey1,
          clickParams: []
        },
        chartMid: {
          title: '保有量/份额 (单位:亿)',
          name1: '保有量',
          name2: '份额',
          pKey: this.pageVal.pKey2,
          clickParams: []
        },
        chartMid3: {
          title1: '销售额(单位:万元)',
          title2: '流入流出(单位:万元)',
          name1: '流入',
          name2: '流出',
          name3: '净流入',
          name4: '销售额',
          pKey: this.pageVal.pKey2,
          clickParams: []
        },
        chartDwn: {
          title: '保有量/份额 (单位:亿)',
          name1: '保有量',
          name2: '份额',
          pKey: this.pageVal.pKey3,
          clickParams: []
        },
        kehuChart: {
          title: '客户数 (单位:人)',
          name: ['注册客户数', '绑卡客户数', '事实客户数', '有效客户数', '百元有效数', '千元有效数', '日活跃用户', '日充值百元人数'],
          selected: [true, false, false, false, false, false, false, false]
        }
      }
    },
    ChartUpName: function () {
      let name1 = {
        title: '保有量/份额 (单位:亿)',
        name1: '保有量',
        name2: '份额',
        pKey: this.pageVal.pKey1,
        clickParams: []
      }
      let name2 = {
        title: '销售额(单位:万元)',
        name1: '销售额',
        name2: '净流入',
        pKey: this.pageVal.pKey1,
        clickParams: []
      }
      return (this.pageVal.tabletr === 2) ? name2 : name1
    }
  },
  methods: {
    resetCom: function (switchValStr, pageValStr, parentId) {
      if (switchValStr !== undefined) {
        this.switch[switchValStr] = false
        this.$nextTick(() => { this.switch[switchValStr] = true })
      }
      if (pageValStr !== undefined) {
        this.pageVal[pageValStr] = 1
      }
      if (parentId !== undefined) {
        $('#' + parentId).show()
      }
    },
    changePageState: function (val, flag) {
      var reflashFlag = 'NO'
      // 规模 客户数 切换
      if (flag === 'f_tabtop') {
        reflashFlag = this.changeTabTop(val)
      }
      // 规模 表格tr切换
      if (flag === 'f_tabletr') {
        reflashFlag = this.changeTableTr(val)
      }
      // 规模 产品大类切换
      if (flag === 'f_protype') {
        reflashFlag = this.changeProtype(val)
      }
      // 规模 公募类型切换
      if (flag === 'f_gmtype') {
        reflashFlag = this.changeGmtype(val)
      }
      // 规模 专户类型切换
      if (flag === 'f_zhtype') {
        reflashFlag = this.changeZhtype(val)
      }
      // chartUp 分布趋势切换
      if (flag === 'f_fenbuQushi1') { reflashFlag = this.changeFenbuQushi1(val) }
      if (flag === 'f_chartUp') { reflashFlag = this.onClickChartUp(val) }
      // chartUp2 趋势图点击切换日期
      if (flag === 'f_chartUp2') {
        this.$refs.sumUp.headData[0].VALUE1 = val[0].data.VALUE1
        this.$refs.sumUp.headData[0].VALUE2 = val[0].data.VALUE2
        this.pageVal.dataDate = val[0].value.NAMEBAK
        this.$refs.fenbuQushi2.setData(true, this.pageVal.dataDate)
        this.drawChartMid(this.pageVal) // 根据数据日期重画ChartMid
      }
      // chartUp 日期切换
      if (flag === 'f_dateType') { this.pageVal.dateType = val }
      // chartMid 分布趋势切换
      if (flag === 'f_fenbuQushi2') { reflashFlag = this.changeFenbuQushi2(val) }
      // chartMid 柱状图 点击事件
      if (flag === 'f_chartMid') { reflashFlag = this.onClickChartMid(val) }
      // chartMid2 趋势图点击切换日期
      if (flag === 'f_chartMid2') {
        this.$refs.sumMid.headData[0].VALUE1 = val[0].data.VALUE1
        this.$refs.sumMid.headData[0].VALUE2 = val[0].data.VALUE2
        this.pageVal.dataDate = val[0].value.NAMEBAK
        this.$refs.fenbuQushi3.setData(true, this.pageVal.dataDate)
        this.drawChartDwn(this.pageVal) // 根据数据日期重画ChartDwn
      }
      // chartDwn 分布趋势切换
      if (flag === 'f_fenbuQushi3') { reflashFlag = this.changeFenbuQushi3(val) }
      // chartDwn 柱状图 点击事件
      if (flag === 'f_chartDwn') { reflashFlag = this.onClickChartDwn(val) }
      // 业务团队规模对比 三方客户经理三方渠道切换
      if (flag === 'f_jingliQudao') { reflashFlag = this.onClickJingliQudao(val) }
      //
      if (flag === 'p_kehuDate') {
        this.pageVal.kehuDateType = val
        reflashFlag = 'kehuChart'
      }
      //
      if (flag === 'p_kehuCusGrp') {
        this.pageVal.kehuEcCusGrp = val
        reflashFlag = 'kehuChart'
      }
      //
      if (flag === 'p_kehuMeaType') {
        this.pageVal.kehuMeaType = val
        reflashFlag = 'kehuChart'
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
      this.guimoGetDataAndDraw(this.pageVal, reflashFlag)
    },
    drawChartUp: function (pageVal) {
      let chartUp = this.$refs.chartUp
      let paramsUp = {
        label1Show: true,
        label2Show: false,
        labelNum: 1
      }
      this.$http.post(this.$API_LIST.hujinChartUp, pageVal).then(res => {
        chartUp.setData(res.data.list, paramsUp)
        chartUp.drawTwoBarChart()
        this.drawSumUp(res.data.list, pageVal)
      })
    },
    drawChartUp3: function (pageVal) {
      let chartUp3 = this.$refs.chartUp3
      let paramsUp = {
        label1Show: true,
        label2Show: true,
        labelNum: 1
      }
      this.$http.post(this.$API_LIST.hujinChartUp, pageVal).then(res => {
        chartUp3.setData(res.data.list, paramsUp)
        chartUp3.drawThreeBarOneLine()
        this.drawSumUp(res.data.list, pageVal)
      })
    },
    drawChartUp2: function (pageVal) {
      let chartUp2 = this.$refs.chartUp2
      let paramsUp = {
        label1Show: true,
        label2Show: false,
        labelNum: 2
      }
      this.$http.post(this.$API_LIST.hujinChartUp, pageVal).then(res => {
        chartUp2.setData(res.data.list, paramsUp, pageVal.dateType)
        chartUp2.drawTwoLineChart()
      })
    },
    drawSumUp: function (list, pageVal) {
      let sumUp = this.$refs.sumUp
      let val1 = 0; let val2 = 0
      if (pageVal.tabletr === 1) {
        for (let i = 0; i < list.length; i++) {
          val1 = val1 + parseFloat(list[i].VALUE1)
          val2 = val2 + parseFloat(list[i].VALUE2)
        }
        sumUp.setData(val1, val2, this.comName.SumMeaList)
      } else if (pageVal.tabletr === 2) {
        for (let i = 0; i < list.length; i++) {
          val1 = val1 + parseFloat(list[i].VALUE4)
          val2 = val2 + parseFloat(list[i].VALUE3)
        }
        sumUp.setData(val1, val2, this.comName.SumMeaList2)
      } else if (pageVal.tabletr === 3) {
        for (let i = 0; i < list.length; i++) {
          val1 = val1 + parseFloat(list[i].VALUE1)
          val2 = val2 + parseFloat(list[i].VALUE2)
        }
        sumUp.setData(val1, val2, this.comName.SumMeaList3)
      }
    },
    drawChartMid: function (pageVal) {
      let chartMid = this.$refs.chartMid
      let paramsMid = {
        ifShadow: true,
        shadowNum: 3,
        label1Show: true,
        label2Show: false,
        labelNum: 2,
        labelColor: false
      }
      this.$http.post(this.$API_LIST.hujinChartMid, pageVal).then(res => {
        chartMid.setData(res.data.list, paramsMid)
        chartMid.drawTwoBarChart()
        this.drawSumMid(res.data.list, pageVal)
      })
    },
    drawChartMid3: function (pageVal) {
      let chartMid3 = this.$refs.chartMid3
      let paramsMid = {
        ifShadow: true,
        shadowNum: 3,
        label1Show: true,
        label2Show: false,
        labelNum: 1
      }
      this.$http.post(this.$API_LIST.hujinChartMid, pageVal).then(res => {
        chartMid3.setData(res.data.list, paramsMid)
        chartMid3.drawThreeBarOneLine()
        this.drawSumMid(res.data.list, pageVal)
      })
    },
    drawChartMid2: function (pageVal) {
      let chartMid2 = this.$refs.chartMid2
      let paramsMid = {
        label1Show: true,
        label2Show: false,
        labelNum: 2
      }
      this.$http.post(this.$API_LIST.hujinChartMid, pageVal).then(res => {
        chartMid2.setData(res.data.list, paramsMid, pageVal.dateType)
        chartMid2.drawTwoLineChart()
      })
    },
    drawSumMid: function (list, pageVal) {
      let sumMid = this.$refs.sumMid
      let val1 = 0; let val2 = 0
      if (pageVal.tabletr === 1) {
        for (let i = 0; i < list.length; i++) {
          val1 = val1 + parseFloat(list[i].VALUE1)
          val2 = val2 + parseFloat(list[i].VALUE2)
        }
        sumMid.setData(val1, val2, this.comName.SumMeaList)
      } else if (pageVal.tabletr === 2) {
        for (let i = 0; i < list.length; i++) {
          val1 = val1 + parseFloat(list[i].VALUE4)
          val2 = val2 + parseFloat(list[i].VALUE3)
        }
        sumMid.setData(val1, val2, this.comName.SumMeaList2)
      } else if (pageVal.tabletr === 3) {
        for (let i = 0; i < list.length; i++) {
          val1 = val1 + parseFloat(list[i].VALUE1)
          val2 = val2 + parseFloat(list[i].VALUE2)
        }
        sumMid.setData(val1, val2, this.comName.SumMeaList3)
      }
    },
    drawChartDwn: function (pageVal) {
      let chartDwn = this.$refs.chartDwn
      let params = {
        label1Show: true,
        label2Show: false,
        labelNum: 1
      }
      this.$http.post(this.$API_LIST.hujinChartDwn, pageVal).then(res => {
        chartDwn.setData(res.data.list, params)
        chartDwn.drawTwoBarChart()
      })
    },
    drawChartDwn2: function (pageVal) {
      let chartDwn2 = this.$refs.chartDwn2
      let params = {
        label1Show: true,
        label2Show: false,
        labelNum: 2,
        labelColor: true
      }
      this.$http.post(this.$API_LIST.hujinChartDwn, pageVal).then(res => {
        chartDwn2.setData(res.data.list, params, pageVal.dateType)
        chartDwn2.drawTwoLineChart()
      })
    },
    drawkehuChart: function (pageVal) {
      let kehuChart = this.$refs.kehuChart
      this.$http.post(this.$API_LIST.hujinKehuChart, pageVal).then(res => {
        kehuChart.setData(res.data.list, pageVal.kehuDateType)
        kehuChart.drawNLine()
      })
    },
    guimoGetDataAndDraw: function (pageVal, flag) {
      if (flag === 'INIT') {
        if (pageVal.tabletr === 1 || pageVal.tabletr === 3) {
          this.drawChartUp(pageVal)
          this.drawChartMid(pageVal)
        } else {
          this.drawChartUp3(pageVal)
          this.drawChartMid3(pageVal)
        }
      } else if (flag === 'Up2Mid13') {
        if (pageVal.tabletr === 1 || pageVal.tabletr === 3) {
          this.drawChartUp2(pageVal)
          this.drawChartMid(pageVal)
        } else {
          this.drawChartUp2(pageVal)
          this.drawChartMid3(pageVal)
        }
      } else if (flag === 'MidChart') {
        if (pageVal.fbOrQs2 === 1) {
          if (pageVal.tabletr === 1 || pageVal.tabletr === 3) {
            this.drawChartMid(pageVal)
          } else {
            this.drawChartMid3(pageVal)
          }
        } else if (pageVal.fbOrQs2 === 2) {
          this.drawChartMid2(pageVal)
        }
      } else if (flag === 'MidDwn') {
        if (pageVal.fbOrQs2 === 1) {
          if (pageVal.tabletr === 1 || pageVal.tabletr === 3) {
            this.drawChartMid(pageVal)
          } else {
            this.drawChartMid3(pageVal)
          }
        } else if (pageVal.fbOrQs2 === 2) {
          this.drawChartMid2(pageVal)
        }
        this.drawChartDwn(pageVal)
      } else if (flag === 'DwnChart') {
        if (pageVal.fbOrQs3 === 1) {
          this.drawChartDwn(pageVal)
        } else {
          this.drawChartDwn2(pageVal)
        }
      } else if (flag === 'kehuChart') {
        this.drawkehuChart(pageVal)
      } else if (flag === 'NO') {
        return false
      }
    },
    changeTabTop: function (val) {
      this.pageVal.tabTop = val
      if (this.pageVal.tabTop === 1) {
        $('#guimoDiv').show()
        $('#kehuDiv').hide()
        this.$myUtil.watermark({watermark_txt0: 'test 00000'})
      } else if (this.pageVal.tabTop === 2) {
        $('#guimoDiv').hide()
        $('#kehuDiv').show()
        this.$myUtil.watermark({watermark_txt0: 'ssss 999999'})
      }
      // dateDiv 重新布局
      this.$refs.dateDiv.changeBottomStyle()
      return 'NO'
    },
    changeTableTr: function (val) {
      this.pageVal.tabletr = val
      $('#guimoDivDwn').hide()
      $('#chartUp,#chartUp2,#chartUp3').hide()
      $('#chartMid,#chartMid2,#chartMid3').hide()
      $('#gmDimDiv,#zhDimDiv').hide()
      if (val === 1 || val === 3) {
        $('#chartUp').show()
        $('#chartMid').show()
      } else {
        $('#chartUp3').show()
        $('#chartMid3').show()
      }
      this.pageVal.pKey2 = '999999'
      this.pageVal.pKey3 = '999999'
      this.resetCom('proTypeRet', 'proType')
      this.resetCom('fenbuRst1', 'fbOrQs1')
      this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
      this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
      return 'INIT'
    },
    changeProtype: function (val) {
      this.pageVal.proType = val
      $('#guimoDivDwn').hide()
      $('#chartUp2,#chartUp3').hide()
      $('#chartUp').show()
      $('#chartMid2,#chartMid3').hide()
      $('#chartMid').show()
      $('#gmDimDiv,#zhDimDiv').hide()
      this.resetCom('fenbuRst1', 'fbOrQs1')
      this.pageVal.pKey2 = '999999'
      this.pageValName.pKey2Name = '汇总'
      this.comName.MidTitle = '业务团队规模对比-' + this.comName.TabDimList[val - 1].name
      this.drawChartUp(this.pageVal)
      this.drawChartMid(this.pageVal)
      this.drawChartDwn(this.pageVal)
      this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
      if (val === 2) {
        $('#gmDimDiv').show()
        this.resetCom('gmTypeRst', 'gmType')
      } else if (val === 3) {
        $('#zhDimDiv').show()
        this.resetCom('zhTypeRst', 'zhType')
      }
      return 'INIT'
    },
    changeGmtype: function (val) {
      this.pageVal.gmType = val
      if (val >= 2) {
        this.pageValName.gmtypeName = this.comName.gmTypeList[this.pageVal.gmType - 2].name
      } else {
        this.pageValName.gmtypeName = '全部'
      }
      this.comName.MidTitle = '业务团队规模对比-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.gmtypeName
      if (this.pageVal.pKey2 === 5) {
        this.comName.DwnTitle = '三方渠道排名-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.gmtypeName + '-' + this.pageValName.pKey2Name
      } else {
        this.comName.DwnTitle = '客户经理排名-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.gmtypeName + '-' + this.pageValName.pKey2Name
      }
      this.drawChartMid(this.pageVal)
      this.drawChartDwn(this.pageVal)
      this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
      this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
      return 'INIT'
    },
    changeZhtype: function (val) {
      this.pageVal.zhType = val
      if (val >= 2) {
        this.pageValName.zhtypeName = this.comName.zhTypeList[this.pageVal.zhType - 2].name
      } else {
        this.pageValName.zhtypeName = '全部'
      }
      this.comName.MidTitle = '业务团队规模对比-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.zhtypeName
      if (this.pageVal.jlOrQd === 2) {
        this.comName.DwnTitle = '三方渠道排名-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.zhtypeName + '-' + this.pageValName.pKey2Name
      } else {
        this.comName.DwnTitle = '客户经理排名-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.zhtypeName + '-' + this.pageValName.pKey2Name
      }
      this.comName.DwnTitle = '客户经理排名-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.zhtypeName + '-' + this.pageValName.pKey2Name
      this.drawChartMid(this.pageVal)
      this.drawChartDwn(this.pageVal)
      this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
      this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
      return 'INIT'
    },
    changeFenbuQushi1: function (val) {
      this.pageVal.fbOrQs1 = val
      $('#guimoDivDwn').hide()
      $('#chartUp,#chartUp2,#chartUp3').hide()
      $('#chartMid,#chartMid2,#chartMid3').hide()
      this.pageVal.pKey2 = '999999'
      this.pageValName.pKey2Name = '汇总'
      if (val === 1) {
        if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
          $('#chartUp').show()
          $('#chartMid').show()
        } else {
          $('#chartUp3').show()
          $('#chartMid3').show()
        }
        this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
        return 'INIT'
      } else {
        if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
          $('#chartUp2').show()
          $('#chartMid').show()
        } else {
          $('#chartUp2').show()
          $('#chartMid3').show()
        }
        this.pageVal.fbOrQs2 = 1
        return 'Up2Mid13'
      }
    },
    onClickChartUp: function (val) {
      this.pageVal.pKey1 = val.pKey
    },
    changeFenbuQushi2: function (val) {
      this.pageVal.fbOrQs2 = val
      $('#chartMid,#chartMid2,#chartMid3,#tagMid').hide()
      this.$refs.fenbuQushi3.setData(true, this.pageVal.dataDate)
      if (this.pageVal.pKey2 !== '999999') {
        if (val === 1) {
          if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
            $('#chartMid').show()
          } else {
            $('#chartMid3').show()
          }
          this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
        } else {
          $('#chartMid2').show()
          this.$refs.tagMid.text = this.pageValName.pKey2Name
          $('#tagMid').slideDown()
          this.$refs.fenbuQushi3.setData(false, this.pageVal.dataDate)
        }
        $('#chartDwn').show()
        return 'MidDwn'
      } else {
        if (val === 1) {
          this.$refs.fenbuQushi3.setData(false, this.pageVal.dataDate)
          $('#tagMid').slideUp()
          if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
            $('#chartMid').show()
          } else {
            $('#chartMid3').show()
          }
        } else {
          $('#chartMid2').show()
          this.$refs.tagMid.text = this.pageValName.pKey2Name
          $('#tagMid').slideDown()
        }
        this.changeFenbuQushi3(1)
        return 'MidChart'
      }
    },
    onClickChartMid: function (val) {
      this.pageVal.pKey3 = '999999'
      this.pageVal.pKey2 = val.pKey
      this.pageValName.pKey2Name = val.pKeyName !== 'ALL' ? val.pKeyName : '汇总'
      this.pageValName.pKey3Name = '汇总'
      $('#chartDwn2').hide()
      if (this.pageVal.proType === 2) {
        this.comName.DwnTitle = '客户经理排名-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.gmtypeName + '-' + this.pageValName.pKey2Name
      } else if (this.pageVal.proType === 3) {
        this.comName.DwnTitle = '客户经理排名-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.zhtypeName + '-' + this.pageValName.pKey2Name
      } else {
        this.comName.DwnTitle = '客户经理排名-' + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.pKey2Name
      }
      this.drawChartDwn(this.pageVal)
      $('#chartDwn').show()
      $('#tagDwn').hide()
      if (val.pKey !== '999999') {
        if (this.pageVal.fbOrQs1 === 2) {
          this.$refs.fenbuQushi3.setData(true, this.pageVal.dataDate)
        } else {
          this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
        }
        $('#guimoDivDwn').slideDown()
        if (val.pKey === '5') {
          $('#jlQdDim').show()
        } else {
          $('#jlQdDim').hide()
        }
      } else {
        $('#guimoDivDwn').slideUp()
        return 'NO'
      }
      return 'DwnChart'
    },
    changeFenbuQushi3: function (val) {
      this.pageVal.fbOrQs3 = val
      if (val === 1) {
        $('#chartDwn2').hide()
        $('#chartDwn').show()
        $('#tagDwn').slideUp()
      } else if (val === 2) {
        $('#chartDwn').hide()
        $('#chartDwn2').show()
        this.$refs.tagDwn.text = this.pageValName.pKey3Name
        $('#tagDwn').slideDown()
      }
      return 'DwnChart'
    },
    onClickChartDwn: function (val) {
      this.pageVal.pKey3 = val.pKey
      this.pageValName.pKey3Name = val.pKeyName !== 'ALL' ? val.pKeyName : '汇总'
    },
    onClickJingliQudao: function (val) {
      this.pageVal.jlOrQd = val
      var JingliQudao = (val === 2) ? '三方渠道排名-' : '客户经理排名-'
      if (this.pageVal.proType === 2) { // 改标题
        this.comName.DwnTitle = JingliQudao + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.gmtypeName + '-' + this.pageValName.pKey2Name
      } else if (this.pageVal.proType === 3) {
        this.comName.DwnTitle = JingliQudao + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.zhtypeName + '-' + this.pageValName.pKey2Name
      } else {
        this.comName.DwnTitle = JingliQudao + this.comName.TabDimList[this.pageVal.proType - 1].name + '-' + this.pageValName.pKey2Name
      }
      this.drawChartDwn(this.pageVal)
      $('#chartDwn2').hide()
      $('#chartDwn').show()
      $('#tagDwn').hide()
      this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
    },
    guimoInit: function () {
      // 规模 经理渠道 初始化隐藏
      $('#jlQdDim').hide()
      $('#chartDwn2').hide()
      $('#chartDwn').show()
      $('#guimoDivDwn').hide()
      // chart 隐藏
      $('#chartUp').show()
      $('#chartUp2,#chartUp3').hide()
      $('#chartMid').show()
      $('#chartMid2,#chartMid3').hide()
      //
      $('#gmDimDiv,#zhDimDiv').hide()
      //
      $('#tagMid,#tagDwn').hide()
      //
      $('#kehuDiv').hide()
      // 头部 数据 初始化
      let HeadTable1 = this.$refs.HeadTable1
      this.$http.post(this.$API_LIST.hujinHeadData, this.pageVal).then(res => {
        HeadTable1.setData(res.data.list)
      })
      let dateDiv = this.$refs.dateDiv
      this.$http.post(this.$API_LIST.hujinDataDate, this.pageVal).then(res => {
        dateDiv.date = res.data.list[0].NAME
        this.pageVal.dataDate = res.data.list[0].NAME
      })
      // 上图 中图 上汇总 中汇总 初始化
      this.guimoGetDataAndDraw(this.pageVal, 'INIT')
    },
    kehuInit: function () {
      let kehuhead = this.$refs.kehuHead
      this.$http.post(this.$API_LIST.hujinKehuHeadData).then(res => {
        kehuhead.setData(res.data.list)
      })
      let kehuChart = this.$refs.kehuChart
      this.$http.post(this.$API_LIST.hujinKehuChart, this.pageVal).then(res => {
        kehuChart.setData(res.data.list, 1)
        kehuChart.drawNLine()
      })
    }
  },
  mounted () {
    this.guimoInit()
    this.kehuInit()
    // this.$myUtil.watermark({watermark_txt0: 'liuyi 099889'})
    this.$myUtil.getDeviceWidth()
  }
}
</script>

<style scoped>

</style>
