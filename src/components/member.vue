<template lang="pug">
div
  div(class='avatar-wrap')
    div(class='img')
      img(src='.././assets/avatar.png' style='border-radius:50%')
    div(class='username') 张三丰  
  div(class='memberinfo')
    div(class='yue' @click='wyue')
      div(class='img-wrap')
        img(src='.././assets/yue.png' style='transform:scale(0.7)')
      div 账户余额
      div(class='sum') ￥500
    div(class='jf')
      div(class='img-wrap')
        img(src='.././assets/jf.png' style='transform:scale(0.7)')
      div 积分总计
      div(class='sum') 500
  div(class='memberbox')
    div(class='member-item')
      div(class='m-img' style='transform:scale(0.7)')
        img(src='.././assets/4.png')
      div(class='m-title') 等级折扣
      div(class='m-desc')  9折
    div(class='member-item' @click='recharge')
      div(class='m-img' style='transform:scale(0.7)')
        img(src='.././assets/6.png')
      div(class='m-title') 账户充值
      div(class='m-desc')  9折
    div(class='member-item' @click='userinfo')
      div(class='m-img' style='transform:scale(0.7)')
        img(src='.././assets/7.png')
      div(class='m-title') 个人信息
      div(class='m-desc')  9折  
  
</template>

<script>
export default {
  methods: {
    recharge() {
      this.$router.push('/member/recharge')
    },
    userinfo() {
      this.$router.push('/member/userinfo')
    },
    wyue() {
      this.$router.push('/member/yue')
    }
  }
}
</script>

<style lang="stylus" scoped>
@css{
  .sum{
    color: #fc1d1c;
    padding-top : 10px;
  }
}
.avatar-wrap
  background #fff
  padding 20px
  .img
    width 5rem
    margin 20px auto
    height 0
    overflow hidden
    padding-top 5rem
    position: relative
    border-radius 50%
    img
      position: absolute
      width 100%
      display block
      top: 50%
      left: 50%
      transform translate3d(-50%,-50%,0)
  .username
    font-size 1.5rem
    color #000
    text-align center  
.memberinfo
  display flex
  background-color #fff
  margin-top 10px
  height 8rem
  & > div
    width 50% 
    display flex
    flex-direction column 
    justify-content center
    align-items center
.memberbox
  margin-top 10px
  background-color #fff
  box-sizing border-box
  padding 1rem 1rem 0
  .member-item
    display flex  
    justify-content space-between
    align-items center
    padding 10px
    border-bottom 1px solid #ccc
    &:last-child
      border none
    &:first-child
      padding-top 0    
    .m-title
      flex 1    
</style>
