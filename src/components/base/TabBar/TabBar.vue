<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="stylus" scoped>
  #tab-bar
    position fixed
    left 0
    right 0
    bottom 0

    display flex
    text-align center

    height 49px
    border-top 1px solid #eee
    box-shadow 0px -1px 1px rgba(150,150,150,.08)
    background-color #f6f6f6
</style>