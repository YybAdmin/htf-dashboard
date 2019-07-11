<template>
  <div>
    <title>渠道异动监控</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <div style="background: white;width: 100%;">
      <table style="width: 100%;line-height: 44px;">
        <tr>
          <td>
            <div>
              <input id="tags" type="text" class="inputsty"
                     placeholder="渠道名称/产品名称/产品代码" autofocus="autofocus"></input>
            </div>
          </td>
          <td style="color: #999999;font-size: 13px;text-align:right;width: 112px;" @click="choseLv($event,0)">异动敏感度<span id="lv" class="lvsty">高</span></td>
          <td><span class="spsty"></span></td>
        </tr>
      </table>
    </div>
    <div style="margin-bottom: 10px;">
      <table style="width: 100%;table-layout: fixed">
        <tr>
          <td style="width: 82px;text-align: right;font-weight: 400">异动频度:</td>
          <td>
            <div>
              <swiperOvalNoAll style="margin-left: -25px;" ref="ydPinDu" @comChanged="changePageState($event,'f_pindu')" v-bind:itemList="comName.pinDu"></swiperOvalNoAll>
            </div>
          </td>
        </tr>
        <tr>
          <td style="width: 82px;text-align: right;font-weight: 400">产品类型:</td>
          <td>
            <div>
              <swiperOval ref="proType" @comChanged="changePageState($event,'f_protype')" v-bind:itemList="comName.proType" v-bind:slidesPerView="4"></swiperOval>
            </div>
          </td>
        </tr>
        <tr>
          <td style="width: 82px;text-align: right;font-weight: 400">平&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;台:</td>
          <td>
            <div>
              <swiperOval ref="platform" @comChanged="changePageState($event,'f_platform')" v-bind:itemList="comName.platform" v-bind:slidesPerView="3"></swiperOval>
            </div>
          </td>
        </tr>
        <tr>
          <td style="width: 82px;text-align: right;font-weight: 400">指&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标:</td>
          <td>
            <div>
              <swiperOval ref="target" @comChanged="changePageState($event,'f_target')" v-bind:itemList="comName.target"></swiperOval>
            </div>
          </td>
        </tr>
      </table>
      <div id="lvTab" class="lvDivsty" style="display: none">
        <table class="tabsty">
          <tr><td @click="choseLv($event,1)">高</td></tr>
          <tr><td @click="choseLv($event,2)">中</td></tr>
          <tr><td @click="choseLv($event,3)">低</td></tr>
        </table>
      </div>
    </div>
    <divSplit></divSplit>
    <div>
      <ydsummary v-bind:ydList="test.sum"></ydsummary>
    </div>
    <div>
      <datacard></datacard>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import swiperOval from '@/components/baseCom/swiperOval'
import swiperOvalNoAll from '@/components/baseCom/swiperOvalNoAll'
import divSplit from '@/components/baseCom/DivSplit'
import ydsummary from '@/components/yidong/dataSummary'
import datacard from '@/components/yidong/dataCard'
export default {
  name: "yidong",
  components: {swiperOval,swiperOvalNoAll,divSplit,ydsummary,datacard},
  data(){
      return {
        comName:{
          pinDu:[{name:'当日'},{name:'连续两日'},{name:'连续三日'}],
          proType:[{name:'股票型'},{name:'货币型'}],
          platform:[{name:'自有平台'},{name:'三方三大平台'}],
          target:[{name:'份额'},{name:'金额'},{name:'笔数'}]
        },
        pageVal:{
          ydPinDu:1,
          proType:1,
          platform:1,
          target:1
        },
        test:{
          sum:[{VALUE1:'3',VALUE2:'5',VALUE3:'50',VALUE4:'900'}]
        }
      }
  },
  mounted () {

  },
  methods:{
    ydGetDataAndDraw:function(pageVal,reflashFlag){
      if (flag === '') {

      }else if (flag === 'no') {
        return false
      }
    },
    changePageState:function (val, flag) {
      let reflashFlag = 'no'
      // 异动频度
      if(flag == 'f_pindu'){
        reflashFlag = this.changePinDu(val)
      }
      // 产品类型
      if(flag == 'f_protype'){
        reflashFlag = this.changeProType(val)
      }
      // 平台
      if(flag == 'f_platform'){
        reflashFlag = this.changePlatform(val)
      }
      // 平台
      if(flag == 'f_target'){
        reflashFlag = this.changeTarget(val)
      }
      console.log(this.pageVal)
      this.ydGetDataAndDraw(this.pageVal, reflashFlag)
    },
    choseLv:function (e,i) {
      if(i==0){
        $("#lvTab").show()
      }else if(i==1){
        $("#lvTab").hide()
        $("#lv").text(e.currentTarget.innerHTML)
        $("#lv").css('color','#F4333C')
      }else if(i==2){
        $("#lvTab").hide()
        $("#lv").text(e.currentTarget.innerHTML)
        $("#lv").css('color','#FBC25C')
      }else if(i==3){
        $("#lvTab").hide()
        $("#lv").text(e.currentTarget.innerHTML)
        $("#lv").css('color','#88D2FF')
      }
    },
    changePinDu:function (val) {
      this.pageVal.ydPinDu = val

      return 'pinDu'
    },
    changeProType:function (val) {
      this.pageVal.proType = val

      return 'proType'
    },
    changePlatform:function (val) {
      this.pageVal.platform = val

      return 'platform'
    },
    changeTarget:function (val) {
      this.pageVal.platform = val

      return 'target'
    }
  }
}
</script>

<style scoped lang="less">
  .inputsty {
    width: 100%;
    height: 30px;
    padding-left: 28px;
    text-align: left;
    border: none;
    margin-left: 15px;
    border-radius: 13px;
    outline: none;
    background-image: url("../assets/img/search.png");
    background-color: #f6f6f6;
    background-size: auto 15px;
    background-repeat: no-repeat;
    background-position: 4px center;
  }
  .lvsty{
    color: #F4333C;
    font-size: 13px;
    margin-left: 7px;
  }
  .spsty{
    width: 0;
    height: 0;
    border-bottom: 4px solid #999999;
    border-left: 4px solid transparent;
    margin-top: 10px;
    display: block;
    margin-right: 5px;
  }
  .lvDivsty{
    position:fixed;
    right: 10px;
    width: 71px;
    height: 126px;
    top:5%;
    z-index: 10
  }
  .tabsty{
    width: 71px;
    height: 126px;
    border: 1px solid #FFFFFF;
    box-shadow: #DDDDDD 2px 2px 2px 2px;
    border-radius: 5px;
    background-color: white
  }
  .tabsty tr:first-child td{
    font-size: 15px;
    color: #F4333C;
    font-weight: bold;
    border-bottom: 1px solid #EEEEEE;
  }
  .tabsty tr:nth-child(2) td{
    font-size: 15px;
    color: #FBC25C;
    font-weight: bold;
    border-bottom: 1px solid #EEEEEE;
  }
  .tabsty tr:nth-child(3) td{
    font-size: 15px;
    color: #88D2FF;
    font-weight: bold
  }
</style>
