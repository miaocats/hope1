<template>
    <div>
    <div class='title'>周末去哪儿</div>
    <ul>
        <li class='item border-bottom' v-for='item of weekendList' :key='item.id'>
            <div class='img1'>
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
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang='stylus' scoped>
    .title
        background: grey
        line-height: 32px;
    .item
        display: flex
        flex-direction: column
        .img2
            width: 100%
            hieght: 90px
        .btn
            background: orange;
</style>
