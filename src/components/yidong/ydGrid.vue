<template>
  <div CLASS="group">
    <span class="title">近30天数据</span>
    <table>
      <thead>
      <tr>
        <td>{{title[0]}}</td>
        <td style="width:80px;">
          <BtnOrder :item="c2Title" @comChanged="dataSort($event,'f_order')"></BtnOrder>
        </td>
        <td>{{title[2]}}</td>
        <td>{{title[3]}}</td>
      </tr>
      </thead>
      <tbody id="mygrid" style="font-size: 13px;color: #666666;border: none">
      <tr v-for="(row,index) in gridData" :class="[index%2===1?'bk':'']">
        <td>{{row.NAME}}</td>
        <td>{{row.VALUE1}}</td>
        <td>{{row.VALUE1}}</td>
        <td>{{row.VALUE1}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import BtnOrder from '@/components/baseCom/BtnOrder1'

  export default {
    name: "ydGrid",
    components: {BtnOrder},
    data() {
      return {
        title: ['日期','流出份额','近7天均值(万元)','近30天均值(万元)'],
        c2Title: {name: '流出份额', value: 1},
        gridData: []
      }
    },
    methods: {
      setData: function (data) {
        // 默认升序
        this.gridData = data.sort(function (a, b) {
          return a.VALUE1 - b.VALUE1
        })
      },
      dataSort: function (val,flag) {
        console.log(val)
        if(val==='desc'){
          this.gridData.sort(function (a, b) {
            return parseFloat(b.VALUE1) - parseFloat(a.VALUE1)
          })
        }else if(val==='asc'){
          this.gridData.sort(function (a, b) {
            return parseFloat(a.VALUE1) - parseFloat(b.VALUE1)
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .group {

    .title {
      font-size: 15px;
      color: #333333;
      font-weight: bold;
      line-height: 35px;
      text-align: left;
      display: inherit;

      &:before {
        content: " ";
        display: inline-block;
        width: 2px;
        height: 17px;
        margin: 3px 10px;
        background-color: #DDAF59;
        vertical-align: middle;
        border-radius: 1px;
      }
    }

    table {
      width: 100%;
      margin: 0px 0px;
      border-collapse: collapse;

      thead {
        font-size: 13px;
        line-height: 34px;
        background: #F8F7F4;
      }

      tbody {
        font-size: 12px;
        line-height: 40px;

        .bk {
          background: #F8F7F4;
        }
      }

      td {
        border: 1px solid #e5e5e5;
      }
    }
  }
</style>
