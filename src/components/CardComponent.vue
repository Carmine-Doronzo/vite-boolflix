<script>
//import { db } from '../store.js'
export default {
    // data() {
    //     return {
    //          movies: db.,
    //          tvSeries: db.serieTv

    //     }
    // },
    props: {
        Item: { type: Object },
        // tvSeriesItem: { type: Object }
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
}
</script>

<template>
    
    <li class="card">
        <img :src="`https://image.tmdb.org/t/p/w342/${Item.imgPath}` !== 'https://image.tmdb.org/t/p/w342/null' ? `https://image.tmdb.org/t/p/w342/${Item.imgPath}` : '/img/imgNd.png'"
            width="342" alt="">
        <p>{{ Item.title }}</p>
        <p>{{ Item.originalTitle }}</p>
        <p><img :src="`/icon/${Item.language}.svg`" :alt="`${Item.language}`" width="15" height="15"></p>
        <div id="rating-">{{ rating }}</div>
    </li>



    <!-- <li>
        {{ tvSeries.titleTv }}
        {{ tvSeries.originalTitleTv }}
        {{ tvSeries.languageTv }}
        {{ tvSeries.voteTv }}
    </li>  -->
</template>

<style lang="scss" scoped>
.card{
    border: 1px solid;
    width: calc((4 * 100) / 12);
    flex-wrap: wrap;
    flex-shrink: 0;
}
</style>