<template>
  <div class="claimWrapper">
    <h1 class="claim">SPACE</h1>
    <p
      class="subclaim"
    >Begin your journey through our amazing galaxy and discover places never heard of.</p>
    <p class="subclaim">Type anything space-related to start.</p>
  </div>
</template>

<script>
export default {
  name: "Claim"
};
</script>

<style lang="scss" scoped>
.claimWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}
.claim {
  font-size: 50px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 80px;
  }
}

.subclaim {
  margin: 20px 0 0 0;
  font-size: 13px;
  width: 4000;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 1;
    letter-spacing: 1px;
  }
}
</style>
