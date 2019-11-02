<template>
<div>
<home-header :city='city'></home-header>
<home-swiper :swiperList='swiperList'></home-swiper>
<home-icons :iconList='iconList'></home-icons>
<home-recommend :recommendList='recommendList'></home-recommend>
<home-weekend :weekendList='weekendList'></home-weekend>
</div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '@/components/Home/homeHeader.vue'
import homeSwiper from '@/components/Home/swiper.vue'
import HomeIcons from '@/components/Home/Icons.vue'
import HomeRecommend from '@/components/Home/recommend.vue'
import HomeWeekend from '@/components/Home/weekend.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
