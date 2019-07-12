<template>
  <div class="group">
      <span :key="item.index"
            v-for="(item,i) in list"
            @click="changeTheme(i,'self')"
            :class="[spanIndex == i ? 'selected' : '', spanIndex == i ?{themeGold: theme ,themeCoffee:!theme}:'']">
        {{item.name}}
      </span>
  </div>
</template>

<script>
  export default {
    name: 'SpanSwiper',
    props: {
      itemList: {type: Array, default: []}, slidesPerView: {type: Number, default: 4}
    },
    data() {
      return {
        spanIndex: 0,
        theme: this.$myUtil.theme,
        list: this.itemList
      }
    },
    methods: {
      changeTheme(i, flag) {
        this.spanIndex = i
        if (flag === 'self') {
          this.$emit('comChanged', i + 1)
        }
      }
    }
  }
</script>
<style scoped lang="less">
  @gold: #ddaf59;
  @goldBack: #fef7e9;
  @coffee: #483c39;
  @coffeeFont: #666;
  @coffeeBack: #e9e2e0;
  .group{
    text-align: left;
  }
  .themeGold {
    border-color: @gold;
    color: @gold;
    background-color: @goldBack;
  }

  .themeCoffee {
    border-color: @coffee;
    color: @coffee;
    background-color: @coffeeBack;
  }

  span {
    background-color: white;
    color: #999999;
    font-size: 12px;
    padding: 3px 11px;
    margin: auto;
    border: 1px solid white;
    margin-left:10px;
  }

  .selected {
    border-radius: 10px;
    outline: none;
  }
</style>
