<script>
import axios from 'axios';
import { db } from '../store.js'
export default {

    data() {
        return {
            db,
            query: '',
            
            // movie: db.film,
            // tvSeries: db.serieTv


        }
    },


    methods: {
        getMovie() {
            this.movie = []
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params:
                {
                    api_key: this.db.apiKey,
                    query: this.query
                }
            }).then((res) => {
                //this.db.film = res.data.results
                //this.db.feedbackFilm = res.data.results.length
                // for(let i = 0; i < res.data.results.length; i++){
                //     this.db.countFilm++
                // }
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
                    this.db.film.push({ title, originalTitle, language, vote, imgPath, id, overView })

                }

                //this.movie = []
                //  this.titles.push(results.title)
                //  this.originalTitles.push(results.original_title)
                //  this.languages.push(results.original_language)
                //  this.votes.push(results.vote_count)

                console.log(this.db.film)
                // }

            })
        },
        getTvSeries() {

            axios.get('https://api.themoviedb.org/3/search/tv', {
                params:
                {
                    api_key: this.db.apiKey,
                    query: this.query
                }
            }).then((resTv) => {

                //this.db.serieTv = resTv.data.results

                //this.db.feedbackSerie = resTv.data.results.length
                // for(let i = 0; i < resTv.data.results.length; i++){
                //     this.db.countSerie++
                // }
                    this.db.serieTv =[]
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
                    this.db.serieTv.push({ title, originalTitle, language, vote, imgPath, id, overView  })

                }


                //this.tvSeries = []



            })
        },

        getResponse() {


            this.getMovie()

            this.getTvSeries()

            this.query = ''
            //console.log('Titoli', this.titles)
            //console.log('Titoli originali', this.originalTitles)
            //console.log('Lingua', this.languages)
            //console.log('Voti', this.votes)
            // this.query = db.query
            // this.titles = []
            // this.originalTitles =[]
            // this.languages =[]
            // this.votes = []
        }
    },

    mounted() {

        this.query = ''

        this.getResponse()

        this.query = ''

    }

}
</script>

<template>
    <div class="nav-bar">
        <img src="https://image.tmdb.org/t/p/w154/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
        
        <div >
            <ul class="link">
                <li><a href="">Home</a></li>
                <li><a href="">Serie TV</a></li>
                <li><a href="">Film</a></li>
                <li><a href="">Originali</a></li>
                <li><a href="">Aggiunti di recente</a></li>
                <li><a href="">La mia lista</a></li>
            </ul>
        </div>

        <div class="search">
            <input type="text" v-model="query">
            <button @click="getResponse()" class="start-search">Cerca</button>
        </div>
        
        <!--<ul>
        <li><h1>titoli</h1></li>
        <li v-for="title in titles">{{ title }}</li>
        <li><h1>titoli originali</h1></li>
        <li v-for="originalTitle in originalTitles ">{{ originalTitle }}</li>
        <li><h1>lingua</h1></li>
        <li v-for="language in languages">{{ language }}</li>
        <li><h1>voti</h1></li>
        <li v-for="vote in votes">{{ vote }}</li>
        </ul>-->
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/header.scss'
</style>