<template>
  <div class="wrapper">
    <div class="search">
      <input name="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}

.search {
  width: 300px;
}
</style>

