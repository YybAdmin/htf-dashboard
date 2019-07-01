<template>
  <div>
    <table style="width: 100%; height: 30px;  padding-left: 10px;">
      <tr>
        <td>
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-bind:key="item.index" v-for="(item,i) in list">
              <span v-on:click="changeTheme(i,'self')"
                    :class="[swiperIndex == i ? 'selected' : '', swiperIndex == i ?{themeGold: theme ,themeCoffee:!theme}:'']">
                {{item.name}}
              </span>
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
      swiperIndex: 0,
      theme : this.$myUtil.theme,
      swiperOption: {
        slidesPerView: 4
      },
      list: this.itemList
    }
  },
  methods: {
    changeTheme (i, flag) {
      this.swiperIndex = i
      if (flag === 'self') {
        this.$emit('comChanged', i + 1)
      }
    }
  }
}
</script>
<style scoped lang="less">
  @gold : #ddaf59;
  @goldBack: #fef7e9;
  @coffee : #483c39;
  @coffeeFont: #666;
  @coffeeBack: #e9e2e0;
  .themeGold{
    border: 1px solid @gold;
    color: @gold;
    background-color: @goldBack;
  }
  .themeCoffee{
    border: 1px solid @coffee;
    color: @coffee;
    background-color: @coffeeBack;
  }
  span {
    background-color: white;
    color: #999999;
    font-size: 13px;
    padding: 2px 11px;
    margin: auto;
    border: none;
  }
  .selected{
    border-radius:10px;
    outline: none;
  }
  .swiper-container{
    height:23px;
  }
</style>
