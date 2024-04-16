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
    <img :src="`https://image.tmdb.org/t/p/w342/${tvSeriesItem.imgPathTv}`" alt="">

    <!-- <li>
        {{ movies.title }}
        {{ movies.originalTitle }}
        {{ movies.language }}
        {{ movies.vote }}
    </li> -->



    <li>
        {{ tvSeriesItem.titleTv }}
        {{ tvSeriesItem.originalTitleTv }}
        {{ tvSeriesItem.languageTv }}
        {{ tvSeriesItem.voteTv }}
    </li> 
</template>

<style lang="scss" scoped></style>