<script>
import axios from 'axios';
import { db } from '../store.js'
export default {

    data() {
        return {

            query:db.query,
            api: db.apiKey,
            titles: [],
            originalTitles: [],
            languages: [],
            votes: [],

        }
    },

    methods: {
        getResponse() {
            
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params:
                    {
                        api_key: this.api,
                        query: this.query
                    }
                }).then((res) => {
                    for (let i = 0; i < res.data.results.length; i++) {
                    //console.log(res.data.results)
                    let results = res.data.results[i]




                    this.titles.push(results.title)
                    this.originalTitles.push(results.original_title)
                    this.languages.push(results.original_language)
                    this.votes.push(results.vote_count)


                    }

                })
           
            console.log('Titoli', this.titles)
            console.log('Titoli originali', this.originalTitles)
            console.log('Lingua', this.languages)
            console.log('Voti', this.votes)
            this.query = ''
        }
    },
    mounted() {

    }

}
</script>

<template>
    <div>
        <input type="text" v-model="query">
        <button @click="getResponse()">Cerca</button>
        <ul>
        <li><h1>titoli</h1></li>
        <li v-for="title in titles">{{ title }}</li>
        <li><h1>titoli originali</h1></li>
        <li v-for="originalTitle in originalTitles ">{{ originalTitle }}</li>
        <li><h1>lingua</h1></li>
        <li v-for="language in languages">{{ language }}</li>
        <li><h1>voti</h1></li>
        <li v-for="vote in votes">{{ vote }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>