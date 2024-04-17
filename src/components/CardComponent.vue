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
            

            const ratingVote = this.filmItem.vote / 2;
            for (let i = 1; i <= ratingVote; i++) {
                this.filmItem.vote += '★';
            }

            for (let i = ratingVote; i < 5; i++) {
                this.filmItem.vote += '☆';
            }

            //console.log(this.filmItem.vote)
            return this.filmItem.vote
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
    <li><img :src="`https://image.tmdb.org/t/p/w342/${filmItem.imgPath}`" alt=""></li>

    <li>
        <p>{{ filmItem.title }}</p>
        <p>{{ filmItem.originalTitle }}</p>
        <p><img :src="`/icon/${filmItem.language}.svg`" :alt="`${filmItem.language}`" width="15" height="15"></p>
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