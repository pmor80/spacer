<template>
  <div :style="style" class="item"></div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      photo: "",
      title: this.item.data[0].title
    };
  },
  mounted() {
    this.photo = this.item.links[0].href;
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 300px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>
