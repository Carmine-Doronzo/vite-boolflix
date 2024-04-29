//let apiKey = 'c7878d69e7bf01e812daf32433b1bb50'

import { reactive } from "vue"

export const db = reactive({
    query:'',
    film:[],
    serieTv:[],
    hideTv: false,
    hideFilm: false,
    hideActors:false,
    langs:[],
    pagesMovie:0,
    pagesSerie:0,
    pagesArrayMovie:[],
    pagesArraySerie:[],
    pageMovies:0,
    pageSeries:0,
    actorsList:[],
    apiKey:'c7878d69e7bf01e812daf32433b1bb50'


})

