<template>
  <div class="group">
    <div class="lvhead">
      <table>
        <tr @click="toggleDiv()">
          <td id="td1">异动敏感度</td>
          <td id="lv" class="lvsty">高</td>
          <td><span class="spsty"></span></td>
        </tr>
      </table>
    </div>
    <div id="lvTab" style="display: none">
      <div id="op">
        <div id="opc1" class="opc" @click="choseLv($event,1)">高</div>
        <div id="opc2" class="opc" @click="choseLv($event,2)">中</div>
        <div id="opc3" class="opc" @click="choseLv($event,3)">低</div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "selectDwn",
    props: {},
    methods: {
      toggleDiv: function () {
        $("#lvTab").toggle()
      },
      choseLv: function (e, i) {
        $("#lvTab").hide()
        if (i == 1) {
          $("#lv").text("高").css('color', '#F4333C')
        } else if (i == 2) {
          $("#lv").text("中").css('color', '#FBC25C')
        } else if (i == 3) {
          $("#lv").text("低").css('color', '#88D2FF')
        }
        this.$emit('comChanged', i + 1)
      }
    }
  }
</script>

<style scoped lang="less">
  .group {
    .lvhead {
      #td1 {
        color: #999999;
        font-size: 13px;
        text-align: right;
        width: 112px;
      }

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
    }

    #lvTab {
      position: fixed;
      right: 10px;
      width: 71px;
      height: 126px;
      line-height: 43px;
      top: 5%;
      z-index: 10;
      border: 1px solid #FFFFFF;
      box-shadow: #DDDDDD 2px 2px 2px 2px;
      border-radius: 5px;
      background-color: white;

      #op {
        .opc {
          border-bottom: 1px solid #EEE;
        }

        #opc1 {
          color: #F4333C;
        }

        #opc2 {
          color: #FBC25C;
        }

        #opc3 {
          color: #88D2FF;
        }
      }
    }
  }

</style>
