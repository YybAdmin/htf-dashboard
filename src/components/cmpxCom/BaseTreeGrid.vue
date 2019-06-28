<template>
  <div class="group">
    <TreeGrid id="myTreeGrid"
              :data="data"
              style="height:300px"
              :frozenWidth="width"
              idField="ID"
              treeField="NAME">
      <GridColumnGroup :frozen="true">
        <GridHeaderRow>
          <GridColumn field="NUM" title="ID" :width="50" align="center"></GridColumn>
          <GridColumn field="NAME" title="NAME"></GridColumn>
        </GridHeaderRow>
      </GridColumnGroup>
      <GridColumnGroup>
        <GridHeaderRow>
          <GridColumn field="VALUE1" title="VALUE1" align="right" :width="80"></GridColumn>
          <GridColumn field="VALUE2" title="VALUE2" align="right" :width="80"></GridColumn>
          <GridColumn field="VALUE3" title="VALUE3" align="right" :width="80"></GridColumn>
          <GridColumn field="VALUE4" title="VALUE4" align="right" :width="80"></GridColumn>
        </GridHeaderRow>
      </GridColumnGroup>
    </TreeGrid>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
        data: [],
        width: '170px'
      };
    },
    methods: {
      setData() {
        try {
          $.ajaxSetup({async: false})
          this.$http.post(this.$API_LIST.treeGridDemo, {'gridLv': 1}).then(res => {
            this.data = res.data.list
          })
          $.ajaxSetup({async: true})
        } catch (e) {
          $.ajaxSetup({async: true})
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
  .group {
    .datagrid-view1 {
      width: 170px;
    }
  }
</style>
