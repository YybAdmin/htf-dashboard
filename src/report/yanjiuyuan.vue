<template>
    <div class="container">
      <TabTop @comChanged="changePageState($event,'f_tabtop')" v-bind:itemList="comName.tabTopList"></TabTop>
      <ZhibiaoKuang></ZhibiaoKuang>
      <TabDim @comChanged="changePageState($event,'f_zhibiao')" v-bind:itemList="comName.TabDimList"></TabDim>
      <BtnGrop @comChanged="changePageState($event,'p_zhibiaodetail')" v-bind:itemList="comName.BtnDimList"/>
      <DrawChart id="chartUp" ref="chartUp" v-bind:chartInfo="this.charData.chartUp"
                 @comChanged="changePageState($event,'f_chartUp')"></DrawChart>
      <DrawChart2 id="chartUp2" ref="chartUp2" v-bind:chartInfo="this.charData.chartUp2"
                 @comChanged="changePageState($event,'f_chartUp2')"></DrawChart2>
      <DrawChart3 id="chartUp3" ref="chartUp3" v-bind:chartInfo="this.charData.chartUp3"
                 @comChanged="changePageState($event,'f_chartUp3')"></DrawChart3>
      <DateTable id="dateDim" @comChanged="changePageState($event,'f_dateType')"
                        v-bind:itemList="comName.TabDimDateList"></DateTable>
      <Top10 :title="comName.Top10Title" @comChanged="changePageState($event,'f_Top10')"></Top10>
    </div>
</template>

<script>
  import $ from 'jquery'
  import TabTop from '@/components/baseCom/TabTop'
  import TabDim from '@/components/baseCom/TabDim'
  import BtnGrop from '@/components/baseCom/BtnGrp'
  import DrawChart from '@/components/echartCom/DrawOneBarOneLine'
  import DateTable from '@/components/baseCom/TabDimWidth100Up'
  import Top10 from '@/components/baseCom/rank10List'
  import ZhibiaoKuang from '@/components/baseCom/zhibiaoliang'
  import RankAll from '@/components/baseCom/rankAllList'
  import {getChartUpData} from "../service/yanjiuyuanApi"
    export default {
        name: 'yanjiuyuan',
        components: { TabTop, TabDim, BtnGrop, DrawChart, DateTable, Top10, RankAll, ZhibiaoKuang},
        data() {
            return {
              comName: {
                tabTopList: [{name: '行业数据'}, {name: '标题'}],
                TabDimList: [{name: '指标汇总'}, {name: '研究院使用情况'}],
                BtnDimList: [{name: '指标点评量'},{name: '指标访问次数'},{name: '指标更新量'}],
                TabDimDateList: [{name: '今日'},{name: '本周'},{name: '本月'},{name: '全年'}],
                Top10Title:"点评量排名"
              },
              pageVal: {
                tabTop: 1,
                zhibiaoHZ: 1,//指标汇总，研究研究使用情况
                zhibiaoDim: 1,//指标维度，指标点评，访问次数，更新量
                dateType: 1,//时间维度
                dateType: 1,
                pKey1: '999999'
              }
            }
        },
      computed: {
        charData: function () {
          let fundUp = {title: ['点评总量 (单位:个)','点评覆盖率 (单位:%)'], name: ['点评总量', '点评覆盖率'], clickParams: []}
          let fundUp2 = {title: ['点击总次数 (单位:次)','平均点击次数 (单位:次)'], name: ['点击总次数', '平均每个指标点击次数'], clickParams: []}
          let fundUp3 = {title: '指标数 (单位:个)', name: ['待更新指标', '已更新指标'], clickParams: []}
          if (this.pageVal.tabTop == 1){
            return {
              chartUp: fundUp
            }
          }
        }
      },
      methods: {
        changePageState: function (val, flag) {
          var reflashFlag = 'no'
          // 规模 客户数 切换
          if (flag === 'f_tabtop') {
            reflashFlag = this.changeTabTop(val)
          }
          if (flag === 'f_Top10') {
            this.$router.push({path:'/rankAlllist',query:{}})
          }
          console.log(this.pageVal)
          this.render2Page(this.pageVal, reflashFlag)
        },
        changeTabTop: function (val) {
          this.pageVal.tabTop = val
          if (this.pageVal.tabTop === 1) {
            // $('#guimoDiv').show()
            // $('#kehuDiv').hide()
            this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
          } else if (this.pageVal.tabTop === 2) {
            // this.kehuInit()
            // $('#guimoDiv').hide()
            // $('#kehuDiv').show()
            this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
          }
          return 'no'
        },
        drawChartUp: function (pageVal) {
          let _this = this
          getChartUpData(pageVal, function (res) {
            if (pageVal.tabTop === 1 ) {
                let chartUp = _this.$refs.chartUp
                let params = {
                  labelNum: 1,
                  initSelKey: pageVal.pKey1.toString()
                }
                chartUp.setData(res.data.list, params)
              } else if (pageVal.tabTop === 2) {
                let chartUp3 = _this.$refs.chartUp3
                let paramsUp = {
                  labelNum: 1,
                  initSelKey: pageVal.pKey1.toString()
                }
                chartUp3.setData(res.data.list, paramsUp)
              }
          })
        },

        pageRendering: function (pageVal, flag) {
          if (pageVal.tabTop == 1) {

          } else if (pageVal.tabTop == 2) {

          }
          if (flag === 'up') {
            this.drawChartUp(pageVal)
          } else if (flag === 'no') {
            return false
          }
        },
        renderAction: function () {
          // chart 隐藏
          $('#chartUp').show()
          // $('#chartUp2,#chartUp3').hide()
          this.pageRendering(this.pageVal, 'up')
          this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
        }
      },
      mounted () {
        let _this = this
        _this.renderAction()
      }
    }
</script>
