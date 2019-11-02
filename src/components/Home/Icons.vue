<template>
<div class='icons'>
    <div class='icon' v-for='item of iconList' :key='item.id'>
        <div class='img'>
            <img class='img1' :src='item.imgUrl'/>
        </div>
        <p class='txt'>{{item.desc}}</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  }

}
</script>

<style lang='stylus' scoped>
 .icons
    display: flex;
    width: 100%;
    height: auto ;
    flex-wrap: wrap;
    justify-content: space-between;
    .icon
        width: 24%;
        flex-grow: 1;
        border: 1px blue solid;
        .img
            text-align: center;
            .img1
                width: 100%;
        .txt
            text-align: center;
            color: grey;
            font-size: 22px;
            margin-bottom: 3px;
</style>
