<template>
  <div>
    <DataGrid :data="data"
              :frozenWidth="width"
              :rowCss="rowCss">
      <GridColumn align="center" cellCss="datagrid-td-rownumber" width="30" :frozen="true">
        <template slot="body" slot-scope="scope">
          {{scope.rowIndex + 1}}
        </template>
      </GridColumn>
      <GridColumn field="NAME" title="研究员姓名" :frozen="true"></GridColumn>
      <GridColumn field="VALUE1" title="行业" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE2" title="指标总数" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE3" title="未确认指标数" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE4" title="未更新指标数" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE5" title="指标点评量" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE6" title="点评被回复次数" align="right" width="100" sortable></GridColumn>
    </DataGrid>
  </div>
</template>

<script>
  export default {
    name: 'yanjiuyuangrid',
    data() {
      return {
        data: [],
        width: '150px'
      };
    },
    methods: {
      setData: function (data) {
        let _this = this
        _this.data = data
      },
      rowCss: function (row) {
        if (row.ID % 2 == 0) {
          return {'background': '#EEE'}
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

  .datekuang {
    line-height: 10px;
  }
</style>
