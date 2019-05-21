<template>
    <div class="tmpDiv">
      <span class="normal normalrm" v-bind:key="item.index" v-for="(item,i) in list" @click="changeTheme($event ,i+1,'manual')">
        {{item.name}}
      </span>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'TabDim',
  props: ['itemList'],
  data () {
    return {
      list: this.itemList
    }
  },
  methods: {
    changeTheme (ev, i, flag) {
      let enable = this.itemList[i - 1].clickDisable === undefined ? false : this.itemList[i - 1].clickDisable
      if (!enable) {
        let datav = ev.target.attributes[0].name
        let comRm = '.normalrm[' + datav + ']'
        $(comRm).removeClass('selected')
        ev.target.classList.add('selected')
        if (flag === 'manual') {
          this.$emit('comChanged', i)
        }
      }
    }
  },
  mounted () {
    $(this.$el.firstChild).addClass('selected')
  }
}
</script>

<style scoped>
  .tmpDiv {
    text-align: left;
    padding-left: 10px;
    border-bottom: 1px solid  #F3F3F3;
  }
  .normal {
    font-size: 16px;
    font-weight: 400;
    color:  #333333;
    line-height: 40px;
    text-align: center;
    margin-right:10px;
  }
  .selected {
    color:#DDAF59;
    position: relative;
  }
  .selected:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 2px;
    left: 25%;
    bottom: -5px;
    background-color: #DDAF59;
  }
</style>
