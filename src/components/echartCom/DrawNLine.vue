<template>
  <div style="padding: 0 15px 0 15px">
    <div ref="sixLineChart" v-bind:style="{width:this.$myUtil.getDeviceWidth()-30+'px', height:250+'px'}">
      <div class="picsty" ><img src="@/assets/img/download.gif" style="height:50px;width:50px;"></div>
      <div class="fontsty">请稍候.....</div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'DrawSixLine',
  props: {
    chartInfo: {
      title: '',
      name: [],
      selected: []
    }
  },
  data () {
    return {
      data: [],
      nLine: 1
    }
  },
  computed: {
  },
  methods: {
    setData: function (data, dateType) {
      for (let i = 0; i < data.length; i++) {
        data[i].NAMEBAK = data[i].NAME
        data[i].NAME = this.$echartUtil.xDate(dateType, data[i].NAME)
      }
      this.data = data
      let count = 0
      Object.keys(this.data[0]).forEach((str) => {
        if (str.indexOf('VALUE') !== -1) { count = count + 1 }
      })
      this.nLine = count
    },
    drawNLine: function () {
      let thisChart = echarts.getInstanceByDom(this.$refs.sixLineChart)
      if (thisChart !== undefined) {
        thisChart.dispose()
      }
      var name = []
      var selected = {}
      for (let i = 0; i < this.nLine; i++) {
        name[i] = this.chartInfo.name[i]
        selected[this.chartInfo.name[i]] = this.chartInfo.selected[i]
      }
      let start = 100 - Math.floor(6 / this.data.length * 100)
      let myChart = echarts.init(this.$refs.sixLineChart)
      let myChartOption = {
        title: {
          text: this.chartInfo.title,
          top: '1px',
          left: '1px',
          textStyle: {
            fontSize: '9px',
            color: '#999999'
          }
        },
        legend: {
          bottom: '0%',
          data: name,
          selected: selected
        },
        tooltip: {
          trigger: 'axis',
          triggerOn: 'click',
          axisPointer: {
            type: 'line',
            label: {
              show: false
            },
            lineStyle: {
              opacity: 1,
              color: '#BABABA'
            }
          },
          formatter: function (params) {
            console.log(params)
            let content = '<div style="text-align: left;font-size: 11px;color: #FFFFFF">' + params[0].data.NAME + '</div>' +
            '<div"><table style="width: 150px;font-size: 11px;color: #FFFFFF">'
            for (var i = 1; i <= params.length; i++) {
              content = content + '<tr><td style="text-align: left;">' + params[i - 1].seriesName + '</td>' + '<td style="text-align: right;">' + params[i - 1].data['VALUE' + i] + '</td></tr>'
            }
            content = content + '</table></div>'
            return content
          }
          // backgroundColor: 'rgba(246,246,246,0.6)',
          // borderWidth: 1,
          // borderColor: '#CCCCCC',
          // textStyle: {
          //   color: '#333333',
          //   fontSize: '11px'
          // }
        },
        dataZoom: {
          type: 'inside',
          zoomLock: true,
          start: start,
          end: 100,
          filterMode: 'filter',
          throttle: 200
        },
        dataset: {
          source: this.data
        },
        grid: {
          bottom: this.nLine / 3 * 40 + 'px',
          top: '15%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#CCCCCC'
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: '#CCCCCC'
            }
          },
          axisLabel: {
            interval: 0,
            color: '#000000',
            fontSize: '10px'
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
              color: '#CCCCCC'
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
        series: []
      }
      for (let i = 1; i <= this.nLine; i++) {
        myChartOption.series[i] = {
          name: this.chartInfo.name[i - 1],
          type: 'line',
          encode: {
            x: 'NAME',
            y: 'VALUE' + i
          },
          itemStyle: {
            color: '#BCE0FC'
          },
          label: {
            show: false,
            position: 'top',
            fontSize: '7px'
          }
        }
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
