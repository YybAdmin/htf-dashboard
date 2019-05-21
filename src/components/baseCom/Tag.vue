<template>
  <div class="tmpDiv">
    <span class="title">{{this.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'tag',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>
.tmpDiv {
  text-align: left;
}
.title{
  width:100%;
  margin:14px 0px 13px 6px;
  font-size: 13px;
  color: #333;
  background: white;
  text-align: left;
}
.title:before {
  content: " ";
  display: inline-block;
  width:2px;
  height:11px;
  margin-right:10px;
  background-color: #DDAF59;
}
</style>
