<template>
  <div>
    <Frame
      mode="horizontal"
      title="Rplay 사이트 고도화 및 유지 보수"
      :isMobile="isMobile"
      img="rplay.svg"
      period="2020.11 ~ 현재 플랙스뉴럴랩스"
      url="https://rplay.live/ko/"
      :imgs="imgs"
    />
  </div>
</template>
<script>
import Frame from "@/components/Frame";
export default {
  name: "Rplay",
  components: { Frame },
  props: {
    isMobile: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      imgs: [
        "rplay_1.png",
        "rplay_2.png",
        "rplay_3.png",
        "rplay_4.png",
        "rplay_5.png",
      ],
    };
  },
};
</script>
<style scoped></style>
