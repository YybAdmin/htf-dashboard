<template>
  <div class="tabgroup">
    <table class="tmpTable">
      <tr>
        <td class="normal"
            v-for="(item,i) in itemList"
            :key="i"
            :class="[tabIndex == i ? 'selected':'']"
            @click="changeTheme(i)">
          {{item.name}}
        </td>
      </tr>
    </table>
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
  .tabgroup {
    text-align: center;
    border-bottom: 1px solid  #F3F3F3;
    .tmpTable {
      width: 100%;
      table-layout: fixed;
      .normal {
        font-size: 14px;
        font-weight: 400;
        color:  #333333;
        line-height: 38px;
        text-align: center;
        margin-right:10px;
      }
      .selected {
        color:#DDAF59;
        position: relative;
        &:after{
          content: '';
          position: absolute;
          width: 20px;
          height: 3px;
          left: 45%;
          bottom: 3px;
          background-color: #DDAF59;
          border-radius:2px;
        }
      }
    }
  }
</style>
