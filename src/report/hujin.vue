<template>
  <div style="overflow: hidden">
    <title>互金业务数据</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <div id="chartContent">
      <tab-top @comChanged="changePageState($event,'f_tabtop')" v-bind:itemList="comName.tabTopList"></tab-top>
      <div id="guimoDiv">
        <HeadTable6r2rg @comChanged="changePageState($event,'f_tabletr')" ref="HeadTable1"></HeadTable6r2rg>
        <DivSplit/>
        <NameArea v-bind:item="comName.TopTitle"></NameArea>
        <TabDim v-if="this.switch.proTypeRet"  ref="proType" @comChanged="changePageState($event,'f_protype')" v-bind:itemList="comName.TabDimList"></TabDim>
        <div id="gmDimDiv">
          <swiperOval v-if="this.switch.gmTypeRst" ref="gmType" @comChanged="changePageState($event,'f_gmtype')" v-bind:itemList="comName.gmTypeList"></swiperOval>
        </div>
        <div id="zhDimDiv">
          <swiperOval v-if="this.switch.zhTypeRst" ref="zhType"  @comChanged="changePageState($event,'f_zhtype')" v-bind:itemList="comName.zhTypeList"></swiperOval>
        </div>
        <FenbuQushi  v-if="this.switch.fenbuRst1" @comChanged="changePageState($event,'f_fenbuQushi1')"/>
        <DrawTwoBar id="chartUp" ref="chartUp"  v-bind:chartInfo="this.charData.chartUp" @comChanged="changePageState($event,'f_chartUp')"/>
        <DrawTwoLine id="chartUp2" ref="chartUp2" :chartInfo="this.charData.chartUp2" @comChanged="changePageState($event,'f_chartUp2')" />
        <DrawThreeBarOneLine id="chartUp3" ref="chartUp3" v-bind:chartInfo="this.charData.chartUp3" @comChanged="changePageState($event,'f_chartUp')"/>
        <TabDimWidth100Up  id="dateDim" @comChanged="changePageState($event,'f_dateType')" v-bind:itemList="comName.TabDimDateList"></TabDimWidth100Up>
        <TabDimWidth100Up  id="dateDim2" @comChanged="changePageState($event,'f_dateType2')" v-bind:itemList="comName.TabDimDateList2"></TabDimWidth100Up>
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
        <DrawTwoLine id="chartMid2" ref="chartMid2" v-bind:chartInfo="this.charData.chartMid2"  @comChanged="changePageState($event,'f_chartMid2')" />
        <DrawThreeBarOneLine id="chartMid3" ref="chartMid3" v-bind:chartInfo="this.charData.chartMid3" @comChanged="changePageState($event,'f_chartMid')"/>
        <div>
          <span style="font-size: 12px;color: #333;">图例解释</span> <help id="icon2" ref="help"></help>
        </div>
        <HeadTableNoTitle id="sumMid" ref="sumMid" v-bind:itemList="comName.SumMeaList"></HeadTableNoTitle>
        <div id="guimoDivDwn">
          <div  id="jlQdDim">
            <TabDimWidth100Dwn v-if="this.switch.jliOrQdRst" @comChanged="changePageState($event,'f_jingliQudao')" v-bind:itemList="comName.TabDimJlOrQdList"></TabDimWidth100Dwn>
          </div>
          <table style="width:100%;">
            <tr>
              <td style="width: 65%;"><NameArea v-bind:item="comName.DwnTitle"></NameArea></td>
              <td style="width: 35%;"><FenbuQushi v-if="this.switch.fenbuRst3" ref="fenbuQushi3"  @comChanged="changePageState($event,'f_fenbuQushi3')" /></td>
            </tr>
          </table>
          <Tag id="tagDwn" ref="tagDwn"/>
          <DrawTwoBar id="chartDwn" ref="chartDwn"  v-bind:chartInfo="this.charData.chartDwn" @comChanged="changePageState($event,'f_chartDwn')"/>
          <DrawTwoLine id="chartDwn2" ref="chartDwn2" v-bind:chartInfo="this.charData.chartDwn2"  @comChanged="changePageState($event,'f_chartDwn2')" />
          <DrawThreeBarOneLine id="chartDwn3" ref="chartDwn3" v-bind:chartInfo="this.charData.chartDwn3"  @comChanged="changePageState($event,'f_chartDwn')" />
          <DivSplit/>
        </div>
      </div>
      <div id="kehuDiv">
        <HeadTable ref="kehuHead" v-bind:itemList="this.comName.kehuHeadList"/>
        <DivSplit/>
        <BtnGrop @comChanged="changePageState($event,'p_kehuDate')" v-bind:itemList="comName.TabDimDateList"/>
        <TabDim  @comChanged="changePageState($event,'p_kehuCusGrp')" v-bind:itemList="comName.EcCusGrpList"></TabDim>
        <swiperOvalNoAll  @comChanged="changePageState($event,'p_kehuMeaType')" v-bind:itemList="comName.kehuMeaType"></swiperOvalNoAll>
        <DrawNLine ref="kehuChart" v-bind:chartInfo="this.charData.kehuChart"/>
        <DivSplit/>
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
  import help from '@/components/baseCom/Help'

  export default {
    name: 'hujin',
    components: {help, TabTop, HeadTable6r2rg, BtnGrop, DivSplit, NameArea, TabDim, swiperOval, swiperOvalNoAll, FenbuQushi, TabDimWidth100Up, HeadTableNoTitle, HeadTable, TabDimWidth100Dwn, DrawTwoBar, DrawTwoLine, DrawThreeBarOneLine, DrawNLine, dateDiv, downloadPDF, Tag},
    data () {
      return {
        comName: {
          tabTopList: [{name: '规模'}, {name: '客户数'}],
          TopTitle: '规模对比',
          TabDimList: [{name: '全部'}, {name: '公募'}, {name: '专户'}, {name: '资管', clickDisable: true}],
          gmTypeList: [{name: '货币'}, {name: '权益'}, {name: '债券'}, {name: '理财'}],
          zhTypeList: [{name: '货币'}, {name: '权益'}],
          TabDimDateList: [{name: '当日'}, {name: '月度'}, {name: '季度'}, {name: '年度'}],
          TabDimDateList2: [{name: '月度'}, {name: '季度'}, {name: '年度'}],
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
          dateType1: 1,
          dateType2: 2,
          fbOrQs1: 1,
          pKey1: '999999',
          fbOrQs2: 1,
          pKey2: '999999',
          fbOrQs3: 1,
          pKey3: '999999',
          dataDate: '999999',
          BATCHDate: '999999',
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
        pdfApi: this.$API_LIST.hujinPdf,
        help:{
          ecgropRate:'高净值/大众/企业 三者占比为所占自有平台的比例，自有/三方的占比为两者在总量中所占比例',
          lineRate:'图中的百分比代表环比增长'
        }
      }
    },
    computed: {
      charData: function () {
        let fundUp  = { title: '保有量/份额 (单位:亿)', name: ['保有量', '份额'], clickParams: [] }
        let fundMid = { title: '保有量/份额 (单位:亿)', name: ['保有量', '份额'], pKey: this.pageVal.pKey2, clickParams: [] }
        let fundWwn = { title: '保有量/份额 (单位:亿)', name: ['保有量', '份额'], pKey: this.pageVal.pKey3, clickParams: [] }

        let transUp = { title: ['销售额(单位:万)', '流入流出(单位:万)'], name: ['流入', '流出', '净流入', '销售额'], clickParams: [] }
        let transMid= { title: ['销售额(单位:万)', '流入流出(单位:万)'], name: ['流入', '流出', '净流入', '销售额'], pKey: this.pageVal.pKey2, clickParams: [] }
        let transWwn= { title: ['销售额(单位:万)', '流入流出(单位:万)'], name: ['流入', '流出', '净流入', '销售额'], pKey: this.pageVal.pKey2, clickParams: [] }
        let transLine={ title: '金额(单位:万)', name:['净流入', '销售额']}

        let feeUp =   { title: '管理费/净收入 (单位:万)', name: ['管理费', '净收入'], clickParams: [] }
        let feeMid =  { title: '管理费/净收入 (单位:万)', name: ['管理费', '净收入'], pKey: this.pageVal.pKey2, clickParams: [] }
        let feeWwn =  { title: '管理费/净收入 (单位:万)', name: ['管理费', '净收入'], pKey: this.pageVal.pKey3, clickParams: [] }

        let kehuChart={  title: '客户数 (单位:人)', name: ['注册客户数', '绑卡客户数', '事实客户数', '有效客户数', '百元有效数', '千元有效数', '日活跃用户', '日充值百元人数'],
          selected: [true, false, false, false, false, false, false, false]
        }
        if (this.pageVal.tabletr === 1) {
          return {
            chartUp: fundUp, chartUp2:fundUp, chartMid: fundMid, chartMid2: fundMid, chartDwn: fundWwn,chartDwn2: fundWwn, kehuChart: kehuChart
          }
        } else if (this.pageVal.tabletr === 2) {
          return {
            chartUp3: transUp,chartUp2:transLine, chartMid3: transMid,chartMid2:transLine,  chartDwn3: transWwn,chartDwn2:transLine, kehuChart: kehuChart
          }
        } else if (this.pageVal.tabletr === 3) {
          return {
            chartUp: feeUp, chartUp2: feeUp, chartMid: feeMid, chartMid2: feeMid, chartDwn: feeWwn, chartDwn2: feeWwn, kehuChart: kehuChart
          }
        }
      }
    },
    methods: {
      resetCom: function (switchValStr, pageValStr, parentId) {
        if (switchValStr !== undefined) {
          this.switch[switchValStr] = false
          this.$nextTick(() => {
            this.switch[switchValStr] = true
          })
        }
        if (pageValStr !== undefined) {
          this.pageVal[pageValStr] = 1
        }
        if (parentId !== undefined) {
          $('#' + parentId).show()
        }
      },
      changePageState: function (val, flag) {
        var reflashFlag = 'no'
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
        if (flag === 'f_fenbuQushi1') {
          reflashFlag = this.changeFenbuQushi1(val)
        }
        // chartUp 柱子点击事件
        if (flag === 'f_chartUp') {
          reflashFlag = this.onClickChartUpBar(val)
        }
        // chartUp2 趋势图点击切换日期
        if (flag === 'f_chartUp2') {
          reflashFlag = this.onClickChartUpLine(val)
        }
        // chartUp 日期切换
        if (flag === 'f_dateType') {
          reflashFlag = this.changeDateType(val)
        }
        // chartUp 日期2切换
        if (flag === 'f_dateType2') {
          reflashFlag = this.changeDateType2(val)
        }
        // chartMid 分布趋势切换
        if (flag === 'f_fenbuQushi2') {
          reflashFlag = this.changeFenbuQushi2(val)
        }
        // chartMid 柱状图 点击事件
        if (flag === 'f_chartMid') {
          reflashFlag = this.onClickChartMidBar(val)
        }
        // chartMid2 趋势图点击切换日期
        if (flag === 'f_chartMid2') {
          reflashFlag = this.onClickChartMidLine(val)
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
          reflashFlag = this.onClickJingliQudao(val)
        }
        //
        if (flag === 'p_kehuDate') {
          this.pageVal.kehuDateType = val
          reflashFlag = 'kehu'
        }
        //
        if (flag === 'p_kehuCusGrp') {
          this.pageVal.kehuEcCusGrp = val
          reflashFlag = 'kehu'
        }
        //
        if (flag === 'p_kehuMeaType') {
          this.pageVal.kehuMeaType = val
          reflashFlag = 'kehu'
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
        console.log(this.pageVal)
        this.guimoGetDataAndDraw(this.pageVal, reflashFlag)
      },
      drawChartUp: function (pageVal) {
        this.$http.post(this.$API_LIST.hujinChartUp, pageVal).then(res => {
          if(pageVal.fbOrQs1 === 1){ //上图 分布
            if(pageVal.tabletr === 1 || pageVal.tabletr === 3){
              let chartUp = this.$refs.chartUp
              let params = {
                label1Show: true,
                label2Show: true,
                labelNum: 1,
                initSelKey: this.pageVal.pKey1.toString()
              }
              chartUp.setData(res.data.list, params)
            }else if(pageVal.tabletr === 2){
              let chartUp3 = this.$refs.chartUp3
              let paramsUp = {
                label1Show: true,
                label2Show: true,
                labelNum: 1,
                initSelKey: this.pageVal.pKey1.toString()
              }
              chartUp3.setData(res.data.list, paramsUp)
            }
            this.drawSumUp(res.data.list, pageVal)
          } else if (pageVal.fbOrQs1 === 2){ //上图趋势
            let chartUp2 = this.$refs.chartUp2
            let paramsUp = {
              label1Show: true,
              label2Show: false,
              labelNum: 2
            }
            chartUp2.setData(res.data.list, paramsUp, pageVal.dateType)
          }
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
          val1 = val1.toFixed(2)
          val2 = val2.toFixed(2)
          sumUp.setData(val1, val2, this.comName.SumMeaList)
        } else if (pageVal.tabletr === 2) {
          for (let i = 0; i < list.length; i++) {
            val1 = val1 + parseFloat(list[i].VALUE1)
            if (this.pageVal.fbOrQs1 === 1) {
              val2 = val2 + parseFloat(list[i].VALUE3)
            } else {
              val2 = val2 + parseFloat(list[i].VALUE2)
            }
          }
          val1 = val1.toFixed(2)
          val2 = val2.toFixed(2)
          sumUp.setData(val1, val2, this.comName.SumMeaList2)
        } else if (pageVal.tabletr === 3) {
          for (let i = 0; i < list.length; i++) {
            val1 = val1 + parseFloat(list[i].VALUE1)
            val2 = val2 + parseFloat(list[i].VALUE2)
          }
          val1 = val1.toFixed(2)
          val2 = val2.toFixed(2)
          sumUp.setData(val1, val2, this.comName.SumMeaList3)
        }
      },
      drawChartMid: function (pageVal) {
        this.$http.post(this.$API_LIST.hujinChartMid, pageVal).then(res => {
          if(pageVal.fbOrQs2 === 1){ // 中图 分布
            if(pageVal.tabletr === 1 || pageVal.tabletr === 3){
              let chartMid = this.$refs.chartMid
              let paramsMid = {
                ifShadow: true,
                shadowNum: 3,
                label1Show: true,
                label2Show: false,
                labelNum: 2,
                labelColor: false,
                initSelKey: this.pageVal.pKey2.toString()
              }
              let retData = res.data.list
              if(pageVal.tabletr == 3){ //费用的时候，造出自有的数据
                let zy = {'KKEY':'4','VALUE1':0,'VALUE2':0,'NAME':'自有'}
                for (let i = 0; i < 3; i++) {
                  zy.VALUE1 = parseFloat(retData[i].VALUE1)+zy.VALUE1
                  zy.VALUE2 = parseFloat(retData[i].VALUE2)+zy.VALUE2
                }
                zy.VALUE1 = (zy.VALUE1).toFixed(2).toString()
                zy.VALUE2 = (zy.VALUE2).toFixed(2).toString()
                retData.splice(3, 0, zy);
                console.log(retData)
              }
              let zyCapital = 0
              let zyShares = 0
              let sfCapital = 0
              let sfShares = 0
              for (let i = 0; i < retData.length; i++) {
                if (retData[i].KKEY === '4') {
                  zyCapital = retData[i].VALUE1
                  zyShares = retData[i].VALUE2
                }
                if (retData[i].KKEY === '5') {
                  sfCapital = retData[i].VALUE1
                  sfShares = retData[i].VALUE2
                }
              }
              for (let i = 0; i < retData.length; i++) {
                if (zyCapital !== 0 && sfCapital !== 0) {
                  if (retData[i].KKEY === '1' || retData[i].KKEY === '2' || retData[i].KKEY === '3') {
                    retData[i].RATE1 = ((parseFloat(retData[i].VALUE1) / parseFloat(zyCapital)) * 100).toFixed(2)
                    retData[i].RATE2 = ((parseFloat(retData[i].VALUE2) / parseFloat(zyShares)) * 100).toFixed(2)
                  }
                  if (retData[i].KKEY === '4' || retData[i].KKEY === '5') {
                    retData[i].RATE1 = ((parseFloat(retData[i].VALUE1) / (parseFloat(zyCapital) + parseFloat(sfCapital))) * 100).toFixed(2)
                    retData[i].RATE2 = ((parseFloat(retData[i].VALUE2) / (parseFloat(zyShares) + parseFloat(sfShares))) * 100).toFixed(2)
                  }
                } else if (sfCapital === 0 && zyCapital !== 0) {
                  retData[i].RATE1 = ((parseFloat(retData[i].VALUE1) / parseFloat(zyCapital)) * 100).toFixed(2)
                  retData[i].RATE2 = ((parseFloat(retData[i].VALUE2) / parseFloat(zyShares)) * 100).toFixed(2)
                } else if (sfCapital !== 0 && zyCapital === 0) {
                  retData[i].RATE1 = ((parseFloat(retData[i].VALUE1) / parseFloat(zyCapital)) * 100).toFixed(2)
                  retData[i].RATE2 = ((parseFloat(retData[i].VALUE2) / parseFloat(zyShares)) * 100).toFixed(2)
                }
              }
              chartMid.setData(retData, paramsMid)
            }else if(pageVal.tabletr === 2){
              let chartMid3 = this.$refs.chartMid3
              let paramsMid = {
                ifShadow: true,
                shadowNum: 3,
                label1Show: true,
                label2Show: false,
                labelNum: 1,
                initSelKey: this.pageVal.pKey2.toString()
              }
              chartMid3.setData(res.data.list, paramsMid)
            }
            this.drawSumMid(res.data.list, pageVal)
          } else if(pageVal.fbOrQs2 === 2){ // 中图 趋势
            let chartMid2 = this.$refs.chartMid2
            let paramsMid = {
              label1Show: true,
              label2Show: false,
              labelNum: 2
            }
            chartMid2.setData(res.data.list, paramsMid, pageVal.dateType)
          }
        })
      },
      drawSumMid: function (list, pageVal) {
        let sumMid = this.$refs.sumMid
        let val1 = 0; let val2 = 0
        if (pageVal.tabletr === 1) {
          for (let i = 0; i < list.length; i++) {
            if (list[i].NAME === '自有' || list[i].NAME === '三方') {
              val1 = val1 + parseFloat(list[i].VALUE1)
              val2 = val2 + parseFloat(list[i].VALUE2)
            }
          }
          val1 = val1.toFixed(2)
          val2 = val2.toFixed(2)
          sumMid.setData(val1, val2, this.comName.SumMeaList)
        } else if (pageVal.tabletr === 2) {
          for (let i = 0; i < list.length; i++) {
            if (list[i].NAME === '自有' || list[i].NAME === '三方') {
              val1 = val1 + parseFloat(list[i].VALUE1)
              if (this.pageVal.fbOrQs2 === 1) {
                val2 = val2 + parseFloat(list[i].VALUE3)
              } else {
                val2 = val2 + parseFloat(list[i].VALUE2)
              }
            }
          }
          val1 = val1.toFixed(2)
          val2 = val2.toFixed(2)
          sumMid.setData(val1, val2, this.comName.SumMeaList2)
        } else if (pageVal.tabletr === 3) {
          for (let i = 0; i < list.length; i++) {
            if (list[i].NAME === '自有' || list[i].NAME === '三方') {
              val1 = val1 + parseFloat(list[i].VALUE1)
              val2 = val2 + parseFloat(list[i].VALUE2)
            }
          }
          val1 = val1.toFixed(2)
          val2 = val2.toFixed(2)
          sumMid.setData(val1, val2, this.comName.SumMeaList3)
        }
      },
      drawChartDwn: function (pageVal) {
        this.$http.post(this.$API_LIST.hujinChartDwn, pageVal).then(res => {
          if (pageVal.fbOrQs3 === 1) {
            if (pageVal.tabletr === 1 || pageVal.tabletr === 3) {
              let chartDwn = this.$refs.chartDwn
              let params = {
                label1Show: true,
                label2Show: false,
                labelNum: 1,
                initSelKey: this.pageVal.pKey3.toString()
              }
              chartDwn.setData(res.data.list, params)
            } else if (pageVal.tabletr === 2) {
              let chartDwn3 = this.$refs.chartDwn3
              let params = {
                label1Show: true,
                label2Show: false,
                labelNum: 1,
                initSelKey: this.pageVal.pKey3.toString()
              }
              chartDwn3.setData(res.data.list, params)
            }
          } else if (pageVal.fbOrQs3 === 2) {
            let chartDwn2 = this.$refs.chartDwn2
            let params = {
              label1Show: true,
              label2Show: false,
              labelNum: 2,
              labelColor: true
            }
            chartDwn2.setData(res.data.list, params, pageVal.dateType)
          }
        })
      },
      drawkehuChart: function (pageVal) {
        let kehuChart = this.$refs.kehuChart
        this.$http.post(this.$API_LIST.hujinKehuChart, pageVal).then(res => {
          kehuChart.setData(res.data.list, pageVal.kehuDateType)
        })
      },
      guimoGetDataAndDraw: function (pageVal, flag) {
        if(pageVal.tabletr == 1 || pageVal.tabletr == 2  ){
          pageVal.dateType =  pageVal.dateType1
        } else if(pageVal.tabletr == 3){
          pageVal.dateType =  pageVal.dateType2
        }
        if (flag === 'up') {
          this.drawChartUp(pageVal)
        } else if (flag === 'mid') {
          this.drawChartMid(pageVal)
        } else if (flag === 'dwn') {
          this.drawChartDwn(pageVal)
        } else if (flag === 'up_mid') {
          this.drawChartUp(pageVal)
          this.drawChartMid(pageVal)
        } else if (flag === 'mid_dwn') {
          this.drawChartMid(pageVal)
          this.drawChartDwn(pageVal)
        } else if (flag === 'kehu') {
          this.drawkehuChart(pageVal)
        } else if (flag === 'no') {
          return false
        }
      },
      changeTabTop: function (val) {
        this.pageVal.tabTop = val
        if (this.pageVal.tabTop === 1) {
          $('#guimoDiv').show()
          $('#kehuDiv').hide()
          this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
        } else if (this.pageVal.tabTop === 2) {
          this.kehuInit()
          $('#guimoDiv').hide()
          $('#kehuDiv').show()
          this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
        }
        // dateDiv 重新布局
        this.$refs.dateDiv.changeBottomStyle()
        return 'no'
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
        if(val === 1 || val === 2){
          $("#dateDim2").hide()
          $("#dateDim").show()
        }else if(val === 3){

          $("#dateDim").hide()
          $("#dateDim2").show()
        }
        this.pageVal.pKey1 = '999999'
        this.pageVal.pKey2 = '999999'
        this.pageVal.pKey3 = '999999'
        this.resetCom('proTypeRet', 'proType')
        this.resetCom('fenbuRst1', 'fbOrQs1')
        this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
        this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
        return 'up_mid'
      },
      changeProtype: function (val) {
        this.pageVal.proType = val
        $('#guimoDivDwn').hide()
        $('#chartUp2,#chartUp3').hide()
        $('#chartMid2,#chartMid3').hide()
        $('#gmDimDiv,#zhDimDiv').hide()
        if (this.pageVal.tabletr === 2) {
          $('#chartUp3').show()
          $('#chartMid3').show()
        } else {
          $('#chartUp').show()
          $('#chartMid').show()
        }
        this.resetCom('fenbuRst1', 'fbOrQs1')
        this.pageVal.pKey1 = '999999'
        this.pageVal.pKey2 = '999999'
        this.pageValName.pKey2Name = '汇总'
        this.comName.MidTitle = '业务团队规模对比-' + this.comName.TabDimList[val - 1].name
        this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
        if (val === 2) {
          $('#gmDimDiv').show()
          this.resetCom('gmTypeRst', 'gmType')
        } else if (val === 3) {
          $('#zhDimDiv').show()
          this.resetCom('zhTypeRst', 'zhType')
        }
        return 'up_mid'
      },
      changeGmtype: function (val) {
        this.pageVal.gmType = val
        this.pageVal.pKey1 = val
        $('#guimoDivDwn').hide()
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
        // 上图改变选中状态
        if (this.pageVal.tabletr === 2) {
          this.$refs.chartUp3.selectBar(this.pageVal.gmType)
        } else {
          this.$refs.chartUp.selectBar(this.pageVal.gmType)
        }
        if (this.pageVal.fbOrQs1 === 2) { // 若当前展示趋势图，重画
          this.drawChartUp2(this.pageVal)
        }
        return 'mid'
      },
      changeZhtype: function (val) {
        this.pageVal.zhType = val
        $('#guimoDivDwn').hide()
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
        this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
        this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
        // 上图改变选中状态
        if (this.pageVal.tabletr === 2) {
          this.$refs.chartUp3.selectBar(this.pageVal.zhType)
        } else {
          this.$refs.chartUp.selectBar(this.pageVal.zhType)
        }
        if (this.pageVal.fbOrQs1 === 2) { // 若当前展示趋势图，重画
          this.drawChartUp2(this.pageVal)
        }
        return 'mid'
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
          this.pageVal.dataDate = this.pageVal.BATCHDate
          this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
        } else {
          if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
            $('#chartUp2').show()
            $('#chartMid').show()
          } else {
            $('#chartUp2').show()
            $('#chartMid3').show()
          }
          this.pageVal.fbOrQs2 = 1
          this.$refs.fenbuQushi2.hideButton()
        }
        return 'up'
      },
      changeFenbuQushi2: function (val) {
        this.pageVal.fbOrQs2 = val
        $('#chartMid,#chartMid2,#chartMid3,#tagMid').hide()
        let dateStr = this.pageVal.dataDate.substring(0, 4) + '-' + this.pageVal.dataDate.substring(4, 6) + '-' + this.pageVal.dataDate.substring(6, 8)
        this.$refs.fenbuQushi3.setData(true, dateStr)
        //this.$refs.fenbuQushi3.setData(true, this.pageVal.dataDate)
        if (this.pageVal.pKey2 !== '999999') {
          if (val === 1) {
            if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
              $('#chartMid').show()
              this.$refs.chartMid.selectBar(this.pageVal.pKey2) // 保留柱子高亮
            } else {
              $('#chartMid3').show()
              this.$refs.chartMid3.selectBar(this.pageVal.pKey2) // 保留柱子高亮
            }
            this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
          } else {
            $('#chartMid2').show()
            this.$refs.tagMid.text = this.pageValName.pKey2Name
            $('#tagMid').slideDown()
            //this.$refs.fenbuQushi3.setData(true, this.pageVal.dataDate)
            let dateStr = this.pageVal.dataDate.substring(0, 4) + '-' + this.pageVal.dataDate.substring(4, 6) + '-' + this.pageVal.dataDate.substring(6, 8)
            this.$refs.fenbuQushi3.setData(true, dateStr)
          }
          $('#chartDwn').show()
        } else {
          if (val === 1) {
            //this.$refs.fenbuQushi3.setData(false, this.pageVal.dataDate)
            let dateStr = this.pageVal.dataDate.substring(0, 4) + '-' + this.pageVal.dataDate.substring(4, 6) + '-' + this.pageVal.dataDate.substring(6, 8)
            this.$refs.fenbuQushi3.setData(true, dateStr)
            this.$refs.help.setMsg(this.help.ecgropRate);
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
            this.$refs.help.setMsg(this.help.lineRate)
          }
        }
        return 'mid'
      },
      onClickChartUpBar: function (val) {
        this.pageVal.pKey1 = parseInt(val.pKey)
        if (this.pageVal.proType === 1) {
          if (this.pageVal.pKey1 !== 4) {
            this.$refs.proType.changeTheme(this.pageVal.pKey1)
            this.changeProtype(this.pageVal.pKey1)
            return 'up_mid'
          }
        } else if (this.pageVal.proType === 2) {
          if (this.pageVal.pKey1 === 999999) { // 重复点击取消选中回到‘全部’
            this.$refs.gmType.changeTheme(-1)
            this.changeGmtype(1)
          } else {
            this.$refs.gmType.changeTheme(this.pageVal.pKey1 - 2)
            this.changeGmtype(this.pageVal.pKey1)
          }
          return 'mid_dwn'
        } else if (this.pageVal.proType === 3) {
          if (this.pageVal.pKey1 === 999999) {
            this.$refs.zhType.changeTheme(-1)
            this.changeZhtype(1)
          } else {
            this.$refs.zhType.changeTheme(this.pageVal.pKey1 - 2)
            this.changeZhtype(this.pageVal.pKey1)
          }
          return 'mid_dwn'
        }
      },
      onClickChartUpLine: function (val) {
        this.$refs.sumUp.headData[0].VALUE1 = val[0].data.VALUE1
        this.$refs.sumUp.headData[0].VALUE2 = val[0].data.VALUE2
        this.pageVal.dataDate = val[0].value.NAMEBAK
        let dateStr = val[0].value.NAMEBAK.substring(0, 4) + '-' + val[0].value.NAMEBAK.substring(4, 6) + '-' + val[0].value.NAMEBAK.substring(6, 8)
        this.$refs.fenbuQushi2.setData(true, dateStr)
        this.$refs.fenbuQushi3.setData(true, dateStr)
        return 'mid_dwn'
      },
      changeDateType: function(val){
        this.pageVal.dateType1 = val
        this.pageVal.pKey2 = '999999'
        this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
        $('#guimoDivDwn').hide()
        $('#chartMid,#chartMid2,#chartMid3').hide()
        if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
          $('#chartMid').show()
        } else {
          $('#chartMid3').show()
        }
        return 'up_mid'
      },
      changeDateType2: function(val){
        this.pageVal.dateType2 = val + 1
        this.pageVal.pKey2 = '999999'
        this.resetCom('fenbuRst2', 'fbOrQs2', 'fenbuQushi2Div')
        $('#guimoDivDwn').hide()
        $('#chartMid,#chartMid2,#chartMid3').hide()
        if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
          $('#chartMid').show()
        } else {
          $('#chartMid3').show()
        }
        return 'up_mid'
      },
      onClickChartMidBar: function (val) {
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
        if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
          $('#chartDwn').show()
          $('#chartDwn3').hide()
        } else if (this.pageVal.tabletr === 2) {
          $('#chartDwn3').show()
          $('#chartDwn').hide()
        }
        $('#tagDwn').hide()
        if (val.pKey !== '999999') {
          if (this.pageVal.fbOrQs1 === 2 && this.pageVal.dataDate !== '999999') {
            //this.$refs.fenbuQushi3.setData(true, this.pageVal.dataDate)
            let dateStr = this.pageVal.dataDate.substring(0, 4) + '-' + this.pageVal.dataDate.substring(4, 6) + '-' + this.pageVal.dataDate.substring(6, 8)
            this.$refs.fenbuQushi3.setData(true, dateStr)
          } else {
            this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
          }
          $('#guimoDivDwn').slideDown()
          if (val.pKey === '5') {
            $('#jlQdDim').show()
          } else {
            $('#jlQdDim').hide()
          }
          return 'dwn'
        } else {
          $('#guimoDivDwn').slideUp()
          return 'no'
        }
      },
      onClickChartMidLine: function(val){
        this.$refs.sumMid.headData[0].VALUE1 = val[0].data.VALUE1
        this.$refs.sumMid.headData[0].VALUE2 = val[0].data.VALUE2
        this.pageVal.dataDate = val[0].value.NAMEBAK
        let dateStr = val[0].value.NAMEBAK.substring(0, 4) + '-' + val[0].value.NAMEBAK.substring(4, 6) + '-' + val[0].value.NAMEBAK.substring(6, 8)
        this.$refs.fenbuQushi3.setData(true, dateStr)
        return 'dwn'
      },
      changeFenbuQushi3: function (val) {
        this.pageVal.fbOrQs3 = val
        $('#chartDwn,#chartDwn,#chartDwn,#tagDwn').hide()
        if (val === 1) {
          $('#chartDwn2').hide()
          $('#tagDwn').slideUp()
          if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
            $('#chartDwn').show()
            this.$refs.chartDwn.selectBar(this.pageVal.pKey3) // 保留柱子高亮
          } else {
            $('#chartDwn3').show()
            this.$refs.chartDwn3.selectBar(this.pageVal.pKey3) // 保留柱子高亮
          }
        } else if (val === 2) {
          $('#chartDwn').hide()
          $('#chartDwn3').hide()
          $('#chartDwn2').show()
          this.$refs.tagDwn.text = this.pageValName.pKey3Name
          $('#tagDwn').slideDown()
        }
        return 'dwn'
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
        $('#tagDwn').hide()
        if (this.pageVal.tabletr === 1 || this.pageVal.tabletr === 3) {
          $('#chartDwn').show()
        } else {
          $('#chartDwn3').show()
        }
        this.resetCom('fenbuRst3', 'fbOrQs3', 'fenbuQushi3Div')
      },
      guimoInit: function () {
        // 日月季年  月季年
        $("#dateDim").show()
        $("#dateDim2").hide()
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
        $('#gmDimDiv,#zhDimDiv').hide()
        $('#tagMid,#tagDwn').hide()
        $('#kehuDiv').hide()
        let HeadTable1 = this.$refs.HeadTable1
        this.$http.post(this.$API_LIST.hujinHeadData, this.pageVal).then(res => {
          HeadTable1.setData(res.data.list)
        })
        this.$refs.help.setMsg(this.help.ecgropRate)
        this.$refs.help.navPosition = $('#icon2').offset().left - 8
        let that = this.$refs.help
        $(document).click(function (event) { // 点屏幕任意区域隐藏弹出框
          var con = $('#msg')
          if (!con.is(event.target)) {
            that.ifMsg = false
          }
        })
        this.guimoGetDataAndDraw(this.pageVal, 'up_mid')
        this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
      },
      kehuInit: function () {
        let kehuhead = this.$refs.kehuHead
        this.$http.post(this.$API_LIST.hujinKehuHeadData, this.pageVal).then(res => {
          kehuhead.setData(res.data.list)
        })
        this.guimoGetDataAndDraw(this.pageVal, 'kehu')
      }
    },
    mounted () {
      this.$http.post(this.$API_LIST.hujinDataDate, this.pageVal).then(res => {
        this.pageVal.BATCHDate = res.data.BATCHDate
        this.pageVal.dataDate = res.data.BATCHDate
        this.$refs.dateDiv.setDate(this.pageVal.dataDate.substring(0, 4) + '-' +
          this.pageVal.dataDate.substring(4, 6) + '-' + this.pageVal.dataDate.substring(6, 8))
        this.guimoInit()
      })
    }
  }
</script>

<style scoped>

</style>
