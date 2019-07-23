<template>
    <div class="container">
      <TabTop @comChanged="changePageState($event,'f_tabtop')" v-bind:itemList="comName.tabTopList"></TabTop>
      <ZhibiaoKuang></ZhibiaoKuang>
      <TabDim @comChanged="changePageState($event,'f_zhibiao')" v-bind:itemList="comName.TabDimList"></TabDim>
      <BtnOrder id="btnOder" ref="btnOder" v-bind:chartInfo="this.gridData"></BtnOrder>
      <BtnGrop @comChanged="changePageState($event,'p_zhibiaodetail')" v-bind:itemList="comName.BtnDimList"/>
      <DrawChart id="chartUp" ref="chartUp" v-bind:chartInfo="this.charData.chartUp"
                 @comChanged="changePageState($event,'f_chartUp')"></DrawChart>
      <DrawChart id="chartUp2" ref="chartUp2" v-bind:chartInfo="this.charData.chartUp2"
                 @comChanged="changePageState($event,'f_chartUp2')"></DrawChart>
      <DrawChart id="chartUp3" ref="chartUp3" v-bind:chartInfo="this.charData.chartUp3"
                 @comChanged="changePageState($event,'f_chartUp3')"></DrawChart>
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
  import ZhibiaoKuang from '@/components/yanjiuyuan/zhibiaoliang'
  import RankAll from '@/components/baseCom/rankAllList'
  import BtnOrder from '@/components/yanjiuyuan/yanjiuyuanshiyong'
  import {getChartUpData} from "../service/yanjiuyuanApi"
    export default {
        name: 'yanjiuyuan',
        components: { TabTop, TabDim, BtnGrop, DrawChart, DateTable, Top10, RankAll, ZhibiaoKuang, BtnOrder},
        data() {
            return {
              comName: {
                tabTopList: [{name: '行业数据'}, {name: '标题'}],
                TabDimList: [{name: '指标汇总'}, {name: '研究员使用情况'}],
                BtnDimList: [{name: '指标点评量'},{name: '指标访问次数'},{name: '指标更新量'}],
                TabDimDateList: [{name: '今日'},{name: '本周'},{name: '本月'},{name: '全年'}],
                Top10Title:"点评量排名"
              },
              pageVal: {
                tabTop: 1,
                zhibiaoHZ: 1,//指标汇总，研究研究使用情况
                zhibiaoDim: 1,//指标维度，指标点评，访问次数，更新量
                dateType: 1,
                pKey: '999999'
              }
            }
        },
      computed: {
        charData: function () {
          let fundUp = {title: ['点评总量 (单位:个)','点评覆盖率 (单位:%)'], name: ['点评总量', '点评覆盖率'], clickParams: []}
          let fundUp2 = {title: ['点击总次数 (单位:次)','平均点击次数 (单位:次)'], name: ['点击总次数', '平均每个指标点击次数'], clickParams: []}
          let fundUp3 = {title: '指标数 (单位:个)', name: ['待更新指标', '已更新指标'], clickParams: []}
          if (this.pageVal.tabTop == 1 && this.pageVal.zhibiaoHZ == 1 && this.pageVal.zhibiaoDim == 1){
            return {
              chartUp: fundUp
            }
          }else if (this.pageVal.tabTop == 1 && this.pageVal.zhibiaoHZ == 1 && this.pageVal.zhibiaoDim == 2){
            return {
              chartUp: fundUp2
            }
          } else if (this.pageVal.tabTop == 1 && this.pageVal.zhibiaoHZ == 1 && this.pageVal.zhibiaoDim == 3) {
            return {
              chartUp: fundUp3
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
            this.$router.push({path:'/rankAlllist',query:{}})
          }
          console.log(this.pageVal)
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
        changeZhiBiaoDim: function(val){
          this.pageVal.zhibiaoHZ = val
          if (this.pageVal.zhibiaoHZ === 1) {
              //TODO 指标汇总

          }else if (this.pageVal.zhibiaoHZ === 2) {
              //TODO 研究员使用情况

          }
        },
        changeBtnDim: function(val){
          this.pageVal.zhibiaoDim = val
          if (this.pageVal.zhibiaoDim === 1 ){
            //切图一chartUp
            $('#chartUp').show()
            $('#chartUp2,#chartUp3').hide()
          } else if (this.pageVal.zhibiaoDim === 2 ) {
            //切图二chartUp2
            $('#chartUp2').show()
            $('#chartUp,#chartUp3').hide()
          }else if (this.pageVal.zhibiaoDim === 3 ) {
            //切图三chartUp3
            $('#chartUp3').show()
            $('#chartUp1,#chartUp2').hide()
          }
          this.drawChartUp(this.pageVal)
        },
        changeDateType: function(val){
          //TODO 时间维度
          this.pageVal.dateType = val
          if(this.pageVal.dateType === 1){

          } else if (this.pageVal.dateType === 2){

          } else if (this.pageVal.dateType === 3){

          } else if (this.pageVal.dateType === 4){

          }
        },
        drawChartUp: function (pageVal) {
          let _this = this
          getChartUpData(pageVal, function (res) {
            if (pageVal.zhibiaoDim === 1 ) {
                let chartUp = _this.$refs.chartUp
                let params = {
                  labelNum: 1,
                  initSelKey: pageVal.pKey.toString()
                }
                chartUp.setData(res.data.list, params)
              } else if (pageVal.zhibiaoDim === 2) {
                let chartUp2 = _this.$refs.chartUp2
                let paramsUp = {
                  labelNum: 1,
                  initSelKey: pageVal.pKey.toString()
                }
                chartUp2.setData(res.data.list, paramsUp)
              }else if (pageVal.zhibiaoDim === 3) {
              let chartUp3 = _this.$refs.chartUp3
              let paramsUp = {
                labelNum: 1,
                initSelKey: pageVal.pKey.toString()
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
          //TODO 隐藏标题

          //TODO 隐藏研究员使用情况

          // chart 隐藏
          $('#chartUp').show()
          $('#chartUp2,#chartUp3').hide()
          $('#btnOder').hide()
          this.pageRendering(this.pageVal, 'up')
          this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
        }
      },
      mounted () {
        //加载页面
        let _this = this
        _this.renderAction()
      }
    }
</script>
