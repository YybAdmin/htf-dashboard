<template>
  <div class="btngroup" v-bind:class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}">
      <span v-bind:key="i"
            v-for="(item,i) in itemList"
            :class="[btnIndex == i ? 'selected' : '', i == 0 ? 'normalLeft' : '', i == (itemList.length - 1)? 'normalRight': '']"
            @click="changeState(i)">
        {{item.name}}
      </span>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array
    }
  },
  data () {
    return {
      btnIndex: 0
    }
  },
  methods: {
    changeState (i) {
      this.btnIndex = i
      this.$emit('comChanged', i + 1)
    }
  }
}
</script>

<style scoped lang="less">
  .themeGold{
    span{
      color: #ddaf59;
      border: 1px solid #ddaf59;
    }
    .selected {
      background-color: #ddaf59;
      color: white;
    }
  }
  .themeCoffee{
    span{
      color: #483c39;
      border: 1px solid #483c39;
    }
    .selected {
      background-color: #483c39;
      color: white;
    }
  }
  .btngroup {
    text-align: center;
    margin-top:15px;
    margin-bottom:5px;
    span {
      font-size: 14px;
      line-height: 30px;
      padding:3px 10px;
      margin-right:-1px;
    }
    .normalLeft {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .normalRight {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
</style>
