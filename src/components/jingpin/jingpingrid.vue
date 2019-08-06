<template>
  <div>
    <DataGrid :data="data"
              :frozenWidth="width"
              :rowCss="rowCss">
      <GridColumn field="NAME" title="产品名称" :frozen="true" color="#DDAF59" align="center"></GridColumn>
      <GridColumn field="VALUE1" title="月独立设备数(万台)" align="center" width="100" sortable></GridColumn>
      <GridColumn field="VALUE2" title="环比增幅" align="center" width="100" sortable></GridColumn>
    </DataGrid>
  </div>
</template>

<script>
  export default {
    name: 'dataGrid',
    data() {
      return {
        data: [],
        width: '80px'
      };
    },
    methods: {
      setData: function (data) {
        let _this = this
        try {
          this.$http.post(this.$API_LIST.dataGrid.dataGridDemo).then(res => {
            _this.data = res.data.list
          })
        } catch (e) {
          console.log(e)
        }
      },
      rowCss: function (row) {
        if(row.ID % 2 == 0){
          return {'background':'#EEE'}
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
