<template>
  <div class="wrapper">
    <Claim />
    <SearchInput />
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
import Claim from "@/components/Claim.vue";
import SearchInput from "@/components/SearchInput.vue";

const API = "https://images-api.nasa.gov/search";

export default {
  name: "Search",
  components: {
    Claim,
    SearchInput
  },
  data() {
    return {
      searchValue: "",
      results: []
    };
  },
  methods: {
    handleInput: debounce(function() {
      axios
        .get(`${API}?q=${this.searchValue}&media_type=image`)
        .then(response => {
          this.results = response.data.collection.items;
        })
        .catch(err => {
          console.log(err);
        });
    }, 500)
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0;
  padding: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/heroimage.jpg");
  background-repeat: none;
}
</style>