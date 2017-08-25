<template lang="pug">
div(class='u-wrap')
  input(type='file' style='display:none' ref='file' @change='sendavatar($event)')
  div(class='avatar-wrap' @click='sendfile')
    div(class='img')
      img(src='.././assets/avatar.png')
  div(class='userinfo-wrap')
    div(class='item')
      div(class='title') 姓名
      div(class='value') 张三丰
    div(class='item')
      div(class='title') 手机号码
      div(class='value') {{phone | format}}
    div(class='item')
      div(class='title') 性别
      div(class='value') 男
</template>

<script>
export default {
  data() {
    return {
      phone: '15666666666'
    }
  },
  methods: {
    sendfile() {
      this.$refs.file.click();
    },
    sendavatar(event) {
      var input = event.target,
        file = input.files[0],
        that = this,
        reg = /^image/gi;
      if (!reg.test(file.type)) {
        this.$toast("文件类型错误");
        return;
      };
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        // that.axios.post('/api/index/Userconter/heard', {
        //   img: this.result,
        // }).then(res => {
        //   that.pic = res.data.pic;
        // })
      }
    },
  },
  filters: {
    format(phone) {
      return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    }
  }
}
</script>
<style lang="stylus" scoped>
@css{
  .u-wrap{
    background-color :#fff;
    height:90vh;
  }
}
.avatar-wrap
  background #fff
  padding 20px
  .img
    width 5rem
    margin 20px auto
    height 0
    padding-top 5rem
    overflow hidden
    position: relative
    border-radius 50%
    img
      position: absolute
      min-height 100%
      display block
      top: 50%
      left: 50%
      transform translate3d(-50%,-50%,0)
  .username
    font-size 1.5rem
    color #000
    text-align center
.userinfo-wrap
  padding 0 20px      
  .item
    display flex
    justify-content space-between
    height 3rem
    align-items center
    border-top 1px solid #ccc
    &:last-child
      border-bottom 1px solid #ccc
</style>
