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
        //filmItem: { type: Object },
        tvSeriesItem: { type: Object }
    },computed: {
        rating() {
            

            const ratingVote = this.tvSeriesItem.voteTv / 2;
            for (let i = 1; i <= ratingVote; i++) {
                this.tvSeriesItem.voteTv += '★';
            }

            for (let i = ratingVote; i <= 5; i++) {
                this.tvSeriesItem.voteTv += '☆';
            }

            //console.log(this.tvSeriesItem.voteTv)
            return this.tvSeriesItem.voteTv
        }
    },




    mounted() {
        // let rating = document.getElementById('rating')

        // const ratingVote = this.tvSeriesItem.voteTv / 2;
        // for (let i = 1; i <= ratingVote; i++) {
        //     rating.innerHTML += '&#9733;';
        // }

        // for (let i = ratingVote; i <= 4; i++) {
        //     rating.innerHTML += '&#9734;';
        // }

        // console.log(this.tvSeriesItem.voteTv)

    },
}

</script>

<template>
    <li></li>

    <!-- <li>
        {{ movies.title }}
        {{ movies.originalTitle }}
        {{ movies.language }}
        {{ movies.vote }}
    </li> -->



    <li class="relative">
        <img :src="`https://image.tmdb.org/t/p/w342/${tvSeriesItem.imgPathTv}`" class="hover" alt="">

        <p>{{ tvSeriesItem.titleTv }}</p>
        <p>{{ tvSeriesItem.originalTitleTv }}</p>
        <p><img :src='`/icon/${tvSeriesItem.languageTv}.svg`' :alt="`${tvSeriesItem.languageTv}`" width="15"
                height="15"></p>

        <span id="rating"> </span>

    </li>
</template>

<style lang="scss" scoped>
// .d-none {
//     display: none;
// }

// .hover:hover .absolute{

//     display: block;

// }

// .relative {
//     position: relative;
//     }



// .absolute {
//     position: absolute;
//     //display: block !important;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;


// }
// </style>