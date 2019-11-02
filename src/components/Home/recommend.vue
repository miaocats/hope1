<template>
    <div>
    <div class='title'>热销推荐</div>
    <ul>
        <li class='item border-bottom' v-for='item of recommendList' :key='item.id'>
            <div class='img1' >
                <img class='img2' :src='item.imgUrl'/>
            </div>
            <div class='info '>
                <p class='tit'>{{item.title}}</p>
                <p class='desc'>{{item.desc}}</p>
                <button class='btn'>查看详情</button>
            </div>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommd',
  props: {
    recommendList: Array
  }
}
</script>

<style lang='stylus' scoped>
    .title
        background: grey
        line-height: 32px;
    .item
        display: flex
        .img2
            width: 90px;
            hieght: 90px;
        .btn
            background: orange;
</style>
