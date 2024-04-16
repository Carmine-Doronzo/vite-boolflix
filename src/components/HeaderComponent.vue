<script>
import axios from 'axios';
import { db } from '../store.js'
export default {

    data() {
        return {

            query:'',
            api: db.apiKey,
            title: [],
            originalTitle: [],
            language: [],
            vote: [],

        }
    },

    methods: {
        getResponse() {
            for (let i = 0; i < 20; i++) {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params:
                    {
                        api_key: this.api,
                        query: this.query
                    }
                }).then((res) => {

                    //console.log(res.data.results)
                    let results = res.data.results[i]




                    this.title.push(results.title)
                    this.originalTitle.push(results.original_title)
                    this.language.push(results.original_language)
                    this.vote.push(results.vote_count)




                })
            }
            console.log('Titoli', this.title)
            console.log('Titoli originali', this.originalTitle)
            console.log('Lingua', this.language)
            console.log('Voti', this.vote)
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
    </div>
</template>

<style lang="scss" scoped></style>