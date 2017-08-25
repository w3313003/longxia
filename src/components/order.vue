<template lang="pug">
div  
    div(class='ordernav')
        div(class='item' :class='{"active":item.isclick}' v-for='(item,index) in navList' @click='toggleNav(item)') {{item.type}}
    div(class='order-wrap' v-if='isAll')   
        div(class='order-item' v-for='(item,index) in orderList')
            div(class='row1')
                div(class='order-id') 订单号:{{item.id}}
                div(class='order-time') {{item.time}}
                div(class='order-type') {{item.type}}
            div(class='row2')
                div(class='order-place') {{item.place}}
                div(class='order-table')    {{item.table}}号桌
                div(class='order-peoplesum')    {{item.peoplenum}}人用餐
            div(class='row3') 所点菜品详情
            div(class='food-desc' v-for='(it,i) in item.foodList')
                div(class='foodname') {{it.name}}
                    span(v-if='it.taste && it.taste.length>0') ({{it.taste}})
                div(class='foodsum') {{it.sum}}份
                div(class='price')    ￥{{it.price}}
            div(class='row5') 
                div 总计
                div(class='totalsum')  {{item.foodList.length}}份  
                div() {{item.totalprice | format}}
            div(class='row5' v-if='item.discount > 0')
                div 优惠折扣
                div 会员等级折扣 {{item.discount}}折
            div(class='row5') 
                div 实际支付
                div {{item.totalprice * (item.discount/10) | format}}元 
            div(class='row5' v-if='item.type != "待支付"') 
                div 支付方式
                div {{item.payway}}支付
            div(class='pay-btn-wrap' v-else)
                div(class='pay-btn') 前往支付              
    div(class='order-wrap' v-if='!isAll')   
        div(class='order-item' v-for='(item,index) in itemList')
            div(class='row1')
                div(class='order-id') 订单号:{{item.id}}
                div(class='order-time') {{item.time}}
                div(class='order-type') {{item.type}}
            div(class='row2')
                div(class='order-place') {{item.place}}
                div(class='order-table')    {{item.table}}号桌
                div(class='order-peoplesum')    {{item.peoplenum}}人用餐
            div(class='row3') 所点菜品详情
            div(class='food-desc' v-for='(it,i) in item.foodList')
                div(class='foodname') {{it.name}}
                    span(v-if='it.taste && it.taste.length>0') ({{it.taste}})
                div(class='foodsum') {{it.sum}}份
                div(class='price')    ￥{{it.price}}
            div(class='row5') 
                div 总计
                div(class='totalsum')  {{item.foodList.length}}份  
                div() {{item.totalprice | format}}
            div(class='row5' v-if='item.discount > 0')
                div 优惠折扣
                div 会员等级折扣 {{item.discount}}折
            div(class='row5') 
                div 实际支付
                div {{item.totalprice * (item.discount/10) | format}}元 
            div(class='row5' v-if='item.type != "待支付"') 
                div 支付方式
                div {{item.payway}}支付
            div(class='pay-btn-wrap' v-else)
                div(class='pay-btn') 前往支付          
</template>
<script>
export default {
    filters: {
        format(num) {
            return num.toFixed(2)
        }
    },
    data() {
        return {
            isAll: true,
            navList: [{
                type: '全部订单',
                isclick: true
            }, {
                type: '待支付',
                isclick: false
            }, {
                type: '已支付',
                isclick: false
            }, {
                type: '已就餐',
                isclick: false
            }],
            itemList: [],
            orderList: [{
                id: 1234434,
                time: '2005-04-04',
                type: '待支付',
                place: '根据地龙虾馆二号店',
                table: 3,
                peoplenum: 6,
                foodList: [{
                    name: '十三香龙虾',
                    taste: '重辣',
                    sum: 1,
                    price: 56.6
                }, {
                    name: '十6香龙虾',
                    taste: '',
                    sum: 1,
                    price: 56.6
                }, {
                    name: '十4香龙虾',
                    taste: '重辣',
                    sum: 1,
                    price: 56.6
                }, {
                    name: '十2香龙虾',
                    taste: '重辣',
                    sum: 1,
                    price: 56.6
                }],
                discount: 9,
                payway: '账户余额',
            }, {
                id: 1234434,
                time: '2005-04-04',
                type: '已支付',
                place: '根据地龙虾馆3号店',
                table: 3,
                peoplenum: 6,
                foodList: [{
                    name: '十三香龙虾',
                    taste: '重辣',
                    sum: 1,
                    price: 56.6
                }, {
                    name: '十6香龙虾',
                    taste: '',
                    sum: 1,
                    price: 56.6
                }, {
                    name: '十4香龙虾',
                    taste: '重辣',
                    sum: 1,
                    price: 56.6
                }, {
                    name: '十2香龙虾',
                    taste: '重辣',
                    sum: 1,
                    price: 56.6
                }],
                discount: 9,
                payway: '账户余额',
            }, {
                id: 1234434,
                time: '2005-04-04',
                type: '已就餐',
                place: '根据地龙虾馆3号店',
                table: 3,
                peoplenum: 6,
                foodList: [{
                    name: '十三香龙虾',
                    taste: '重辣',
                    sum: 1,
                    price: 563.6
                }, {
                    name: '十6香龙虾',
                    taste: '',
                    sum: 1,
                    price: 56.6
                }, {
                    name: '十4香龙虾',
                    taste: '重辣',
                    sum: 1,
                    price: 56.6
                }, {
                    name: '十2香龙虾',
                    taste: '重辣',
                    sum: 1,
                    price: 56.6
                }],
                discount: 9,
                payway: '账户余额',
            }]
        }
    },
    created() {
        this.orderList.forEach(v => {
            let sum = 0;
            v.foodList.forEach(v => {
                sum += v.price;
            });
            this.$set(v, 'totalprice', sum)
        })
    },
    methods: {
        toggleNav(item) {
            for (let i of this.navList) {
                i.isclick = false;
            }
            item.isclick = true;
            if (item.type == '全部订单') {
                this.isAll = true;
            } else {
                this.isAll = false;
                this.isAll = true;
                this.itemList = [];
                this.orderList.forEach(v => {
                    if (v.type == item.type) {
                        this.itemList.push(v)
                    }
                });
                this.isAll = false;

            }
        }
    }
}
</script>

<style lang="stylus">
@css{
    .all-enter-active,.all-leave-active{
        transition : all 2s;
    }
    .all-enter,.all-leave-to{
        opacity : 0;
    }
    .item-enter-active,.item-leave-active{
        transition : all 2s;
    }
    .item-enter,.item-leave-to{
        opacity : 0;
    }
}
.ordernav
    display flex
    justify-content space-between
    align-items center
    padding 0.5rem
    padding-bottom 0
    background-color #fff
    .item
        padding-bottom 10px
        text-align center
        margin 0 5px
        &.active
            border-bottom 1px solid #fc2a2a
            color #fc2a2a
.order-wrap            
    margin-top 15px
    .order-item 
        margin 10px 0
        padding 1rem
        background-color #fff
        .row1
            display flex
            justify-content space-between
            align-items center
            .order-id
                font-size 1.4rem
            .order-time
                text-indent 5px
                flex 1
                color #666
            .order-type
                font-size 1.2rem
                color #fc2a2a
        .row2  
            display flex
            justify-content space-between
            align-items center
            height 2rem
            line-height 2rem  
        .row3
            font-size 1.3rem 
            height 2rem
            line-height 2rem 
        .food-desc
            display flex 
            justify-content space-between
            align-items center
            padding 10px
            font-size 1rem
            color #333     
            .foodname 
                flex 0 0 8rem   
            .foodsum
                flex 1
                text-align center 
            .price
                color #fc2a2a     
        .row4
            display flex  
            justify-content space-between
            align-items center  
        .row5     
            display flex  
            justify-content space-between
            align-items center 
            height 2rem
            line-height 2rem 
        .pay-btn-wrap
            display flex
            flex-direction row-reverse
            .pay-btn
                background-color #fc2a2a
                color #fff
                width 7rem
                text-align center
                height 2rem
                line-height 2rem
                border-radius 10px               
</style>
