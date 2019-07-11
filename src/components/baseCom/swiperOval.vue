<template>
  <div>
    <table style="width: 100%; height: 30px;  padding-left: 10px;">
      <tr>
        <td style="width: 50px;height:30px;">
          <span :class="[swiperIndex == -1 ? 'selected' : '', swiperIndex == -1 ?{themeGold: theme ,themeCoffee:!theme}:'']"
                @click="changeTheme(-1, 'self')">
            全部</span>
        </td>
        <td>
          <swiper :options="SwiperOptions" ref="mySwiper">
            <swiper-slide v-bind:key="i" v-for="(item,i) in itemList" style="width: fit-content">
              <span :class="[swiperIndex == i ? 'selected' : '', swiperIndex == i ?{themeGold: theme ,themeCoffee:!theme}:'']"
                    @click="changeTheme(i, 'self')">
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
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'ButtonSwiper',
  components: { swiper, swiperSlide },
  props: {
    itemList: Array,
    slidesPerView:{type: Number, default: 5}
  },
  data () {
    return {
      swiperIndex: -1,
      theme:this.$myUtil.theme,
      SwiperOptions: {
        slidesPerView: this.slidesPerView
      }
    }
  },
  methods: {
    changeTheme (i, flag) {
      this.swiperIndex = i
      if (flag === 'self') {
        this.$emit('comChanged', i + 2)
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
    border-color:@gold;
    color: @gold;
    background-color: @goldBack;
  }
  .themeCoffee{
    border-color:@coffee;
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
    border: 1px solid white;
    white-space: nowrap;
  }
  .selected{
    border-radius:10px;
    outline: none;
  }
  .swiper-container {
    height:23px;
    width: 310px;
  }
  .swiper-slide {
    text-align: center;
  }
</style>
