<template>
  <div style="position: relative;">
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <div v-if="show" @click="dbclick(2)">
      <div  id="test" :style="{height:this.windowHeight,width:this.windowWidth}" style="margin-left:50%;margin-top:-50%;"></div>
    </div>
    <div id="btm">
      <yddetailtab id="longhead" :itemList="headData"></yddetailtab>
      <shorthead id="shorthead" style="display: none" :dataday="dataDay"></shorthead>
      <div @click="dbclick(1)">
        <ydchart ref="chart" @comChange="dbclick"></ydchart>
      </div>
      <divSplit style="margin-top: 10px;"></divSplit>
      <div id="griddiv">
        <ydgrid ref="grid"></ydgrid>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import echarts from 'echarts'
  import yddetailtab from '@/components/yidong/ydhead'
  import ydchart from '@/components/yidong/ydChart'
  import divSplit from '@/components/baseCom/DivSplit'
  import ydgrid from '@/components/yidong/ydGrid'
  import shorthead from '@/components/yidong/ydShortHead'
  import {get30Data} from "../../service/yidongApi";

  export default {
    name: "yddetail",
    components: {yddetailtab, ydchart, divSplit, ydgrid, shorthead},
    data() {
      return {
        dataDay: this.$route.query.item.VALUE1,
        headData: {
          NAME1: '-',
          KKEY1: '-',
          NAME2: '-',
          KKEY2: '-',
          VALUE1: '-',
          VALUE2: '-',
          VALUE3: '-',
          VALUE4: '-',
          VALUE5: '-',
          VALUE6: '-'
        },
        t: 0,
        count: 0,
        windowWidth: 0,
        windowHeight: 0,
        show:false,
        pageVal:{}
      }
    },
    beforeMount() {
      let _this = this
      this.pageVal = this.$route.query.pageVal
      this.windowWidth = $(window).width()
      this.windowHeight = $(window).height()
      //头部数据继承自 首页的dataCard
      let params = this.$route.query
      this.headData = params.item
      let pageVal = params.pageVal
      pageVal['tradetype'] = params.item.TRADETYPE
      pageVal['nowCard'] = {agency: this.headData.KKEY1, product: this.headData.KKEY2,cust:params.item.NAME3,grorjg:params.item.NAME4}
      get30Data(pageVal, function (res) {
        //画图
        let chartData = []
        for (let i = 0; i < res.length; i++) {
          let item = {}
          item['NAME'] = res[i].NAME;
          item['VALUE1'] = res[i].VALUE1; //流出份额
          item['VALUE2'] = res[i].VALUE3; //30天均值
          item['VALUE3'] = parseFloat(res[i].VALUE3) + parseFloat(2 * res[i].VALUE4); //上限
          item['VALUE4'] = parseFloat(res[i].VALUE3) - parseFloat(2 * res[i].VALUE4); //下限
          item['VALUE5'] = ((parseFloat(res[i].VALUE1) - parseFloat(res[i].VALUE3)) * 100 / parseFloat(res[i].VALUE3)).toFixed(2)
          chartData.push(item)
        }
        _this.$refs.chart.setData(chartData)
        //画表格
        _this.$refs.grid.setData(res)
      })
    },
    mounted() {
     // this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
      window.addEventListener('scroll', this.handleScroll)
      this.t = document.querySelector('#griddiv').offsetTop;
    },
    methods: {
      handleScroll: function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#griddiv').offsetTop;
        let result = offsetTop - scrollTop
        if ((result - this.t) > 0) {
          $('#longhead').show()
          $('#shorthead').hide()

        } else {
          $('#longhead').hide()
          $('#shorthead').show()
          if (result <= 0) {
            $('#shorthead').css({'position': 'fixed', 'top': '0'})
          } else {
            $('#shorthead').css({'position': '', 'top': ''})
          }
        }
        this.t = result
      },
      dbclick: function (flag) {
        let _this = this
        _this.count += 1
        setTimeout(function () {
          _this.count = 0
        }, 200) //500ms内点击两次，则认为是双击
        if (this.count >= 2) {
          if(flag===1){
            $("#btm").hide()
            $("#test").fadeIn()
            _this.count = 0
            _this.show = true
            $("#test").css('width',$(window).width()+'px').css('height',$(window).height()+'px')
            this.$nextTick(function () {
              let option = this.$refs.chart.chartOption
              document.getElementById("test").style.width=$(window).height()+'px'
              document.getElementById("test").style.height=$(window).width()+'px'
              let chart = Vue.prototype.$echarts.init(document.getElementById("test"))
              chart.setOption(this.$refs.chart.chartOption)
              $("#test").css('transform-origin','left').css('transform', 'rotate(90deg)')
            })
          }else{
            $("#test").hide()
            $("#btm").fadeIn()
            _this.count = 0
          }
        }
      }
    }
  }
</script>

<style scoped>
  .aaa {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
    z-index: 99999;
  }
</style>
