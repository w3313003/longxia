<template lang='pug'>
  div(id="app")
    div(class='index-wrap')
      transition(name='router' mode='out-in')
        router-view
    div(class='nav')
      div(class='navitem'  @click='getindex') 
        div
          svg(class="icon" style='transform:scale(1.1)' :class='{"active":isindex}' aria-hidden="true")
            use(xlink:href="#icon-shouye")
        div 首页          
      div(class='navitem' @click='getfood') 
        div
          svg(class="icon" style='transform:scale(1.2)' :class='{"active":isfood}' aria-hidden="true")
            use(xlink:href="#icon-caidan")
        div 菜单
      div(class='navitem' @click='getorder') 
        div
          svg(class="icon" :class='{"active":isorder}' aria-hidden="true")
            use(xlink:href="#icon-icon-test")
        div 订单
      div(class='navitem' @click='getmember') 
        div
          svg(class="icon" style='transform:scale(1.2)' :class='{"active":ismember}' aria-hidden="true")
            use(xlink:href="#icon-geren")
        div 个人中心
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    if (this.$route.name.indexOf('index') != -1) {
      this.isindex = true;
      this.isfood = false;
      this.isorder = false;
      this.ismember = false;
    };
    if (location.href.indexOf('food') != (-1)) {
      this.isfood = true
      this.isindex = false;
      this.isorder = false;
      this.ismember = false;
    };
    if (location.href.indexOf('order') != (-1)) {
      this.isorder = true;
      this.isindex = false;
      this.isfood = false;
      this.ismember = false;
    };
    if (location.href.indexOf('member') != (-1)) {
      this.ismember = true;
      this.isindex = false;
      this.isfood = false;
      this.isorder = false;
    };
  },
  data() {
    return {
      isindex: false,
      isfood: false,
      isorder: false,
      ismember: false
    }
  },
  methods: {
    getindex() {
      this.isindex = true;
      this.isfood = false;
      this.isorder = false;
      this.ismember = false;
      this.$router.push('/')
    },
    getfood() {
      this.isindex = false;
      this.isfood = true;
      this.isorder = false;
      this.ismember = false;
      this.$router.push('/food')
    },
    getorder() {
      this.isindex = false;
      this.isfood = false;
      this.isorder = true;
      this.ismember = false;
      this.$router.push('/order')
    },
    getmember() {
      this.isindex = false;
      this.isfood = false;
      this.isorder = false;
      this.ismember = true;
      this.$router.push('/member')
    }
  }
}
</script>

<style lang='stylus'>
@css{
    .router-enter-active,.router-leave-active{
        transition:all 0.5s;
    }
    .router-enter,.router-leave-to{
      opacity :0;
      transform : scale(0);
    }   

}
#app
  font-family: 'microsoft yahei'
  font-size 16px
  color: #000
  display flex
  flex-direction column
  width 100%
  height 100%
  .index-wrap
    flex 0 0 90vh
    overflow scroll
    background-color #f0f0f0
    -webkit-overflow-scrolling: touch;
  .nav
    flex 1
    display flex
    background-color #333
    .navitem
      width 25vw
      box-sizing border-box
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      color #fff
      font-size 15px
      .icon
        font-size 22px
        &.active
          color #fc1d1c
</style>
