<template>
  <div class="group">
    <table>
      <tr>
        <td v-for="(item,i) in itemList"
            :key="i"
            :class="[tdIndex === i? 'selected':'']"
            @click="changeSel(i,item.value)"
        ><span>{{item.name}}</span>
          <img style="width: 12px;height:8px;position: absolute;top:19px;"
               src="@/assets/img/noOrder.svg">
          <img style="width: 12px;height:8px;position: absolute;top:13px;transform:rotate(180deg);"
               src="@/assets/img/noOrder.svg">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "BtnOrder",
    props: {
      itemList: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        tdIndex: 0
      }
    },
    methods: {
      changeSel: function (i, value) {
        this.tdIndex = i
        this.$emit('comChanged', value)
      }
    }
  }
</script>

<style scoped lang="less">
  .group {
    table {
      width: 100%;
      table-layout: fixed;
      font-size: 14px;
      line-height: 34px;
      position: relative;
    }

    .selected {
      color: #ddaf59;
    }
  }
</style>
