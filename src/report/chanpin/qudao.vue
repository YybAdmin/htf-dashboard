<template>
  <div>
    <table style="padding-left:10px;word-break: keep-all;">
      <tr>
        <td>周期:</td>
        <td><dateDim :itemList="comName.dateList" :slidesPerView="5" @comChanged="changePageState($event,'f_dateType')"> </dateDim></td>
      </tr>
      <tr>
        <td>渠道:</td>
        <td><dateDim :itemList="comName.channelList" :slidesPerView="5" @comChanged="changePageState($event,'f_channel')"> </dateDim></td>
      </tr>
      <tr>
        <td>排序:</td>
        <td><dateDim :itemList="comName.orderList" :slidesPerView="5" @comChanged="changePageState($event,'f_order')"> </dateDim></td>
      </tr>
      <tr>
        <td>产品:</td>
        <td><dateDim :itemList="comName.productList" :slidesPerView="5" @comChanged="changePageState($event,'f_product')"> </dateDim></td>
      </tr>
    </table>
    <LineSplit></LineSplit>
    <BtnOrder :item="comName.orderItem[0]" @comChanged="changePageState($event,'f_orderChild')"></BtnOrder>
    <DivSplit></DivSplit>
  </div>
</template>

<script>
  import DivSplit from '@/components/baseCom/DivSplit'
  import LineSplit from '@/components/baseCom/LineSplit'
  import dateDim from '@/components/baseCom/swiperOvalNoAll'
  import BtnOrder from '@/components/baseCom/BtnOrder'
  export default {
    name: "qudao",
    components:{DivSplit,LineSplit,dateDim,BtnOrder},
    data() {
      return {
        comName:{
          dateList:[{name: '每日'}, {name: '每周'}, {name: '月度'}, {name: '季度'}, {name: '年度'}],
          channelList:[{name: '全部'}, {name: '自有'}, {name: '三方'}],
          orderList:[{name: '规模'}, {name: '资金'}],
          productList:[{name: '全部'}, {name: '重点'}],
          orderItem:[{name:'保有量',value:1},{name:'份额',value:2},{name:'申购',value:3},{name:'净收入',value:4}],
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
            if(i === 1){
              this.switch.orderGroup = true
            } else {
              this.switch.orderGroup = false
            }
        }
        if(flag === 'f_orderChild'){
          console.log(i)
        }
        if(flag === 'f_product'){}
      }
    }
  }
</script>

<style scoped>

</style>
