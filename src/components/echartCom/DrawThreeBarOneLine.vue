<template>
  <div>
    <div ref="threeBarOneLine"  v-bind:style="{width:this.$myUtil.getDeviceWidth()+'px', height:250+'px'}">
      <div class="picsty" ><img src="@/assets/img/download.gif" style="height:50px;width:50px;"></div>
      <div class="fontsty">请稍候.....</div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'DrawThreeBarOneLine',
  props: {
    chartInfo: {
      title1: '',
      title2: '',
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      pKey: ''
    }
  },
  data () {
    return {
      shadow: {
        ifShadow: false,
        shadowNum: 0,
        colorSeires: [],
        xSeriesData: []
      },
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
        this.shadow.ifShadow = (option.ifShadow !== undefined ? option.ifShadow : false)
        this.shadow.shadowNum = (option.shadowNum !== undefined ? option.shadowNum : 0)
        this.barLabel.label1Show = (option.label1Show !== undefined ? option.label1Show : true)
        this.barLabel.label2Show = (option.label2Show !== undefined ? option.label2Show : false)
        this.barLabel.labelNum = (option.labelNum !== undefined ? option.labelNum : 1)
        this.barLabel.labelColor = (option.labelColor !== undefined ? option.labelColor : true)
      }
      var length = this.data.length
      for (let i = 0; i < length; i++) {
        this.shadow.xSeriesData[i] = i + 1
        if (i < this.shadow.shadowNum) {
          this.shadow.colorSeires[i] = '#F4F4F4'
        } else {
          this.shadow.colorSeires[i] = 'white'
        }
      }
    },
    drawThreeBarOneLine: function () {
      let thisChart = echarts.getInstanceByDom(this.$refs.threeBarOneLine)
      if (thisChart !== undefined) {
        thisChart.dispose()
      }
      let ymax = 0
      let ymin = 0
      let v1max = 0
      let v4max = 0
      let data = this.data
      for (var i = 0; i < data.length; i++) {
        if (v1max < parseInt(data[i].VALUE1)) {
          v1max = parseInt(data[i].VALUE1)
        }
        if (v4max < parseInt(data[i].VALUE4)) {
          v4max = parseInt(data[i].VALUE4)
        }
        if (ymin > parseInt(data[i].VALUE2)) {
          ymin = parseInt(data[i].VALUE2)
        }
      }
      ymax = v1max > v4max ? v1max : v4max
      console.log('ymax:' + ymax + '-' + 'ymin:' + ymin)
      let _this = this
      let pKey = this.chartInfo.pKey
      let iflabelColor = this.barLabel.labelColor
      let labelNum = this.barLabel.labelNum
      let end = Math.floor(5 / this.data.length * 100)
      let myChart = echarts.init(this.$refs.threeBarOneLine)
      let myChartOption = {
        title: [{
          text: this.chartInfo.title1,
          top: '1px',
          left: '1px',
          textStyle: {
            fontSize: '9px',
            color: '#999999'
          }
        }, {
          text: this.chartInfo.title2,
          top: '1px',
          right: '1px',
          textStyle: {
            fontSize: '9px',
            color: '#999999'
          }
        }],
        legend: {
          bottom: '2%',
          data: [this.chartInfo.name1, this.chartInfo.name2, this.chartInfo.name3, this.chartInfo.name4]
        },
        dataZoom: {
          type: 'inside',
          zoomLock: true,
          start: 0,
          end: end,
          filterMode: 'filter',
          throttle: 200
        },
        dataset: {
          source: _this.data
        },
        grid: {
          bottom: '25%',
          top: '15%'
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
            fontSize: '12px'
          }
        }, {
          show: this.shadow.ifShadow,
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: this.shadow.colorSeires
            }
          },
          data: this.shadow.xSeriesData
        }],
        yAxis: [{
          position: 'right',
          max: ymax * 1.2,
          min: ymin * 1.2,
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
        }, {
          position: 'left',
          max: ymax * 1.2,
          min: ymin * 1.2,
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
        }],
        series: [{
          name: this.chartInfo.name1,
          type: 'bar',
          stack: 'stackGrp',
          barWidth: '20px',
          barGap: '-100%',
          yAxisIndex: 1,
          encode: {
            x: 'NAME',
            y: 'VALUE1'
          },
          itemStyle: {
            barBorderRadius: [3, 3, 0, 0],
            color: '#FA7375'
          },
          emphasis: {
            itemStyle: {
              color: '#FF2B2E'
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
          name: this.chartInfo.name2,
          type: 'bar',
          stack: 'stackGrp',
          barWidth: '20px',
          yAxisIndex: 1,
          encode: {
            x: 'NAME',
            y: 'VALUE2'
          },
          itemStyle: {
            barBorderRadius: [0, 0, 3, 3],
            color: '#7CB1F9'
          },
          emphasis: {
            itemStyle: {
              color: '#2B83F8'
            }
          },
          label: {
            show: this.barLabel.label2Show,
            position: 'bottom',
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
        }, {
          name: this.chartInfo.name3,
          type: 'bar',
          barWidth: '9px',
          barGap: '-75%',
          yAxisIndex: 1,
          encode: {
            x: 'NAME',
            y: 'VALUE3'
          },
          itemStyle: {
            color: '#FFE789'
          },
          emphasis: {
            itemStyle: {
              color: '#FFE789'
            }
          }
        }, {
          name: this.chartInfo.name4,
          type: 'line',
          yAxisIndex: 0,
          encode: {
            x: 'NAME',
            y: 'VALUE4'
          },
          itemStyle: {
            color: '#64D5FF'
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
          var pKeyName = op.dataset[0].source[xIndex].KKEY
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
        for (var j = 0; j < data.length; j++) {
          if (data[j].KKEY === pKey) {
            myChart.dispatchAction({
              type: 'highlight',
              dataIndex: j
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
