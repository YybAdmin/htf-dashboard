<template>
  <div class="group" @click="changeSel">
    <span>{{item.name}}</span>
    <span v-bind:is="whichOrder"></span>
  </div>
</template>

<script>
  import orderState1 from '@/components/baseCom/child/orderState1'
  import orderState2 from '@/components/baseCom/child/orderState2'
  import orderState3 from '@/components/baseCom/child/orderState3'

  export default {
    name: "BtnOrder",
    components: {orderState1, orderState2, orderState3},
    props: {
      item: {
        type: Object,
        default: {name: '--', value: 1}
      }
    },
    data() {
      return {
        clickNum: 0,
        whichOrder: 'orderState1'
      }
    },
    methods: {
      changeSel: function () {
        this.clickNum = this.clickNum % 3 + 1
        if (this.clickNum === 1) {
          this.whichOrder = 'orderState2'
        } else if (this.clickNum === 2) {
          this.whichOrder = 'orderState3'
        } else if (this.clickNum === 3) {
          this.whichOrder = 'orderState1'
        } else {
          this.whichOrder = 'orderState1'
        }
        this.$emit('comChanged', this.item.value)
      },
      reSet(){
        this.whichOrder = 'orderState1'
        this.clickNum = 0
      },
      init: function () {
        this.whichOrder = 'orderState2'
        this.clickNum = 1
      }
    }
  }
</script>

<style scoped lang="less">
  .group {
    position: relative;
    font-size: 14px;
    line-height: 30px;

    .selected {
      color: #ddaf59;
    }
  }
</style>
