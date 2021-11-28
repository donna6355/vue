<template>
  <div>
    <router-link
      class="nav"
      v-for="destination in destinations"
      :key="destination.name"
      :to="{ name: 'Details', params: { slug: destination.slug } }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "DestinationNav",
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
.nav {
  display: inline-block;
  padding: 0 8px;
  text-decoration: none;
}
.router-link-exact-active {
  color: green;
}
</style>