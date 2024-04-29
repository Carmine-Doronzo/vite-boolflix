<script>
import axios from 'axios';
import { db } from '../store.js'
export default {

    data() {
        return {
            db,
            query: '',



        }
    },


    methods: {
        getMovie() {
            let lang = document.getElementById('language').value
            if (lang !== '1') {


                axios.get('https://api.themoviedb.org/3/discover/movie', {
                    params:
                    {
                        api_key: this.db.apiKey,
                        //query: this.query,
                        language: 'it',
                        with_original_language: lang.toLowerCase(),
                        //page:3
                    }
                }).then((res) => {
                    this.db.pagesArrayMovie = []
                    this.db.pagesMovie = res.data.total_pages

                    this.db.film = []
                    for (let i = 0; i < res.data.results.length; i++) {
                        //console.log(res.data.results)
                        let results = res.data.results[i]
                        let title = results.title
                        let originalTitle = results.original_title
                        let language = results.original_language
                        let vote = results.vote_average
                        let imgPath = results.poster_path
                        let id = results.id
                        let overView = results.overview
                        let actors = 1
                        this.db.film.push({ title, originalTitle, language, vote, imgPath, id, overView, actors })

                    }

                    this.getArrayPagesMovie()

                })
            }

            else {
                lang = '1'
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params:
                    {
                        api_key: this.db.apiKey,
                        query: this.db.query,
                        language: 'it',
                        //with_original_language: lang.toLowerCase(),
                        //page:3
                    }
                }).then((res) => {
                    this.db.pagesArrayMovie = []
                    this.db.pagesMovie = res.data.total_pages
                    //console.log(this.db.pagesMovie)
                    this.db.film = []
                    for (let i = 0; i < res.data.results.length; i++) {

                        let results = res.data.results[i]
                        let title = results.title
                        let originalTitle = results.original_title
                        let language = results.original_language
                        let vote = results.vote_average
                        let imgPath = results.poster_path
                        let id = results.id
                        let overView = results.overview
                        let actors = 1
                        this.db.film.push({ title, originalTitle, language, vote, imgPath, id, overView, actors })

                    }
                    this.getArrayPagesMovie()
                })
            }
        },



        getTvSeries() {
            let lang = document.getElementById('language').value
            if (lang !== '1') {


                axios.get('https://api.themoviedb.org/3/discover/tv', {
                    params:
                    {
                        api_key: this.db.apiKey,
                        //query: this.query,
                        language: 'it',
                        with_original_language: lang.toLowerCase(),
                        //page:3

                    }
                }).then((resTv) => {
                    this.db.pagesArraySerie = []
                    this.db.pagesSerie = resTv.data.total_pages
                    //console.log(resTv)
                    this.db.serieTv = []
                    for (let i = 0; i < resTv.data.results.length; i++) {
                        //console.log(resTv)
                        let results = resTv.data.results[i]
                        let title = results.name
                        let originalTitle = results.original_name
                        let language = results.original_language
                        let vote = results.vote_average
                        let imgPath = results.poster_path
                        let id = results.id
                        let overView = results.overview
                        let actors = 0
                        this.db.serieTv.push({ title, originalTitle, language, vote, imgPath, id, overView, actors })

                    }
                    this.getArrayPagesSerie()




                })
            } else {
                lang = '1'
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params:
                    {
                        api_key: this.db.apiKey,
                        query: this.db.query,
                        language: 'it',
                        //with_original_language: lang.toLowerCase(),
                        //page:3
                    }
                }).then((resTv) => {
                    this.db.pagesArraySerie = []
                    this.db.pagesSerie = resTv.data.total_pages
                    //console.log(resTv.data)
                    this.db.serieTv = []
                    for (let i = 0; i < resTv.data.results.length; i++) {
                        //console.log(resTv)
                        let results = resTv.data.results[i]
                        let title = results.name
                        let originalTitle = results.original_name
                        let language = results.original_language
                        let vote = results.vote_average
                        let imgPath = results.poster_path
                        let id = results.id
                        let overView = results.overview
                        let actors = 0
                        this.db.serieTv.push({ title, originalTitle, language, vote, imgPath, id, overView, actors })

                    }
                    this.getArrayPagesSerie()
                })

            }
        },
        show() {
            this.db.hideTv = false
            this.db.hideFilm = false
            this.db.hideActors = false
        },
        hideFilm() {
            this.db.hideFilm = true
            this.db.hideTv = false


        },
        hideTv() {
            this.db.hideFilm = false
            this.db.hideTv = true

        },

        getLanguage() {
            axios.get('https://api.themoviedb.org/3/configuration/languages', {
                params: {
                    api_key: this.db.apiKey
                }
            }).then((lang) => {

                for (let i = 0; i < lang.data.length; i++) {

                    this.db.langs.push(lang.data[i])

                }
            })
        },
        getArrayPagesMovie() {
            const max = this.db.pagesMovie;
        

            

            while (this.db.pagesArrayMovie.length < max) {
                const page = Math.floor(Math.random() * max) + 1;

                let pagePresent = false;

                for (let i = 0; i < this.db.pagesArrayMovie.length; i++) {
                    if (this.db.pagesArrayMovie[i] === page) {
                        pagePresent = true
                    }
                }

                if (pagePresent === false) {
                    this.db.pagesArrayMovie.push(page);
                }
            }
        },
        getArrayPagesSerie() {
            const max = this.db.pagesSerie;
        

            

            while (this.db.pagesArraySerie.length < max) {
                const page = Math.floor(Math.random() * max) + 1;

                let pagePresent = false;

                for (let i = 0; i < this.db.pagesArraySerie.length; i++) {
                    if (this.db.pagesArraySerie[i] === page) {
                        pagePresent = true
                    }
                }

                if (pagePresent === false) {
                    this.db.pagesArraySerie.push(page);
                }
            }

            //console.log(this.db.pagesArraySerie.sort(this.compare))
        },

        compare(a,b){
            return a-b
        },



        getResponse() {
            if (this.db.query === '') {
                this.db.query = this.randomQuery()

            }
            this.show()


            this.getMovie()

            this.getTvSeries()

            //this.getActors()

            //this.query = ''


        },
        randomQuery() {
            const caracter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z', 'x', 'y', 'j']
            const i = Math.floor(Math.random() * caracter.length)
            return caracter[i]
        }
    },

    mounted() {

        this.db.query = this.randomQuery()


        this.getResponse()

        this.getLanguage()

        //this.query = ''

        //this.getActors()

    }

}
</script>

<template>
    <div class="nav-bar">
        <img src="https://image.tmdb.org/t/p/w154/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">

        <div>
            <ul class="link">
                <li><a href="#" @click="show()">Home</a></li>
                <li><a href="#" @click="hideFilm()">Serie TV</a></li>
                <li><a href="#" @click="hideTv()">Film</a></li>
                <li><a href="#">Originali</a></li>
                <li><a href="#">Aggiunti di recente</a></li>
                <li><a href="#">La mia lista</a></li>
            </ul>
        </div>

        <select name="Language" id="language">
            <option value="1">filtro lingua vuoto</option>
            <option v-for="(lang, i) in db.langs" :key="i" :value="`${lang.iso_639_1}`">{{ lang.english_name }}</option>
        </select>

        <div class="search">
            <input type="text" @keyup.enter="getResponse()" v-model="db.query">
            <button @click="getResponse()" class="start-search">Cerca</button>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/header.scss'
</style>