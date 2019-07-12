<template>
  <div class="group">
    <div class="cards" v-for="(item,i) in itemList">
      <div class="split"></div>
      <div class="card">
        <div class="cardUp">
          <table>
            <tr>
              <td class="c1">{{item.name1}}</td>
              <td class="c2">{{item.name2}}</td>
              <td class="c3"><span class="btn lc">流出份额</span></td>
              <td class="cs"></td>
              <td class="c4"><span class="btn xk">新客/个人</span></td>
            </tr>
          </table>
        </div>
        <div class="cardMid">
          <div class="midL">
            <div class="v1">{{item.value1}}亿</div>
            <div class="v1D">当日异动</div>
          </div>
          <div><span cla="sx"> </span></div>
          <div class="midR">
            <div class="midRC">
              <div>近7天均值:<span class="v2">{{item.value2}}万</span></div>
              <div>近30天均值:<span class="v2">{{item.value3}}万</span></div>
            </div>
          </div>
        </div>
        <div class="cardDwn">
          <table style="border-top: 1px solid #EEEEEE">
            <tr>
              <td class="d1">上界:{{item.value4}}万</td>
              <td class="d2">下界:{{item.value5}}万</td>
              <td class="d3">波动率:{{item.value6}}%</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="split"></div>
  </div>
</template>

<script>
  export default {
    name: "dataCard",
    data() {
      return {
        itemList: [/*{
          name1: '腾讯',
          name2: '全额宝',
          value1: '10',
          value2: '3000',
          value3: '3000',
          value4: '5,000.89',
          value5: '1000.90',
          value6: '80'
        }, {
          name1: '无锡市民卡...',
          name2: '全额宝',
          value1: '10',
          value2: '3000',
          value3: '3000',
          value4: '5,000.89',
          value5: '1000.90',
          value6: '80'
        }*/]
      }
    }
  }
</script>

<style scoped lang="less">
  .group {
    .split{
      height: 15px;
      background: #f6f6f6;
    }
    .cards {
      background: #f6f6f6;

      .split {
        height: 15px;
      }

      .card {
        color: #999;
        background: white;
        margin: 0px 15px;
        border-radius: 8px;
        height: 129px;
        padding: 10px 15px 0px 15px;

        .cardUp {
          text-align: left;
          position: relative;
          height: 23px;
          table{
            width:100%;
            border-spacing: 0px;
            .c1 {
              color: #333;
              font-size: 15px;
              font-weight: 600;
              width: 40px;
              white-space: nowrap;
            }
            .c2 {
              font-size: 14px;
              text-align: center;
              border-left:1px solid #eee;
            }
            .c3{
              width:66px;
            }
            .cs{
              width:8px;
            }
            .c4{
              width:72px;
            }
            .btn {
              font-size: 12px;
              line-height: 12px;
              border: 1px solid;
              border-radius: 11px;
              padding: 3px 7px 3px 7px;
              height: 23px;
            }

            .lc {
              background: #ddaf59;
              border-color: #ddaf59;
              color: white;
            }

            .xk {
              border-color: #F1F0F1;
              right: 0px;
            }
          }
        }

        .cardMid {
          display: flex;
          flex-flow: row;
          height: 63px;

          .midL {
            width: 55%;

            .v1 {
              font-size: 18px;
              line-height: 18px;
              color: #009843;
              margin-top: 12px;
            }

            .v1D {
              font-size: 14px;
              line-height: 14px;
              margin-top: 8px;
            }
          }

          .midR {
            padding-top: 16px;
            paddint-bottom: 13px;
            width: 45%;
            font-size: 13px;

            .midRC {
              border-left: 1px solid #EEEEEE;
              padding-left: 16px;
              text-align: left;

              .v2 {
                float: right;
              }
            }
          }
        }

        .cardDwn {
          height: 32px;
          line-height: 32px;
          font-size: 12px;

          table{
            width:100%;
            border-spacing: 0px;
            table-layout: fixed;
            .d1 {
              text-align: left;
            }

            .d2 {
              text-align: center;
            }

            .d3 {
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>
