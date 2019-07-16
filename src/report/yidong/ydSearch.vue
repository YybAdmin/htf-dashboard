<template>
    <div style="overflow: hidden">
      <div>
        <searchdiv id="mysearch" ref="searchtag" class="childsty" style="" v-bind:searchInfo="comName.searchinfo"></searchdiv>
        <divsplit></divsplit>
      </div>
      <div v-if="sumlist.length==0">
        <div v-bind:style="blanksty"></div>
      </div>
      <div v-else>
        <ydsummary v-bind:ydList="sumlist" v-bind:ifshow="ifshow"></ydsummary>
        <datacard ref="datacard"></datacard>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import searchdiv from '@/components/baseCom/InputSearch'
  import ydsummary from '@/components/yidong/dataSummary'
  import datacard from '@/components/yidong/dataCard'
  import divsplit from '@/components/baseCom/DivSplit'
  export default {
    name: "ydSearch",
    components:{searchdiv,ydsummary,datacard,divsplit},
    data(){
      return{
        comName:{
          searchinfo:{pagePath:'',placeholder:'渠道名称/产品名称/产品代码',ifGoOtherPage:false}
        },
        ifshow:true,
        sumlist:[],
        blanksty:'background-color: #F6F6F6;height:'+(document.body.clientHeight-60)+'px;'
      }
    },
    mounted(){
      var _this = this
      $("#mysearch").bind('keypress',function(e) {
        //当e.keyCode的值为13 即，点击前往/搜索 按键时执行以下操作
        if(e.keyCode == 13) {
          document.activeElement.blur();//软键盘收起
          var s = _this.$refs.searchtag.val
          _this.dosearch(s)
        }
      });

    },
    methods:{
      dosearch:function (val) {
        var ts = this
        this.$http.post(this.$API_LIST.yidongSummary, val).then(res => {
          this.sumlist = res.data.list
          this.ifshow = false
        })
        this.$http.post(this.$API_LIST.yidongDataCard, val).then(res => {
          this.$nextTick(() => {ts.$refs.datacard.itemList = res.data.list})
        })
      }
    }

  }
</script>

<style scoped lang="less">
.childsty{
  line-height: 50px;
  /deep/ .inputsty{
    width: 92%;
    margin-left: 0px;
  }
}
</style>
