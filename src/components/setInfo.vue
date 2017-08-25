<template lang="pug">
div(class='info-wrap')
    input(type='file' style='display:none' ref='file' @change='sendavatar')
    div(class='camera' @click='sendfile')
        svg(class="icon"  aria-hidden="true" style='font-size:2.5rem')
            use(xlink:href="#icon-xiangji")
    div(class='name')
            label(for='name')  姓名
            input(id='name' placeholder='请输入手机号码')
            div(class='clear')
                svg(class="icon" aria-hidden="true")
                    use(xlink:href="#icon-guanbi" style='color:#999')        
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        sendfile() {
            this.$refs.file.click();
        },
        sendavatar() {
            let file = this.$refs.file.files[0],
                that = this,
                reg = /^image.*$/gi;
            if (!reg.test(file.type)) {
                this.$toast("文件类型错误");
                return;
            };
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(){
                console.log(this.result)
            }

        }
    }
}
</script>

<style lang="stylus" scoped>
.info-wrap
    height 90vh
    background #fff
    .camera
        width 5rem
        height 5rem
        display flex
        align-items center
        justify-content center
        border-radius 50%
        margin 0 auto
        background #cccaca
.name
    margin  1rem
    border-bottom 1px solid #ccc
    box-sizing border-box
    padding-bottom 1rem    
    display flex 
    label
        flex 0 0 3rem 
        font-size 1rem
    #name
        flex 1   
</style>
