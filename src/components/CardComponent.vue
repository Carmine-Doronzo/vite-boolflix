<script>
import { db } from '../store.js'
import axios from 'axios'
export default {
    data() {
        return {
            db,
            hideActors:db.hideActors


        }
    },

    methods: {
        getActors() {
            this.db.hideActors = true
            //console.log(this.db.hideActors)
            this.db.hideFilm = true
            this.db.hideTv = true
            if (this.Item.actors === 0) {
                axios.get(`https://api.themoviedb.org/3/tv/${this.Item.id}/credits`,
                    {
                        params: {
                            api_key: this.db.apiKey,
                            language: this.Item.language
                        }

                    }
                ).then((resAct) => {
                    this.db.actorsList = []
                    let result = resAct.data.cast
                    //console.log(result)
                    for (let i = 0; i < result.length; i++) {
                        let idAct = result[i].id
                        let characterAct = result[i].character
                        let nameAct = result[i].name
                        let originaNameAct = result[i].original_name
                        let imgPathAct = `https://image.tmdb.org/t/p/w185${result[i].profile_path}`
                        this.db.actorsList.push({ idAct, characterAct, nameAct, originaNameAct, imgPathAct })
                    }

                    //this.db.serieTv.push(this.db.actorsList)
                })
            } else {
                axios.get(`https://api.themoviedb.org/3/movie/${this.Item.id}/credits`,
                    {
                        params: {
                            api_key: this.db.apiKey,
                            language: this.Item.language
                        }

                    }
                ).then((resAct) => {
                    //console.log(resAct.data.cast)
                    this.db.actorsList = []
                    let result = resAct.data.cast
                    for (let i = 0; i < result.length; i++) {
                        let idAct = result[i].id
                        let characterAct = result[i].character
                        let nameAct = result[i].name
                        let originaNameAct = result[i].original_name
                        let imgPathAct = `https://image.tmdb.org/t/p/w185/${result[i].profile_path}`
                        this.db.actorsList.push({ idAct, characterAct, nameAct, originaNameAct, imgPathAct })
                    }
                    //this.db.hideActors = true
                    //is.db.film.push(this.db.actorsList)
                })

            }



        },
    },
    computed: {
        rating() {


            const ratingVote = this.Item.vote / 2;
            this.Item.vote = ''
            for (let i = 1; i <= ratingVote; i++) {
                this.Item.vote += '★';
            }

            for (let i = ratingVote; i < 5; i++) {
                this.Item.vote += '☆';
            }

            //console.log(this.Item.vote)
            return this.Item.vote
        }
    },
    mounted() {
        console.log(this.db.hideActors)
        // let rating = document.getElementById('rating-')

        // const ratingVote = this.Item.vote / 2;
        // for (let i = 1; i <= ratingVote; i++) {
        //     rating.innerHTML += '&#9733;';
        // }

        // for (let i = ratingVote; i < 5; i++) {
        //     rating.innerHTML += '&#9734;';
        // }

        // console.log(this.Item.vote)

    },
    props: {
        Item: { type: Object },
        // tvSeriesItem: { type: Object }
    }
}



</script>

<template>

    <li class="card">
        <img :src="`https://image.tmdb.org/t/p/w342/${Item.imgPath}` !== 'https://image.tmdb.org/t/p/w342/null' ? `https://image.tmdb.org/t/p/w342/${Item.imgPath}` : '/img/imgNd.png'"
            width="342" height="350" alt="">
        <div class="description">
            <p>Titolo: {{ Item.title }}</p>
            <p>Titolo originale: {{ Item.originalTitle }}</p>
            <p>Lingua: <img :src="`/icon/${Item.language}.svg`" :alt="`${Item.language}`" width="15" height="15"></p>
            <div id="rating-">Voto: {{ rating }}</div>
            <p>{{ Item.overView }} </p>
            <button @click="getActors()">attori</button>

        </div>
        

    </li>



    <!-- <li>
        {{ tvSeries.titleTv }}
        {{ tvSeries.originalTitleTv }}
        {{ tvSeries.languageTv }}
        {{ tvSeries.voteTv }}
    </li>  -->
</template>

<style lang="scss" scoped>
@use '../style/partials/card.scss';


</style>