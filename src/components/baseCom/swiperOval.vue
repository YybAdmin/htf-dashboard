<template>
  <div>
    <table style="width: 100%; height: 30px;  padding-left: 10px;">
      <tr>
        <td style="width: 50px;">
          <button class="normal"
                  :class="[swiperIndex == -1 ? 'selected' : '']"
                  @click="changeTheme(-1, 'self')">
            全部</button>
        </td>
        <td>
          <swiper :options="SwiperOptions" ref="mySwiper">
            <swiper-slide v-bind:key="i" v-for="(item,i) in itemList" style="width: fit-content">
              <button class="normal" :class="[swiperIndex == i ? 'selected' : '']" @click="changeTheme(i, 'self')">
                {{item.name}}
              </button>
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
    itemList: Array
  },
  data () {
    return {
      swiperIndex: -1,
      SwiperOptions: {
        slidesPerView: 5
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
