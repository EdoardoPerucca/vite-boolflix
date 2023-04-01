<script>
import { store } from "../store.js";

export default {

    name: 'CardTvSeries',

    data() {
        return {
            store,
        }
    },

    props: {
        tvObject: Object,
    },

    components: {
    },

    computed: {
        posterViewSeries() {
            return 'https://image.tmdb.org/t/p/w500' + this.tvObject.poster_path;
        }
    }




}
</script>

<template>
    <div class="single-card">

        <div class="card-img">
            <img :src="posterViewSeries" alt="">
        </div>

        <div id="card-text">
            Titolo: {{ tvObject.name }}
            <br>
            Titolo originale: {{ tvObject.original_name }}
            <br>
            Lingua: {{ tvObject.original_language }}
            <br>
            Voto: {{ tvObject.vote_average }}
        </div>

    </div>
</template>

<style scoped lang="scss">
.single-card {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 250px;
    margin-bottom: 10em;
    font-size: .7em;
    color: white;

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