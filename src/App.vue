<script>
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';
//import CardTvComponent from './components/CardTvComponent.vue';
import { db } from './store.js'
export default {
  components: {
    HeaderComponent,
    CardComponent,
    //CardTvComponent
  },
  data() {
    return {
      db
    }
  },mounted(){
    //console.log(this.movies)
  }
}
//title,originalTitle,language,vote
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <h1>FILM</h1>
    <ul v-if="db.countFilm === db.feedbackFilm" class="row" >
      <CardComponent v-for="(filmItem, i) in db.film" :key="db.id" :Item="filmItem"  />
    </ul>
    <h1>SERIE TV</h1>
    <ul v-if="db.countSerie === db.feedbackSerie" class="row" >
    <CardComponent v-for="(tvSeriesItem, i) in db.serieTv" :key="db.id" :Item="tvSeriesItem" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>

@use './style/general.scss';



</style>
