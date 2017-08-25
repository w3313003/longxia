<template lang="pug">
div
    div(class='logo-wrap')
        img(src='.././assets/logo.png')
    div(class='login')
        div(class='row row1')
            input(class='phone' v-model='phone' placeholder='请输入手机号码' @blur='checkph')
            div(class='clear' v-if='phone.length>0' @click='phone=""')
                svg(class="icon" aria-hidden="true")
                    use(xlink:href="#icon-guanbi" style='color:#999')
        div(class='row row1')
            input(class='phone' v-model='password' type='password' placeholder='请输入密码' ref='password')
            div(class='clear')
                svg(class="icon" aria-hidden="true" v-if='password.length>0' @click='password=""')
                    use(xlink:href="#icon-guanbi" style='color:#999')
                span &nbsp;   
                svg(class="icon" aria-hidden="true" style='font-size:1.5rem' @click='toggletype')
                    use(xlink:href="#icon-biyan" style='color:#999' v-if='tpsw==true')
                    use(xlink:href="#icon-yanjing" style='color:#999' v-else)
    div(class='reset') 
        router-link(to='/reset') 忘记密码？
    div(class='confirm') 登录                                 
</template>

<script>
export default {
    data() {
        return {
            phone: '',
            password: '',
            tpsw: true
        }
    },
    methods: {
        checkph() {
            if (!checkph.test(this.phone) && this.phone.length > 0) {
                this.$toast('手机号码格式错误');
                this.phone = '';
            }
        },
        toggletype() {
            console.log(this.tpsw)
            if (this.tpsw == true) {
                this.$refs.password.type = 'text';
                this.tpsw = false;
            } else {
                this.$refs.password.type = 'password';
                this.tpsw = true;
            }
        },
        toggletype2() {
            if (this.trpsw == true) {
                this.$refs.rpsw.type = 'text';
                this.trpsw = false;
            } else {
                this.$refs.rpsw.type = 'password';
                this.trpsw = true;
            }
        },


    }
}
</script>

<style lang="stylus" scoped>
.logo-wrap
    img
        display block
        transform scale(0.7)
        margin 0 auto
.login
    padding 1rem
    .row
        display flex
        justify-content space-between
        padding 1rem 0.2rem
        align-items center 
        border-bottom 1px solid #999
        input
            flex 1
            background #f0f0f0
        .clear
            display flex
            align-items center    
        .getcode
            span
                color #fc2a2a  
.reset
    padding 1rem  
.confirm
        margin 0 1rem
        background-color #fc2a2a
        color #fff
        font-size 1.2rem
        height 2.5rem
        line-height 2.5rem 
        text-align center
        border-radius 5px
        margin-top 30px                           
</style>
