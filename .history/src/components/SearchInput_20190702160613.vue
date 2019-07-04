<template>
  <div class="searchWrapper">
    <input id="search" name="search" v-model="searchValue" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: "SearchInput"
};
</script>

<style lang="scss" scoped>
.searchWrapper {
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  width: 250px;

  input {
    height: 30px;
    border: 0;
    background: none;
    border-bottom: 1px solid #fff;
    transition: box-shadow 0.5s;
  }
  input:focus {
    outline: none;
    box-shadow: 0 10px 20px -8px rgba(255, 255, 255, 0.3);
  }
}
</style>
