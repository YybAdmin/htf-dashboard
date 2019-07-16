<template>
    <div style="overflow: hidden">
      <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <yddetailtab id="longhead" :itemList="headData"></yddetailtab>
      <shorthead id="shorthead" style="display: none" :dataday="dataDay"></shorthead>
      <div id="chartId" v-on:dblclick="showBigDiv">
        <ydchart ref="chart" v-bind:chartInfo="this.chartInfo" ></ydchart>
      </div>
      <divSplit style="margin-top: 10px;"></divSplit>
      <div id="griddiv">
        <ydgrid ref="grid" v-bind:title="ydtitle"></ydgrid>
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
  export default {
    name: "yddetail",
    components:{yddetailtab,ydchart,divSplit,ydgrid,shorthead},
    data(){
      return{
        chartInfo:{
          title:'流出份额(单位：万元)',
          name:['正常','异常','上界','均值','下界'],
        },
        dataDay:'9000.34',
        ydtitle:['日期','流出份额','近7天均值(万元)','近30天均值(万元)'],
        headData:{NAME1:'-',KKEY1:'-',NAME2:'-',KKEY2:'-',VALUE1:'-',VALUE2:'-',VALUE3:'-',VALUE4:'-',VALUE5:'-',VALUE6:'-'},
        chartData:[{NAME:'07-01',VALUE1:'1',VALUE2:'5',VALUE3:'5',VALUE4:'3',VALUE5:'8'},
                  {NAME:'07-02',VALUE1:'4',VALUE2:'9',VALUE3:'12',VALUE4:'4',VALUE5:'14'},
                  {NAME:'07-03',VALUE1:'3',VALUE2:'7',VALUE3:'8',VALUE4:'4',VALUE5:'6'},
                  {NAME:'07-04',VALUE1:'3',VALUE2:'7',VALUE3:'8',VALUE4:'9',VALUE5:'5'},
                  {NAME:'07-05',VALUE1:'4',VALUE2:'8',VALUE3:'9',VALUE4:'10',VALUE5:'6'},
                  {NAME:'07-06',VALUE1:'5',VALUE2:'9',VALUE3:'10',VALUE4:'14',VALUE5:'7'},
                  {NAME:'07-07',VALUE1:'6',VALUE2:'10',VALUE3:'11',VALUE4:'15',VALUE5:'8'},
                  {NAME:'07-08',VALUE1:'7',VALUE2:'5',VALUE3:'12',VALUE4:'12',VALUE5:'9'},
                  {NAME:'07-09',VALUE1:'8',VALUE2:'6',VALUE3:'14',VALUE4:'9',VALUE5:'10'},
                  {NAME:'07-10',VALUE1:'9',VALUE2:'7',VALUE3:'9',VALUE4:'10',VALUE5:'12'}],
        gridData:[{NAME:'2019-03-01',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-02',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-03',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-04',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-05',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-06',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-07',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-08',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-09',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-10',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-11',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-12',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-13',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-14',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-15',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-16',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'},
                  {NAME:'2019-03-17',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000'}],
        t:0
      }
    },
    beforeMount(){
      let params = this.$route.query
      this.headData = params.item
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll)
      this.t = document.querySelector('#griddiv').offsetTop;
      this.$refs.chart.setData(this.chartData)
      this.$refs.grid.drawGrid(this.gridData)
    },
    methods:{
      showBigDiv:function () {
        alert(window.innerHeight)

      },
      handleScroll:function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#griddiv').offsetTop;
        let result = offsetTop - scrollTop
        if((result-this.t) > 0){
          console.log('下滑')

          $('#longhead').show()
          $('#shorthead').hide()

        }else{
          console.log('上滑')
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
