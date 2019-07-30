<template>
  <div style="overflow-y: hidden;">
    <div class="ui-alert">自定义筛选时间</div>
    <img src="@/assets/img/yjy/pie.png">
    <div id='startDateBtn' class="ui-alert">
      <button id='startDate' class="mui-btn mui-btn-block" type='button'>开始时间</button>
    </div>
    <div><img src="@/assets/img/yjy/dateto.png"></div>
    <div id='endDateBtn' class="ui-alert">
      <button id='endDate' class="mui-btn mui-btn-block" type='button'>结束时间</button>
    </div>
    <div class="mui-btn-div">
      <button id='sumbit' class="mui-btn mui-btn-block" type='button'>完成</button>
    </div>
  </div>
</template>

<script>
  import '../../assets/mui/css/mui.css'
  import '../../assets/mui/css/mui.picker.css'
  import '../../assets/mui/css/mui.poppicker.css'
  import 'vue-awesome-mui/mui/plugin/picker/js/mui.picker'
  import 'vue-awesome-mui/mui/plugin/picker/js/mui.poppicker'

  export default {
    name: "datepicker",
    mounted() {
      let _this = this
      let picker = new window.mui.PopPicker({
        layer: 3,
        buttons: ['cancle', 'ok']
      });
      let _getParam = function (obj, param) {
        return obj[param] || '';
      };
      //年月日
      let yearArray = new Array();
      for (let i = 0; i < 25; i++) {
        let monthArray = new Array();
        for (let j = 0; j < 12; j++) {
          //月的最后一天
          let year = i + 2016;
          let month = j;
          let lastDay = new Date(year, month + 1, 0).getDate();
          let dayArray = new Array();
          for (let k = 0; k < lastDay; k++) {
            let day = new Object();
            day.value = k + 1;
            day.text = k + 1 + "日";
            dayArray.push(day);
          }
          let monthObj = new Object();
          monthObj.children = dayArray;
          monthObj.value = j + 1;
          monthObj.text = j + 1 + "月";
          monthArray.push(monthObj);
        }
        let yearObj = new Object();
        yearObj.value = i + 2016;
        yearObj.text = i + 2016 + "年";
        yearObj.children = monthArray;
        yearArray.push(yearObj);
      }
      ;
      picker.setData(yearArray);

      let startBtn = document.getElementById('startDate');
      let endBtn = document.getElementById('endDate');
      let userResult3 = document.getElementById('startDateBtn');
      let userResult = document.getElementById('endDateBtn');
      endBtn.addEventListener('tap', function (event) {
        picker.show(function (items) {
          userResult.innerText = "" + _getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
          console.log(items)
          //return false;
        });
      }, false);
      startBtn.addEventListener('tap', function (event) {
        picker.show(function (items) {
          userResult3.innerText = "" + _getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
          console.log(items)
          //return false;
        });
      }, false);

    }
  }
</script>

<style scoped lang="less">
  .mui-btn-block {
    background-color: #DDAF59;
    color: #FFFFFF;
  }
</style>
