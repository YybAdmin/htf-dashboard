<template>
    <div>
      <span class="myTableTitle">近30天数据</span>
      <table class="tabsty">
        <tbody id="mygrid" style="font-size: 13px;color: #666666;border: none">
        </tbody>
      </table>
    </div>
</template>

<script>
  export default {
    name: "ydGrid",
    props:['title'],
    data(){
      return{
        gridTitle:this.title,
      }
    },
    methods:{
      drawGrid:function (gridData) {
        var tab = document.getElementById('mygrid');
        var childs = tab.childNodes;
        var childsNum = childs.length;
        for(var j = 0; j < childsNum ; j++) {
          tab.removeChild(childs[childsNum - 1 - j]);
        }

        let titlelist = this.title
        var tr0 = document.createElement("tr");
        for(var i = 0 ; i < titlelist.length ;i++){
          var td = document.createElement("td");
          td.innerHTML = titlelist[i];
          tr0.appendChild(td);
          td.style.borderTop = '1px solid #E5E5E5'
          td.style.borderBottom = '1px solid #E5E5E5'
          td.style.borderRight = '1px solid #E5E5E5'
          if(i==0){
            td.style.width = "20%";
            td.style.lineHeight = "34px";
          }else if(i==1){
            td.style.width = "20%";
          }else if(i==2){
            td.style.width = "30%";
          }else if(i==3){
            td.style.width = "30%";
            td.style.borderRight = 'none'
          }

        }
        tab.appendChild(tr0);
        tr0.style.background = "#F0F0F0";
        for(var i = 0 ; i < gridData.length ; i++){
          var tr = document.createElement("tr");
          var td0 = document.createElement("td"); td0.innerHTML = gridData[i].NAME;
          var td1 = document.createElement("td"); td1.innerHTML = gridData[i].VALUE1;
          var td2 = document.createElement("td"); td2.innerHTML = gridData[i].VALUE2;
          var td3 = document.createElement("td"); td3.innerHTML = gridData[i].VALUE3;
          tr.appendChild(td0);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tab.appendChild(tr);
          tr.style.lineHeight = '40px'
          td0.style.borderBottom = '1px solid #E5E5E5'
          td0.style.borderRight = '1px solid #E5E5E5'
          td1.style.borderBottom = '1px solid #E5E5E5'
          td1.style.borderRight = '1px solid #E5E5E5'
          td2.style.borderBottom = '1px solid #E5E5E5'
          td2.style.borderRight = '1px solid #E5E5E5'
          td3.style.borderBottom = '1px solid #E5E5E5'
          if(i%2 == 1){
            tr.style.background = "#F0F0F0";
          }
        }
      }
    }
  }
</script>

<style scoped>
  .myTableTitle {
    font-size: 15px;
    color: #333333;
    font-weight: bold;
    line-height: 35px;
    text-align: left;
    display: inherit;
  }

  .myTableTitle:before {
    content: " ";
    display: inline-block;
    width: 2px;
    height: 17px;
    margin: 3px 10px;
    background-color: #DDAF59;
    vertical-align: middle;
    border-radius: 1px;
  }
  .tabsty{
    width: 100%;
    margin: 0px 0px;
    border-collapse:collapse;
  }
  .tdsty{
    border: 1px solid red;
  }
</style>
