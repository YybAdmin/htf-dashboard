<template>
  <div>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <div style="position: fixed;top:0px;background: white;width: 100%;">
      <table style="width: 100%;line-height: 44px;">
        <tr>
          <td>
            <div>
              <input id="tags" type="text" class="inputsty" v-model="search"
                     placeholder="基金名称/基金代码" autofocus="autofocus"></input>
            </div>
          </td>
          <td style="width: 54px;" @click="retSelf()">取消</td>
        </tr>
      </table>
      <DivSplit></DivSplit>
    </div>
    <div style="height:70px;"></div>
    <div>
      <div id="retL" class="retList" :class="[items.length != 0?'showDiv':'hideDiv']">
        <table>
          <tr v-for="(item,i) in items">
            <td style="width: 90%;">
              <div class="lname">{{item.name}}</div>
              <div class="lkey">{{item.kkey}}</div>
            </td>
            <td style="text-align: center;width:50px;">
              <button @click="change(item)">{{item.flag}}</button>
            </td>
          </tr>
        </table>
      </div>
      <div ref="noItem" :class="[items.length === 0?'showDiv':'hideDiv']">
        <div style="height: 100%;">
          <img style="height:126px;width: 126px;margin-top:200px;" src="@/assets/img/searchno.png"/>
          <div>暂无索搜记录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DivSplit from '@/components/baseCom/DivSplit'
  import LineSplit from '@/components/baseCom/LineSplit'
  import $ from 'jquery'
  import {updateSelPro} from "../../report/service/comApi";

  export default {
    name: "searchRes",
    components: {DivSplit, LineSplit},
    data() {
      return {
        list: [],
        listbak:[],
        search: '',
        searchImg: require("@/assets/img/searchadd.png"),
      }
    },
    computed: {
      items: function () {
        var _search = this.search
        this.list = this.listbak
        if (_search) {
          var reg = new RegExp(_search, 'ig')
          return this.list.filter(function (e) {
            return Object.keys(e).some(function (key) {
              return e[key].match(reg);
            })
          })
        }else{
          return this.list
        }
      }
    },
    watch: {
      search: function (e) {
        let _this = this
        this.$nextTick(function () {
          setTimeout(function () {
            var obj2 = document.getElementsByClassName("lkey")
            for (let i = 0; i < obj2.length; i++) {
              if(_this.search.length >= 1){
                let newhtml = obj2[i].innerHTML.replace(_this.search, "<font color='red'>" + _this.search + "</font>")
                console.log(_this.search)
                obj2[i].innerHTML = newhtml
              }
            }
          }, 1000)
        })
      }
    },
    methods: {
      // 展示索搜结果列表
      retSelf: function () {
        this.$router.push({path: '/search'})
      },
      change: function (item) {
        if (item.flag === '-') {
          item.flag = '+'
          updateSelPro('test', '1', '297', item.kkey, 'N', function (res) {
            //后期添加 消息框
          })
        } else if (item.flag === '+') {
          item.flag = '-'
          updateSelPro('test', '1', '297', item.kkey, 'Y', function (res) {
            //后期添加 消息框
          })
        }
      }
    },
    mounted() {
      let allProList = this.$route.query.dataList
      let res = new Array()
      for (let i = 0; i < allProList.length; i++) {
        let name = allProList[i].split(' ')[0]
        let kkey = allProList[i].split(' ')[1]
        let flag = allProList[i].split(' ')[2] === 'Y' ? '-' : '+'
        let item = {"name": name, "kkey": kkey, "flag": flag}
        res.push(item)
      }
      this.list = res
      this.listbak = res
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
        display: table-caption;

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
