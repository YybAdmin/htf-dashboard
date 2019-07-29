<template>

  <div class="mui-content">
    <div class="mui-content-padded">
      <div class="ui-alert">自定义筛选时间</div>
      <table style="width: 100%;table-layout: auto;line-height: 44px;">
        <tr>
          <td style="width: 54px;"><img src="@/assets/img/yjy/pie.png"></td>
        </tr>
      </table>
      <div id='cityResult3' class="ui-alert">
        <button id='showCityPicker3' class="mui-btn mui-btn-block" type='button'>开始时间</button>
      </div>
      <div><img src="@/assets/img/yjy/dateto.png"></div>
      <div id='cityResult' class="ui-alert">
        <button id='showCityPicker' class="mui-btn mui-btn-block" type='button'>结束时间</button>
      </div>
      <div class="mui-btn-div">
        <button id='sumbit' class="mui-btn mui-btn-block" type='button'>完成</button>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome-mui/mui/dist/css/mui.css'
  import 'vue-awesome-mui/mui/plugin/picker/css/mui.picker.css'
  import 'vue-awesome-mui/mui/plugin/picker/css/mui.poppicker.css'
  import 'vue-awesome-mui/mui/plugin/picker/js/mui.picker'
  import 'vue-awesome-mui/mui/plugin/picker/js/mui.poppicker'
  export default {
    name: "datepicker",
    mounted() {
      let picker = new window.mui.PopPicker({
        layer: 3,
        buttons: ['cancle', 'ok']
      });
      let _getParam = function(obj, param) {
        return obj[param] || '';
      };
      //年月日
      let yearArray = new Array();
      for (let i = 0; i < 25; i ++) {
        let monthArray = new Array();
        for (let j = 0; j < 12; j ++) {
          //月的最后一天
          let year = i + 2016;
          let month = j;
          let lastDay = new Date(year, month + 1, 0).getDate();//month 要加1,原本month是从0开始的,但是因为0是这个月的上个月,所以到了上个月.
          if(year == 2016 && month == 1) {
            console.log("lastday" + lastDay);
          }
          let dayArray = new Array();
          for(let k = 0; k < lastDay; k ++) {
            let day = new Object();
            day.value = k + 1 + "日";
            day.text = k + 1 + "日";
            dayArray.push(day);
          }
          let monthObj = new Object();
          monthObj.children = dayArray;
          monthObj.value = j + 1 + "月";
          monthObj.text = j + 1 + "月";
          monthArray.push(monthObj);
        }
        let yearObj = new Object();
        yearObj.value = i + 2016 + "年" ;
        yearObj.text = i + 2016 + "年";
        yearObj.children = monthArray;
        yearArray.push(yearObj);
      };
      picker.setData(yearArray);

      let showUserPickerButton3 = document.getElementById('showCityPicker3');
      let showUserPickerButton = document.getElementById('showCityPicker');
      let userResult3 = document.getElementById('cityResult3');
      let userResult = document.getElementById('cityResult');
      showUserPickerButton.addEventListener('tap', function(event) {
        picker.show(function(items) {
          userResult.innerText =  "" + _getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
          // userResult.innerText = JSON.stringify(items[0]);
          //返回 false 可以阻止选择框的关闭
          //return false;
        });
      }, false);
      showUserPickerButton3.addEventListener('tap', function(event) {
        picker.show(function(items) {
          userResult3.innerText =  "" + _getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
          // userResult.innerText = JSON.stringify(items[0]);
          //返回 false 可以阻止选择框的关闭
          //return false;
        });
      }, false);
    }
  }
</script>

<style scoped>
  /*@import 'vue-awesome-mui/mui/plugin/picker/css/mui.picker.css'*/
  /*@import 'vue-awesome-mui/mui/plugin/picker/css/mui.poppicker.css'*/
  .mui-btn {
    .mui-btn-block {
      background-color: #DDAF59;
      color: #FFFFFF;
    }
  }
</style>
