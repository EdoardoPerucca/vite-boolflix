<script>
import { store } from "../store.js";

export default {

    name: 'CardItem',

    data() {
        return {
            store,
        }
    },

    props: {
        movieObject: Object,
    },

    components: {
    },

    computed: {
        posterView() {
            return 'https://image.tmdb.org/t/p/w500' + this.movieObject.poster_path;
        },


    },



}
</script>

<template>
    <div class="single-card">

        <div class="card-img">
            <img :src="posterView" alt="">
        </div>

        <div id="card-text">
            Titolo: {{ movieObject.title }}
            <br>
            Titolo originale: {{ movieObject.original_title }}
            <br>
            Lingua: {{ movieObject.original_language }}
            <br>
            Voto: {{ movieObject.vote_average }}
        </div>

    </div>
</template>

<style scoped lang="scss">
.single-card {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 250px;
    margin-bottom: 5em;
    font-size: .7em;
    overflow-y: hidden;

    :hover {
        cursor: pointer;
        opacity: 50%;
    }

    .card-img {
        width: 100%;
        height: 100%;
        margin-bottom: 1em;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-position: bottom;
        }
    }
}
</style>