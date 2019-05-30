<template>
  <div style="padding-left: 15px">
    <div ref="twoLineChart"  v-bind:style="{width:this.$myUtil.getDeviceWidth()-15+'px', height:250+'px'}">
      <div class="picsty" ><img src="@/assets/img/download.gif" style="height:50px;width:50px;"></div>
      <div class="fontsty">请稍候.....</div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'DrawTwoLine',
  props: {
    chartInfo: {
      title: '',
      name1: '',
      name2: ''
    },
    toolTipInfo: {
      name: ''
    }
  },
  data () {
    return {
      barLabel: {
        label1Show: true,
        label2Show: true,
        labelNum: 1,
        labelColor: false
      },
      data: []
    }
  },
  methods: {
    setData: function (data, option, dateType) {
      for (let i = 0; i < data.length; i++) {
        data[i].NAMEBAK = data[i].NAME
        data[i].NAME = this.$echartUtil.xDate(dateType, data[i].NAME)
      }
      this.data = data
      if (option !== undefined) {
        this.barLabel.label1Show = (option.label1Show !== undefined ? option.label1Show : true)
        this.barLabel.label2Show = (option.label2Show !== undefined ? option.label2Show : false)
        this.barLabel.labelNum = (option.labelNum !== undefined ? option.labelNum : 1)
        this.barLabel.labelColor = (option.labelColor !== undefined ? option.labelColor : true)
      }
    },
    changeDate: function (params) {
      this.$emit('comChanged', params)
    },
    drawTwoLineChart: function () {
      let thisChart = echarts.getInstanceByDom(this.$refs.twoLineChart)
      if (thisChart !== undefined) {
        thisChart.dispose()
      }
      let _this = this
      let iflabelColor = this.barLabel.labelColor
      let labelNum = this.barLabel.labelNum
      let start = 100 - Math.floor(6 / this.data.length * 100)
      let myChart = echarts.init(this.$refs.twoLineChart)
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
          bottom: '1px',
          data: [this.chartInfo.name1, this.chartInfo.name2]
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
              color: '#BABABA',
              type: 'dashed'
            }
          },
          formatter: function (params) {
            _this.changeDate(params)
            return '<div style="text-align: left;font-size: 11px;color: #FFFFFF">' + params[0].data.NAME + '</div>' +
              '<div"><table style="width: 120px;font-size: 11px;color: #FFFFFF">' +
              '<tr><td style="text-align: left;"><span>保有量：</span></td>' + '<td style="text-align: right;"><span>' + params[0].data.VALUE1 + '亿</span></td></tr>' +
              '<tr><td style="text-align: left;"><span>份额：</span></td>' + '<td style="text-align: right;"><span>' + params[0].data.VALUE2 + '亿</span></td></tr>' +
              '<tr><td style="text-align: left;"><span>保有量环比：</span></td>' + '<td style="text-align: right;"><span>' + params[0].data.RATE1 + '%</span></td></tr>' +
              '<tr><td style="text-align: left;"><span>份额环比：</span></td>' + '<td style="text-align: right;"><span>' + params[0].data.RATE2 + '%</span></td></tr>' +
              '</table></div>'
          }
          // backgroundColor: '#F6F6F6',
          // borderWidth: 1,
          // borderColor: '#CCCCCC',
          // textStyle: {
          //   color: '#FFFFFF',
          //   fontSize: '11px'
          // }
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
        dataset: {
          source: this.data
        },
        grid: {
          bottom: '20%',
          top: '15%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
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
        series: [{
          name: this.chartInfo.name1,
          type: 'line',
          encode: {
            x: 'NAME',
            y: 'VALUE1'
          },
          itemStyle: {
            color: '#7CB1F9'
          },
          label: {
            show: this.barLabel.label1Show,
            position: 'top',
            fontSize: '9px',
            formatter: function (params) {
              if (labelNum === 1) {
                return '{c|' + params.data.VALUE1 + '}'
              } else {
                if (iflabelColor === true) {
                  if (params.data.RATE1 >= 0) {
                    return '{a|' + params.data.RATE1 + '%}' + '\n' + '{c|' + params.data.VALUE1 + '}'
                  } else {
                    return '{b|' + params.data.RATE1 + '%}' + '\n' + '{c|' + params.data.VALUE1 + '}'
                  }
                } else {
                  return '{c|' + params.data.RATE1 + '%}' + '\n' + '{c|' + params.data.VALUE1 + '}'
                }
              }
            },
            rich: {
              a: {
                color: 'red',
                fontSize: 10,
                lineHeight: 15
              },
              b: {
                color: 'green',
                fontSize: 10,
                lineHeight: 15
              },
              c: {
                color: '#333333',
                fontSize: 10,
                lineHeight: 15
              }
            }
          }
        }, {
          name: this.chartInfo.name2,
          type: 'line',
          encode: {
            x: 'NAME',
            y: 'VALUE2'
          },
          itemStyle: {
            color: '#FA7375'
          },
          label: {
            show: this.barLabel.label2Show,
            position: 'top',
            fontSize: '9px',
            formatter: function (params) {
              if (labelNum === 1) {
                return '{c|' + params.data.VALUE1 + '}'
              } else {
                if (iflabelColor === true) {
                  if (params.data.RATE2 >= 0) {
                    return '{a|' + params.data.RATE2 + '%}' + '\n' + '{c|' + params.data.VALUE2 + '}'
                  } else {
                    return '{b|' + params.data.RATE2 + '%}' + '\n' + '{c|' + params.data.VALUE2 + '}'
                  }
                } else {
                  return '{c|' + params.data.RATE2 + '%}' + '\n' + '{c|' + params.data.VALUE2 + '}'
                }
              }
            },
            rich: {
              a: {
                color: 'red',
                fontSize: 10,
                lineHeight: 15
              },
              b: {
                color: 'green',
                fontSize: 10,
                lineHeight: 15
              },
              c: {
                color: '#333333',
                fontSize: 10,
                lineHeight: 15
              }
            }
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
