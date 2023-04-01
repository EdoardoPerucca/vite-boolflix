import { reactive } from "vue";

export const store = reactive({

    APIbase: 'https://api.themoviedb.org/3',
    APIKey: '?api_key=af1e5ae9135296ef4299e882993b2f76',
    path: '',
    query: '',



    flagBase: 'https://www.countryflagicons.com/FLAT/64/',
    flagCountryCode: '',
    flagImageFormat: '.png',


    movies: [],
    tvSeries: [],

    userSearch: '',


});