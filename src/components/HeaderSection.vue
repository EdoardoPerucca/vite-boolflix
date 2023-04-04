<script>

import { store } from "../store.js";
import '@fortawesome/fontawesome-free/css/all.css';

export default {

    name: "HeaderSection",

    data() {
        return {
            store,
        }
    },

    components: {

    },

    emits: ['searchUserMovie'],


}



</script>

<template>
    <div id="header-container">
        <div id="header-left">
            <img src="../../public/Netflix-Logo.png" alt="logo">
        </div>

        <div id="header-center">
            <div>
                <ul>
                    <li>
                        <a href="#">home</a>
                    </li>
                </ul>
            </div>
        </div>

        <div id="header-right">
            <input v-model="store.userSearch" type="text" placeholder="Cerca un film"
                @keyup.enter="$emit('searchUserMovie')">
            <button @click="$emit('searchUserMovie')">Cerca</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
#header-container {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    color: white;

    #header-left {
        img {
            width: 6em;
        }
    }

    #header-center {
        display: flex;
        flex-grow: 1;

        li {
            display: flex;
            gap: 20px;

            a {
                text-decoration: none;
                color: white;
                text-transform: uppercase;
                font-weight: bold
            }
        }

    }

    ;

    #header-right {
        display: flex;
        align-items: flex-start;
        gap: .5em;

        input {
            padding: .3em;
            border-radius: 25px;
            background-color: lightgrey;
            border: none;
        }

        button {
            padding: .3em .8em;
            border-radius: 10px;
            background-color: lightblue;
            border: none;
        }
    }


}
</style>