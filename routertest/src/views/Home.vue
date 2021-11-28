<template>
  <div class="home">
    <h1>Destinations</h1>
    <div v-for="destination in destinations" :key="destination.id">
      <h2>
        <router-link
          :to="{ name: 'Details', params: { slug: destination.slug } }"
          >{{ destination.name }}</router-link
        >
      </h2>
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
