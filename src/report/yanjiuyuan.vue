<template>
  <div class="container">
    <title>研究员总监视图</title>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <div v-show="mainShow">
      <TabTop @comChanged="changePageState($event,'f_tabtop')" v-bind:itemList="comName.tabTopList"></TabTop>
      <ZhibiaoKuang ref="zhibiaokuang"></ZhibiaoKuang>
      <TabDim @comChanged="changePageState($event,'f_zhibiao')" v-bind:itemList="comName.TabDimList"></TabDim>
      <div v-show="!chartShow">
        <div>
          <img src="@/assets/img/yjy/rili.svg" style="display: inline-block;vertical-align: middle;">
          <span class="dateText" @click="getDate">{{this.pageVal.startDate[0].value}}/{{this.pageVal.startDate[1].value}}/{{this.pageVal.startDate[2].value}}
              -{{this.pageVal.endDate[0].value}}/{{this.pageVal.endDate[1].value}}/{{this.pageVal.endDate[2].value}}</span>
        </div>
        <DataGrid v-if="reset" ref="btnOder"></DataGrid>
      </div>
      <div v-show="chartShow">
        <BtnGrop @comChanged="changePageState($event,'p_zhibiaodetail')" v-bind:itemList="comName.BtnDimList"/>
        <DrawChart id="chartUp" ref="chartUp" v-bind:chartInfo="this.chartData.chartUp"
                   @comChanged="changePageState($event,'f_chartUp')"></DrawChart>
        <DrawTwoBar id="chartUp2" ref="chartUp2" v-bind:chartInfo="this.chartData.chartUp2"
                    @comChanged="changePageState($event,'f_chartUp2')"></DrawTwoBar>
        <DrawTwoBar id="chartUp3" ref="chartUp3" v-bind:chartInfo="this.chartData.chartUp3"
                    @comChanged="changePageState($event,'f_chartUp3')"></DrawTwoBar>
        <DateTable @comChanged="changePageState($event,'f_dateType')"
                   v-bind:itemList="comName.TabDimDateList"></DateTable>
        <Top10 ref="top10" :title="this.comName.Top10Title" @comChanged="changePageState($event,'f_Top10')"></Top10>
      </div>
    </div>
    <div v-show="datePickerShow">
      <datepicker></datepicker>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import TabTop from '@/components/baseCom/TabTop'
  import TabDim from '@/components/baseCom/TabDim'
  import BtnGrop from '@/components/baseCom/BtnGrp'
  import DrawChart from '@/components/echartCom/DrawOneBar'
  import DrawTwoBar from '@/components/echartCom/DrawTwoBar'
  import DateTable from '@/components/baseCom/TabDimWidth100Up'
  import Top10 from '@/components/baseCom/rank10List'
  import ZhibiaoKuang from '@/report/yanjiuyuan/zhibiaoliang'
  import RankAll from '@/components/baseCom/rankAllList'
  import DataGrid from '@/report/yanjiuyuan/yanjiuyuangrid'
  import datepicker from '@/report/yanjiuyuan/datepicker'
  import {dataChart, getGridData, dataRank, getHeadData} from "../service/yanjiuyuanApi"

  export default {
    name: 'yanjiuyuan',
    components: {
      datepicker,
      TabTop,
      TabDim,
      BtnGrop,
      DrawChart,
      DrawTwoBar,
      DateTable,
      Top10,
      RankAll,
      ZhibiaoKuang,
      DataGrid
    },
    data() {
      return {
        comName: {
          tabTopList: [{name: '行业数据'}, {name: '标题',ifUsed:false}],
          TabDimList: [{name: '指标汇总'}, {name: '研究员使用情况'}],
          BtnDimList: [{name: '指标点评量'}, {name: '指标确认量'}, {name: '指标更新量'}],
          TabDimDateList: [{name: '本周'}, {name: '本月'}, {name: '全年'}, {name: '更多'}],
          Top10Title: "点评量排名"
        },
        dataStroge: [],
        chartData: {
          chartUp: {title: ['点评总量 (单位:个)'], name: ['点评总量'], clickParams: []},
          chartUp2: {title: ['指标量 (单位:个)'], name: ['未确认完成量', '已确认完成量'], clickParams: []},
          chartUp3: {title: '指标数 (单位:个)', name: ['未更新指标', '已更新指标'], clickParams: []}
        },
        pageVal: {
          tabTop: 1,
          zhibiaoHZ: 1,//指标汇总，研究研究使用情况
          zhibiaoDim: 'comment',//指标维度，指标点评，访问次数，更新量
          dateType: 'currentWeek',
          pKey: '999999',
          startDate: [{text: '--', value: ''}, {text: '--', value: ''}, {text: '--', value: ''}],
          endDate: [{text: '--', value: ''}, {text: '--', value: ''}, {text: '--', value: ''}],
          s_date: '',
          e_date: ''
        },
        reset: false,
        datePickerShow: false,
        mainShow: true,
        chartShow: true,
        dengdai:true
      }
    },
    watch:{
      dengdai:function(newdengdai) {
        if(!newdengdai){
          if(this.pageVal.zhibiaoHZ == 1){
            this.pageRendering(this.pageVal,'chartAndRank')
          }else {
            this.pageRendering(this.pageVal,'grid')
          }
          this.dengdai = true
        }
      }
    },
    methods: {
      changePageState: function (val, flag) {
        var reflashFlag = 'no'
        // 行业数据/标题 切换
        if (flag === 'f_tabtop') {  this.changeTabTop(val)  }
        // 指标汇总/研究员使用情况 切换
        if (flag === 'f_zhibiao') {  reflashFlag = this.changeZhiBiaoDim(val)
        }
        // 指标维度/指标点评量/指标访问次数/指标更新量 切换
        if (flag === 'p_zhibiaodetail') {  reflashFlag = this.changeBtnDim(val)
        }
        //时间维度/今日/本周/本月/年度 切换
        if (flag === 'f_dateType') {  reflashFlag = this.changeDateType(val) }
        //跳转到排名详情页
        if (flag === 'f_Top10') {
          if(this.dataStroge.length >= 4 ){ this.$router.push({path: '/rankAlllist', query: {data:this.dataStroge}})  }
        }
        this.pageRendering(this.pageVal, reflashFlag)
      },
      changeTabTop: function (val) { this.pageVal.tabTop = val },
      changeZhiBiaoDim: function (val) {
        this.pageVal.zhibiaoHZ = val
        let _this = this
        if (this.pageVal.zhibiaoHZ === 1) { //指标汇总
          this.chartShow = true
          return 'chartAndRank'
        } else if (this.pageVal.zhibiaoHZ === 2) { //研究员使用情况
          this.chartShow = false
          _this.reset = true
          this.$nextTick(function () {
            this.pageRendering(this.pageVal,'grid')
          })
        }
      },
      changeBtnDim: function (val) {
        $('#chartUp,#chartUp2,#chartUp3').hide()
        if (val === 1) {
          $('#chartUp').show()
          this.pageVal.zhibiaoDim = "comment"
          this.comName.Top10Title = "点评量排名"
        } else if (val === 2) {
          $('#chartUp2').show()
          this.pageVal.zhibiaoDim = "unConfirm"
          this.comName.Top10Title = "确认量排名"
        } else if (val === 3) {
          $('#chartUp3').show()
          this.pageVal.zhibiaoDim = "unUpdate"
          this.comName.Top10Title = "更新量排名"
        }
        return 'chartAndRank'
      },
      changeDateType: function (val) {
        if (val === 1) {
          this.pageVal.dateType = 'currentWeek'
          return 'chartAndRank'
        } else if (val === 2) {
          this.pageVal.dateType = 'currentMonth'
          return 'chartAndRank'
        } else if (val === 3) {
          this.pageVal.dateType = 'currentYear'
          return 'chartAndRank'
        } else if (val === 4) {
          this.pageVal.dateType = 'other'
          this.datePickerShow = true
          this.mainShow = false
        }
      },
      drawChartUp: function (pageVal) {
        let _this = this
        dataChart(pageVal, function (res) {
          let data = []
          if (pageVal.zhibiaoDim === "comment") {
            for (let i = 0; i < res.length; i++) {
              let item = {}
              item['NAME'] = res[i].countDate
              item['VALUE1'] = res[i].countNum
              data.push(item)
            }
            let chartUp = _this.$refs.chartUp
            let params = {
              label1Show: true,
              label2Show: false
            }
            chartUp.setData(data, params)
          } else if (pageVal.zhibiaoDim === "unConfirm") {
            for (let i = 0; i < res.length; i++) {
              let item = {}
              item['NAME'] = res[i].countDate
              item['VALUE1'] = res[i].respectCountNum
              item['VALUE2'] = res[i].countNum
              data.push(item)
            }
            let chartUp2 = _this.$refs.chartUp2
            let params = {
              label1Show: false,
              label2Show: false,
              barStack: ['s1', 's1']
            }
            chartUp2.setData(data, params)
          } else if (pageVal.zhibiaoDim === "unUpdate") {
            for (let i = 0; i < res.length; i++) {
              let item = {}
              item['NAME'] = res[i].countDate
              item['VALUE1'] = res[i].respectCountNum
              item['VALUE2'] = res[i].countNum
              data.push(item)
            }
            let chartUp3 = _this.$refs.chartUp3
            let params = {
              label1Show: false,
              label2Show: false,
              barStack: ['s1', 's1']
            }
            chartUp3.setData(data, params)
          }
        })
      },
      drawRank: function () {
        let top10 = this.$refs.top10
        let _this = this
        dataRank(this.pageVal,function (res) {
          let data = new Array()
          for (let i = 0; i < res.length; i++) {
            let item ={}
            item['NAME'] = res[i].userName
            item['VALUE'] = res[i].commentNum
            data.push(item)
          }
          _this.dataStroge = data
          top10.setData(data)
        })
      },
      drawGrid: function () {
        let dataGrid = this.$refs.btnOder
        getGridData(this.pageVal,function (res) {
          //console.log(res)
          let data = new Array()
          for (let i = 0; i < res.length; i++) {
            let item = {}
            item['ID'] = i
            item['NAME1'] = res[i].analystName
            item['NAME2'] = res[i].industry
            item['VALUE1'] = res[i].indicatorTotal
            item['VALUE2'] = res[i].unConfirmNum
            item['VALUE3'] = res[i].unUpdateNum
            item['VALUE4'] = res[i].commentNum
            item['VALUE5'] = res[i].commentReplyNum
            data.push(item)
          }
          dataGrid.setData(data)
        })
      },
      pageRendering: function (pageVal, flag) {
        if (pageVal.tabTop == 1) {
          if (flag === 'chartAndRank') {
            this.drawChartUp(pageVal)
            this.drawRank(pageVal)
          }else if(flag === 'grid'){
            this.drawGrid(this.pageVal)
          } else if (flag === 'no') {
            return false
          }
        }
      },
      getDate: function () {
        this.datePickerShow = true
        this.mainShow = false
      },
      renderAction: function () {
        let _this = this
        //TODO 隐藏标题
        // chart 隐藏
        $('#chartUp').show()
        $('#chartUp2,#chartUp3').hide()
        this.pageRendering(this.pageVal, 'up')
        getHeadData(null,function (res) {
          _this.$refs.zhibiaokuang.setData(res)
        })
        this.pageRendering(this.pageVal,'chartAndRank')
        // this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
      },
      initDate: function () {
        let nowDate = new Date();
        let num = nowDate.getTime() - 30 * 24 * 60 * 60 * 1000
        let lastMonthDate = new Date()
        lastMonthDate.setTime(num)
        this.pageVal.startDate[0].value = lastMonthDate.getFullYear().toString()
        this.pageVal.startDate[1].value = (lastMonthDate.getMonth() + 1).toString()
        this.pageVal.startDate[2].value = lastMonthDate.getDate().toString()
        this.pageVal.startDate[0].text = lastMonthDate.getFullYear() + '年'
        this.pageVal.startDate[1].text = lastMonthDate.getMonth() + 1 + '月'
        this.pageVal.startDate[2].text = lastMonthDate.getDate() + '日'
        this.pageVal.endDate[0].value = nowDate.getFullYear().toString()
        this.pageVal.endDate[1].value = (nowDate.getMonth() + 1).toString()
        this.pageVal.endDate[2].value = nowDate.getDate().toString()
        this.pageVal.endDate[0].text = nowDate.getFullYear() + '年'
        this.pageVal.endDate[1].text = nowDate.getMonth() + 1 + '月'
        this.pageVal.endDate[2].text = nowDate.getDate() + '日'
        let _year = this.pageVal.startDate[0].value
        let _month = this.pageVal.startDate[1].value.length === 1 ? '0' + this.pageVal.startDate[1].value : this.pageVal.startDate[1].value
        let _day = this.pageVal.startDate[2].value.length === 1 ? '0' + this.pageVal.startDate[2].value : this.pageVal.startDate[2].value
        this.pageVal.s_date = _year + '-' + _month + '-' + _day
        let year = this.pageVal.endDate[0].value
        let month = this.pageVal.endDate[1].value.length === 1 ? '0' + this.pageVal.endDate[1].value : this.pageVal.endDate[1].value
        let day = this.pageVal.endDate[2].value.length === 1 ? '0' + this.pageVal.endDate[2].value : this.pageVal.endDate[2].value
        this.pageVal.e_date = year + '-' + month + '-' + day
      }
    },
    mounted() {
      this.initDate()
      let _this = this
      _this.renderAction()
    }
  }
</script>
<style scoped lang="less">
  .dateText {
    font-size: 14px;
    color: #333;
    line-height: 45px;
  }
</style>
