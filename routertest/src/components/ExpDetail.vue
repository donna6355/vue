<template>
  <div>
    <h2>{{ experience.name }}</h2>
    <img
      :src="require(`@/assets/${experience.image}`)"
      :alt="experience.name"
    />
    <p>{{ experience.description }}</p>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "ExpDetail",
  props: {
    slug: {
      type: String,
      required: true,
    },
    expSlug: {
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
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.expSlug
      );
    },
  },
};
</script>