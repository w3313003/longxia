<template lang="pug">
div
    div(class='msg-wrap')
        div(class='logo')
            img(src='.././assets/yue.png')
        div(class='msg')
            div(class='yue') 账户余额
            div(class='num') 500
        div(class='recharge') 充值
    div(class='r-List')
        p(class='title') 账户交易明细
        div(class='item' v-for='(item,index) in payList' :key='index')
            div(class='row1')
                div(class='way') 通过{{item.way}}
                    span(v-if='item.type=="add"') 充值
                    span(v-else) 消费
                div(class='price') 余额
                    span(v-if='item.type=="add"') 加
                    span(v-else) 减
                    span ￥{{item.price}}元
            div(class='time')   2015-4-4
</template>

<script>
export default {
    data() {
        return {
            payList:[{
                price:10,
                way:'支付宝',
                type:'decrease'
            },{
                price:20,
                way:'微信',
                type:'decrease'
            },{
                price:30,
                way:'支付宝',
                type:'add'
            },{
                price:10,
                way:'微信',
                type:'add'
            },{
                price:10,
                way:'支付宝',
                type:'decrease'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
.msg-wrap
    background-color #fff
    display flex
    padding 1rem 1.5rem
    justify-content space-between
    align-items center
    .logo
        transform scale(0.7)
    .msg
        flex 1
        padding-left  15px
        .yue
            font-size 1.2rem
        .num
            color red
            font-size 1.2rem
            padding-top 5px 
    .recharge
        flex 0 0 5rem
        text-align center
        border 1px solid #ccc    
        height 1.4rem
        line-height 1.4rem 
.r-List
    background-color #fff   
    margin-top 10px     
    .title
        height 2rem
        line-height 2rem
        text-align center
    .item
        padding 1rem 1.5rem
        .row1
            display flex
            justify-content space-between
            .way
                flex 1
            .price
                flex 0 0 8rem
                text-align right          
</style>
