<template>
  <div>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <table style="width: 100%;table-layout: auto;line-height: 44px;">
      <tr>
        <td style="width: 54px;"><img style="width: 20px; height: 20px;vertical-align: middle;"
                                      src="@/assets/img/searchback.png"></td>
        <td>
          <div style="width:100%;text-align: center;">自选产品</div>
        </td>
        <td style="width: 54px;" @click="goSearch()">搜索</td>
      </tr>
    </table>
    <DivSplit></DivSplit>
    <div class="retList" :class="[selfList.length != 0?'showDiv':'hideDiv']">
      <table>
        <tr v-if="selfList.length" v-for="(item,i) in selfList">
          <td>
            <div>{{item.name}}</div>
            <div>{{item.kkey}}</div>
          </td>
          <td style="text-align: center;width:50px;">
            <button @click="change(item)">{{item.flag}}</button>
          </td>
        </tr>
      </table>
    </div>
    <div ref="addItem" :class="[selfList.length === 0?'showDiv':'hideDiv']">
      <div style="height: 100%;">
        <img @click="goSearch()" style="height:126px;width: 126px;margin-top:200px;" src="@/assets/img/searchadd.png"/>
        <div>点击添加</div>
      </div>
    </div>
  </div>
</template>

<script>
  import DivSplit from '@/components/baseCom/DivSplit'
  import LineSplit from '@/components/baseCom/LineSplit'
  import $ from 'jquery'
  import 'jquery-ui-dist/jquery-ui'
  import {updateSelPro} from "../../report/service/comApi";

  export default {
    name: "search",
    components: {DivSplit, LineSplit},
    data() {
      return {
        searchImg: require("@/assets/img/searchadd.png"),
        //所有产品
        availableTags: [],
        //自选产品列表
        selfList: []
      }
    },
    methods: {
      goSearch: function () {
        this.$router.push({path: '/searchRes', query: {dataList: this.availableTags}})
      },
      change:function (item) {
        if(item.flag === '-'){
          item.flag = '+'
          updateSelPro(item,'N',function (res) {
            alert(res.status)
          })
        }else if(item.flag === '+'){
          item.flag = '-'
          updateSelPro(item,'Y',function (res) {
            alert(res.status)
          })
        }
      }
    },
    mounted() {
      let _this = this
      //从接口读取的数据
      this.$http.post('/api/report/selPro/getUserPro',{'sheetName':'test','tabSel':'1','userCode':'297'}).then(retData=>{
        let apiData = retData.data.list
        let res = new Array()
        //构造便捷查询数据
        let searchData = new Array();
        for (let i = 0; i < apiData.length; i++) {
          searchData[i] = apiData[i].productname + ' ' + apiData[i].productcode + ' ' + apiData[i].flag
          if (apiData[i].flag === 'Y') {
            let item = {"name": apiData[i].productname, "kkey": apiData[i].productcode, "flag":'-'}
            res.push(item)
          }
        }
        _this.selfList = res
        //初始化查询组件
        _this.availableTags = searchData
        $("#tags").autocomplete({
          source: searchData
        });
        //隐藏调试用的样式
        $(".ui-helper-hidden-accessible").hide()
        $("#ui-id-1").css({"background": 'white'})
      })
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
    border-radius: 13px;
    outline: none;
    background-image: url("../../assets/img/search.png");
    background-color: #f6f6f6;
    background-size: auto 15px;
    background-repeat: no-repeat;
    background-position: 4px center;
  }

  .retList {
    padding-left: 15px;
    table {
      line-height: 30px;
      width: 100%;
      text-align: left;
      tr {
        height: 60px;
        border-bottom: 1px solid #EEE;

        td {
          button {
            border: 1px solid #DDAF59;
            width: 20px;
            height: 20px;
            margin: 0px;
            padding: 0px;
            outline: none;
            background: white;
            color: #ddaf59;
          }
        }
      }
    }
  }

  .showDiv {
    display: block;
  }

  .hideDiv {
    display: none;
  }

</style>
