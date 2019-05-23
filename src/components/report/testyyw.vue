<template>
  <BtnGroup v-bind:btnGrp="this.comName.BtnGropList"></BtnGroup>
</template>

<script>
import BtnGroup from '@/components/baseYYW/_BtnGroup'
export default {
  name: "testyyw",
  components: {BtnGroup},
  data () {
    return {
      comName: {
        BtnGropList: [{name: '分布'}, {name: '趋势'}]
      }
    }
  }
}
</script>

<style scoped>

</style>
