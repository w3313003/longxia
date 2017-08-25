<template lang="pug">
div(class='pay-wrap')  
    div(class='location')
        div(class='l-row1') 选择就餐地点
            span (如有疑问，请咨询服务人员)
        div(class='l-row2')
            mt-cell
                mt-radio(v-model="value" v-bind:options="options")
    div(class='location')
        div(class='l-row1') 选择桌号
            span (如有疑问，请咨询服务人员)
        div(class='l-row2 select-row')
            select(class='select')
                option 请选择桌号
    div(class='humancount')
        div(class='h-row1') 就餐人数 
            input(class='h-input' placeholder='请输入就餐人数')   
    div(class='fooddesc')
        div(class='f-row1') 已点菜品
        div(class='f-row2' v-for='item in orderList.orderList')
            div(class='f-title') {{item.title}}
                div(v-if='item.taste' style='font-size:1rem;color:#666;height:1.1rem;line-height:1.1rem') ({{item.taste}})
            div(class='f-count') {{item.count}}份
            div(class='f-price') ￥{{item.price}}
        div(class='f-row3')
            div(class='f-title') 总计
            div(class='f-count') {{totalsum}}份
            div(class='f-price') ￥{{totalprice}}
    div(class='discount')
        div(class='d-row1') 优惠折扣
        div(class='d-desc')
            div(class='member') 会员优惠折扣
            div(class='d-count') {{discount}}折
    div(class='pay-way')
        div(class='p-row1')
            div 还需支付
            div(style='color:#fc2a2a') ￥{{dPrice}} 
        div(style='display:flex')    
            mt-cell
                mt-radio(v-model="payWay" v-bind:options="payWays") 
    div(class='pay-btn') 支付                                                 
            
</template>

<script>
export default {
    data() {
        return {
            value: '根据地龙虾馆一店(琥珀山庄店)',
            options: ['根据地龙虾馆一店(琥珀山庄店)',
                '根据地龙虾馆二店(望江西路店)'],
            payWay: '余额支付',
            payWays: ['余额支付', '支付宝', '微信'],
            orderList: [],
            discount: 9
        }
    },
    created() {
        let obj = sessionStorage.getItem('orderList');
        this.orderList = JSON.parse(obj);
        console.log(this.orderList)
    },
    computed: {
        totalsum() {
            let sum = 0;
            this.orderList.orderList.forEach(v => {
                sum += Number.parseInt(v.count)
            });
            return Number.parseInt(sum);
        },
        totalprice() {
            let totalprice = 0;
            this.orderList.orderList.forEach((v, p) => {
                totalprice += v.count * v.price
            });
            return totalprice;
        },
        dPrice() {
            return this.totalprice * (this.discount / 10)
        }
    },
    methods: {
        test1() {
            console.log(this.value)
        }
    }
}
</script>

<style lang="stylus" scoped>
@css{
    .pay-wrap{
        background-color: #fff;
    }
}
.location
    border-bottom 1px solid #ccc
    padding 20px 1rem 10px
    .l-row1
        font-size 1.2rem
        span
            font-size 0.9rem
            color #666   
    .l-row2
        display flex
        &.select-row
            padding 1rem 0 10px 
        .select
            width 7rem
            margin 0 auto
            border 1px solid #ccc
.humancount    
    border-bottom 1px solid #ccc
    padding 15px 1rem 15px 
    .h-row1
        font-size 1.2rem
    .h-input
        border 1px solid #ccc   
        width 6rem
        text-align center 
.fooddesc
    border-bottom 1px solid #ccc
    padding 15px 1rem 15px
    .f-row1
        font-size 1.2rem
    .f-row2,.f-row3
        display flex
        justify-content space-around
        padding 1rem 0  
        border-bottom 1px solid #ccc
        .f-title
            flex 0 0 7.3rem  
        .f-count
            flex 1
            text-align center    
        .f-price
            color #fc2a2a  
    .f-row3 
        border none
        padding-bottom 0        
.discount
    border-bottom 1px solid #ccc
    padding 15px 1rem 15px    
    .d-row1
        font-size 1.2rem
    .d-desc
        padding 0.5rem 1rem
        display flex
        justify-content space-between      
        .d-count
            color #fc2a2a   
.pay-way
    border-bottom 1px solid #ccc
    padding 15px 1rem 15px   
    .p-row1
        display flex
        justify-content space-between
        font-size 1.2rem
.pay-btn
    margin 15px 1rem 15px
    height 2.5rem
    text-align center
    line-height 2.5rem
    background-color #fc2a2a
    color #fff
    border-radius 10px
</style>
