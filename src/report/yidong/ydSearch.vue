<template>
  <div class="group">
    <searchdiv id="mysearch" ref="searchtag" class="childsty"
               :searchInfo="searchinfo"></searchdiv>
    <divsplit></divsplit>
    <div :class="[contentShow===true?'hide':'show']">
        <div :style="{height:clientheight+'px',background:'#F6F6F6'}" ></div>
    </div>
    <div :class="[contentShow===true?'show':'hide']">
      <ydsummary ref="sm" :hasTitle="sumTitleShow"></ydsummary>
      <datacard ref="dc"></datacard>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import searchdiv from '@/components/baseCom/InputSearch'
  import ydsummary from '@/components/yidong/dataSummary'
  import datacard from '@/components/yidong/dataCard'
  import divsplit from '@/components/baseCom/DivSplit'
  import {getDataCard, getSummary} from "../../service/yidongApi";

  export default {
    name: "ydSearch",
    components: {searchdiv, ydsummary, datacard, divsplit},
    data() {
      return {
        pageVal:{},
        searchinfo: {pagePath: '', placeholder: '渠道名称/产品名称/产品代码', ifGoOtherPage: false},
        sumTitleShow: false,
        contentShow:false,
        clientheight:0,
        smData:[],
        dcData:[]
      }
    },
    beforeMount() {
       this.clientheight = document.body.clientHeight-60
    }
    ,
    mounted() {
      this.$myUtil.watermark({watermark_txt0: this.$myUtil.mark})
      this.pageVal = this.$route.query
      var _this = this
      $("#mysearch").bind('keypress', function (e) {
        //当e.keyCode的值为13 即，点击前往/搜索 按键时执行以下操作
        if (e.keyCode == 13) {
          document.activeElement.blur();//软键盘收起
          var s = _this.$refs.searchtag.val
          _this.dosearch(s)
        }
      });

    },
    methods: {
      dosearch: function (val) {
        let _this = this
        let s = _this.$refs.searchtag.val
        let pageVal = _this.$route.query
        pageVal.searchval = s
        pageVal['nowCard'] = {agency: '999999', product: '999999'}
        getSummary(pageVal, function (res) {
          _this.smData = res
        })
        getDataCard(pageVal, function (res) {
          _this.dcData = res
        })
      }
    },
    watch:{
      smData:function (e) {
        if(this.smData.length>=1 && this.dcData.length>=1){
          this.contentShow = true
          this.$refs.sm.setData(this.smData)
          this.$refs.dc.setData(this.dcData)
        }
      }
    }

  }
</script>

<style scoped lang="less">
  .group{
    background: white;
    overflow: hidden;
  }
  .childsty {
    line-height: 50px;

    /deep/ .inputsty {
      width: 92%;
      margin-left: 0px;
    }
  }
  .show{
    display: block;
  }
  .hide{
    display: none;
  }
</style>
