<template>
    <div>
      <table style="width: 100%;height:100px;text-align: center;border: 15px solid #F6F6F6;margin-top: 10px;">
        <tr>
          <td>
            <table>
              <tr>
                <td colspan="3">
                  <table style="table-layout: fixed;width: 100%;">
                    <tr>
                      <td style="font-size: 15px;color: #333333;font-weight: bold">腾讯</td>
                      <td style="font-size: 14px;color: #999999;">余额宝</td>
                    </tr>
                  </table>
                </td>
                <td colspan="3">
                  <table style="table-layout: fixed;width: 100%;">
                    <tr>
                      <td><button style="border: none;background-color: #DDAF59;color: #FFFFFF;font-size: 12px;border-radius: 21px;padding: 3px 9px 4px 9px;">流出份额</button></td>
                      <td style="font-size: 12px;color: #666666">新客/个人</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <span style="color: #009843;font-size: 18px;font-weight: bold">10亿</span><br/>
                  <span style="color: #999999;font-size: 14px;">当日异动</span>
                </td>
                <td colspan="3">
                  <span style="color: #999999;font-size: 12px;">近七天</span>
                </td>
              </tr>
            </table>

          </td>
        </tr>

      </table>
    </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "tablist",
    data(){
      return{

      }
    }

  }
</script>

<style scoped>

</style>
