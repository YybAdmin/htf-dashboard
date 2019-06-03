<template>
  <div style="padding: 0 15px 0 15px">
    <div ref="threeBarOneLine"  v-bind:style="{width:this.$myUtil.getDeviceWidth()-30+'px', height:250+'px'}">
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
      title: [],
      name: [],
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
      if (option !== undefined) { // 背景阴影
        this.shadow.ifShadow = (option.ifShadow !== undefined ? option.ifShadow : false)
        this.shadow.shadowNum = (option.shadowNum !== undefined ? option.shadowNum : 0)
        this.barLabel.label1Show = (option.label1Show !== undefined ? option.label1Show : true)
        this.barLabel.label2Show = (option.label2Show !== undefined ? option.label2Show : true)
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
    selectBar: function (kkey) { // kkey=2,3,4,5
      let thisChart = echarts.getInstanceByDom(this.$refs.threeBarOneLine)
      thisChart.dispatchAction({
        type: 'downplay'
      })
      for (var i = 0; i < this.data.length; i++) { // this.data[i].KKEY=2,3,4,5
        if (this.data[i].KKEY === kkey.toString()) {
          thisChart.dispatchAction({
            type: 'highlight',
            dataIndex: i
          })
        }
      }
    },
    drawThreeBarOneLine: function () {
      let thisChart = echarts.getInstanceByDom(this.$refs.threeBarOneLine)
      if (thisChart !== undefined) {
        thisChart.dispose()
      }
      let _this = this
      let pKey = this.chartInfo.pKey
      let iflabelColor = this.barLabel.labelColor
      let labelNum = this.barLabel.labelNum
      let end = Math.floor(5 / this.data.length * 100)
      let myChart = echarts.init(this.$refs.threeBarOneLine)
      let myChartOption = {
        title: [{
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
        tooltip: {
          trigger: 'axis',
          triggerOn: 'click',
          textStyle: {
            align: 'left'
          },
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
          }
        },
        legend: {
          bottom: '2%',
          data: [this.chartInfo.name[0], this.chartInfo.name[1], this.chartInfo.name[2], this.chartInfo.name[3]]
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
          axisPointer: {
            show: false // 不触发弹框
          },
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
          max: function (value) {
            if (Math.abs(value.max) > Math.abs(value.min)) {
              return (Math.abs(value.max) * 1.2).toFixed(2)
            } else {
              return (Math.abs(value.min) * 1.2).toFixed(2)
            }
          },
          min: function (value) {
            if (Math.abs(value.max) > Math.abs(value.min)) {
              return (-Math.abs(value.max) * 1.2).toFixed(2)
            } else {
              return (-Math.abs(value.min) * 1.2).toFixed(2)
            }
          },
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
          max: function (value) {
            if (Math.abs(value.max) > Math.abs(value.min)) {
              return (Math.abs(value.max) * 1.2).toFixed(2)
            } else {
              return (Math.abs(value.min) * 1.2).toFixed(2)
            }
          },
          min: function (value) {
            if (Math.abs(value.max) > Math.abs(value.min)) {
              return (-Math.abs(value.max) * 1.2).toFixed(2)
            } else {
              return (-Math.abs(value.min) * 1.2).toFixed(2)
            }
          },
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
          name: this.chartInfo.name[0],
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
          name: this.chartInfo.name[1],
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
          name: this.chartInfo.name[2],
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
          name: this.chartInfo.name[3],
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
          var pKeyName = op.dataset[0].source[xIndex].NAME
          if (pKey === '999999') {
            pKey = pkey
            myChart.dispatchAction({
              type: 'downplay'
            })
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
