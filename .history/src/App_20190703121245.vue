<template>
  <div class="wrapper">
    <HeroImage />
    <Claim v-if="step === 0" />
    <SearchInput v-model="searchValue" @input="handleInput" />
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
import Claim from "@/components/Claim.vue";
import SearchInput from "@/components/SearchInput.vue";
import HeroImage from "@/components/HeroImage.vue";

const API = "https://images-api.nasa.gov/search";

export default {
  name: "App",
  components: {
    HeroImage,
    Claim,
    SearchInput
  },
  data() {
    return {
      loading: false,
      step: 1,
      searchValue: "",
      results: []
    };
  },
  methods: {
    handleInput: debounce(function() {
      console.log(this.searchValue);
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800");

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
}

.wrapper {
  margin: 0;
  padding: 30px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
