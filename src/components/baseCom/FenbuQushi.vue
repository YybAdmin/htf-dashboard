<template>
  <div class="divsty">
    <div v-bind:class="{'hide': ifHide}">
      <button class="normal btn-left normalrm" @click="changeTheme($event, 1,'manual')">分布</button>
      <button class="normal btn-right normalrm" @click="changeTheme($event, 2,'manual')">趋势</button>
    </div>
    <div class="normal2" v-bind:class="{'hide': !ifHide}">
      数据日期:<span>{{this.dataDate}}</span>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'FenbuQushi',
  data () {
    return {
      ifHide: false,
      dataDate: '9999-01-01'
    }
  },
  methods: {
    changeTheme (ev, i, flag) {
      var rmgrp = $(this.$el).find('button')
      $(rmgrp).each(function () {
        $(this).removeClass('selected')
      })
      ev.target.classList.add('selected')
      if (flag === 'manual') {
        this.$emit('comChanged', i)
      }
    },
    setData: function (ifHide, dataDate) {
      this.ifHide = ifHide
      this.dataDate = dataDate
    }
  },
  mounted () {
    $(this.$el.firstChild.firstChild).addClass('selected')
  }
}
</script>

<style scoped>
  .divsty{
    text-align: right;
  }
  .normal {
    background-color: white;
    color: #ddaf59;
    font-size: 12px;
    margin: 13px 0px 5px -6px;
    width: 50px;
    line-height: 25px;
    border: 1px solid #ddaf59;
    padding: 0px;
  }
  .normal2 {
    background-color: white;
    color: #333;
    font-size: 12px;
    margin: 15px 15px 5px 0px;
    line-height: 25px;
    padding: 0px;
  }
  .btn-left{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .btn-right{
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    margin-right: 15px;
  }
  .selected {
    color:white;
    background-color: #DDAF59;
    outline: none;
  }
  .hide{
    display: none;
  }
</style>
