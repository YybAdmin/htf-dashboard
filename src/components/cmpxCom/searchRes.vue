<template>
  <div>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <table style="width: 100%;table-layout: auto;line-height: 44px;">
      <tr>
        <td style="width: 54px;" @click="retSelf()"><img style="width: 20px; height: 20px;vertical-align: middle;"
                 src="@/assets/img/searchback.png"></td>
        <td>
          <div style="width:100%;">
            <input id="tags" type="text" class="inputsty"
                   placeholder="基金名称/基金代码" autofocus="autofocus"></input>
          </div>
        </td>
        <td style="width: 54px;" @click="sousuo()">搜索</td>
      </tr>
    </table>
    <DivSplit></DivSplit>
    <div class="retList" :class="[resList.length != 0?'showDiv':'hideDiv']">
      <table>
        <tr v-if="resList.length" v-for="(item,i) in resList">
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
    <div ref="noItem" :class="[resList.length === 0?'showDiv':'hideDiv']">
      <div style="height: 100%;">
        <img style="height:126px;width: 126px;margin-top:200px;" src="@/assets/img/searchno.png"/>
        <div>暂无索搜记录</div>
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
    name: "searchRes",
    components: {DivSplit, LineSplit},
    data() {
      return {
        searchImg: require("@/assets/img/searchadd.png"),
        //所有产品
        availableTags: [],
        //查询结果列表
        resList: [],
      }
    },
    methods: {
      // 展示索搜结果列表
      sousuo: function () {
        let text = $("#tags").val()
        let res = new Array()
        for (let i = 0; i < this.availableTags.length; i++) {
          if (this.availableTags[i].indexOf(text) != -1) {
            let name = this.availableTags[i].split(' ')[0]
            let kkey = this.availableTags[i].split(' ')[1]
            let flag = this.availableTags[i].split(' ')[2] ==='Y'?'-':'+'
            let item = {"name": name, "kkey": kkey, "flag":flag}
            res.push(item)
          }
        }
        this.resList = res
      },
      retSelf:function () {
        this.$router.push({path:'/search'})
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
      this.availableTags = this.$route.query.dataList
      $("#tags").autocomplete({
        source: this.availableTags
      });
      //隐藏调试用的样式
      $(".ui-helper-hidden-accessible").hide()
      $("#ui-id-1").css({"background": 'white'})
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
        td{
          button{
            border:1px solid #DDAF59;
            width: 20px;
            height:20px;
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
