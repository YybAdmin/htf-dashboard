<template>
  <div>
    <table style="padding-left:10px;word-break: keep-all;">
      <tr>
        <td>周期:</td>
        <td><selDim :itemList="comName.dateList" :slidesPerView="5" @comChanged="changePageState($event,'f_dateType')"> </selDim></td>
      </tr>
      <tr>
        <td>渠道:</td>
        <td><selDim :itemList="comName.channelList" :slidesPerView="5" @comChanged="changePageState($event,'f_channel')"> </selDim></td>
      </tr>
      <tr>
        <td>排序:</td>
        <td><selDim :itemList="comName.orderList" :slidesPerView="5" @comChanged="changePageState($event,'f_order')"> </selDim></td>
      </tr>
      <tr>
        <td>自选:</td>
        <td><selDim v-bind:itemList="comName.productList" @comChanged="changePageState($event,'f_product')"></selDim></td>
      </tr>
    </table>
    <LineSplit></LineSplit>
    <table style="table-layout: fixed;width: 100%;">
      <tr id="orderG1">
        <td><BtnOrder ref="order1" :item="comName.orderItem[0]" @comChanged="changePageState($event,'f_orderChild')"></BtnOrder></td>
        <td><BtnOrder ref="order2" :item="comName.orderItem[1]" @comChanged="changePageState($event,'f_orderChild')"></BtnOrder></td>
      </tr>
      <tr id="orderG2" style="display: none;">
        <td><BtnOrder ref="order3" :item="comName.orderItem[2]" @comChanged="changePageState($event,'f_orderChild')"></BtnOrder></td>
        <td><BtnOrder ref="order4" :item="comName.orderItem[3]" @comChanged="changePageState($event,'f_orderChild')"></BtnOrder></td>
      </tr>
    </table>
    <DivSplit></DivSplit>
  </div>
</template>

<script>
  import $ from 'jquery'
  import DivSplit from '@/components/baseCom/DivSplit'
  import LineSplit from '@/components/baseCom/LineSplit'
  import selDim from '@/components/baseCom/swiperOvalNoAll'
  import BtnOrder from '@/components/baseCom/BtnOrder2'
  export default {
    name: "qudao",
    components:{DivSplit,LineSplit,selDim,BtnOrder},
    data() {
      return {
        comName:{
          dateList:[{name: '每日'}, {name: '每周'}, {name: '月度'}, {name: '季度'}, {name: '年度'}],
          channelList:[{name: '全部'}, {name: '自有'}, {name: '三方'}],
          orderList:[{name: '规模'}, {name: '资金'}],
          orderItem:[{name:'保有量',value:1},{name:'份额',value:2},{name:'申购',value:3},{name:'净收入',value:4}],
          productList: [{name: '全部'}, {name: '重点产品'}, {name: '自选产品>'}]
        },
        switch:{
          orderGroup:true
        }
      }
    },
    methods:{
      changePageState:function (i,flag) {
        if(flag === 'f_dateType'){}
        if(flag === 'f_channel'){}
        if(flag === 'f_order'){
            if(i===1){
              $("#orderG1").show()
              $("#orderG2").hide()
              this.$refs.order1.init()
              this.$refs.order2.reSet()
            }else{
              $("#orderG2").show()
              $("#orderG1").hide()
              this.$refs.order3.init()
              this.$refs.order4.reSet()
            }
        }
        if(flag === 'f_orderChild'){
          if(i===1){
            this.$refs.order2.reSet()
          }else if(i===2){
            this.$refs.order1.reSet()
          }else if(i===3){
            this.$refs.order4.reSet()
          }else if(i===4){
            this.$refs.order3.reSet()
          }
        }
        if(flag === 'f_product'){
          this.$router.push('/search')
        }
      }
    }
  }
</script>

<style scoped>

</style>
