<template>
  <div class="group">
    <div class="swp">
      <swiper :options="SwiperOptions">
        <swiperSlide>
          <div>
            <div class="rk"><img src="@/assets/img/yjy/rank2.svg"></div>
            <div class="tx"><img style="border:3px solid  #FFDF62;" src="@/assets/img/yjy/tx.jpg"></div>
            <div class="name">{{itemlteq3[0].NAME}}</div>
            <div class="num">{{itemlteq3[0].VALUE}}</div>
          </div>
        </swiperSlide>
        <swiperSlide>
          <div>
            <div class="rk"><img src="@/assets/img/yjy/rank1.svg"></div>
            <div class="tx"><img style="border:3px solid  #F8A587;" src="@/assets/img/yjy/tx.jpg"></div>
            <div class="name">{{itemlteq3[1].NAME}}</div>
            <div class="num">{{itemlteq3[1].VALUE}}</div>
          </div>
        </swiperSlide>
        <swiperSlide>
          <div>
            <div class="rk"><img src="@/assets/img/yjy/rank3.svg"></div>
            <div class="tx"><img style="border:3px solid  #E3E3E3;" src="@/assets/img/yjy/tx.jpg"></div>
            <div class="name">{{itemlteq3[2].NAME}}</div>
            <div class="num">{{itemlteq3[2].VALUE}}</div>
          </div>
        </swiperSlide>
      </swiper>
    </div>
    <div class="content">
      <table>
        <tr v-for="(item,i) in itemgt3"
            :key="i">
          <td>{{i+4}}</td>
          <td><img style="height:40px;width:40px;border-radius: 20px;" src="@/assets/img/yjy/tx.jpg"></td>
          <td style="text-align: left;">{{item.NAME}}</td>
          <td style="width:50%;text-align: right;">{{item.VALUE}}</td>
        </tr>
      </table>
      <div class="footer">更多></div>
    </div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "rankList",
    props: ["title"],
    components: {swiper, swiperSlide},
    data() {
      return {
        SwiperOptions: {
          slidesPerView: 3,
          spaceBetween: -6,
          centeredSlides: 1,
          loop: true
        },
        itemList: [
          {RANK: '1', PHOTO: '', NAME: '蔡志文', VALUE: '888'},
          {RANK: '2', PHOTO: '', NAME: '卞正', VALUE: '777'},
          {RANK: '3', PHOTO: '', NAME: '陈潇杨', VALUE: '666'},
          {RANK: '4', PHOTO: '', NAME: '崔文琦', VALUE: '555'},
          {RANK: '5', PHOTO: '', NAME: '董超', VALUE: '445'},
          {RANK: '6', PHOTO: '', NAME: '付鹏飞', VALUE: '444'},
          {RANK: '7', PHOTO: '', NAME: '韩超', VALUE: '333'},
          {RANK: '8', PHOTO: '', NAME: '何往', VALUE: '323'},
          {RANK: '9', PHOTO: '', NAME: '黄耀锋', VALUE: '322'},
          {RANK: '10', PHOTO: '', NAME: '劳杰男', VALUE: '222'}]
      }
    },
    computed: {
      itemlteq3: function () {
        let ret = []
        for (let i = 0; i < 3; i++) {
          ret.push(this.itemList[i])
        }
        return ret
      },
      itemgt3: function () {
        let ret = []
        for (let i = 2; i < this.itemList.length; i++) {
          ret.push(this.itemList[i])
        }
        return ret
      }
    }
  }
</script>

<style scoped lang="less">
  .group {
    .swp {
      background: url("../../assets/img/yjy/headBak.png") no-repeat;
      padding-top: 15px;
      height:190px;
      .rk {
        text-align: right;
        margin: 4px 4px -8px;
      }

      .tx {
        img {
          height: 70px;
          width: 70px;
          border-radius: 35px;
        }
      }

      .name {
        font-size: 15px;
        color: #333;
      }

      .num {
        font-size: 13px;
        color: #ddaf59;
      }
    }

    .content {
      background-color: #FFFFFF;
      padding: 0px 15px;

      .leaf1 {
        border: 7px solid #E8C990;
        border-radius: 0px 12px;
        transform: rotate(-10deg);
        margin-bottom: -5px;
      }

      .leaf2 {
        border: 7px solid #ddaf59;
        border-radius: 0px 12px;
        transform: rotate(30deg);
        margin-left: -14px;
      }

      .leaf3 {
        border: 7px solid #ddaf59;
        border-radius: 0px 12px;
        transform: rotate(70deg);
        margin-right: -14px;
      }

      .leaf4 {
        border: 7px solid #E8C990;
        border-radius: 0px 12px;
        transform: rotate(120deg);
        margin-bottom: -5px;
      }

      .title {
        font-size: 17px;
        color: #DDAF59;
        padding-top: 20px;
        margin-bottom: 20px;
      }

      table {
        width: 100%;
        font-size: 16px;
        color: #000;
        line-height: 51px;
        border-spacing: inherit;
        border-collapse: collapse;
        padding: 0px;

        tr {
          td {
            border-bottom: 1px solid #eee;

            img {
              vertical-align: middle;
            }
          }
        }
      }

      .footer {
        font-size: 14px;
        color: #ddaf59;
        line-height: 43px;
      }
    }
  }
  .swiper-container {
    height:175px;
  }
  .swiper-slide {
    border-radius: 8px;
    background-color: #fff;
    height: 163px;
    width: 125px;
    box-shadow:0px 3px 10px 0px rgba(0,0,0,0.1);
  }

  .swiper-slide:not(.swiper-slide-active) {
    transform: scale(0.9);
  }
</style>
