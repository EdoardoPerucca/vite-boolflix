<script>


export default {

    name: 'CardItem',

    data() {
        return {

        }
    },

    props: {
        rings: Object,
    },

    components: {
    },


}
</script>

<template>
    <div class="poster">

        <img urlw500:src="rings.poster_path" alt="">
        {{ rings.original_title }}

    </div>
</template>

<style scoped lang="scss">
.poster {
    display: flex;
    flex-direction: row;

    margin-bottom: 2em;
}
</style>