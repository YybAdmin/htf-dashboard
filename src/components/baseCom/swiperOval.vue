<template>
  <div>
    <table style="width: 100%; height: 30px;  padding-left: 10px;">
      <tr>
        <td style="width: 50px;">
          <button id="btnswiper1" @click="changeTheme($event, 1,'manual')" class="normal selected normalrm">全部</button>
        </td>
        <td>
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-bind:key="item.index" v-for="(item,i) in list">
              <button v-on:click="changeTheme($event, i+2,'manual')" class="normal normalrm">{{item.name}}</button>
            </swiper-slide>
          </swiper>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import $ from 'jquery'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'ButtonSwiper',
  components: { swiper, swiperSlide },
  props: ['itemList'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 4
      },
      list: this.itemList
    }
  },
  methods: {
    changeTheme (ev, i, flag) {
      let enable
      if (i === 1) {
        enable = false
      } else {
        enable = this.itemList[i - 2].clickDisable === undefined ? false : this.itemList[i - 2].clickDisable
      }
      if (!enable) {
        let rmgrp = $(this.$el).find('button')
        $(rmgrp).each(function () {
          $(this).removeClass('selected')
        })
        ev.target.classList.add('selected')
        if (flag === 'manual') {
          this.$emit('comChanged', i)
        }
      }
    }
  }
}
</script>
<style scoped>
  .normal {
    background-color: white;
    color: #999999;
    font-size: 13px;
    outline: none;
    padding: 3px 11px;
    margin-top: 4px;
    border: 1px solid transparent;
  }

  .selected {
    border: 1px solid #CCCCCC;
    border-radius:13px;
    color: #ddaf59;
    background-color: #FEF7E9;
    border-color: #ddaf59;
  }
</style>
