<template>
    <div>
      <table class="tmpTable">
        <tr>
          <td class="normal"
              v-for="(item, i) in list"
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

<style scoped>
  .tmpTable{
    width:100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
  .normal {
    font-size: 12px;
    font-weight: 400;
    color:  #999;
    line-height: 34px;
    text-align: center;
    background-color: #FAFAFA;
    border: 1px solid #EEE;
  }
  .selected {
    color:#DDAF59;
    position: relative;
    border-top: 2px solid #DDAF59;
    border-bottom: none;
    background-color: white;
  }
</style>
