<script>
import { store } from "../store.js";

import "/node_modules/flag-icons/css/flag-icons.min.css";

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


        flagLanguage() {
            switch (this.movieObject.original_language) {
                case "en":
                    return "gb";
                    break;

                case "ja":
                    return "jp";
                    break;

                case "zh":
                    return "cn";
                    break;

                default:
                    return this.movieObject.original_language;
                    break;
            };
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
            <strong>Titolo:</strong> {{ movieObject.name }}
            <br>
            <strong>Titolo originale:</strong> {{ movieObject.original_name }}
            <br>
            <span :class="'fi fi-' + flagLanguage"></span>
            <br>
            <strong>Voto:</strong> {{ movieObject.vote_average }}
            <br>
            <strong>Overview:</strong> {{ movieObject.overview }}
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
    flex-shrink: 0;
    position: relative;


    :hover {
        cursor: pointer;
        border: 1px solid darkgrey;

        img {
            display: none;
        }
    }

    .card-img {
        width: 100%;
        height: 100%;
        margin-bottom: 1em;
        z-index: 2;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-position: bottom;

        }
    }

    ;

    #card-text {
        height: 100%;
        position: absolute;
        left: 1em;
        top: 1em;


        strong {
            color: orangered;
        }
    }
}
</style>