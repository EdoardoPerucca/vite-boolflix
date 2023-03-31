<script>

import { store } from "./store.js";
import axios from "axios";

import MainSection from './components/MainSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    MainSection,
    HeaderSection,
  },

  created() {
    axios.get(this.APIbase + this.store.path + this.store.APIKey + this.store.query).then(res => {
      console.log(res.data.results);

      this.store.movies = res.data.results;
    });
  },


  methods: {
    searchMovie() {
      this.store.path = "/search/movie";
      console.log(this.store.path),

        this.store.query = "&query=" + encodeURIComponent(this.store.userSearch);
      console.log(this.store.query),


        axios.get(this.APIbase + this.store.path + this.store.APIKey + this.store.query).then((res) => {
          console.log(res)
          this.store.movies = res.data.results;
        });
    }
  }

}
</script>

<template>
  <div id="app-container">

    <HeaderSection @searchUserMovie="searchMovie()"></HeaderSection>

    <MainSection></MainSection>

  </div>
</template>

<style scoped lang="scss">
#app-container {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  overflow-y: auto;

  background-color: black;

}
</style>
