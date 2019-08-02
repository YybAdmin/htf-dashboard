<template>
  <div class="group">
    <div class="content">
      <div class="title">
        <span class="leaf1"></span>
        <span class="leaf2"></span>
        <span>{{this.title}}</span>
        <span class="leaf3"></span>
        <span class="leaf4"></span>
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
      <div v-show="gengduo" class="footer" @click="gengduoEvent()">更多></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "rankList",
    props: ["title"],
    data() {
      return {
        gengduo: false,
        itemList: []
      }
    },
    methods: {
      setData(data) {
        if (data.length > 10) {
          this.gengduo = true
        } else {
          this.gengduo = false
        }
        this.itemList = data.slice(0, 10)
      },
      gengduoEvent: function () {
        this.$emit('comChanged', 'gengduo')
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
        display: inline-block;
      }

      .leaf2 {
        border: 7px solid #ddaf59;
        border-radius: 0px 12px;
        transform: rotate(20deg);
        margin-left: -14px;
        display: inline-block;
      }

      .leaf3 {
        border: 7px solid #ddaf59;
        border-radius: 0px 12px;
        transform: rotate(70deg);
        margin-right: -14px;
        display: inline-block;
      }

      .leaf4 {
        border: 7px solid #E8C990;
        border-radius: 0px 12px;
        transform: rotate(120deg);
        margin-bottom: -5px;
        display: inline-block;
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

      .footer {
        font-size: 14px;
        color: #ddaf59;
        line-height: 43px;
      }
    }
  }
</style>
