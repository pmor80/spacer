<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo">
        <img src="https://images-assest.nasa.gov/image/PIA12235/PIA12235~thumb.jpg" />
      </div>
      <div class="description">
        <h2 class="title">Lorrem ipsum</h2>
        <p class="description">lorrem ipsum</p>
      </div>
      <div class="close" @click="$emit('closeModal')"></div>
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

  @media (min-width: 1024px) {
    max-width: 70%;
    height: 60%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.3);
  }
}

.close {
  position: absolute;
  width: 30px;
  height: 30px;
  padding: 30px;
  right: 30px;
  top: 20px;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 30px;
    right: 20px;
    content: "";
    width: 20px;
    height: 2px;
    background: black;
    display: block;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
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

  .description {
    color: #333;
  }
}
</style>

