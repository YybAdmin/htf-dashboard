<template>
  <div>
    <DataGrid :data="data"
              :frozenWidth="width">
      <GridColumn field="NAME" title="产品名称" :frozen="true"></GridColumn>
      <GridColumn field="VALUE1" title="保有量(亿元)" align="right" width="100" sortable
                  formatter="stf"></GridColumn>
      <GridColumn field="VALUE2" title="份额(亿份)" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE3" title="净收入(万元)" align="right" width="100" sortable></GridColumn>
    </DataGrid>
  </div>
</template>

<script>
  export default {
    nama: 'dataGrid',
    data() {
      return {
        data: [],
        width: '150px'
      };
    },
    methods: {
      setData: function (data) {
        let _this = this
        try {
          this.$http.post(this.$API_LIST.dataGridDemo).then(res => {
            _this.data = res.data.list
          })
        } catch (e) {
          console.log(e)
        }
      }
    },
    beforeMount() {
      this.setData()
    }
  };
</script>
<style scoped lang="less">
  .panel-header, .panel-body {
    border-color: #f6f6f6;
  }
</style>
