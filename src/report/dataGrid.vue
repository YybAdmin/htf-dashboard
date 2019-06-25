<template>
  <div>
    <button @click="getData()">获取数据</button>
    <BaseDataGrid ref="bdg1"></BaseDataGrid>
  </div>
</template>

<script>
import BaseDataGrid from '@/components/cmpxCom/BaseDataGrid'
export default {
  name: "dataGrid",
  components:{BaseDataGrid},
  methods:{
    getData:function () {
      let bdg1 = this.$refs.bdg1
      this.$http.post(this.$API_LIST.dataGridDemo).then(res=>{
        console.log(res)
        let data = res.data.list
        bdg1.setData(data)
      })
    }
  }
}
</script>

<style scoped lang="less">

</style>
