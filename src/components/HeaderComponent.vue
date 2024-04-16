<script>
    import axios from 'axios';
    import {db} from '../store.js'
    export default {

        data(){
            return{

                query:db.query,
                api:db.apiKey,
                title :[],
                originalTitle:[],
                language:[],
                vote:[],

            }
        },
        methods:{
            getResponse(){
                axios.get('https://api.themoviedb.org/3/search/movie',{
                    params:
                    {
                        api_key:this.api,
                        query:this.query
                    }
                }).then((res) =>{
                    
                    //console.log(res.data.results)
                    const results = res.data.results
                    let  
                    let 

                    for(let i = 0;i< res.data.results;i++){
                        title.push(results[i].title)
                        originalTitle.push(results[i].original_title)
                        language.push(results[i].original_language)
                        vote.push(results[i].vote_count)
                    }

                    console.log('Titoli',title)
                    console.log('Titoli originali',originalTitle)
                    console.log('Lingua',language)
                    console.log('Voti',vote)

                })
            }
        },
        mounted(){
            
        }
        
    }
</script>

<template>
    <div>
        <input type="text" v-model="query">
        <button @click="getResponse()">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

</style>