<template>
    <div class='search'>
        <input class='text' type = 'text' placeholder='输入城市名或拼音'/>
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    .search
        dispaly: flex
        background: #00e3e3
        justify-content: center
        width: 100%
</style>
