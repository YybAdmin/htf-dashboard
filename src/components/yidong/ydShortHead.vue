<template>
    <div class="backsty">
      <table style="width: 100%;height: 41px;">
        <tr>
          <td style="text-align: left;width: 20%;">
            <span class="fenesp">流出份额</span>
          </td>
          <td style="text-align: left;width: 20%;">
            <span class="personsp">新客/个人</span>
          </td>
          <td style="text-align: right">
            <span style="font-size: 12px;color: #FFFFFF;margin-right: 15px;">当日异动：
              <font style="font-size: 15px;font-weight: bold;">{{result}}</font><font style="font-size: 15px;">万</font></span>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
  export default {
    name: "ydShortHead",
    props:['dataday'],
    data(){
      return{
        result:this.dataday
      }
    }
  }
</script>

<style scoped>
  .backsty{
    height: 41px;
    background: url("../../assets/img/yd/ydbackground.png") no-repeat center;
    background-size: 100% 100%;
    opacity: 1;
  }
  .fenesp{
    width: 73px;
    font-size: 13px;
    color: #DB902F;
    line-height: 13px;
    font-weight: bold;
    display: inline-block;
    border: 1px solid white;
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 6px 8px 4px 8px;
    margin-left: 15px;
    margin-top: 3px;
    display: block;
  }
  .personsp{
    width: 79px;
    font-size: 13px;
    color: #FFFFFF;
    line-height: 13px;
    display: inline-block;
    border: 1px solid white;
    border-radius: 12px;
    padding: 6px 8px 4px 8px;
    margin-left: 10px;
    margin-top: 3px;
  }
</style>
