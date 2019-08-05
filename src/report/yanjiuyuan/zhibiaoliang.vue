<template>
    <div class="container">
      <div>
        <table>
          <tr class="imgtd">
            <td><img src="@/assets/img/zhibiao/zhibiao1.png"></td>
            <td><img src="@/assets/img/zhibiao/zhibiao2.png"></td>
            <td><img src="@/assets/img/zhibiao/zhibiao3.png"></td>
          </tr>
          <tr class="text-aqua">
            <td>{{data.indicatorTotal}}</td>
            <td>{{data.unConfirm}}</td>
            <td>{{data.unUpdateNum}}</td>
          </tr>
          <tr class="text-14">
            <td>指标总数</td>
            <td>未确认指标总数</td>
            <td>未更新指标数</td>
          </tr>
          <tr class="text-12">
            <td>
            </td>
            <td><span>未确认比率:{{(data.unConfirm/data.autoResourceNum*100).toFixed(0)}}%</span></td>
            <td><span>未确认比率:{{(data.unUpdateNum/data.manualResourceNum*100).toFixed(0)}}%</span></td>
          </tr>
        </table>
      </div>
    </div>
</template>
<script>
  import Help from '@/components/baseCom/Help'
    export default {
        name: 'zhibiaokuang',
        components:{Help},
        data() {
            return {
                msg: "I'm so good!", p1: "ding  luck",
                data: []
            }
        },
       methods: {
          setData: function (res) {
            this.data = res
          }
       }
    }
</script>
<style scoped lang="less">
  .container{
    table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      margin-top:8px;
      text-align: center;
      .imgtd{
        line-height:36px;
        img{
          vertical-align: middle;
        }
      }
      .text-aqua {
        font-size: 20px;
        line-height:28px;
        color: #333333;
        font-weight: 600;
      }
      .text-14 {
        font-size: 14px;
        color: #333333;
        line-height:20px;
      }
      .text-12 {
        font-size: 12px;
        line-height:32px;
        color: #DDAF59;
        margin-bottom: 9px;
        span{
          background-color: rgba(249,242,229,1);
          padding:3px 7px;
          border-radius: 10px;
        }
      }
    }
  }

</style>
