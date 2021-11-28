<template>
  <div>
    <h1 v-if="isLoading">Loading....</h1>
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }} - {{ product.inventory }}
        <button
          @click="addProductToCart(product)"
          :disabled="!productsInStock(product)"
        >
          Add to Cart
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
// import shop from "@/api/shop.js";
// import store from "@/store/index.js";
import { mapState, mapGetters } from "vuex";

export default {
  name: "ProductList",
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
    ...mapGetters("products", { productsInStock: "productIsInStock" }),
  },
  //   computed: {
  //     products() {
  //       return this.$store.state.products;
  //     },
  //     productsInStock() {
  //       return this.$store.getters.productIsInStock;
  //     },
  //   },
  mounted() {
    this.isLoading = true;
    this.$store
      .dispatch("products/fetchProducts")
      .then(() => (this.isLoading = false));
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("cart/addProductToCart", product);
    },
  },
};
</script>
<style scoped>
</style>