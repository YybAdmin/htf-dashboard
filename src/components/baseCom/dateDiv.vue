<template>
  <div v-bind:class="{'relative':isRelative, 'absolute':!isRelative}" v-if="refresh">
    <span class="normal">数据日期：</span><span>{{date}}</span>
  </div>
</template>

<script>
export default {
  name: 'DateBottom',
  data () {
    return {
      isRelative: true,
      refresh: true,
      date: '9999-01-01'
    }
  },
  methods: {
    changeBottomStyle () {
      if (document.getElementById('app').clientHeight < window.innerHeight) {
        this.isRelative = false
      } else {
        this.isRelative = true
      }
      this.refresh = false
      this.$nextTick(() => (this.refresh = true))
    }
  }
}

</script>

<style scoped>
  .relative {
    width: 100%;
    height: 30px;
    background-color: #f6f6f6;
    font-size: 10px;
    color: #999999;
    text-align: center;
    position: absolute;
  }
  .absolute{
    width: 100%;
    height: 30px;
    background-color: #f6f6f6;
    font-size: 10px;
    color: #999999;
    bottom: 0;
    text-align: center;
    position: absolute;
  }
  span {
    line-height: 30px;
    font-size: 12px;
  }
</style>
