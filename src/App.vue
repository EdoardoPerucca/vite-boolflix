<script>

import { store } from "./store.js";
import axios from "axios";

import MainSection from './components/MainSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

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

    axios.get('https://api.themoviedb.org/3/search/movie?api_key=af1e5ae9135296ef4299e882993b2f76&query=popular&append_to_response=videos').then(res => {
      console.log(res.data.results);

      this.store.movies = res.data.results;


    });


    axios.get('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=action').then(res => {
      console.log(res.data.results);

      this.store.tvSeries = res.data.results;


    });


  },


  methods: {

    searchInput() {
      this.searchMovie(),
        this.searchTv();
    },


    searchMovie() {
      this.store.path = "/search/movie";
      console.log(this.store.path),

        this.store.query = "&query=" + encodeURIComponent(this.store.userSearch);
      console.log(this.store.query),


        axios.get(this.store.APIbase + this.store.path + this.store.APIKey + this.store.query).then((res) => {
          console.log(res)
          this.store.movies = res.data.results;
        });
    },

    searchTv() {
      this.store.path = "/search/tv";
      console.log(this.store.path),

        this.store.query = "&query=" + encodeURIComponent(this.store.userSearch);
      console.log(this.store.query),


        axios.get(this.store.APIbase + this.store.path + this.store.APIKey + this.store.query).then((res) => {
          console.log(res)
          this.store.tvSeries = res.data.results;
        });
    },
  }

}
</script>

<template>
  <div id="app-container">

    <HeaderSection @searchUserMovie="searchInput()"></HeaderSection>

    <MainSection></MainSection>

  </div>
</template>

<style scoped lang="scss">
#app-container {
  width: 100vw;
  height: 100vh;
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: black;

}
</style>
