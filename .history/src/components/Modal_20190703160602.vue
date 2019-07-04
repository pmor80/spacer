<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo"></div>
      <div class="description">
        <h2 class="title">Lorrem ipsum</h2>
        <p class="description">lorrem ipsum</p>
      </div>
      <div class="close"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal"
};
</script>

<style lang="scss" scoped>
.outerWrapper {
  background: #f6f6f6;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.innerWrapper {
  display: flex;
  height: 100%;
  padding: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .photo {
    max-width: 100%;
    height: auto;
    background: black;

    img {
      width: 100%;
    }
  }
}
</style>

