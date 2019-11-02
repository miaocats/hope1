<template>
    <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    </div>
</template>

<script>
import CityHeader from '@/components/City/Header.vue'
import CitySearch from '@/components/City/CitySearch.vue'
import CityList from '@/components/City/List.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style lang="stylus" scoped>

</style>
