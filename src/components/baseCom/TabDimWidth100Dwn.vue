<template>
    <div>
      <table :class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}">
        <tr>
          <td v-for="(item, i) in list"
              :key="item.id"
              :class="[tdIndex === i ? 'selected' : '']"
              @click="changeTheme(i,'self')">
            {{item.name}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'TabDimWidth100Dwn',
  props: ['itemList'],
  data () {
    return {
      tdIndex: 0,
      theme:this.$myUtil.theme,
      list: this.itemList
    }
  },
  methods: {
    changeTheme (i, flag) {
      this.tdIndex = i
      if (flag === 'self') {
        this.$emit('comChanged', i + 1)
      }
    }
  }
}
</script>

<style scoped lang="less">
  @gold : #ddaf59;
  @coffee : #483c39;
  .themeGold {
    .selected{
      color:@gold;
      border-top: 2px solid @gold;
    }
  }
  .themeCoffee{
    .selected{
      color:@coffee;
      border-top: 2px solid @coffee;
    }
  }
  table{
    width:100%;
    table-layout: fixed;
    border-collapse: collapse;
    td{
      font-size: 12px;
      font-weight: 400;
      color:  #999;
      line-height: 34px;
      text-align: center;
      border: 1px solid #EEEEEE;
      background-color: #FAFAFA;
    }
    .selected {
      position: relative;
      border-bottom: none;
      background-color: white;
    }
  }
</style>
