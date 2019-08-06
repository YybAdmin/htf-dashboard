<template>
  <div class="group">
    <div class="cards" v-for="(item,i) in itemList">
      <div class="split"></div>
      <div class="card">
        <div class="cardUp">
          <table>
            <tr>
              <td class="c1">{{item.NAME1}}</td>
              <td class="c2">{{item.NAME2.length>6?(item.NAME2.substring(0,5)+'..'):item.NAME2}}</td>
              <td class="c3"><span class="btn lc">{{pageVal.target == 1?(item.TRADETYPE==1?'流入金额':'流出金额'):
                (pageVal.target == 2?(item.TRADETYPE==1?'流入份额':'流出份额'):(item.TRADETYPE==1?'流入笔数':'流出笔数'))}}</span></td>
              <td class="cs"></td>
              <td class="c4"><span class="btn xk">{{item.NAME3==0?'老客':'新客'}}/{{item.NAME4==0?'个人':'机构'}}</span></td>
            </tr>
          </table>
        </div>
        <div class="cardMid">
          <div class="midL" @click="goDetail(item)">
            <div class="v1">{{item.VALUE1}}万</div>
            <div class="v1D">当日异动</div>
          </div>
          <div><span cla="sx"> </span></div>
          <div class="midR">
            <div class="midRC">
              <div>近7天均值:<span class="v2">{{item.VALUE2}}万</span></div>
              <div>近30天均值:<span class="v2">{{item.VALUE3}}万</span></div>
            </div>
          </div>
        </div>
        <div class="cardDwn">
          <table style="border-top: 1px solid #EEEEEE">
            <tr>
              <td class="d1">上界:{{item.VALUE4}}万</td>
              <td class="d2">下界:{{item.VALUE5}}万</td>
              <td class="d3">波动率:{{item.VALUE6}}%</td>
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
          NAME1: '腾讯',
          NAME2: '全额宝',
          VALUE1 '10',
          VALUE2: '3000',
          VALUE3 '3000',
          VALUE4: '5,000.89',
          VALUE5: '1000.90',
          VALUE6: '80'
        }*/],
        pageVal: this.$parent.pageVal
      }
    },
    methods:{
      setData:function (list) {
        this.itemList = list
      },
      goDetail:function (item) {
        let pageVal = this.$parent.pageVal
        pageVal['tradetype'] = item.TRADETYPE
        this.$router.push({path:"/ydDetail",query:{pageVal:pageVal,item:item}})
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
        padding: 10px 10px 0px 10px;

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
              font-size: 12px;
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
              color:#77B9FF;
              line-height: 12px;
              border: 1px solid #77B9FF;
              border-radius: 11px;
              padding: 3px 7px 3px 7px;
              height: 23px;
            }
            .xk {
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
