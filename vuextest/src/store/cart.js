import shop from "@/api/shop.js";


export default{
    namespaced:true,
    state:{
        cart:[],
        CheckoutStatus:null
    },
    getters:{
        cartProducts (state, getters, rootState){
            return state.cart.map(cartItem => {
              const product = rootState.products.products.find(product => product.id === cartItem.id)
              return{
                title: product.title,
                price: product.price,
                quantity: cartItem.quantity
              }
            })
          },
          cartTotal(state, getters){
            return getters.cartProducts.reduce((total,product) => {
              return total + (product.price * product.quantity)
            },0)
          },
    },
    actions:{
            //{"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    addProductToCart(context, product){
        //check inventory first
        if(product.inventory > 0){
          //product existence in the cart
          const cartItem = context.state.cart.find(item => item.id === product.id)
          console.log(cartItem);
          if(!cartItem){
            //if not add product in the cart
            context.commit('pushProductToCart', product.id)
          }else{
            //if does increment quantiy
            context.commit('incrementItemQuantity',cartItem)
          }
        }
        //decrement from the inventory
        context.commit('products/decrementProductInventory',product,{root:true})
      },
      checkout({state, commit}){
        shop.buyProducts(
          state.cart,
          ()=>{
            commit('emptyCart')
            commit('setCheckoutStatus','success')
          },
          () => {
            commit('setCheckoutStatus','fail')
          }
        )
      }

    },
    mutations:{
        pushProductToCart(state, productID){
            state.cart.push({
              id:productID,
              quantity:1
            })
          },
          incrementItemQuantity(state, cartItem){
            cartItem.quantity++
          },    emptyCart(state){
            state.cart = []
          },
          setCheckoutStatus(state, status){
            state.CheckoutStatus = status
          }

    }
}