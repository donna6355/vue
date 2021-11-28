import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import cart from "./cart.js";
import products from "./product.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    cart,
    products
  },
  state: {

  },
  getters:{

  },
  actions,
  mutations: {
  },
});
