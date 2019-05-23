<template>
  <div>
    <table style="width: 100%; height: 30px;  padding-left: 10px;">
      <tr>
        <td>
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-bind:key="item.index" v-for="(item,i) in list">
              <button v-on:click="changeTheme($event, i+1,'manual')" class="normal normalrm">{{item.name}}</button>
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
      enable = this.itemList[i - 1].clickDisable === undefined ? false : this.itemList[i - 1].clickDisable
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
  },
  mounted () {
    $(this.$el).find('button').first().addClass('selected')
  }
}
</script>
<style scoped>
  .normal {
    background-color: white;
    color: #999999;
    font-size: 13px;
    border: 1px solid transparent;
    padding: 3px 11px;
    outline: none;
    margin-top: 3px;
  }

  .selected {
    border-radius: 13px;
    border: 1px solid #CCCCCC;
    color: #ddaf59;
    background-color: #FEF7E9;
    border-color: #ddaf59;
  }
</style>
