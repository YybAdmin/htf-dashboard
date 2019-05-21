<template>
  <div>
    <table class="tmpTable">
      <tr>
        <td>
          <span class="num">{{this.headData[0].VALUE1}}</span><br/>
          <span class="des">{{this.list[0].name}}</span>
        </td>
        <td>
          <span class="num">{{this.headData[0].VALUE2}}</span><br/>
          <span class="des">{{this.list[1].name}}</span>
        </td>
      </tr>
    </table>
    <DivSplit/>
  </div>
</template>

<script>
import DivSplit from '@/components/baseCom/DivSplit'
export default {
  name: 'HeadTableNoTitle',
  components: {DivSplit},
  props: ['itemList'],
  data () {
    return {
      list: this.itemList,
      headData: [{VALUE1: '--', VALUE2: '--'}]
    }
  },
  methods: {
    setData: function (val1, val2, list) {
      this.headData[0].VALUE1 = val1
      this.headData[0].VALUE2 = val2
      this.list = list
    }
  }
}
</script>

<style scoped>
  .tmpTable {
    width: 100%;
    table-layout: fixed;
    border-spacing: inherit;
    border-collapse: collapse;
    margin-top:-1px;
  }
  .tmpTable tr{
    height: 50px;
    width: 100%;
    table-layout: fixed;
  }
  .tmpTable tr td{
    width: 100%;
    table-layout: fixed;
    border-right:1px solid #EEE;
    border-top:1px solid #EEE;
  }
  .num {
    font-size: 15px;
    color: #333;
    text-align: right;
    width: 21%;
  }
  .des {
    font-size: 12px;
    color: #999;
    text-align: center;
    vertical-align: middle;
  }
</style>
