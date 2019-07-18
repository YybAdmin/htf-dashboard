<template>
    <div style="overflow: hidden">
      <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <yddetailtab id="longhead" :itemList="headData"></yddetailtab>
      <shorthead id="shorthead" style="display: none" :dataday="dataDay"></shorthead>
      <div id="chartId">
        <ydchart ref="chart"></ydchart>
      </div>
      <divSplit style="margin-top: 10px;"></divSplit>
      <div id="griddiv">
        <ydgrid ref="grid"></ydgrid>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import yddetailtab from '@/components/yidong/ydhead'
  import ydchart from '@/components/yidong/ydChart'
  import divSplit from '@/components/baseCom/DivSplit'
  import ydgrid from '@/components/yidong/ydGrid'
  import shorthead from '@/components/yidong/ydShortHead'
  import {get30Data} from "../../service/yidongApi";
  export default {
    name: "yddetail",
    components:{yddetailtab,ydchart,divSplit,ydgrid,shorthead},
    data(){
      return{
        dataDay:'9000.34',
        headData:{NAME1:'-',KKEY1:'-',NAME2:'-',KKEY2:'-',VALUE1:'-',VALUE2:'-',VALUE3:'-',VALUE4:'-',VALUE5:'-',VALUE6:'-'},
        t:0
      }
    },
    beforeMount(){
      let _this = this
      //头部数据继承自 首页的dataCard
      let params = this.$route.query
      this.headData = params.item
      get30Data(params.item,function (res) {
        //画图
        let chartData = []
        for (let i = 0; i <res.length ; i++) {
          let item = {}
          item['NAME'] = res[i].NAME;
          item['VALUE1'] = res[i].VALUE1; //流出份额
          item['VALUE2'] = res[i].VALUE3; //30天均值
          item['VALUE3'] = parseFloat(res[i].VALUE3)+parseFloat(2*res[i].VALUE4); //上限
          item['VALUE4'] = parseFloat(res[i].VALUE3)-parseFloat(2*res[i].VALUE4); //下限
          item['VALUE5'] = ((parseFloat(res[i].VALUE1) - parseFloat(res[i].VALUE3))*100/parseFloat(res[i].VALUE3)).toFixed(2)
          chartData.push(item)
        }
        _this.$refs.chart.setData(chartData)
        //画表格
        _this.$refs.grid.setData(res)
      })
    },
    mounted(){
      this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
      window.addEventListener('scroll',this.handleScroll)
      this.t = document.querySelector('#griddiv').offsetTop;
    },
    methods:{
      handleScroll:function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#griddiv').offsetTop;
        let result = offsetTop - scrollTop
        if((result-this.t) > 0){
          $('#longhead').show()
          $('#shorthead').hide()

        }else{
          $('#longhead').hide()
          $('#shorthead').show()
          if(result <= 0){
            $('#shorthead').css({'position':'fixed','top':'0'})
          }else{
            $('#shorthead').css({'position':'','top':''})
          }
        }
        this.t = result
      }
    }
  }
</script>

<style scoped>
.aaa{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 99999;
}
</style>
