<template>
  <div>
    <DataGrid :data="data"
              :frozenWidth="width">
      <GridColumn align="center" field="num" cellCss="datagrid-td-rownumber" width="30" :frozen="true">
        <template slot="body" slot-scope="scope">
          {{scope.rowIndex + 1}}
        </template>
      </GridColumn>
      <GridColumn field="NAME1" title="姓名" :frozen="true"></GridColumn>
      <GridColumn field="NAME2" title="行业" :frozen="true"></GridColumn>
      <GridColumn field="VALUE1" title="指标总数" align="right" width="80" sortable></GridColumn>
      <GridColumn field="VALUE2" title="未确认指标数" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE3" title="未更新指标数" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE4" title="指标点评量" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE5" title="点评被回复次数" align="right" width="110" sortable></GridColumn>
    </DataGrid>
  </div>
</template>

<script>
  export default {
    name: 'yanjiuyuangrid',
    data() {
      return {
        data: [],
        width: '150px',
        count:0
      };
    },
    methods: {
      setData: function (data) {
        let _this = this
        _this.data = data
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
