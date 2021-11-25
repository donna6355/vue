<template>
  <div>
    <Frame title="Rplay 기능 구현 및 유지 보수" :isMobile="isMobile" />
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
};
</script>
<style scoped></style>
