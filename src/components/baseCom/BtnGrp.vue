<template>
  <div class="tmpDiv">
    <span>
      <span class="normal"
            v-bind:key="i"
            v-for="(item,i) in itemList"
            :class="[btnIndex == i ? 'selected' : '', i == 0 ? 'normalLeft' : '', i == (itemList.length - 1)? 'normalRight': '']"
            @click="changeTheme(i)">
        {{item.name}}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BtnLeft',
  props: {
    itemList: {
      type: Array
    }
  },
  data() {
    return {
      btnIndex: 0
    }
  },
  methods: {
    changeTheme (i) {
      this.btnIndex = i
      this.$emit('comChanged', i + 1)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .tmpDiv {
    text-align: center;
    margin-top:15px;
    margin-bottom:5px;
  }
  .normal {
    color: #ddaf59;
    font-size: 14px;
    line-height: 30px;
    border: 1px solid #ddaf59;
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
  .selected {
    background-color: #ddaf59;
    color: white;
  }
</style>
