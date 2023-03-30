<script>

import { store } from "./store.js";

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



}
</script>

<template>
  <div id="app-container">

    <HeaderSection></HeaderSection>

    <MainSection></MainSection>

  </div>
</template>

<style scoped lang="scss">
#app-container {
  width: 100vw;
  height: 100vh;
  padding: 20px;

  background-color: black;

}
</style>
