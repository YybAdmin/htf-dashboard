<template>
    <div>
      ceshi
    </div>
</template>

<script>
    export default {
        name: "test",
      mounted() {
        this.$http.post(this.$API_LIST.yanjiuyuan.test,{
          "chartTimeType": "other",
          "endTime": "2019-07-31T03:34:43.596Z",
          "queryType": "comment",
          "startTime": "2019-07-31T03:34:43.596Z"
        },{headers:{"userId": "297"}}).then(function (res) {
          console.log(res)
        })
      }
    }
</script>

<style scoped>

</style>
