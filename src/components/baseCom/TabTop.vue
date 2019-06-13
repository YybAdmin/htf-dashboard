<template>
  <div class="tabgroup" :class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}">
    <table><tr>
        <td v-for="(item,i) in itemList"
            :key="i"
            :class="[tabIndex == i ? 'selected':'']"
            @click="changeTheme(i)">
          {{item.name}}</td>
    </tr></table>
    <DivSplit/>
  </div>
</template>

<script>
import DivSplit from '@/components/baseCom/DivSplit'

export default {
  name: 'normal',
  components: {DivSplit},
  props: {
    itemList: {
      type: Array
    }
  },
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    changeTheme (i) {
      this.tabIndex = i
      this.$emit('comChanged', i + 1)
    }
  }
}
</script>

<style scoped lang="less">
  .themeGold{
    border-bottom: 1px solid  #F3F3F3;
    table{
      td{
        color:  #333333;
      }
      .selected {
        color:#ddaf59;
        &:after{
          background-color: #DDAF59;
        }
      }
    }
  }
  .themeCoffee{
    border-bottom: 1px solid  #F3F3F3;
    table{
      td{
        color:  white;
      }
      .selected {
        background-color: #483c39;
        color: white;
        &:after{
          background-color: white;
        }
      }
    }
  }
  .tabgroup {
    text-align: center;
    table {
      width: 100%;
      table-layout: fixed;
      td {
        font-size: 14px;
        font-weight: 400;
        line-height: 38px;
        text-align: center;
        margin-right:10px;
      }
      .selected {
        position: relative;
        &:after{
          content: '';
          position: absolute;
          width: 20px;
          height: 3px;
          left: 45%;
          bottom: 3px;
          border-radius:2px;
        }
      }
    }
  }
</style>
