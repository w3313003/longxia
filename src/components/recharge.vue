<template lang="pug">
div(class='recharge-wrap')
    div(class='title') 账户充值
    div(class='box')
        div(class='box-item' :class='{"active":item.isclick}' v-for='(item,index) in sum' :key='index' @click='choose(item,index)') 充￥{{item.count}}
    div(class='payway')
        div(class='title') 充值方式
        div(class='pay-wrap')
            img(src='.././assets/alipay.png')
            div(class='titles') 支付宝 
            div(class='radio' :class='{"active" : alipay }' @click='alipay = true') ✔
        div(class='pay-wrap')
            img(src='.././assets/weix.png')
            div(class='titles') 微信 
            div(class='radio' :class='{"active" : !alipay }' @click='alipay = false') ✔
    div(class='confirm') 充值        
</template>
<script>

export default {
    data() {
        return {
            sum: [{
                count: 500,
                isclick: true
            }, {
                count: 300
            }, {
                count: 200
            }, {
                count: 100
            }],
            totalsum: 0,
            alipay: true
        }
    },
    watch:{
        alipay(){
            if(this.alipay){
                this.payway = '支付宝'
            } else {
                this.payway = '微信'
            };
            console.log(this.payway)
        }
    },
    methods: {
        choose(item) {
            this.sum.forEach((v, i) => {
                if (!v.isclick) {
                    this.$set(v, 'isclick', false)
                };
                v.isclick = false
            });
            item.isclick = true;
            this.totalsum = item.count;
        }
    }
}
</script>

<style lang="stylus" scoped>
.recharge-wrap
    height 90vh
    width 100%
    background-color #fff
    box-sizing border-box
    padding 1rem
    .box
        display flex
        flex-wrap wrap
        justify-content space-between
        border-bottom 1px solid #ccc
        padding-bottom 0.7rem
        .box-item
            width 47%
            text-align center
            background #cccaca
            height 3rem
            line-height 3rem  
            margin 0.7rem 0 
            transition all 0.5s
            &.active
                background-color #fc2a2a
                color #fff 
    .payway
        padding 1rem 0 0.5rem   
        .pay-wrap
            display flex
            justify-content space-between
            align-items center
            padding-top 10px
        .titles
            flex 1  
            font-size 1.2rem
            text-indent 1.5rem
            letter-spacing 5px
        .radio
            width 1.2rem
            height 1.2rem
            border-radius 50%
            border 1px solid #ccc
            color #fff
            &.active
                background-color #fc2a2a
                border 1px solid #fc2a2a
                text-align center
                line-height 1.2rem 
    .confirm
        background #fc2a2a
        width 100%
        height 2.5rem
        line-height 2.5rem
        color #fff
        text-align center
        font-size 1.4rem
        border-radius 5px
        margin-top 20px             
</style>
