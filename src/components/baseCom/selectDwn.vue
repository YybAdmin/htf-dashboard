<template>
  <div class="group">
    <div class="lvhead">
      <table>
        <tr @click="choseLv($event,0)">
          <td style="color: #999999;font-size: 13px;text-align:right;width: 112px;">异动敏感度</td>
          <td><span id="lv" class="lvsty">高</span></td>
          <td><span class="spsty"></span></td>
        </tr>
      </table>
    </div>
    <div id="lvTab" class="lvDivsty" style="display: none">
      <table class="tabsty">
        <tr>
          <td @click="choseLv($event,1)">高</td>
        </tr>
        <tr>
          <td @click="choseLv($event,2)">中</td>
        </tr>
        <tr>
          <td @click="choseLv($event,3)">低</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "selectDwn",
    methods: {
      choseLv: function (e,i) {
        if (i == 0) {
          $("#lvTab").show()
        } else if (i == 1) {
          $("#lvTab").hide()
          $("#lv").text(e.currentTarget.innerHTML)
          $("#lv").css('color', '#F4333C')
        } else if (i == 2) {
          $("#lvTab").hide()
          $("#lv").text(e.currentTarget.innerHTML)
          $("#lv").css('color', '#FBC25C')
        } else if (i == 3) {
          $("#lvTab").hide()
          $("#lv").text(e.currentTarget.innerHTML)
          $("#lv").css('color', '#88D2FF')
        }
        this.$emit('comChanged', i + 1)
      }
    }
  }
</script>

<style scoped lang="less">
  .lvsty {
    color: #F4333C;
    font-size: 13px;
    margin-left: 7px;
  }

  .spsty {
    width: 0;
    height: 0;
    border-bottom: 4px solid #999999;
    border-left: 4px solid transparent;
    margin-top: 10px;
    display: block;
    margin-right: 5px;
  }

  .lvDivsty {
    position: fixed;
    right: 10px;
    width: 71px;
    height: 126px;
    top: 5%;
    z-index: 10
  }

  .tabsty {
    width: 71px;
    height: 126px;
    border: 1px solid #FFFFFF;
    box-shadow: #DDDDDD 2px 2px 2px 2px;
    border-radius: 5px;
    background-color: white
  }
</style>
