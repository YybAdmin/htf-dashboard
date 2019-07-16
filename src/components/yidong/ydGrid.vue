<template>
  <div CLASS="group">
    <span class="title">近30天数据</span>
    <table>
      <thead>
      <tr>
        <td>{{title[0]}}</td>
        <td @click="dataSort">{{title[1]}}</td>
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
  export default {
    name: "ydGrid",
    props: ['title'],
    data() {
      return {
        gridTitle: this.title,
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
      dataSort: function (data) {
        this.gridData.sort(function (a, b) {
          return a.VALUE1 - b.VALUE1
        })
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
