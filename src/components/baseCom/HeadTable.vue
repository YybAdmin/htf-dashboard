<template>
  <div class="tmpDiv">
    <div class="titleDiv">
      <span class="normal">{{title}}</span>
    </div>
    <table class="tmpTable">
      <tr>
        <td>
          <div><span>{{this.data[0].VALUE1}}</span><span>{{this.itemList[0].unit}}</span><br/><span>{{this.itemList[0].name}}</span></div>
        </td>
        <td>
          <div><span>{{this.data[0].VALUE2}}</span><span>{{this.itemList[1].unit}}</span><br/><span>{{this.itemList[1].name}}</span></div>
        </td>
        <td>
          <div><span>{{this.data[0].VALUE3}}</span><span>{{this.itemList[2].unit}}</span><br/><span>{{this.itemList[2].name}}</span></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import DivSplit from '@/components/baseCom/DivSplit'
export default {
  name: 'HeadTable',
  props: ['itemList'],
  components: {DivSplit},
  data () {
    return {
      title: '业绩汇总 (本年度)',
      data: [{VALUE1: '--', VALUE2: '--', VALUE3: '--'}]
    }
  },
  methods: {
    setData (data) {
      this.data = data
    }
  }
}
</script>

<style scoped>
  .tmpDiv {
    margin-top:15px;
    margin-bottom: 10px;
  }
  .titleDiv{
    height:30px;
    text-align: left;
    margin-bottom: 10px;
  }
  .tmpTable {
    width: 100%;
    table-layout: fixed;
  }
  .normal {
    line-height: 30px;
    font-size: 15px;
    color: #DDAF59;
    background:rgba(254,247,233,1);
    border-radius:0px 100px 100px 0px;
    padding:3px 10px 3px 10px;
  }
  .tmpTable{
    width: 100%;
    table-layout: fixed;
    border-spacing: unset;
    text-align: center;
    color: #333;
  }
  .tmpTable tr {
    height:64px;
  }
  .tmpTable tr div{
    height:50px;
    vertical-align: middle;
  }
  .tmpTable tr td:nth-of-type(1) div{
    border-right:1px solid #EEE;
  }
  .tmpTable tr td:nth-of-type(2) div{
    border-right:1px solid #EEE;
  }
  .tmpTable tr td div span:nth-of-type(1){
    font-size: 16px;
  }
  .tmpTable tr td div span:nth-of-type(2){
    font-size: 14px;
  }
  .tmpTable tr td div span:nth-of-type(3){
    font-size: 13px;
    color: #999;
  }
</style>
