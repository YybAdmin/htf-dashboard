<template>
  <div style="overflow-x: hidden;" class="pageContent">
    <title>渠道异动监控</title>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <table class="searchTable">
      <tr>
        <td>
          <search :searchInfo="comName.searchInfo" :pageVal="pageVal"></search>
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
  import {getDataCard, getSummary} from '../service/yidongApi'

  export default {
    name: 'yidong',
    components: {search, SelectDwn, Dim, divSplit, ydsummary, datacard},
    data() {
      return {
        comName: {
          searchInfo: {placeholder: '渠道名称/产品名称/产品代码', pagePath: '/ydSearch', ifGoOtherPage: true,ifautofocus:false},
          pinDu: [{name: '当日'}, {name: '连续两日'}, {name: '连续三日'}],
          proType: [{name: '全部'}, {name: '股票'}, {name: '货币'}],
          platform: [{name: '全部'}, {name: '自有平台'}, {name: '三方三大平台'}],
          target: [{name: '金额'}, {name: '份额'}, {name: '笔数'}]
        },
        pageVal: {
          minGan: 2,
          ydPinDu: 1,
          proType: 1,
          platform: 1,
          target: 1,
          searchval: '999999',
          tradetype:'999999',
          nowCard: {agency: '999999', product: '999999',cust:'999999',grorjg:'999999'}
        }
      }
    },
    methods: {
      getDataAndDraw: function (pageVal, flag) {
        console.log(flag)
        console.log(pageVal)
        let _this = this
        getSummary(this.pageVal, function (res) {
          _this.$refs.sm.setData(res)
        })
        getDataCard(this.pageVal, function (res) {
          _this.$refs.dc.setData(res)
        })
      },
      DimChg: function (val, flag) {
        let reflashFlag = 'no'
        // 敏感度
        if (flag == 'f_mingan') {
          reflashFlag = this.changeMinGan(val);
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
        // 指标
        if (flag == 'f_target') {
          reflashFlag = this.changeTarget(val)
        }
        this.getDataAndDraw(this.pageVal, reflashFlag)
      },
      changeMinGan: function (val) {
        this.pageVal.minGan = val
        return "no";
      },
      changePinDu: function (val) {
        this.pageVal.ydPinDu = val
        return "no";
      },
      changeProType: function (val) {
        this.pageVal.proType = val
        return "no";
      },
      changePlatform: function (val) {
        this.pageVal.platform = val
        return "no";
      },
      changeTarget: function (val) {
        this.pageVal.target = val
        return "no";
      }
    },
    beforeMount() {
      let _this = this
      getSummary(this.pageVal, function (res) {
        _this.$refs.sm.setData(res)
      })
      getDataCard(this.pageVal, function (res) {
        _this.$refs.dc.setData(res)
      })
    },
    mounted() {
      this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
    }
  }
</script>

<style scoped lang="less">
  table tr td {
    border-spacing: inherit;
    border-collapse: collapse;
    padding: 0px;
  }

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

        .DimTitle {
          width: 82px;
          text-align: right;
          font-weight: 400;
        }
      }
    }
  }
</style>
