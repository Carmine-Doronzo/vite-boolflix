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
        //tvSeriesItem: { type: Object }
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


    <!-- <ul>
      <li>{{ tvSeriesItem.title }}</li>
      <li>{{ tvSeriesItem.originalTitle }}</li>
      <li>{{ tvSeriesItem.language }}</li>
      <li>{{ tvSeriesItem.vote }}</li>
    </ul>   -->
</template>

<style lang="scss" scoped></style>