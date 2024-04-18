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
      db,
      //hide: db.hide
    }
  }, mounted() {
    //console.log(this.movies)
  }
}
//title,originalTitle,language,vote
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <div :class="db.hideTv === true ? 'padd-y d-none' : 'padd-y d-block'">

      <h1>FILM</h1>
      <ul class="row">
        <CardComponent v-for="(filmItem, i) in db.film" :key="db.id" :Item="filmItem" />
      </ul>

    </div>
    <div :class="db.hideFilm === true ? 'padd-y d-none' : 'padd-y d-block'">
      <h1>SERIE TV</h1>
      <ul class="row">
        <CardComponent v-for="(tvSeriesItem, i) in db.serieTv" :key="db.id" :Item="tvSeriesItem" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style/general.scss';
</style>
