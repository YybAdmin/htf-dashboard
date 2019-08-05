<template>
    <div>
      <table style="width: 100%;text-align: center;table-layout: fixed;margin-bottom: 10px;">
        <tr v-show="isshow">
          <td colspan="3"><nameArea v-bind:item="item"></nameArea></td>
        </tr>
        <tr>
          <td style="border-right: 1px solid #EEEEEE">
            <span style="font-size: 16px;color: #333333;font-weight: bold">{{itemList[0].VALUE1}}个</span><br/>
            <span style="font-size: 13px;color: #999999">平台数</span>
          </td>
          <td style="border-right: 1px solid #EEEEEE">
            <span style="font-size: 16px;color: #333333;font-weight: bold">{{itemList[0].VALUE2}}个</span><br/>
            <span style="font-size: 13px;color: #999999">产品数</span>
          </td>
          <td>
            <span style="font-size: 16px;color: #333333;font-weight: bold">{{itemList[0].VALUE3}}笔</span><br/>
            <span style="font-size: 13px;color: #999999">交易笔数</span>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
  import nameArea from '@/components/baseCom/NameArea'
  export default {
      name: "dataSummary",
      components:{nameArea},
      props:{
        hasTitle:{
          default:true
        }
      },
      data(){
          return{
            isshow:this.hasTitle,
            item:'异动数据汇总',
            itemList:[{VALUE1:'-',VALUE2:'-',VALUE3:'-'}]
          }
      },
      methods:{
        setData:function (items) {
          this.itemList = items
        }
      }
    }
</script>

<style scoped>
  table tr td {
    border-spacing: inherit;
    border-collapse: collapse;
    padding:0px;
  }
</style>
