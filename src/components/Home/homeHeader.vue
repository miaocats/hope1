<template>
    <div class='header'>
        <div class='header-left'>
            <div class='iconfont'>&#xe6ed;</div>
        </div>
        <div class='header-input '>
            <div class='iconfont'>&#xe70a;</div>
            <p class="txt">输入城市的名字</p>
            </div>
        <div class='header-right'>
            <router-link to='/City'>
            <p class='txt'>{{this.city}}</p>
            <div class='iconfont'>&#xe6eb;</div>
              </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: {
    city: String
  }
}
</script>

<style lang='stylus' scoped>
    .header
        display: flex;
        background-color: #84C1FF;
        color: white;
        height: 30px;
        .header-left
            width: 9%;
            .iconfont
                font-size: 30px;
        .header-input
            display: flex;
            width: 80%;
            background: white;
            height: 100%;
            border-radius: 4px;
            margin-top: 2px;
            .iconfont
                font-size: 33px;
                width: 10%;
                flex-direction: row-reverse;
                text-align: center;
                color: gray;
            .txt
                width: 90%;
                line-height: 160%;
                justify-content: flex-start;
                color: grey;
        .header-right
            width: 16%;
            display: flex;
            height: 100%;
            .txt
                width:89%;
                font-size: 18px;
                text-align: center;
                line-height:100%
            .iconfont
                font-size: 18px;
</style>
