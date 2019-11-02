<template>
    <div class="header">
        <router-link to='/'>
    <div class='iconfont'>&#xe6eb;</div>
        </router-link>
    <div class='txt'>城市选择</div>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        display: flex
        background: #00e3e3
        height: 2rem
        justify-content: center
        .iconfont
            width: 3rem
        .txt
            width: 22rem
</style>
