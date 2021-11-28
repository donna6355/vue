<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in productsInCart" :key="product.title">
        {{ product.title }}-{{ product.price }}-{{ product.quantity }}
      </li>
    </ul>
    <p>Total : {{ Total }}</p>
    <button
      @click="checkOut"
      :disabled="this.$store.state.cart.cart.length === 0"
    >
      checkout
    </button>
    <p>{{ this.$store.state.cart.CheckoutStatus }}</p>
  </div>
</template>
<script>
export default {
  name: "ShoppingCart",
  computed: {
    productsInCart() {
      return this.$store.getters["cart/cartProducts"];
    },
    Total() {
      return this.$store.getters["cart/cartTotal"];
    },
  },
  methods: {
    checkOut() {
      this.$store.dispatch("cart/checkout");
    },
  },
};
</script>
<style scoped>
</style>