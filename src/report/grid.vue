<template>
  <div>
    <BaseDataGrid></BaseDataGrid>
    <BaseTreeGrid></BaseTreeGrid>
  </div>
</template>

<script>
  import BaseTreeGrid from '@/components/cmpxCom/BaseTreeGrid'
  import BaseDataGrid from '@/components/cmpxCom/BaseDataGrid'

  export default {
    name: "grid",
    components: {BaseTreeGrid, BaseDataGrid}
  }
</script>

<style scoped>

</style>
