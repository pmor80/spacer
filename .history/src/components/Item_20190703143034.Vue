<template>
  <div v-for="item in results">
    <p>{{ item.links[0].href }}</p>
  </div>
</template>

<script>
export default {
  name: "Item",
  item: {
    type: Object,
    required: true
  },
  data() {
    return {
      photo: this.item.links[0].href,
      title: this.item.data[0].title
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
