<template>
  <div class="group">
    <div class="content">
      <div class="title">
        <span class="leaf1" style="display:inline-flex;"></span>
        <span class="leaf2" style="display:inline-flex;"></span>
        <span style="display:inline-flex;">{{this.title}}</span>
        <span class="leaf3" style="display:inline-flex;"></span>
        <span class="leaf4" style="display:inline-flex;"></span>
      </div>
      <table>
        <tr v-for="(item,i) in itemList"
            :key="i">
          <td v-if="i===0"><img src="@/assets/img/yjy/rank1.svg"></td>
          <td v-if="i===1"><img src="@/assets/img/yjy/rank2.svg"></td>
          <td v-if="i===2"><img src="@/assets/img/yjy/rank3.svg"></td>
          <td v-if="i>=3">{{i+1}}</td>
          <td><img style="height:40px;width:40px;border-radius: 20px;" src="@/assets/img/yjy/tx.jpg"></td>
          <td style="text-align: left;">{{item.NAME}}</td>
          <td style="width:50%;text-align: right;">{{item.VALUE}}</td>
        </tr>
      </table>
      <div class="footer" @click="gengduoEvent()">更多></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "rankList",
    props: ["title"],
    data() {
      return {
        itemList: [
          {RANK: '1', PHOTO: '', NAME: '蔡志文', VALUE: '888'},
          {RANK: '2', PHOTO: '', NAME: '卞正', VALUE: '777'},
          {RANK: '3', PHOTO: '', NAME: '陈潇杨', VALUE: '666'},
          {RANK: '4', PHOTO: '', NAME: '崔文琦', VALUE: '555'},
          {RANK: '5', PHOTO: '', NAME: '董超', VALUE: '445'},
          {RANK: '6', PHOTO: '', NAME: '付鹏飞', VALUE: '444'},
          {RANK: '7', PHOTO: '', NAME: '韩超', VALUE: '333'},
          {RANK: '8', PHOTO: '', NAME: '何往', VALUE: '323'},
          {RANK: '9', PHOTO: '', NAME: '黄耀锋', VALUE: '322'},
          {RANK: '10', PHOTO: '', NAME: '劳杰男', VALUE: '222'}
        ]
      }
    },
    methods:{
      gengduoEvent:function () {
        this.$emit('comChanged','gengduo')
      },
      setData: function (data) {
        this.itemList = data
      }
    }
  }
</script>

<style scoped lang="less">
  .group {
    background-color: #F6F6F6;
    padding: 15px;

    .content {
      background-color: #FFFFFF;
      padding: 0px 15px;

      .leaf1 {
        border: 7px solid #E8C990;
        border-radius: 0px 12px;
        transform: rotate(-10deg);
        margin-bottom: -5px;
      }

      .leaf2 {
        border: 7px solid #ddaf59;
        border-radius: 0px 12px;
        transform: rotate(30deg);
        margin-left: -14px;
      }

      .leaf3 {
        border: 7px solid #ddaf59;
        border-radius: 0px 12px;
        transform: rotate(70deg);
        margin-right: -14px;
      }

      .leaf4 {
        border: 7px solid #E8C990;
        border-radius: 0px 12px;
        transform: rotate(120deg);
        margin-bottom: -5px;
      }

      .title {
        font-size: 17px;
        color: #DDAF59;
        padding-top: 20px;
        margin-bottom: 20px;
        line-height: 19px;
      }

      table {
        width: 100%;
        font-size: 16px;
        color: #000;
        line-height: 51px;
        border-spacing: inherit;
        border-collapse: collapse;
        padding: 0px;

        tr {
          td {
            border-bottom: 1px solid #eee;

            img {
              vertical-align: middle;
            }
          }
        }
      }
      .footer{
        font-size: 14px;
        color: #ddaf59;
        line-height:43px;
      }
    }
  }
</style>
