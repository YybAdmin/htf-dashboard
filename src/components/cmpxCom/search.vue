<template>
  <div>
    <table style="width: 100%;table-layout: auto;line-height: 44px;">
      <tr>
        <td><img style="width: 20px; height: 20px;vertical-align: middle;"
                 src="@/assets/img/searchback.png"></td>
        <td>
          <div style="width:100%;text-align: center;display:none;">自选产品</div>
          <div style="width:100%;">
            <input id="tags" type="text" class="inputsty"
                   placeholder="基金名称/基金代码" autofocus="autofocus"></input>
          </div>
        </td>
        <td @click="sousuo()">搜索</td>
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
          <td>
            <button>---</button>
          </td>
        </tr>
      </table>
    </div>
    <div :class="[selfList.length === 0 && resList.length===0 ?'showDiv':'']">

    </div>
    <div ref="addItem" :class="[selfList.length === 0 && resList.length===0 ?'showDiv':'']">
      <div style="height: 100%;">
        <img style="height:126px;width: 126px;margin-top:200px;" src="@/assets/img/searchadd.png"/>
        <div>点击添加</div>
      </div>
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

  export default {
    name: "search",
    components: {DivSplit, LineSplit},
    data() {
      return {
        searchImg: require("@/assets/img/searchadd.png"),
        //所有产品
        availableTags: [],
        //查询结果列表
        resList: [],
        //自选产品列表
        selfList: []
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
            let item = {"name": name, "kkey": kkey}
            res.push(item)
          }
        }
        this.resList = res
      }
    },
    mounted() {
      //从接口读取的数据
      var apiData = [
        {PRODUCTCODE: '000248', PRODUCTNAME: '汇添富中证主要消费ETF联接', FLAG: 'N'},
        {PRODUCTCODE: '000217', PRODUCTNAME: '华安易富黄金ETF联接C', FLAG: 'N'},
        {PRODUCTCODE: '000251', PRODUCTNAME: '工银瑞信金融地产行业混合', FLAG: 'N'},
        {PRODUCTCODE: '000205', PRODUCTNAME: '易方达投资级信用债券A', FLAG: 'N'},
        {PRODUCTCODE: '000274', PRODUCTNAME: '广发亚太高收益债券QDLL', FLAG: 'N'},
      ]
      //构造便捷查询数据
      let searchData = new Array();
      let res = new Array();
      for (let i = 0; i < apiData.length; i++) {
        searchData[i] = apiData[i].PRODUCTNAME + ' ' + apiData[i].PRODUCTCODE
        if (apiData[i].FLAG === 'Y') {
          let item = {"name": apiData[i].PRODUCTNAME, "kkey": apiData[i].PRODUCTCODE}
          res.push(item)
        }
      }
      this.selfList = res
      this.resList = res
      //初始化查询组件
      this.availableTags = searchData
      $("#tags").autocomplete({
        source: searchData
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
    table {
      line-height: 30px;
      width: 100%;
      text-align: left;
      margin-left: 15px;

      tr {
        height: 60px;
        border-bottom: 1px solid #EEE;
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
