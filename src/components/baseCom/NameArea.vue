<template>
  <div class="tmpDiv">
    <span class="normal">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'NameArea',
  props: ['item'],
  data () {
    return {
      title: this.item
    }
  }
}
</script>

<style scoped>
  .tmpDiv {
    height:30px;
    margin-top:15px;
    margin-bottom: 5px;
    text-align: left;
  }
  .normal {
    line-height: 30px;
    font-size: 15px;
    color: #DDAF59;
    background:rgba(254,247,233,1);
    border-radius:0px 100px 100px 0px;
    padding:3px 10px 3px 10px;
  }
</style>
