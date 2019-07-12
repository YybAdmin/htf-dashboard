<template>
  <div>
    <input id="tags" type="text" class="inputsty" @click="goPage()"
           :placeholder="searchInfo.placeholder"  autofocus="autofocus" v-model="val"/>
  </div>
</template>

<script>
  export default {
    name: "InputSearch",
    props: {
      searchInfo:{
        pagePath: {
          type: String
        },
        placeholder: {
          type: String
        },
        ifGoOtherPage:{
          type: Boolean,
          default: false
        }
      }
    },
    data(){
      return{
        val:''
      }
    },
    methods: {
      goPage: function () {
        if(this.searchInfo.ifGoOtherPage){
          this.$router.push({path: this.searchInfo.pagePath})
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .inputsty {
    width: 100%;
    height: 30px;
    padding-left: 28px;
    text-align: left;
    border: none;
    margin-left: 15px;
    border-radius: 13px;
    outline: none;
    background-image: url("../../assets/img/search.png");
    background-color: #f6f6f6;
    background-size: auto 15px;
    background-repeat: no-repeat;
    background-position: 4px center;
  }
</style>
