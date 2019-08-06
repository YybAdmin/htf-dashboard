<template>
  <div>
    <div ref="ydChart" id="ydChart" v-bind:style="{width:this.$myUtil.getDeviceWidth()+'px', height:250+'px'}">
      <div class="picsty"><img src="@/assets/img/download.gif" style="height:50px;width:50px;"></div>
      <div class="fontsty">请稍候.....</div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import icon from '@/assets/img/yd/legendIcon1.svg'

  export default {
    name: "ydChart",
    components: {icon},
    data() {
      return {
        chartInfo: {
          title: '流出份额(单位：万元)',
          legendData: [{name: '流出', icon: 'image://' + icon},
            {name: '上界'}, {name: '均值'}, {name: '下界'}]
        },
        data: [{NAME: '-', VALUE1: '-', VALUE2: '-', VALUE3: '-', VALUE4: '-', VALUE5: '-'}],
        chartOption:null
      }
    },
    methods: {
      setData: function (data) {
        this.data = data.sort(this.compare('NAME'))
        this.drawYdChart()
      },
      compare:function(property){
        return function(a, b) {
          var value1 = parseInt(a[property].split('-').join(''));
          var value2 = parseInt(b[property].split('-').join(''));
          return value1 - value2;
        }
      },
      drawYdChart: function () {
        let thisChart = echarts.getInstanceByDom(this.$refs.ydChart)
        if (thisChart !== undefined) {
          thisChart.dispose()
        }
        let start = 100 - Math.floor(10 / this.data.length * 100)
        let ts = this
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
            formatter: function (params) {
              setTimeout(function () {
                myChart.dispatchAction({
                  type: 'hideTip'
                })
              }, 4000)
              return '<div><table style="width:120px;line-height:13px;font-size:11px;color:#FFF">' +
                '<tr><td style="text-align:left;">' + params[0].name + '</td></tr>' +
                '<tr><td style="text-align:left;">流出份额:</td><td style="text-align:right;">' + params[0].value.VALUE1 + '万元</td></tr>' +
                '<tr><td style="text-align:left;">30天均值:</td><td style="text-align:right;">' + params[0].value.VALUE2 + '万元</td></tr>' +
                '<tr><td style="text-align:left;">上界:</td><td style="text-align:right;">' + params[0].value.VALUE3 + '万元</td></tr>' +
                '<tr><td style="text-align:left;">下界:</td><td style="text-align:right;">' + params[0].value.VALUE4 + '万元</td></tr>' +
                '<tr><td style="text-align:left;">波动率:</td><td style="text-align:right;">' + params[0].value.VALUE5 + '%</td></tr>' +
                '</table></div>';
            },
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 5,
            textStyle: {
              color: '#000'
            }
          },
          legend: {
            bottom: '1px',
            data: this.chartInfo.legendData
          },
          dataset: {
            source: this.data
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
              interval: 1,
              color: '#999999',
              fontSize: '12px',
              formatter: function (label) {
                return label.substring(label.length - 5).replace('-', '/')
              }
            }
          },
          yAxis: {
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
          series: [{
            name: this.chartInfo.legendData[0].name,
            type: 'bar',
            barWidth: '4px',
            encode: {
              x: 'NAME',
              y: 'VALUE1'
            },
            barGap: '0%',
            itemStyle: {
              color: function (params) {
                if (ts.data[params.dataIndex].VALUE1 > ts.data[params.dataIndex].VALUE3) {
                  return '#FA7375'
                }
                if (ts.data[params.dataIndex].VALUE1 < ts.data[params.dataIndex].VALUE4) {
                  return '#FA7375'
                }
                return '#7CB1F9'
              }//'#7CB1F9'
            },
            label: {
              show: false
            }
          }, {
            name: this.chartInfo.legendData[1].name,
            type: 'line',
            encode: {
              x: 'NAME',
              y: 'VALUE3'
            },
            itemStyle: {
              color: '#FFC89B'
            },
            smooth: true,
            label: {
              show: false
            }
          }, {
            name: this.chartInfo.legendData[2].name,
            type: 'line',
            encode: {
              x: 'NAME',
              y: 'VALUE2'
            },
            itemStyle: {
              color: '#FFE789'
            },
            smooth: true,
            label: {
              show: false
            }
          }, {
            name: this.chartInfo.legendData[3].name,
            type: 'line',
            encode: {
              x: 'NAME',
              y: 'VALUE4'
            },
            itemStyle: {
              color: '#8CE5FF'
            },
            smooth: true,
            label: {
              show: false
            }
          }]
        }
        this.chartOption = myChartOption
        myChart.setOption(myChartOption)
      }
    },
    beforeMount() {
      this.width = document.body.clientWidth
      this.height = document.body.clientHeight
    }
  }
</script>

<style scoped>
  .fontsty {
    color: #666666;
    font-size: 16px;
    line-height: 30px;
    font-weight: 400;
  }

  .picsty {
    display: block;
    text-align: center;
    padding-top: 70px;
  }

  .hide {
    display: none;
  }
</style>
