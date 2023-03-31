<script>

import { store } from "../store.js";

import CardItem from './CardItem.vue';
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
    },


}
</script>

<template>
    <div id="main-container">

        <CardItem v-for="movie in store.movies" :movieObject="movie"></CardItem>

    </div>
</template>

<style scoped lang="scss">
#main-container {
    display: flex;
    flex-flow: row wrap;
    gap: 2em;
    color: white;


}
</style>