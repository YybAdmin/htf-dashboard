<template>
  <div>
    <div class="tmpDiv">
      <table class="tmpTable">
        <tr>
          <td><span>{{this.headData[0].VALUE1}}</span> <span v-bind:class="{'valInc':inc1, 'valDec':!inc1}">{{this.headData[0].VALUE2}}{{this.itemList[0].unit}}</span>
          </td>
          <td><span>{{this.headData[1].VALUE1}}</span> <span v-bind:class="{'valInc':inc2, 'valDec':!inc2}">{{this.headData[1].VALUE2}}{{this.itemList[1].unit}}</span>
          </td>
<!--          <td class="des" style="text-align: left">{{this.itemList[2].name}}:</td>-->
          <td style="font-size: 13px;color:#333;">{{this.headData[2].VALUE1}}{{this.itemList[2].unit}}</td>
        </tr>
        <tr>
          <td class="des">{{this.itemList[0].name}}</td>
          <td class="des">{{this.itemList[1].name}}</td>
          <td class="des">{{this.itemList[3].name}}</td>
<!--          <td v-bind:class="{'valInc':inc3, 'valDec':!inc3}">{{this.headData[2].VALUE2}}{{this.itemList[3].unit}}</td>-->
        </tr>
        <tr>
          <td><span>{{this.headData[3].VALUE1}}</span><span v-bind:class="{'valInc':inc1, 'valDec':!inc1}">{{this.itemList[4].unit}}</span>
          </td>
          <td><span>{{this.headData[4].VALUE1}}</span> <span v-bind:class="{'valInc':inc2, 'valDec':!inc2}">{{this.headData[4].VALUE2}}{{this.itemList[5].unit}}</span>
          </td>
<!--          <td class="des" style="text-align: left">{{this.itemList[2].name}}:</td>-->
          <td style="font-size: 13px;color:#333;">{{this.headData[5].VALUE1}}{{this.headData[5].VALUE2}}{{this.itemList[6].unit}}</td>
        </tr>
        <tr>
          <td class="des">{{this.itemList[4].name}}</td>
          <td class="des">{{this.itemList[5].name}}</td>
          <td class="des">{{this.itemList[6].name}}</td>
<!--          <td v-bind:class="{'valInc':inc3, 'valDec':!inc3}">{{this.headData[5].VALUE2}}{{this.itemList[6].unit}}</td>-->
        </tr>
      </table>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'HeadTableDouble',
    props: ['itemList'],
    data () {
      return {
        inc1: true,
        inc2: true,
        inc3: true,
        headData: []
      }
    },
    methods: {
      setData: function (data) {
        this.headData = data
        if (parseFloat(this.headData[0].VALUE2) >= 0) {
          this.inc1 = true
        } else {
          this.inc1 = false
          this.headData[0].VALUE2 = Math.abs(this.headData[0].VALUE2)
        }
        if (parseFloat(this.headData[1].VALUE2) >= 0) {
          this.inc2 = true
        } else {
          this.inc2 = false
          this.headData[1].VALUE2 = Math.abs(this.headData[1].VALUE2)
        }
        if (parseFloat(this.headData[3].VALUE1) >= 0) {
          this.inc3 = true
        } else {
          this.inc3 = false
          this.headData[3].VALUE1 = Math.abs(this.headData[3].VALUE1)
        }
      }
    }
  }

</script>

<style scoped>
  .tmpTable {
    width: 98%;
    text-align: center;
    font-size: 16px;
    color: #333;
  }

  .des {
    font-size: 13px;
    color: #999;
  }

  .valInc {
    color: red;
    fontSize: 12px
  }

  .valDec {
    color: green;
    fontSize: 12px
  }
</style>
