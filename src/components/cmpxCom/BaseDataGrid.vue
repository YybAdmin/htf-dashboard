<template>
  <div>
    <h2>Frozen Column</h2>
    <DataGrid :data="data" style="width:600px;height:250px">
      <GridColumn field="itemid" title="Item ID" :frozen="true"></GridColumn>
      <GridColumn field="name" title="Name" :frozen="true"></GridColumn>
      <GridColumn field="listprice" title="List Price" align="right" width="100"></GridColumn>
      <GridColumn field="unitcost" title="Unit Cost" align="right" width="100"></GridColumn>
      <GridColumn field="attr" title="Attribute" width="200"></GridColumn>
      <GridColumn field="status" title="Status" width="100"></GridColumn>
    </DataGrid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  methods:{
    setData:function (data) {
      this.data = data
    }
  }
};
</script>
