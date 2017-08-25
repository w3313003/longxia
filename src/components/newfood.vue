<template lang="pug">
div
  div(class='mask' v-show='fooddescwrap' @click='closeDesc')
    transition(name='fooddesc')
      div(class='descbox' v-if='fooddesc')
        div(class='desc-img-wrap')
          img(src='.././assets/food-item.png')
        div(class='desc-row1')
          div(class='desc-title') {{descfood.title}} 
          div(class='desc-weight') {{descfood.weight}}
        div(class='desc-row2')  
        div(class='desc-price')  ￥{{descfood.price}}
  div(class='shopcart' @click='cartshow')
    div(class='sumwrap') {{foodsum}}
    svg(class="icon shopcarticon"  aria-hidden="true")
          use(xlink:href="#icon-gouwuchekong")
  transition(name='choose')
    div(class='mask' v-if='choose')
      div(class='choosebox')
        div(class='title')   {{currentfood.title}}
        div(class='choosebox-content')
          div(class='taste') 辣度
          div(class='choosewrap')
            div(class='chooseitem' :class='{"active":item.isclick}' v-for='(item,index) in taste' @click='choosetaste(item,index)') {{item.type}}
        div(class='btn')
          div(class='cancel' @click='tastecancel')   取消
          div(class='confirm' @click='tasteconfirm')  确定
  div(class='mask' v-show='orderMask' @click='closeshopcart')
    transition(name='watchorder')
      div(class='a-foodList' v-if='watchorder' @click.stop='stop($event)')
        div(class='a-food-top')
          div(class='a-clear')
          div(class='a-title') 已点菜品
          div(class='a-clear' @click='clear')
            svg(class="icon"  aria-hidden="true")
              use(xlink:href="#icon-lajitong2")
            div(class='a-text') 清除  
        div(class='a-List-content')
          div(class='a-food-item' v-for='(item,index) in cartList')
            div(class='a-foodname') {{item.title}}
                span(v-if='item.taste') ({{item.taste}})
            div(class='a-foodprice') ￥{{item.price}}
            div(class='a-foodcartcontrol') 
              cartcontrol(:food='item')
        div(class='a-food-bottom')
          div(class='a-total') 总计
          div(class='a-totalprice') ￥{{totalPrice}}
          div(class='a-pay' @click.stop='pay') 结算
  div(class='food-content' v-if='isAll')
    div(class='food-item' v-for='(item,index) in foodList' :key='index')
      div(class='tag' v-if='item.hot') HOT
      div(class='tag' v-else-if='item.new') NEW
      div(class='tag' v-else) 九折
      img(src='.././assets/food-item.png'  @click='getFooddesc(item)')
      div(class='food-info')
        div(class='row1')
          div(class='food-title') {{item.title}}
          div(class='food-weight') {{item.weight}}
        div(class='row2')
          div(class='food-price') ￥{{item.price}}
          div(class='ball-warp')
            cartcontrol(:food='item' @add='add' ref='cartcontrol')
</template>
<script>
import cartcontrol from "./cartcontrol"
export default {
    mounted() {
        this.$nextTick(() => {

        })
    },
    data() {
        return {
            orderMask: false,
            watchorder: false,
            choose: false,
            fooddesc: false,
            fooddescwrap: false,
            currentfood: {},
            descfood: {},
            shopList: [],
            itemList: [],
            taste: [{
                type: '重辣',
                isclick: true
            }, {
                type: '中辣',
                isclick: false
            }, {
                type: '微辣',
                isclick: false
            }, {
                type: '正常',
                isclick: false
            }],
            navList: [{
                title: '凉菜',
            }, {
                title: '海鲜',
            }, {
                title: '烧烤',
            }, {
                title: '酒水',
            }, {
                title: '凉菜',
            }, {
                title: '凉菜',
            }],
            foodList: [
                {
                    title: '十三香虾',
                    id: 1,
                    new: false,
                    hot: false,
                    discount: true,
                    weight: '500g',
                    price: '100',
                    pid: '烧烤'
                }, {
                    title: '龙虾',
                    id: 2,
                    new: true,
                    hot: false,
                    discount: false,
                    weight: '500g',
                    price: '150',
                    pid: '凉菜'
                }, {
                    title: '十三香龙虾',
                    id: 3,
                    new: false,
                    hot: true,
                    discount: false,
                    weight: '500g',
                    price: '160',
                    pid: '海鲜'
                }, {
                    title: '十4香龙虾',
                    id: 4,
                    new: true,
                    hot: false,
                    discount: false,
                    weight: '500g',
                    price: '200',
                    pid: '海鲜'
                }, {
                    title: '十5香龙虾',
                    id: 5,
                    new: true,
                    hot: false,
                    discount: false,
                    weight: '500g',
                    price: '300',
                    pid: '酒水'
                }, {
                    title: '十6香龙虾',
                    id: 6,
                    new: true,
                    hot: false,
                    discount: false,
                    weight: '500g',
                    price: '400',
                    pid: '海鲜'
                }
            ],
            isAll: true,
            navshow: false,
        }
    },
    computed: {
        foodsum() {
            return this.$store.state.cartList.length;
        },
        totalPrice() {
            let totalprice = 0;
            this.$store.state.cartList.forEach(v => {
                totalprice += v.count * v.price
            });
            return totalprice.toFixed(2);
        }
    },
    components: {
        cartcontrol
    },
    created() {
        this.foodList.forEach(v => {
            if (!v.isclick) {
                this.$set(v, 'count', 0)
            }
        });
        for (let i of this.foodList) {
            this.$store.state.cartList.forEach(v => {
                if (v.id == i.id) {
                    i.count = v.count
                }
            });
        }

    },
    methods: {
        pay() {
            console.log(this.$store.state.cartList);
            console.log(this.totalPrice);
        },
        closeDesc() {
            this.fooddesc = false;
            setTimeout(() => {
                this.fooddescwrap = false;
            }, 500)
        },
        getFooddesc(item) {
            this.descfood = item;
            this.fooddescwrap = true;
            this.fooddesc = true;
        },
        clear() {
            this.$store.commit('clearCart');
            this.watchorder = false;
            setTimeout(() => {
                this.orderMask = false;
            }, 500);
            this.foodList.forEach(v => {
                v.count = 0;
            })
        },
        stop(event) {
            event.stopPropagation();
        },
        closeshopcart() {
            this.watchorder = false;
            setTimeout(() => {
                this.orderMask = false;
            }, 500)
        },
        add(food) {
            if (food.count <= 1) {
                if (food.pid == '酒水') {
                    this.currentfood = food;
                    this.$store.commit('addCart', this.currentfood);
                } else {
                    this.choose = true;
                    this.currentfood = food;
                }
            } else {
                this.$store.state.cartList.forEach((v, i, arr) => {
                    if (v.id == food.id) {
                        arr.splice(i, 1);
                        food.taste = v.taste;
                        arr.push(food);
                    }
                })
            }
        },
        choosetaste(v, i) {
            this.taste.forEach(v => {
                v.isclick = false;
            });
            v.isclick = true;
        },
        tastecancel() {
            this.choose = false;
            this.$refs.cartcontrol.forEach(v => {
                if (v.food.title === this.currentfood.title) {
                    v.decrease();
                }
            })
        },
        tasteconfirm() {
            this.choose = false;
            this.taste.forEach(v => {
                if (v.isclick == true) {
                    this.currentfood.taste = v.type;
                }
            });
            this.$store.commit('addCart', this.currentfood)
        },
        chooseAll() {
            this.isAll = true;
            for (let i of this.navList) {
                i.isclick = false
            }
        },
        chooseitem(item, index) {
            this.navList.forEach(v => {
                if (v.isclick == undefined) {
                    this.$set(v, 'isclick', false)
                } else {
                    v.isclick = false
                }
            });
            this.navList[index].isclick = true;
            this.isAll = false;
            this.navshow = false;
            this.itemList = [];
            this.foodList.forEach((val, i) => {
                if (val.pid === item.title) {
                    this.itemList.push(val)
                }
            });

        },
        cartshow() {
            this.cartList = this.$store.state.cartList;
            if (this.$store.state.cartList.length < 1) {
                this.$toast('您的购物车没有商品');
                return;
            }
            this.orderMask = true;
            this.watchorder = true;
        }
    }
}
</script>

<style lang="stylus" scoped>
@css{  
  .fooddesc-enter-active,.fooddesc-leave-active{
    transition : all 0.4s linear;
  }
  .fooddesc-enter,.fooddesc-leave-to{
    transform : translateX(100%);
    opacity : 0;
  }

  .watchorder-enter-active,.watchorder-leave-active{
    transition : all 0.4s linear;
  }
  .watchorder-enter,.watchorder-leave-to{
    transform : translateY(100%);
    opacity : 0;
  }
  .choose-enter-active,.choose-leave-active{
    transition : all 0.2s linear;
  }
  .choose-enter,.choose-leave-to{
    transform : scale(0);
    opacity : 0;
  }
  .a-foodList{
    width : 100%;
    position :absolute;
    left :0;
    bottom : 0;
    z-index:5;
  }
  .a-food-top{
    display :flex;
    justify-content : space-between;
    height : 2.66rem;
    background-color : #ccc;
    align-items : center;
  }
  .a-clear{
    flex : 0 0 5rem;
    display :flex;
  }
  .a-food-top > .a-title {
    flex :1;
    text-align : center;
  }
  .a-List-content{
    background-color:#fff;
    padding : 0 1rem;
  }
  .a-food-item{
    height : 3rem;
    border-bottom:1px solid #ccc;
    display :flex;
    justify-content: space-between;
    align-items:center;
  }
  .a-foodprice{
    flex : 1;
    text-align :center;
    color :#fc2a2a;
  }
  .a-foodname{
    flex:0 0 5rem;
  }
  .a-food-bottom{
    padding : 0 1rem;
    background-color :#fff;
    display : flex;
    height : 4rem;
    align-items :center;
    justify-content : space-between;
  }
  .a-total{
    flex:0 0 4rem;
    font-size : 1.4rem;
  }
  .a-totalprice{
    flex:1;
    padding-left:10px;
    color : #fc2a2a;
  }
  .a-pay{
    flex : 0 0 8.5rem;
    color : #fff;
    background-color : #fc2a2a;
    height :2rem;
    border-radius : 5px;
    text-align :center;
    line-height : 2rem;
  }
}
.mask
  width 100vw
  height 90vh
  background-color rgba(0,0,0,.5)
  position absolute
  display flex
  align-items center
  justify-content center
  left 0
  top 0
  z-index 2
  .descbox
    width 23rem
    margin 0 auto
    background-color #fff
    border-radius 10px
    overflow hidden
    .desc-img-wrap
      border-top-right-radius 10px
      border-top-left-radius 10px
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      overflow hidden
      img
        position: absolute
        min-height 100%
        display block
        top: 50%
        left: 50%
        transform translate3d(-50%,-50%,0)
    .desc-row1
      display flex 
      box-sizing border-box
      padding 0 1rem
      height 2rem
      line-height 2rem
      .desc-title
        flex 0 0 7.3rem
      .desc-weight
        flex 1  
        color #666
    .desc-price
      height 2rem
      line-height 2rem
      color #da251c 
      box-sizing border-box
      padding 0 1rem        
  .choosebox
    width 16rem
    margin 0 auto
    height 10rem
    background #fff
    box-sizing border-box
    padding 1.2rem
    border-radius 6px
    .title
      text-align center
    .choosebox-content
      display flex
      height 4.5rem
      align-items center
      .taste
        font-size 1.3rem
      .choosewrap
        display flex
        flex 1
        justify-content space-around
        .chooseitem
          width 20%
          text-align center
          height 1rem
          font-size 0.8rem
          border 1px solid #6a6a6a
          border-radius 10px
          &.active
            border 1px solid #fc2a2a
            background-color #fc2a2a
            color #fff
    .btn
      display flex
      justify-content space-around
      height 1.5rem
      font-size 1rem
      .cancel
        width 3rem
        border-radius 10px
        background-color #ccc
        color #000
        text-align center
        line-height 1.5rem 
      .confirm
        width 3rem
        border-radius 10px
        background-color #fc2a2a
        color #fff 
        text-align center
        line-height 1.5rem          
.shopcart
  width 2.5rem
  height 2.5rem
  position fixed
  bottom 7rem
  right 1rem
  border-radius 50%
  background-color #fff
  display flex
  align-items center
  justify-content center
  z-index 10
  .shopcarticon
    width 1.5rem
    height 1.5rem
  .sumwrap
    width 1.2rem
    height 1.2rem
    line-height 1.2rem
    font-size 0.7rem
    text-align center
    border-radius 50%
    position absolute
    background-color #fc2a2a
    color #fff
    right 0
    top -7px  
.nav-mask
    position fixed
    width 100%
    height 100vh
    background #fff
    z-index 10
    .nm-wrap
        margin 0 auto
        display flex
        flex-wrap wrap
        li
            width 18vw
            font-size 13px
            height 25px
            padding  10px 5px
            text-align center
            border-radius 5px
            line-height 25px
            white-space nowrap
            background #e6e6e6
            margin 10px 5px
            &.active
                color #eb5414
.food-nav
  padding 0 1rem
  display flex
  height 4rem
  flex-wrap nowrap
  background-color #fff
  .all
    flex 0 0 5rem
    height 100%
    line-height 4rem
    text-align center
    &.active
      color #fc2a2a
      border-bottom 1px solid #fc2a2a
  .item-wrap 
    flex 1
    display flex
    flex-wrap nowrap
    line-height 4rem
    height 100%
    white-space nowrap
    overflow-x scroll
    .item
      padding 0 5px
      &.active
        color #fc2a2a
        border-bottom 1px solid #fc2a2a  
  .push
    flex 0 0 2rem
    height 100%
    line-height 4rem
    text-align center
.food-content
  background-color #f0f0f0
  padding 1.5rem
  display flex
  flex-wrap wrap
  justify-content space-between
  .food-item
    width 11rem
    height 14rem
    background-color #fff
    border-radius 10px
    overflow hidden
    margin-bottom 1.5rem
    position relative
    .tag
      position absolute
      top 0.6rem
      left -1.5rem 
      width 6rem
      height 1.5rem
      background-color #da251c
      color #fffc25
      text-align center
      line-height 1.5rem
      transform rotate(-45deg)
    img
      width 100%
      height 10rem
      display block
    .food-info
      padding 0 1rem
      .row1
        display flex
        justify-content space-between
        height 2rem
        align-items center
        .food-title
          font-size 1.2rem
        .food-weight
          color #666
          font-size 0.85rem
      .row2
        display flex
        justify-content space-between
        align-items center
        .food-price
          color #fc2a2a              
</style>
