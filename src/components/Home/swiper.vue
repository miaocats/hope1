<template>
    <div class='swiper'>
    <swiper :options="swiperOption" v-if="swiperList.length" >
    <!-- slides -->
    <swiper-slide v-for='item of swiperList' :key='item.id'><img class='swiper-img' :src='item.imgUrl'/></swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang='stylus' scoped>
    .swiper
        float: left
        width: 100%
    .swiper-img
        width: 100%
</style>
