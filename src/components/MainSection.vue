<script>

import { store } from "../store.js";
import axios from "axios";

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

    created() {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=af1e5ae9135296ef4299e882993b2f76&query=rings").then(res => {
            console.log(res.data.results);
            this.store.rings = res.data.results;
        });
    }

}
</script>

<template>
    <div id="main-container">

        <CardItem v-for="ring in store.rings" :rings="ring"></CardItem>

    </div>
</template>

<style scoped lang="scss">
#main-container {
    color: white;


}
</style>