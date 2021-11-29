<template>
  <div
    class="cont"
    :style="{ display: !isMobile && mode == 'vertical' ? 'flex' : 'block' }"
  >
    <hooper
      class="imgSlide"
      :style="{ width: !isMobile && mode == 'vertical' ? '375px' : '100%' }"
      :infiniteScroll="true"
      :wheelControl="false"
    >
      <slide v-for="img in imgs" :key="img"
        ><img
          :src="require(`@/assets/${img}`)"
          alt="img"
          style="width: 100%; object-fit: contain"
      /></slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <div>
      <div class="flexRow">
        <div style="width: 60px; height: 60px" class="center">
          <img
            :src="require(`@/assets/${img}`)"
            alt="img"
            style="width: 100%; object-fit: contain"
          />
        </div>
        <h3 style="margin-left: 8px">
          {{ title }}
        </h3>
      </div>
      <h5>{{ period }}</h5>
      <a :href="url" target="_blank">{{ url }}</a>
      <h4>주요 기술 스택</h4>
      <ul>
        <li>details</li>
        <li>details</li>
        <li>details</li>
        <li>details</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Frame",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  props: {
    mode: {
      type: String,
      require: true,
    },
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
    period: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    imgs: {
      type: Array,
      require: true,
    },
    // details: {
    //   type: Array,
    //   require: true,
    // },
  },
  computed: {
    howToAlign() {
      return this.isMobile && this.mode !== "vertical"
        ? null
        : "display:flex;flex-flow: row wrap;";
    },
  },
};
</script>
<style scoped>
.cont {
  text-align: left;
}
.imgSlide {
  margin: 0 auto;
  background: skyblue;
}
</style>
