<template>
  <div class="tmpDiv">
    <span class="normal normalrm" v-bind:key="item.index" v-for="(item,i) in list" @click="changeTheme($event, i+1,'manual')">
      {{item.name}}
    </span>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'BtnLeft',
  props: ['itemList'],
  data () {
    return {
      list: this.itemList
    }
  },
  methods: {
    changeTheme (ev, i, flag) {
      var datav = ev.target.attributes[0].name
      var comRm = '.normalrm[' + datav + ']'
      $(comRm).removeClass('selected')
      ev.target.classList.add('selected')
      if (flag === 'manual') {
        this.$emit('comChanged', i)
      }
    }
  },
  mounted () {
    $(this.$el.firstChild).addClass('selected')
    $(this.$el.firstChild).addClass('normalLeft')
    $(this.$el.lastChild).addClass('normalRight')
  }
}
</script>

<style scoped>
  .tmpDiv {
    text-align: center;
    margin-top:15px;
    margin-bottom:5px;
  }
  .normal {
    color: #ddaf59;
    font-size: 14px;
    line-height: 30px;
    border: 1px solid #ddaf59;
    padding:3px 10px;
    margin-right:-1px;
  }
  .normalLeft {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .normalRight {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .selected {
    background-color: #ddaf59;
    color: white;
  }
</style>
