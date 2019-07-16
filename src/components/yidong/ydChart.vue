<template>
  <div>
    <div ref="ydChart" v-bind:style="{width:this.$myUtil.getDeviceWidth()+'px', height:250+'px'}">
      <div class="picsty" ><img src="@/assets/img/download.gif" style="height:50px;width:50px;"></div>
      <div class="fontsty">请稍候.....</div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import echarts from 'echarts'
  export default {
    name: "ydChart",
    props:{
      chartInfo: {
        title: '',
          name: []
        }
    },
    data(){
      return{
        data:[]
      }
    },
    methods:{
      setData:function (data) {
        this.data = data
        this.drawYdChart()
      },
      /*chartDivChange:function(){
        window.onresize = function () {
          myChart.resize();
        }
      },*/
      drawYdChart:function () {
        let thisChart = echarts.getInstanceByDom(this.$refs.ydChart)
        if (thisChart !== undefined) {
          thisChart.dispose()
        }
        let start = 100 - Math.floor(10 / this.data.length * 100)
        let myChart = echarts.init(this.$refs.ydChart)
        let myChartOption = {
          title: {
            text: this.chartInfo.title,
            top: '10%',
            left: '10%',
            textStyle: {
              fontSize: '9px',
              color: '#999999'
            }
          },
          tooltip: {
            trigger: 'axis',
            triggerOn: 'click',
            axisPointer: {
              type: 'line',
              lineStyle: {
                color: '#999999',
                type: 'dashed'
              }
            },
            formatter:function(params){
              return '<div><table style="width:120px;line-height:13px;font-size:11px;color:#FFF">'+
                '<tr><td style="text-align:left;">'+params[0].name+'</td></tr>'+
                '<tr><td style="text-align:left;">流出份额:</td><td style="text-align:right;">'+params[0].value.VALUE1+'万元</td></tr>'+
                '<tr><td style="text-align:left;">30天均值:</td><td style="text-align:right;">'+params[0].value.VALUE2+'万元</td></tr>'+
                '<tr><td style="text-align:left;">上界:</td><td style="text-align:right;">'+params[0].value.VALUE3+'万元</td></tr>'+
                '<tr><td style="text-align:left;">下界:</td><td style="text-align:right;">'+params[0].value.VALUE4+'万元</td></tr>'+
                '<tr><td style="text-align:left;">波动率:</td><td style="text-align:right;">'+params[0].value.VALUE5+'万元</td></tr>'+
                '</table></div>';
            },
            backgroundColor : 'rgba(0, 0, 0, 0.7)',
            borderWidth : 1,
            borderColor : '#ccc',
            padding : 5,
            textStyle : {
              color : '#000'
            }
          },
          legend: {
            bottom: '1px',
            data: this.chartInfo.name//['正常','异常','上界','均值','下界']
          },
          dataset:{
            source:this.data
          },
          dataZoom: {
            type: 'inside',
            zoomLock: true,
            start: start,
            end: 100,
            filterMode: 'filter',
            throttle: 200,
            preventDefaultMouseMove: false
          },
          grid: {
            bottom: '25%',
            top: '20%'
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLine: {
              lineStyle: {
                color: '#EEEEEE'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: '#999999',
              fontSize: '12px'
            }
          },
          yAxis: {
            boundaryGap: ['0%', '20%'],
            splitNumber: 2,
            scale: true,
            splitLine: {
              lineStyle: {
                color: '#EEEEEE'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#EEEEEE'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#999999',
              fontSize: '9px'
            }
          },
          series:[{
            name: this.chartInfo.name[0],
            type: 'bar',
            barWidth: '4px',
            encode: {
              x: 'NAME',
              y: 'VALUE1'
            },
            barGap: '0%',
            itemStyle: {
              color: '#7CB1F9'
            },
            label: {
              show: false
            }
          },{
            name: this.chartInfo.name[1],
            type: 'bar',
            barWidth: '4px',
            encode: {
              x: 'NAME',
              y: 'VALUE2'
            },
            itemStyle: {
              color: '#FA7375'
            },
            label: {
              show: false
            }
          },{
            name: this.chartInfo.name[2],
            type: 'line',
            encode: {
              x: 'NAME',
              y: 'VALUE3'
            },
            itemStyle: {
              color: '#FFC89B'
            },
            smooth:true,
            label: {
              show: false
            }
          },{
            name: this.chartInfo.name[3],
            type: 'line',
            encode: {
              x: 'NAME',
              y: 'VALUE4'
            },
            itemStyle: {
              color: '#FFE789'
            },
            smooth:true,
            label: {
              show: false
            }
          },{
            name: this.chartInfo.name[4],
            type: 'line',
            encode: {
              x: 'NAME',
              y: 'VALUE5'
            },
            itemStyle: {
              color: '#8CE5FF'
            },
            smooth:true,
            label: {
              show: false
            }
          }]
        }
        myChart.setOption(myChartOption)
      }
    }

  }
</script>

<style scoped>
  .fontsty{
    color:#666666;
    font-size: 16px;
    line-height: 30px;
    font-weight: 400;
  }
  .picsty{
    display: block;
    text-align: center;
    padding-top: 70px;
  }
</style>
