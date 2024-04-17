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
    }
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
            <p><img :src='`./assets/icon/${tvSeriesItem.languageTv}.svg`' alt="" width="15" height="15"></p>
            <p>{{ tvSeriesItem.voteTv }}</p>
        
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