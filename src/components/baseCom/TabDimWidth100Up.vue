<template>
    <div>
      <table class="tmpTable">
        <tr>
          <td class="normal normalrm" v-bind:key="item.id" v-for="(item, i) in list" @click="changeTheme($event ,i+1,'manual')">{{item.name}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'TabDimWidth100Up',
  props: ['itemList'],
  data () {
    return {
      list: this.itemList
    }
  },
  methods: {
    changeTheme (ev, i, flag) {
      var rmgrp = $(this.$el).find('td')
      $(rmgrp).each(function () {
        $(this).removeClass('selected')
      })
      ev.target.classList.add('selected')
      if (flag === 'manual') {
        this.$emit('comChanged', i)
      }
    }
  },
  mounted () {
    $(this.$el.firstChild.firstChild.firstChild).addClass('selected')
  }
}
</script>

<style scoped>
  .tmpTable{
    width:100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
  .normal {
    font-size: 12px;
    font-weight: 400;
    color:  #999;
    line-height: 34px;
    text-align: center;
    border-bottom: 1px solid #EEE;
    background-color: #FAFAFA;
  }
  .selected {
    color:#DDAF59;
    position: relative;
    border-bottom: 1px solid #DDAF59;
    background-color: white;
  }
</style>
