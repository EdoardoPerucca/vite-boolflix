<script>

import { store } from "../store.js";

import CardItem from './CardItem.vue';
import CardTvSeries from "./CardTvSeries.vue";
import '@fortawesome/fontawesome-free/css/all.css';

export default {

    name: "MainSection",

    data() {
        return {
            store,

        }
    },

    components: {
        CardItem,
        CardTvSeries,
    },


}
</script>

<template>
    <h2>Film</h2>

    <div class="main-container-poster">
        <CardItem v-for="movie in store.movies" :movieObject="movie"></CardItem>
    </div>

    <h2>Serie TV</h2>

    <div class="main-container-poster">
        <CardTvSeries v-for="tv in store.tvSeries" :tvObject="tv"></CardTvSeries>
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: white;
    padding-bottom: 1em;
    padding-left: 1em;
    font-size: 2em;
}

.main-container-poster {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    gap: 1em;
    color: white;


}
</style>