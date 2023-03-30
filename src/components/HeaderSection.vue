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

}
</script>

<template>
    <div id="header-container">
        <div id="header-left">
            LOGO
        </div>

        <div id="header-center">
            <div>
                <ul>
                    <li>
                        <a href="#">home</a>
                        <a href="#">home</a>
                        <a href="#">home</a>
                        <a href="#">home</a>
                        <a href="#">home</a>
                        <a href="#">home</a>
                    </li>
                </ul>
            </div>
        </div>

        <div id="header-right">
            icon
        </div>
    </div>
</template>

<style scoped lang="scss">
#header-container {
    display: flex;
    gap: 20px;
    width: 100%;
    height: 100px;
    background-color: black;
    color: white;

    #header-center {
        display: flex;
        flex-grow: 1;

        li {
            display: flex;
            gap: 20px;

            a {
                text-decoration: none;
                color: white;
            }
        }

    }

}
</style>