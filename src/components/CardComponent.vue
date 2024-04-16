<script>
//import { db } from '../store.js'
export default {
    data() {
        return {
            // movies: db.film,
            // tvSeries: db.serieTv

        }
    },
    props: {
        filmItem: { type: Object },
        tvSeriesItem: { type: Object }
    }
}
</script>

<template>


    <li>
        {{ filmItem.title }}
        {{ filmItem.originalTitle }}
        {{ filmItem.language }}
        {{ filmItem.vote }}
    </li>



    <li>
        {{ tvSeriesItem.titleTv }}
        {{ tvSeriesItem.originalTitleTv }}
        {{ tvSeriesItem.languageTv }}
        {{ tvSeriesItem.voteTv }}
    </li>

</template>

<style lang="scss" scoped></style>