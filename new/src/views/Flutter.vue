<template>
  <div>
    <Frame
      mode="vertical"
      title="집사 일기 어플리케이션 제작"
      :isMobile="isMobile"
      period="2021.09 ~ 현재 개인 프로젝트"
      img="butler.png"
      url="https://play.google.com/store/apps/details?id=com.donna6355.butler_diary"
      :imgs="imgs"
    />
  </div>
</template>
<script>
import Frame from "@/components/Frame";
export default {
  name: "Flutter",
  components: {
    Frame,
  },
  props: {
    isMobile: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      imgs: [
        "butler_1.png",
        "butler_2.png",
        "butler_3.png",
        "butler_4.png",
        "butler_5.png",
      ],
    };
  },
};
</script>
<style scoped></style>
