<template>
  <div>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  name: "Goback",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>