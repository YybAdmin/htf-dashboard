<template>
  <div class="mui-content">
    <div ref="showCityPicker3"></div>
  </div>
</template>

<script>
  import 'vue-awesome-mui/mui/plugin/picker/css/mui.picker.css'
  import 'vue-awesome-mui/mui/plugin/picker/css/mui.poppicker.css'
  import 'vue-awesome-mui/mui/plugin/picker/js/mui.picker'
  import 'vue-awesome-mui/mui/plugin/picker/js/mui.poppicker'
  export default {
    name: "grid",
    mounted() {
      var picker = new window.mui.PopPicker();
      picker.setData([{value:'zz',text:'智子'}]);
      picker.show(function (selectItems) {
        console.log(selectItems[0].text);//智子
        console.log(selectItems[0].value);//zz
      })
    }
  }
</script>

<style scoped>

</style>
