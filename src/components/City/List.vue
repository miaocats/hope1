<template>
    <div class='List'>
<div class='area'>
    <div class='title border-topbottom'>当前城市</div>
    <div class='button-List'>
        <div class='button-wrapper'>
            <div class='button'>北京</div>
            </div>
    </div>
</div>
<div class='area'>
    <div class='title border-topbottom'>热门城市</div>
        <div class='button-List'>
        <div class='button-wrapper'>
            <div class='button'>北京</div>
            <div class='button'>北京</div>
            <div class='button'>北京</div>
            <div class='button'>北京</div>
            </div>
    </div>
</div>
<div class= 'area' >
    <div class='title border-topbottom'>A</div>
    <ul>
        <li>阿拉善</li>
        <li>阿拉善</li>
        <li>阿拉善</li>
        <li>阿拉善</li>
        <li>阿拉善</li>
    </ul>
</div>
    </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
    .title
        line-height: .9rem
        background: #eeeeee
        padding-left: .9rem
        color: #666
        font-size: .83rem
    .border-topbottom
         &:before
            border-color: #777
         &:after
            border-color: #771
    .button-List
        overflow: hidden
        padding: .94rem
        .button-wrapper
            display: flex
            width: 33.33%
            .button
                text-align: .1rem
                text-align: center
                border: .1rem solid grey
                border-radius: .9rem
                margin: .1rem
                padding: .1rem
</style>
