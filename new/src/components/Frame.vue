<template>
  <div class="container">
    <hooper class="imgSlide" :infiniteScroll="true">
      <slide> slide 1 </slide>
      <slide> slide 2 </slide>
    </hooper>
    <h3>
      {{ title }}
    </h3>
    <h4>stack</h4>
    <ul>
      <li>details</li>
    </ul>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Frame",
  components: {
    Hooper,
    Slide,
  },
  props: {
    isMobile: {
      type: Boolean,
      require: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      require: true,
    },
    // imgs: {
    //   type: Array,
    //   require: true,
    // },
    // details: {
    //   type: Array,
    //   require: true,
    // },
  },
};
</script>
<style scoped>
.imgSlide {
  width: 500px;
  margin: 0 auto;
  background: skyblue;
}
</style>
