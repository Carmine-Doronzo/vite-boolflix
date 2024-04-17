<script>
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';
import CardTvComponent from './components/CardTvComponent.vue';
import { db } from './store.js'
export default {
  components: {
    HeaderComponent,
    CardComponent,
    CardTvComponent
  },
  data() {
    return {
      movies: db.film,
      tvSeries: db.serieTv
    }
  }
}
//title,originalTitle,language,vote
</script>

<template>
  <HeaderComponent />
  <div>
    <h1>FILM</h1>
    <ul>
      <CardComponent v-for="(filmItem, i) in movies" :key="i" :filmItem="filmItem"  />
    </ul>
    <h1>SERIE TV</h1>
    <ul >
    <CardTvComponent v-for="(tvSeriesItem, i) in tvSeries" :key="i" :tvSeriesItem="tvSeriesItem" />
    </ul>
  </div>
</template>

<style >
ul ol menu{
  list-style: none;
}
</style>
