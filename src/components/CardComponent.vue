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
    }
}
</script>

<template>
    <li><img :src="`https://image.tmdb.org/t/p/w342/${filmItem.imgPath}`" alt=""></li>

    <li>
       <p>{{ filmItem.title }}</p>
        <p>{{ filmItem.originalTitle }}</p>
        <p><img :src='`/icon/${filmItem.language}.svg`' alt="" width="15" height="15"></p>
        <p>{{ filmItem.vote }}</p>
    </li>



    <!-- <li>
        {{ tvSeries.titleTv }}
        {{ tvSeries.originalTitleTv }}
        {{ tvSeries.languageTv }}
        {{ tvSeries.voteTv }}
    </li>  -->
</template>

<style lang="scss" scoped></style>