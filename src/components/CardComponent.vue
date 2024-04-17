<script>
//import { db } from '../store.js'
export default {
    // data() {
    //     return {
    //          movies: db.film,
    //          tvSeries: db.serieTv

    //     }
    // },
    props: {
        filmItem: { type: Object },
        // tvSeriesItem: { type: Object }
    },
    computed: {
        rating() {


            const ratingVote = this.filmItem.vote_average / 2;
            this.filmItem.vote_average = ''
            for (let i = 1; i <= ratingVote; i++) {
                this.filmItem.vote_average += '★';
            }

            for (let i = ratingVote; i < 5; i++) {
                this.filmItem.vote_average += '☆';
            }

            //console.log(this.filmItem.vote)
            return this.filmItem.vote_average
        }
    },
    mounted() {
        // let rating = document.getElementById('rating-film')

        // const ratingVote = this.filmItem.vote / 2;
        // for (let i = 1; i <= ratingVote; i++) {
        //     rating.innerHTML += '&#9733;';
        // }

        // for (let i = ratingVote; i < 5; i++) {
        //     rating.innerHTML += '&#9734;';
        // }

        // console.log(this.filmItem.vote)

    },
}
</script>

<template>
    

    <li>
        <img :src="`https://image.tmdb.org/t/p/w342/${filmItem.poster_path}` !== 'https://image.tmdb.org/t/p/w342/null' ? `https://image.tmdb.org/t/p/w342/${filmItem.poster_path}` : '/img/imgNd.png'"
            width="342" alt="">
        <p>{{ filmItem.title }}</p>
        <p>{{ filmItem.original_title }}</p>
        <p><img :src="`/icon/${filmItem.original_language}.svg`" :alt="`${filmItem.original_language}`" width="15" height="15"></p>
        <div id="rating-film">{{ rating }}</div>
    </li>



    <!-- <li>
        {{ tvSeries.titleTv }}
        {{ tvSeries.originalTitleTv }}
        {{ tvSeries.languageTv }}
        {{ tvSeries.voteTv }}
    </li>  -->
</template>

<style lang="scss" scoped></style>