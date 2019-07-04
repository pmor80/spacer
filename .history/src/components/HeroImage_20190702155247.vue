<template>
  <div class="heroImage"></div>
</template>

<script>
export default {
  name: "HeroImage"
};
</script>

<style lang="less" scoped>
.heroImage {
  justify-content: center;
  background-image: url("../assets/heroimage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 0%;
}
</style>
