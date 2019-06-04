<template>
  <div>
    <div ref="OneBarOneLineChart" v-bind:style="{width:this.$myUtil.getDeviceWidth()+'px', height:250+'px'}">
      <div class="picsty" ><img src="@/assets/img/download.gif" style="height:50px;width:50px;"></div>
      <div class="fontsty">请稍候.....</div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'DrawOneBarOneLine',
  props: {
    chartInfo: {
      title: [],
      name: [],
      pKey: '999999'
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
    setData: function (data, option) {
      this.data = data
      if (option !== undefined) {
        this.barLabel.label1Show = (option.label1Show !== undefined ? option.label1Show : false)
        this.barLabel.label2Show = (option.label2Show !== undefined ? option.label2Show : false)
        this.barLabel.labelNum = (option.labelNum !== undefined ? option.labelNum : 1)
        this.barLabel.labelColor = (option.labelColor !== undefined ? option.labelColor : false)
      }
      this.drawOneBarOneLineChart()
    },
    drawOneBarOneLineChart: function () {
      let thisChart = echarts.getInstanceByDom(this.$refs.OneBarOneLineChart)
      if (thisChart !== undefined) {
        thisChart.dispose()
      }
      let pKey = this.chartInfo.pKey
      let data = this.data
      let iflabelColor = this.barLabel.labelColor
      let labelNum = this.barLabel.labelNum
      let _this = this
      let end = Math.floor(100 / (this.data.length / 10))
      let myChart = echarts.init(this.$refs.OneBarOneLineChart)
      let myChartOption = {
        title:
          [{
            text: this.chartInfo.title[0],
            top: '1px',
            left: '1px',
            textStyle: {
              fontSize: '9px',
              color: '#999999'
            }
          }, {
            text: this.chartInfo.title[1],
            top: '1px',
            right: '1px',
            textStyle: {
              fontSize: '9px',
              color: '#999999'
            }
          }],
        legend: {
          bottom: '1px',
          data: [this.chartInfo.name[0], this.chartInfo.name[1]]
        },
        dataZoom: {
          type: 'inside',
          zoomLock: true,
          start: 0,
          end: end,
          filterMode: 'filter',
          throttle: 200,
          preventDefaultMouseMove: false
        },
        dataset: {
          source: this.data
        },
        grid: {
          bottom: '60px',
          top: '30px'
        },
        xAxis: [{
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
            fontSize: '12px',
            rotate: -40
          }
        }],
        yAxis: [{
          type: 'value',
          splitNumber: 2,
          splitLine: {
            lineStyle: {
              color: '#EEE'
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
            interval: 0,
            color: '#999999',
            fontSize: '12px'
          }
        }, {
          type: 'value',
          splitLine: {
            show: false
          },
          scale: true,
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
        }],
        series: [{
          name: this.chartInfo.name[0],
          type: 'bar',
          barWidth: '20px',
          yAxisIndex: 0,
          barMaxWidth: '15px',
          encode: {
            x: 'NAME',
            y: 'VALUE1'
          },
          itemStyle: {
            color: '#7CB1F9'
          },
          emphasis: {
            itemStyle: {
              color: '#2B83F8'
            }
          },
          label: {
            show: this.barLabel.label1Show,
            position: 'top',
            color: '#333333',
            fontSize: '9px',
            formatter: function (params) {
              if (labelNum === 1) {
                return '{c|' + params.data.VALUE1 + '}'
              } else {
                if (iflabelColor === true) {
                  if (params.data.RATE2 >= 0) {
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
          name: this.chartInfo.name[1],
          type: 'line',
          barWidth: '20px',
          yAxisIndex: 1,
          smooth: true,
          encode: {
            x: 'NAME',
            y: 'VALUE2'
          },
          itemStyle: {
            color: '#FA7375'
          },
          emphasis: {
            itemStyle: {
              color: '#FF2B2E'
            }
          },
          label: {
            show: this.barLabel.label2Show,
            position: 'top',
            color: '#333333',
            fontSize: '9px',
            formatter: function (params) {
              if (labelNum === 1) {
                return '{c|' + params.data.VALUE2 + '}'
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
      myChart.off('click')
      myChart.off('datazoom')
      myChart.getZr().on('click', function (params) {
        var pointInPixel = [ params.offsetX, params.offsetY ]
        if (myChart.containPixel('grid', pointInPixel)) {
          var pointInGrid = myChart.convertFromPixel({
            seriesIndex: 0
          }, pointInPixel)
          var xIndex = pointInGrid[0]
          var op = myChart.getOption()
          var pkey = op.dataset[0].source[xIndex].KKEY
          var pKeyName = op.dataset[0].source[xIndex].NAME
          if (pKey === '999999') {
            pKey = pkey
            myChart.dispatchAction({
              type: 'highlight',
              dataIndex: xIndex
            })
          } else {
            myChart.dispatchAction({
              type: 'downplay'
            })
            if (pKey === pkey) {
              pKey = '999999'
              pKeyName = 'ALL'
            } else {
              pKey = pkey
              myChart.dispatchAction({
                type: 'highlight',
                dataIndex: xIndex
              })
            }
          }
        }
        _this.$emit('comChanged', {pKey, pKeyName})
      })
      myChart.on('datazoom', function (params) {
        if (pKey !== '999999') {
          for (var i = 0; i < data.length; i++) {
            if (data[i].KKEY === pKey) {
              myChart.dispatchAction({
                type: 'highlight',
                dataIndex: i
              })
            }
          }
        }
      })
      myChart.setOption(myChartOption)
      if (pKey !== '999999') {
        for (var i = 0; i < data.length; i++) {
          if (data[i].KKEY === pKey) {
            myChart.dispatchAction({
              type: 'highlight',
              dataIndex: i
            })
          }
        }
      }
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
