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
    },
    computed: {
        rating() {
            

            const ratingVote = this.tvSeriesItem.vote_average / 2;
            this.tvSeriesItem.vote_average = ''
            for (let i = 1; i <= ratingVote; i++) {
                this.tvSeriesItem.vote_average += '★';
            }

            for (let i = ratingVote; i < 5; i++) {
                this.tvSeriesItem.vote_average += '☆';
            }

            //console.log(this.tvSeriesItem.voteTv)
            return this.tvSeriesItem.vote_average
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
    

    <!-- <li>
        {{ movies.title }}
        {{ movies.originalTitle }}
        {{ movies.language }}
        {{ movies.vote }}
    </li> -->



    <li class="relative">
        <img :src="`https://image.tmdb.org/t/p/w342/${tvSeriesItem.poster_path}` !== 'https://image.tmdb.org/t/p/w342/null' ? `https://image.tmdb.org/t/p/w342/${tvSeriesItem.poster_path}`:'/img/imgNd.png'" width="342" height="450" alt="">

        <p>{{ tvSeriesItem.name }}</p>
        <p>{{ tvSeriesItem.original_name }}</p>
        <p><img :src='`/icon/${tvSeriesItem.original_language}.svg`' :alt="`${tvSeriesItem.original_languagelanguag}`" width="15"
                height="15"></p>

        <span id="rating">{{ rating }} </span>

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