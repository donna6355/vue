<template>
  <div>
    <Goback />
    <div>
      <h2>{{ destination.name }}</h2>
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
      <p>
        {{ destination.description }}
      </p>
    </div>
    <div>
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div
        class="card"
        v-for="experience in destination.experiences"
        :key="experience.slug"
      >
        <router-link
          :to="{ name: 'ExpDetails', params: { expSlug: experience.slug } }"
        >
          <img
            :src="require(`@/assets/${experience.image}`)"
            :alt="experience.name"
          />
          <p>{{ experience.name }}</p>
        </router-link>
      </div>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import store from "../store.js";
import Goback from "../components/Goback.vue";
export default {
  name: "Details",
  components: {
    Goback,
  },
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>

<style>
.card {
  display: inline-block;
  width: 10%;
  overflow: hidden;
}
.card:hover {
  width: 50%;
}
</style>