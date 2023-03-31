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


}
</script>

<template>
    <div class="single-card">

        Titolo: {{ movieObject.title }}
        <br>
        Titolo originale: {{ movieObject.original_title }}
        <br>
        Lingua: {{ movieObject.original_language }}
        <br>
        Voto: {{ movieObject.vote_average }}


    </div>
</template>

<style scoped lang="scss">
.single-card {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 150px;
    height: 200px;
    margin-bottom: 2em;
    padding: 10px;
    font-size: .7em;
}
</style>