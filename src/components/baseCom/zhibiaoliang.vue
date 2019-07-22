<template>
    <div class="container">
      <div>
        <table>
          <tr>
            <td><img src="@/assets/img/zhibiao/zhibiao1.png" class="imgs"></td>
            <td><img src="@/assets/img/zhibiao/zhibiao2.png" class="imgs"></td>
            <td><img src="@/assets/img/zhibiao/zhibiao3.png" class="imgs"></td>
          </tr>
          <tr>
            <td class="text-aqua">365</td>
            <td class="text-aqua">80</td>
            <td class="text-aqua">35</td>
          </tr>
          <tr>
            <td class="text-14">指标总数</td>
            <td class="text-14">未确认指标总数</td>
            <td class="text-14">未更新指标数</td>
          </tr>
          <tr>
            <td>
            <Help></Help>
            </td>
            <td class="text-12">未确认比率:15%</td>
            <td class="text-12">未确认比率:15%</td>
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
                msg: "I'm so good!", p1: "ding  luck"
            }
        }
    }
</script>
<style scoped lang="less">

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

  td {
    font-weight: 400;
    line-height: 34px;
    text-align: center;
  }
  }
  .imgs {
    margin-top: 12px;
  }
  .text-aqua {
    font-size: 20px;
    color: #333333;
  }
  .text-14 {
    font-size: 14px;
    color: #333333;

  }
  .text-12 {
    font-size: 12px;
    color: #DDAF59;
    margin-bottom: 15px;
  }

</style>
