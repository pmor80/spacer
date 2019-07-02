<template>
  <div class="searchWrapper">
    <label for="search">Search</label>
    <input id="search" name="search" v-model="searchValue" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: "SearchInput"
};
</script>

<style lang="scss" scoped>
.search {
  display: none;
  flex-direction: column;
  width: 250px;

  label {
    font-family: Montserrat, sans-serif;
  }

  input {
    height: 30px;
    border: 0;
    border-bottom: 1px solid #000;
  }
}
</style>
