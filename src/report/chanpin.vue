<template>
  <div class="group" style="overflow: hidden">
    <title>产品实时监控</title>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <div id="bodyContent">
      <TabTop v-bind:itemList="comName.tabTopList" @comChanged="changePageState($event,'f_tabtop')"></TabTop>
    </div>
    <div :is="currentTab"></div>
  </div>
</template>

<script>
  import TabTop from '@/components/baseCom/TabTop'
  import quanyi from '@/report/chanpin/quanyi'
  import huobi from '@/report/chanpin/huobi'
  import zhaiquan from '@/report/chanpin/zhaiquan'
  import qudao from '@/report/chanpin/qudao'

  export default {
    name: "chanpin",
    components: {TabTop, quanyi, huobi, zhaiquan, qudao},
    data() {
      return {
        currentTab: 'qudao',
        comName: {
          tabTopList: [{name: '权益'}, {name: '货币'}, {name: '债券'}, {name: '渠道'}],
        }
      }
    },
    methods: {
      changePageState: function (i) {
        console.log(i)
        switch (i) {
          case 1 : this.currentTab = 'quanyi';break;
          case 2 : this.currentTab = 'huobi';break;
          case 3 : this.currentTab = 'zhaiquan';break;
          case 4 : this.currentTab = 'qudao';break;
        }
      }
    }
  }
</script>

<style scoped>
  .group{
    color: #333;
  }
</style>
