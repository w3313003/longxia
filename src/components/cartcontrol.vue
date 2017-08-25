<template lang="pug">
  div(class='control' ref='control')
    transition(name='move')
      svg(class="icon" aria-hidden="true" v-if='food.count > 0' @click.stop='decrease')
        use(xlink:href="#icon-jian1")
    transition(name='move')    
      div(class='count' v-if='food.count > 0') {{food.count}}
    svg(class="icon add"  aria-hidden="true" @click.stop='add')
          use(xlink:href="#icon-jia")       
</template>
<style lang="stylus">
@css{
   .move-enter-active,.move-leave-active{
        transition: all 0.4s linear;
   };
   .move-enter,.move-leave-to{
      opacity:0;
      transform: translate3d(100%, 0, 0) rotate(540deg);      
   }
}
.control
  display flex
  justify-content flex-end
  width 5rem
  align-items center
  .icon
    width 1.3rem
    height 1.3rem
    color red
</style>
<script>
export default {
  props: {
    food: {
      type: Object
    }
  },
  mounted(){
    this.$nextTick(()=>{
      if(this.food.count > 0){
         this.$refs.control.style.justifyContent = 'space-around'
      }
    })
  },
  methods: {
    add() {
      if (!this.food.count) {
        this.$set(this.food, 'count', 0)
      }
      this.food.count++;
      console.log(this.food.count)
      this.$refs.control.style.justifyContent = 'space-around'
      this.$emit('add', this.food);
    },
    decrease() {
      this.food.count--;
      this.$emit('decrease', this.food);
      if (this.food.count == 0) {
        this.$refs.control.style.justifyContent = 'flex-end'
      };
    }
  }
}
</script>

