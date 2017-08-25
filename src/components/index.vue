<template lang='pug'>
  div
    div(class='swipe-wrap')
      mt-swipe(:auto='2000')
        mt-swipe-item
          img(src='.././assets/banner.png')
        mt-swipe-item
          img(src='.././assets/banner.png')
        mt-swipe-item
          img(src='.././assets/banner.png')
    div(class='item-wrap')
      div(class='item')
        router-link(to='/newfood')
          img(src='.././assets/longxia.png')
          div(class='mask')
            img(src='.././assets/x-longxia.png')
            div(class='title') 新品推荐
      div(class='item')
        img(src='.././assets/koubei.png')
        div(class='mask')
          img(src='.././assets/x-pangxie.png')
          div(class='title') 口碑好菜
      div(class='item')
        img(src='.././assets/discount.png')
        div(class='mask')
          img(src='.././assets/x-fish.png')
          div(class='title') 限时优惠
</template>

<script>
export default {
    created(){
      console.log(this.$root.a)
    }
}
</script>

<style lang="stylus" rel='stylesheet/stylus' scoped>
.swipe-wrap
  width 100%
  height 160px
  img
    width 100%
.item-wrap
  padding 0 15px
  width 100%
  box-sizing border-box
  .item
    border-radius 5px
    position relative
    overflow hidden
    height 12rem
    margin  20px 0
    img
      display block
      width 100%  
      border-radius 10px
      height 12rem
    .mask
      width 100%
      height 100%
      position absolute
      left 0
      top 0
      background-color rgba(0,0,0,.5)
      box-sizing border-box
      padding 0 70px
      display flex 
      align-items center
      justify-content space-around
      img
        width 60px
        height 35px
      .title
        font-size 20px
        color #fc2a2a
</style>
