<template>
  <div>
    <div style="text-align: left;">
      <table style="width: 95%;table-layout: fixed">
        <tr>
          <td @click="jumpToPDF()">
              <img id="pdf" :src="srcURL" class="pdfImg" /> <div style="display: inline-block">{{description}}</div>
          </td>
          <td v-show="!ifPDF" @click="jumpToPDF()">
            <div class="pdfButtons">
              <img id="pdfArrow" src="@/assets/img/arrow.png" class="pdfArrowImg" v-show="!ifPDF"/>
            </div>
          </td>
          <td v-show="ifPDF">
            <div class="pdfButtons">
              <button @click="prev">&lt;</button>
              <span>{{pageNumShow}}</span>
              <button @click="next">&gt;</button>
              <button @click="enlarge">+</button>
              <button @click="letting">-</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div id = 'loading' style="display: none" v-bind:style="{width:this.$myUtil.getDeviceWidth()+'px', height:250+'px'}">
      <div class="picsty" ><img src="@/assets/img/download.gif" style="height:50px;width:50px;"></div>
      <div class="fontsty">请稍候.....</div>
    </div>
    <canvas id="pdf-canvas" v-show="ifPDF">
    </canvas>
  </div>
</template>

<script>
import $ from 'jquery'
import pdfImg from '@/assets/img/pdfGold.svg' // 跳转到pdf的图标
import htmImg from '@/assets/img/htmGold.png' // 返回互金首页图标
import PDFJS from 'pdfjs-dist'

export default {
  name: 'downloadPDF',
  props: ['pdfApi'],
  data () {
    return {
      ifPDF: false,
      srcURL: pdfImg,
      description: '查看PDF文件',
      scale: 1,
      pageNum: 1,
      pageNumShow: '',
      resData: null,
      pdf: {}
    }
  },
  methods: {
    enlarge: function () { // 缩放
      this.scale += 0.1
      this.showPDF()
    },
    letting: function () {
      this.scale -= 0.1
      this.showPDF()
    },
    prev: function () { // 翻页
      if (this.pageNum > 1) {
        this.pageNum -= 1
        this.showPDF()
      }
    },
    next: function () {
      if (this.pageNum < this.pdf.numPages) {
        this.pageNum += 1
        this.showPDF()
      }
    },
    jumpToPDF () {
      this.ifPDF = !this.ifPDF // 点击，改变显示状态
      this.$emit('pdfChanged', this.ifPDF)
      if (this.ifPDF) { // 改变pdf小图标内容
        this.srcURL = htmImg
        this.description = '返回互金首页'
        if (this.resData !== 'finished') {
          $('#loading').show()
          this.resData = 'finished'
        }
        this.downloadPDF()
      } else {
        this.srcURL = pdfImg
        this.description = '查看PDF文件'
        $('#loading').hide()
      }
    },
    downloadPDF () {
      let pdfData = null
      this.$http.get(this.pdfApi).then(res => {
        pdfData = atob(res.data)
        PDFJS.getDocument({data: pdfData}).then((pdf) => {
          this.pdf = pdf
          return this.pdf.getPage(1)
        }).then((page) => {
          $('#loading').hide()
          this.scale = $(window).width() / page.getViewport(1).width// 设置展示比例
          var viewport = page.getViewport(this.scale) // 获取pdf尺寸
          var canvas = document.getElementById('pdf-canvas') // 获取需要渲染的元素
          var context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          }
          this.pageNumShow = this.pageNum + '/ ' + this.pdf.numPages
          page.render(renderContext)
        })
      })
    },

    showPDF () {
      return this.pdf.getPage(this.pageNum).then((page) => {
        var viewport = page.getViewport(this.scale) // 获取pdf尺寸
        var canvas = document.getElementById('pdf-canvas') // 获取需要渲染的元素
        var context = canvas.getContext('2d')
        canvas.height = viewport.height
        canvas.width = viewport.width
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        }
        this.pageNumShow = this.pageNum + '/ ' + this.pdf.numPages
        page.render(renderContext)
      })
    }
  }
}
</script>

<style scoped>
  .pdfImg{
    vertical-align: middle;
    text-align: left;
    z-index: 300;
    height: 30px;
    width: 30px;
    margin: 0px 10px;
  }
  .pdfArrowImg{
    vertical-align: middle;
    z-index: 300;
    height: 20px;
    width: 15px;
    margin: 2px 10px;
  }
  .jumpToPDF{
    display: inline-block;
    vertical-align: middle;
  }
  .pdfButtons{
    display: inline-block;
    float: right;
    vertical-align: middle;
  }
  .normal{
    height: 90%;
    width: 100%;
    display: none;
    text-align:center
  }
  .downloadImg{
    height:50px;
    width:50px;
    margin-top:200px;
  }
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
