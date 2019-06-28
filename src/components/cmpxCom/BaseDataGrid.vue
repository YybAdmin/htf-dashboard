<template>
  <div>
    <DataGrid :data="data" style="width:100%;">
      <GridColumn field="NAME" title="产品名称" :frozen="true"></GridColumn>
      <GridColumn field="VALUE1" title="保有量(亿元)" align="right" width="100" sortable
                  formatter="stf"></GridColumn>
      <GridColumn field="VALUE2" title="份额(亿份)" align="right" width="100" sortable></GridColumn>
      <GridColumn field="VALUE3" title="净收入(万元)" align="right" width="100" sortable></GridColumn>
    </DataGrid>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    nama: 'dataGrid',
    props: {
      itemList: {
        type: Array
      }
    },
    data() {
      return {
        data: []
      };
    },
    methods: {
      setData: function (data) {
        let _this = this
        try {
          $.ajaxSetup({async: false})
          this.$http.post(this.$API_LIST.dataGridDemo).then(res => {
            _this.data = res.data.list
          })
          $.ajaxSetup({async: true})
        } catch (e) {
          $.ajaxSetup({async: true})
          console.log(e)
        }

      },
      stf: function (a, b, c) {
        console.log(a + b + c)
      }
    },
    beforeMount() {
      this.setData()
    } ,
    mounted() {
      $('.datagrid-view1').css('width', '100px')
    }
  };
</script>
<style scoped lang="less">
  .panel-header, .panel-body {
    border-color: #f6f6f6;
  }
</style>
