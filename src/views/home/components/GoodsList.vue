<template>
  <grid-view>
    <goods-list-item v-for="(item, index) in goodsList" :key="index" :goods="item"></goods-list-item>
  </grid-view>
</template>

<script>
import GridView from '@/components/base/GridView'
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
    GridView,
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
