<template>
  <div>
    <DataGrid :data="data" :rowCss="rowColor"
                @sortChange="sortChanged"
                :frozenWidth="width">
      <GridColumn align="center" field="num" cellCss="datagrid-td-rownumber" width="30" :frozen="true">
        <template slot="body" slot-scope="scope">
          {{scope.rowIndex + 1}}
        </template>
      </GridColumn>
      <GridColumn field="NAME1" title="姓名" :frozen="true"></GridColumn>
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
        width: '80px',
        count:0
      };
    },
    methods: {
      sortChanged:function(sorts){
        let comp = sorts[0].field
        let ascOrdesc = sorts[0].order
        if(ascOrdesc == 'asc'){
          this.data.sort(function (a,b) {
            return a[comp] - b[comp]
          })
        }else{
          this.data.sort(function (a,b) {
            return  b[comp] - a[comp]
          })
        }
        for (let i = 0; i < this.data.length; i++) {
          this.data[i].ID = i
        }
      },
      rowColor:function(row){
        if(row.ID % 2 == 1){
          return {background:'#eee'}
        }
      },
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
