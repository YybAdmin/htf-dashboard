<template>
  <div class="tmpDiv">
    <table class="tmpTable">
      <tr>
        <td class="normal normalrm" v-bind:key="item.index" v-for="(item,i) in list" @click="changeTheme($event , i+1,'manual')">
          {{item.name}}
        </td>
      </tr>
    </table>
    <DivSplit/>
  </div>
</template>

<script>
import $ from 'jquery'
import DivSplit from '@/components/baseCom/DivSplit'

export default {
  name: 'normal',
  components: {DivSplit},
  props: ['itemList'],
  data () {
    return {
      list: this.itemList
    }
  },
  methods: {
    changeTheme (ev, i, flag) {
      var datav = ev.target.attributes[0].name
      var comRm = '.normalrm[' + datav + ']'
      $(comRm).removeClass('selected')
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
  .tmpDiv {
    text-align: center;
    border-bottom: 1px solid  #F3F3F3;
  }
  .tmpTable {
    width: 100%;
    table-layout: fixed;
  }
  .normal {
    font-size: 16px;
    font-weight: 400;
    color:  #333333;
    line-height: 40px;
    text-align: center;
    margin-right:10px;
  }
  .selected {
    color:#DDAF59;
    position: relative;
  }
  .selected:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 3px;
    left: 45%;
    bottom: 3px;
    background-color: #DDAF59;
    border-radius:2px;
  }
</style>
