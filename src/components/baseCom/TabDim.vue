<template>
    <div class="tmpDiv">
      <span class="normal"
            v-for="(item,i) in list"
            :key="i"
            :class="[tabIndex == i ? 'selected':'']"
            @click="changeTheme(i+1)">
        {{item.name}}
      </span>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'TabDim',
  props: {
    itemList: {
      type: Array
    }
  },
  data () {
    return {
      tabIndex: 0,
      list: this.itemList
    }
  },
  methods: {
    changeTheme (i) {
      let enable = this.itemList[i - 1].clickDisable === undefined ? false : this.itemList[i - 1].clickDisable
      if (!enable) {
        this.tabIndex = i - 1
        this.$emit('comChanged', i)
      }
    }
  },
  mounted () {
    $(this.$el.firstChild).addClass('selected')
  }
}
</script>

<style scoped>
  .tmpDiv {
    text-align: left;
    padding-left: 10px;
    border-bottom: 1px solid  #F3F3F3;
  }
  .normal {
    font-size: 16px;
    font-weight: 400;
    color:  #333333;
    line-height: 40px;
    text-align: center;
    margin-right:10px;
  }
  .selected {
    color:#DDAF59;
    position: relative;
  }
  .selected:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 2px;
    left: 25%;
    bottom: -5px;
    background-color: #DDAF59;
  }
</style>
