export default {
    addCart(state, payload) {
        state.cartList.push(payload)
    },
    clearCart(state){
        state.cartList = [];
    }
}