<template>
  <div class="container">
    <div v-show="mainShow">
      <TabTop @comChanged="changePageState($event,'f_tabtop')" v-bind:itemList="comName.tabTopList"></TabTop>
      <ZhibiaoKuang></ZhibiaoKuang>
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
        <Top10 ref="top10" :title="this.charData.Top10Title" @comChanged="changePageState($event,'f_Top10')"></Top10>
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
  import DrawChart from '@/components/echartCom/DrawOneBarOneLine'
  import DrawTwoBar from '@/components/echartCom/DrawTwoBar'
  import DateTable from '@/components/baseCom/TabDimWidth100Up'
  import Top10 from '@/components/baseCom/rank10List'
  import ZhibiaoKuang from '@/components/yanjiuyuan/zhibiaoliang'
  import RankAll from '@/components/baseCom/rankAllList'
  import DataGrid from '@/components/yanjiuyuan/yanjiuyuangrid'
  import datepicker from '@/components/yanjiuyuan/datepicker'
  import {getChartUpData, getGridData, dataRank} from "../service/yanjiuyuanApi"

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
          tabTopList: [{name: '行业数据'}, {name: '标题'}],
          TabDimList: [{name: '指标汇总'}, {name: '研究员使用情况'}],
          BtnDimList: [{name: '指标点评量'}, {name: '指标确认量'}, {name: '指标更新量'}],
          TabDimDateList: [{name: '今日'}, {name: '本周'}, {name: '本月'}, {name: '全年'}, {name: '更多'}],
          Top10Title: "点评量排名"

        },
        chartData: {
          chartUp: {title: ['点评总量 (单位:个)', '点评覆盖率 (单位:%)'], name: ['点评总量', '点评覆盖率'], clickParams: []},
          chartUp2: {title: ['指标量 (单位:次)'], name: ['指标确认量1', '指标确认量2'], clickParams: []},
          chartUp3: {title: '指标数 (单位:个)', name: ['待更$新指标', '已更新指标'], clickParams: []}
        },
        pageVal: {
          tabTop: 1,
          zhibiaoHZ: 1,//指标汇总，研究研究使用情况
          zhibiaoDim: 1,//指标维度，指标点评，访问次数，更新量
          dateType: 1,
          pKey: '999999',
          startDate: [{text: '--', value: ''}, {text: '--', value: ''}, {text: '--', value: ''}],
          endDate: [{text: '--', value: ''}, {text: '--', value: ''}, {text: '--', value: ''}],
        },
        s_date: '',
        e_date: '',
        reset: false,
        datePickerShow: false,
        mainShow: true,
        chartShow: true
      }
    },
    computed: {
      charData: function () {
        let Top10Title1 = "点评量排名"
        let Top10Title2 = "确认量排名"
        let Top10Title3 = "更新量排名"
        if (this.pageVal.zhibiaoDim === 1) {
          return {
            Top10Title: Top10Title1
          }
        } else if (this.pageVal.zhibiaoDim === 2) {
          return {
            Top10Title: Top10Title2
          }
        } else if (this.pageVal.zhibiaoDim === 3) {
          return {
            Top10Title: Top10Title3
          }
        }
      }
    },
    methods: {
      changePageState: function (val, flag) {
        var reflashFlag = 'no'
        // 行业数据/标题 切换
        if (flag === 'f_tabtop') {
          reflashFlag = this.changeTabTop(val)
        }
        // 指标汇总/研究员使用情况 切换
        if (flag === 'f_zhibiao') {
          reflashFlag = this.changeZhiBiaoDim(val)
        }
        // 指标维度/指标点评量/指标访问次数/指标更新量 切换
        if (flag === 'p_zhibiaodetail') {
          reflashFlag = this.changeBtnDim(val)
        }
        //时间维度/今日/本周/本月/年度 切换
        if (flag === 'f_dateType') {
          reflashFlag = this.changeDateType(val)
        }
        //跳转到排名详情页
        if (flag === 'f_Top10') {
          this.$router.push({path: '/rankAlllist', query: {}})
        }
        //console.log(this.pageVal)
        this.pageRendering(this.pageVal, reflashFlag)
      },
      changeTabTop: function (val) {
        this.pageVal.tabTop = val
        if (this.pageVal.tabTop === 1) {
          //TODO 行业数据

          this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
        } else if (this.pageVal.tabTop === 2) {
          //TODO 标题

          this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
        }
        return 'no'
      },
      changeZhiBiaoDim: function (val) {
        this.pageVal.zhibiaoHZ = val
        let _this = this
        if (this.pageVal.zhibiaoHZ === 1) {
          //指标汇总
          this.chartShow = true
          _this.drawChartUp(this.pageVal)
        } else if (this.pageVal.zhibiaoHZ === 2) {
          //研究员使用情况
          this.chartShow = false
          _this.reset = true
          this.$nextTick(function () {
            _this.drawGrid(this.pageVal)
          })

        }
      },
      changeBtnDim: function (val) {
        this.pageVal.zhibiaoDim = val
        $('#chartUp,#chartUp2,#chartUp3').hide()
        if (this.pageVal.zhibiaoDim === 1) {
          //切图一chartUp
          $('#chartUp').show()
        } else if (this.pageVal.zhibiaoDim === 2) {
          //切图二chartUp2
          $('#chartUp2').show()
        } else if (this.pageVal.zhibiaoDim === 3) {
          //切图三chartUp3
          $('#chartUp3').show()
        }
        this.drawRank(this.pageVal)
        this.drawChartUp(this.pageVal)
      },
      changeDateType: function (val) {
        //TODO 时间维度
        this.pageVal.dateType = val
        if (this.pageVal.dateType === 1) {

        } else if (this.pageVal.dateType === 2) {

        } else if (this.pageVal.dateType === 3) {

        } else if (this.pageVal.dateType === 4) {

        } else if (this.pageVal.dateType === 5) {
          this.datePickerShow = true
          this.mainShow = false
        }
      },
      drawChartUp: function (pageVal) {
        let _this = this
        getChartUpData(pageVal, function (res) {
          if (pageVal.zhibiaoDim === 1) {
            let chartUp = _this.$refs.chartUp
            let params = {
              label1Show: true,
              label2Show: false
            }
            chartUp.setData(res.data.list, params)
          } else if (pageVal.zhibiaoDim === 2) {
            let chartUp2 = _this.$refs.chartUp2
            let params = {
              label1Show: false,
              label2Show: false,
              barStack: ['s1', 's1']
            }
            chartUp2.setData(res.data.list, params)
          } else if (pageVal.zhibiaoDim === 3) {
            let chartUp3 = _this.$refs.chartUp3
            let params = {
              label1Show: false,
              label2Show: false,
              barStack: ['s1', 's1']
            }
            chartUp3.setData(res.data.list, params)
          }
        })
      },
      drawRank: function () {
        let top10 = this.$refs.top10
        this.$http.post(this.$API_LIST.yanjiuyuan.dataRank).then(res => {
          top10.setData(res.data.list)
        })
      },
      drawGrid: function () {
        let dataGrid = this.$refs.btnOder
        this.$http.post(this.$API_LIST.yanjiuyuan.getGridData).then(res => {
          dataGrid.setData(res.data.list)
        })
      },
      pageRendering: function (pageVal, flag) {
        if (pageVal.tabTop == 1) {
          if (flag === 'up') {
            this.drawChartUp(pageVal)
          } else if (flag === 'no') {
            return false
          }
          this.drawRank(this.pageVal)
        } else if (pageVal.tabTop == 2) {

        }
      },
      getDate: function () {
        this.datePickerShow = true
        this.mainShow = false
      },
      renderAction: function () {
        //TODO 隐藏标题
        // chart 隐藏
        $('#chartUp').show()
        $('#chartUp2,#chartUp3').hide()
        this.pageRendering(this.pageVal, 'up')
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
        this.s_date = _year + '-' + _month + '-' + _day
        let year = this.pageVal.endDate[0].value
        let month = this.pageVal.endDate[1].value.length === 1 ? '0' + this.pageVal.endDate[1].value : this.pageVal.endDate[1].value
        let day = this.pageVal.endDate[2].value.length === 1 ? '0' + this.pageVal.endDate[2].value : this.pageVal.endDate[2].value
        this.e_date = year + '-' + month + '-' + day
      }
    },
    mounted() {
      this.initDate()
      let _this = this
      _this.renderAction()
      console.log(this.s_date + "-" + this.e_date)
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
