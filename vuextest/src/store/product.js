import shop from "@/api/shop.js";

export default{
    namespaced:true,
    state:{
        products:[],

    },
    getters:{
        availableProducts (state){
            return state.products.filter( product => product.inventory > 0)
          },
      
          productIsInStock(){
            return (product)=>{
              return product.inventory > 0
            }
          }
    },
    actions:{ 
        fetchProducts({commit}){
            return new Promise((resolve,reject)=>{
              shop.getProducts((products) => {
                commit("setProducts", products);
                resolve();
                reject();
            })
            });
          },

    },
    mutations:{
        setProducts(state, products){
            state.products = products
          },
      
          decrementProductInventory(state, product){
            product.inventory--
          },
    }
}