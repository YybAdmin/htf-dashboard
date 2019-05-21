<template>
  <div>
    <div ref="twoCakeChart"  v-bind:style="{width:this.$myUtil.getDeviceWidth()+'px', height:280+'px'}">
      <div class="picsty" ><img src="@/assets/img/download.gif" style="height:50px;width:50px;"></div>
      <div class="fontsty">请稍候.....</div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'DrawTwoCake',
  props: {
    chartInfo: {
      title: '',
      name1: '',
      name2: ''
    }
  },
  data () {
    return {
      data: []
    }
  },
  methods: {
    setData: function (data) {
      this.data = data
      this.draw()
    },
    draw: function () {
      let thisChart = echarts.getInstanceByDom(this.$refs.twoCakeChart)
      if (thisChart !== undefined) {
        thisChart.dispose()
      }
      let myChart = echarts.init(this.$refs.twoCakeChart)
      let myChartOption = {
        color: [
          '#5a96e6', '#fa7375', '#7bbef9', '#ff8100', '#ffd35a'
        ],
        title: {
          text: '',
          subtext: '',
          x: 'center'
        },
        dataset: {
          source: this.data
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          itemWidth: 14,
          itemHeight: 14,
          data: ['TOP10', 'NO.11-200', 'NO.101-200', 'NO.201-300', '其他']
        },
        series: [
          {
            name: '趋势分析',
            type: 'pie',
            radius: '45%',
            center: ['30%', '68%'],
            startAngle: -90,
            data: [
              {name: this.data[0].NAME, value: this.data[0].VALUE},
              {name: this.data[1].NAME, value: this.data[1].VALUE},
              {name: this.data[2].NAME, value: this.data[2].VALUE},
              {name: this.data[3].NAME, value: this.data[3].VALUE},
              {name: this.data[4].NAME, value: this.data[4].VALUE}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0
              }
            },
            labelLine: {
              show: true,
              normal: {
                length: 10,
                length2: 0
              }
            }
          },
          {
            name: '占比',
            type: 'pie',
            radius: '35%',
            orient: 'horizontal',
            center: ['75%', '25%'],
            labelLine: {
              show: true,
              normal: {
                length: 10,
                length2: 0
              }
            },
            data: [
              {name: this.data[5].NAME, value: this.data[5].VALUE},
              {name: this.data[6].NAME, value: this.data[6].VALUE}
            ]
          }
        ]
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
