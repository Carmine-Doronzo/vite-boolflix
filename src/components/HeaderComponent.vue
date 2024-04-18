<script>
import axios from 'axios';
import { db } from '../store.js'
export default {

    data() {
        return {
            db,
            query: '',
            api: db.apiKey,
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
                    api_key: this.api,
                    query: this.query
                }
            }).then((res) => {
                this.db.film = res.data.results

                // for (let i = 0; i < res.data.results.length; i++) {
                //     //console.log(res.data.results)
                //     let results = res.data.results[i]
                //     let title = results.title
                //     let originalTitle = results.original_title
                //     let language = results.original_language
                //     let vote = results.vote_average
                //     let imgPath = results.poster_path
                //     this.db.film.push({ title, originalTitle, language, vote, imgPath })

                // }

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
                    api_key: this.api,
                    query: this.query
                }
            }).then((resTv) => {

                this.db.serieTv = resTv.data.results

                // for (let i = 0; i < resTv.data.results.length; i++) {
                //     //console.log(resTv)
                //     let results = resTv.data.results[i]
                //     let titleTv = results.name
                //     let originalTitleTv = results.original_name
                //     let languageTv = results.original_language
                //     let voteTv = results.vote_average
                //     let imgPathTv = results.poster_path
                //     this.db.serieTv.push({ titleTv, originalTitleTv, languageTv, voteTv, imgPathTv })

                // }


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

    }

}
</script>

<template>
    <div class="nav-bar">
        <img src="https://image.tmdb.org/t/p/w154/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
        <div class="search">
            <input type="text" v-model="query">
            <button @click="getResponse()" class="start-search">Cerca</button>
        </div>
        <div>
        <ul>
        </ul>
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


.nav-bar {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;
}
.search {
    display: flex;
    gap: 10px;
}
.start-search{
    padding: 3px;
}
</style>