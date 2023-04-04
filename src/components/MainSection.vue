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
        <i class="fa-solid fa-chevron-left arrow-left"></i>
        <CardItem v-for="movie in store.movies" :movieObject="movie"></CardItem>
        <i class="fa-solid fa-chevron-right arrow-right"></i>
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
    flex-flow: row;
    justify-content: center;
    gap: 1em;
    color: white;
    overflow-x: auto;
    position: relative;

    .arrow-left {
        position: absolute;
        background-color: grey;
        z-index: 3;
        left: 3%;
        bottom: 50%;
        transform: translateY(-50%);
        transform: translatex(-50%);
        padding: .7em;
        border-radius: 25%;
    }

    .arrow-right {
        position: absolute;
        background-color: grey;
        z-index: 3;
        right: 3%;
        bottom: 50%;
        transform: translateY(-50%);

        transform: translatex(-50%);
        padding: .7em;
        border-radius: 25%;
    }


}
</style>