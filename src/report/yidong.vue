<template>
  <div style="overflow-x: hidden;" class="pageContent">
    <title>渠道异动监控</title>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <table class="searchTable">
      <tr>
        <td>
          <search :searchInfo="comName.searchInfo"></search>
        </td>
        <td style="width: 130px;">
          <SelectDwn @comChanged="DimChg($event,'f_mingan')"></SelectDwn>
        </td>
      </tr>
    </table>
    <table class="dimTable">
      <tr>
        <td class="DimTitle">异动频度:</td>
        <td>
          <Dim ref="ydPinDu" @comChanged="DimChg($event,'f_pindu')" :itemList="comName.pinDu"></Dim>
        </td>
      </tr>
      <tr>
        <td class="DimTitle">产品类型:</td>
        <td>
          <Dim ref="proType" @comChanged="DimChg($event,'f_protype')" :itemList="comName.proType"></Dim>
        </td>
      </tr>
      <tr>
        <td class="DimTitle">平&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;台:</td>
        <td>
          <Dim ref="platform" @comChanged="DimChg($event,'f_platform')" :itemList="comName.platform"></Dim>
        </td>
      </tr>
      <tr>
        <td class="DimTitle">指&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标:</td>
        <td>
          <Dim ref="target" @comChanged="DimChg($event,'f_target')" :itemList="comName.target"></Dim>
        </td>
      </tr>
    </table>
    <divSplit></divSplit>
    <ydsummary ref="sm"></ydsummary>
    <datacard ref="dc"></datacard>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Dim from '@/components/baseCom/spanOval'
  import SelectDwn from '@/components/baseCom/selectDwn'
  import divSplit from '@/components/baseCom/DivSplit'
  import ydsummary from '@/components/yidong/dataSummary'
  import datacard from '@/components/yidong/dataCard'
  import search from '@/components/baseCom/InputSearch'

  export default {
    name: "yidong",
    components: {search, SelectDwn, Dim, divSplit, ydsummary, datacard},
    data() {
      return {
        comName: {
          searchInfo: {placeholder: "渠道名称/产品名称/产品代码", pagePath: '/jingpin', ifGoOtherPage: true},
          pinDu: [{name: '当日'}, {name: '连续两日'}, {name: '连续三日'}],
          proType: [{name: '全部'}, {name: '股票'}, {name: '货币'}],
          platform: [{name: '全部'}, {name: '自有平台'}, {name: '三方三大平台'}],
          target: [{name: '全部'}, {name: '份额'}, {name: '金额'}, {name: '笔数'}]
        },
        pageVal: {
          minGan: 1,
          ydPinDu: 1,
          proType: 1,
          platform: 1,
          target: 1
        }
      }
    },
    methods: {
      getDataAndDraw: function (pageVal, flag) {
        console.log(flag)
        console.log(pageVal)
      },
      DimChg: function (val, flag) {
        let reflashFlag = 'no'
        if (flag = 'f_mingan') {
        }
        // 异动频度
        if (flag == 'f_pindu') {
          reflashFlag = this.changePinDu(val)
        }
        // 产品类型
        if (flag == 'f_protype') {
          reflashFlag = this.changeProType(val)
        }
        // 平台
        if (flag == 'f_platform') {
          reflashFlag = this.changePlatform(val)
        }
        // 平台
        if (flag == 'f_target') {
          reflashFlag = this.changeTarget(val)
        }
        console.log(this.pageVal)
        this.getDataAndDraw(this.pageVal, reflashFlag)
      }
      ,
      changePinDu: function (val) {
        this.pageVal.ydPinDu = val
        return 'pinDu'
      }
      ,
      changeProType: function (val) {
        this.pageVal.proType = val

        return 'proType'
      }
      ,
      changePlatform: function (val) {
        this.pageVal.platform = val

        return 'platform'
      }
      ,
      changeTarget: function (val) {
        this.pageVal.platform = val

        return 'target'
      }
    },
    mounted() {
      let _this = this
/*      this.$http.post('/api/report/summary',this.pageVal).then(res=>{
        let items = res.data.list
      })*/
      let items = [{VALUE1: '3', VALUE2: '5', VALUE3: '50', VALUE4: '900'}]
      this.$refs.sm.setData(items)
/*      this.$http.post('/api/report/dataCard',this.pageVal).then(res=>{
        let items = res.data.list
      })*/
      let list = [{
        name1: '腾讯',
        name2: '全额宝',
        value1: '10',
        value2: '3000',
        value3: '3000',
        value4: '5,000.89',
        value5: '1000.90',
        value6: '80'
      }, {
        name1: '无锡市民卡...',
        name2: '全额宝',
        value1: '10',
        value2: '3000',
        value3: '3000',
        value4: '5,000.89',
        value5: '1000.90',
        value6: '80'
      }]
      this.$refs.dc.setData(list)
    }
  }
</script>

<style scoped lang="less">
  .pageContent {
    .searchTable {
      width: 100%;
      line-height: 44px;
      background: white;
      padding: 0px 15px;
    }

    .dimTable {
      width: 100%;
      table-layout: fixed;
      margin-bottom: 10px;

      tr {
        height: 35px;
        line-height: 35px;

        .DimTitle {
          width: 82px;
          text-align: right;
          font-weight: 400;
        }
      }
    }
  }
</style>
