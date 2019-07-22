<template>
    <div class="tabgroup" :class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}">
      <span v-for="(item,i) in list"
            :key="i"
            :class="[tabIndex == i ? 'selected':'']"
            @click="changeTheme(i+1, 'self')">
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
    changeTheme (i, flag) {
      let enable = this.itemList[i - 1].clickDisable === undefined ? false : this.itemList[i - 1].clickDisable
      if (!enable) {
        this.tabIndex = i - 1
        if (flag === 'self') {
          this.$emit('comChanged', i)
        }
      }
    }
  },
  mounted () {
    $(this.$el.firstChild).addClass('selected')
  }
}
</script>

<style scoped lang="less">
  @gold : #ddaf59;
  @coffee : #483c39;
  @coffeeFont: #666;
  @font : #333;
  .themeGold {
    span {
      color: @font;
    }
    .selected {
      color: @gold;
      &:after {
        background-color: @gold;
      }
    }
  }
  .themeCoffee{
    span{
      color: @coffeeFont;
    }
    .selected{
      color: @coffee;
      &:after{
        background-color: @coffee;
      }
    }
  }
  .tabgroup {
    text-align: left;
    padding-left: 10px;
    border-bottom: 1px solid  #eee;
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 40px;
      text-align: center;
      margin-right:10px;
    }
    .selected {
      position: relative;
      &:after{
        content: '';
        position: absolute;
        width: 50%;
        height: 2px;
        left: 20%;
        bottom: -5px;
        border-radius: 1px;
      }
    }
  }
</style>
