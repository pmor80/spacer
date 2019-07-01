<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input name="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchValue: ''; 
    };
  }
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
  display: flex;
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

