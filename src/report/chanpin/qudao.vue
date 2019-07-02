<template>
  <div>
    <table>
      <tr>
        <td style="word-break: keep-all;margin-top:12px;">周期:</td>
        <td><dateDim :itemList="comName.dataList" :slidesPerView="5" @comChanged="changePageState($event,'f_gmtype')"> </dateDim></td>
      </tr>
    </table>
  </div>
</template>

<script>
  import dateDim from '@/components/baseCom/swiperOvalNoAll'
  export default {
    name: "qudao",
    components:{dateDim},
    data() {
      return {
        comName:{
          dataList:[{name: '实时'}, {name: '每日'}, {name: '每周'}, {name: '月度'}, {name: '季度'}, {name: '年度'}]
        }
      }
    },
    methods:{
      changePageState:function (i) {
        console.log(i)
      }
    }
  }
</script>

<style scoped>

</style>
