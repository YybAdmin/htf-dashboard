<template>
  <div class="group">
    <div class="ui-alert">自定义筛选时间</div>
    <img src="@/assets/img/yjy/pie.png">
    <div class="textDiv">
      <div id='startDate' class="text" style="width: 40%;line-height:40px;">
        <div>{{startDate[0].text}}</div>
        <div>{{startDate[1].text}}{{startDate[2].text}}</div>
      </div>
      <div style="width: 20%"><img src="@/assets/img/yjy/dateto.png" style="margin-top:40%;width:22px;"></div>
      <div id='endDate' class="text" style="width: 40%;line-height:40px ;">
        <div>{{endDate[0].text}}</div>
        <div>{{endDate[1].text}}{{endDate[2].text}}</div>
      </div>
    </div>
    <div class="btnDiv">
      <button @click="subMit" class="btn">完成</button>
    </div>
    <img src="@/assets/img/yjy/pieno.svg">
    <div>{{message}}</div>
    <img src="@/assets/img/yjy/pieno.svg">
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
    data() {
      return {
        message:'',
        startDate: [{text: '--', value: ''}, {text: '--', value: ''}, {text: '--', value: ''}],
        endDate: [{text: '--', value: ''}, {text: '--', value: ''}, {text: '--', value: ''}]
      }
    },
    methods: {
      subMit: function () {
        let _this = this
        this.$parent.pageVal.dateType = 'other'
        let _year = this.startDate[0].value
        let _month = this.startDate[1].value.length === 1 ? '0' + this.startDate[1].value : this.startDate[1].value
        let _day = this.startDate[2].value.length === 1 ? '0' + this.startDate[2].value : this.startDate[2].value
        let year = this.endDate[0].value
        let month = this.endDate[1].value.length === 1 ? '0' + this.endDate[1].value : this.endDate[1].value
        let day = this.endDate[2].value.length === 1 ? '0' + this.endDate[2].value : this.endDate[2].value
        if(new Date(_year + '/' + _month + '/' + _day) < new Date(year + '/' + month + '/' + day)){
          this.$parent.pageVal.startDate = this.startDate
          this.$parent.pageVal.endDate = this.endDate
          this.$parent.pageVal.s_date = _year + '-' + _month + '-' + _day
          this.$parent.pageVal.e_date = year + '-' + month + '-' + day
          this.$parent.dengdai = false
          this.message = ""
          this.$parent.mainShow = true
          this.$parent.datePickerShow = false
        }else{
          this.message = "结束时间不能小于起始时间"
          return false
        }
      },
      initDate: function () {
        let nowDate = new Date();
        let num = nowDate.getTime() - 30 * 24 * 60 * 60 * 1000
        let lastMonthDate = new Date()
        lastMonthDate.setTime(num)
        this.startDate[0].value = lastMonthDate.getFullYear().toString()
        this.startDate[1].value = (lastMonthDate.getMonth() + 1).toString()
        this.startDate[2].value = lastMonthDate.getDate().toString()
        this.startDate[0].text = lastMonthDate.getFullYear() + '年'
        this.startDate[1].text = lastMonthDate.getMonth() + 1 + '月'
        this.startDate[2].text = lastMonthDate.getDate() + '日'
        this.endDate[0].value = nowDate.getFullYear().toString()
        this.endDate[1].value = (nowDate.getMonth() + 1).toString()
        this.endDate[2].value = nowDate.getDate().toString()
        this.endDate[0].text = nowDate.getFullYear() + '年'
        this.endDate[1].text = nowDate.getMonth() + 1 + '月'
        this.endDate[2].text = nowDate.getDate() + '日'
      }
    },
    mounted() {
      this.initDate()
      let _this = this
      let picker = new window.mui.PopPicker({
        layer: 3,
        buttons: ['取消', '确认']
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
      startBtn.addEventListener('tap', function (event) {
        picker.show(function (items) {
          _this.startDate = items
        });
      }, false);
      endBtn.addEventListener('tap', function (event) {
        picker.show(function (items) {
          _this.endDate = items
        });
      }, false);
    }
  }
</script>

<style scoped lang="less">
  .group {
    overflow-y: hidden;
    background: #FAF4EB;
    padding: 15px;

    img {
      width: 95%;
    }

    .textDiv {
      display: flex;
      flex-flow: row;
      height: 123px;
      background-color: white;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      padding: 20px 0px 0px;

      .text {
        font-size: 22px;
        color: #000;
      }
    }

    .btnDiv {
      height: 74px;
      background-color: white;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;

      .btn {
        background-color: #DDAF59;
        color: #FFFFFF;
        width: 80%;
        height: 44px;
        display: inline-block;
        margin-top: 20px;
        border-radius: 4px;
      }
    }
  }
</style>
