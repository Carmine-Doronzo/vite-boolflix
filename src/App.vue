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
      hideActors:db.hideActors 
      //hide: db.hide
    }
  }, 
  mounted() {
    //console.log(this.movies)
  }
}
//title,originalTitle,language,vote
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <div :class="db.hideFilm === true ? 'padd-y d-none' : 'padd-y d-block'">

      <h1>FILM</h1>
      <ul class="row">
        <CardComponent v-for="(filmItem, i) in db.film" :key="db.id" :Item="filmItem" />
      </ul>

    </div>
    <div :class="db.hideTv === true ? 'padd-y d-none' : 'padd-y d-block'">
      <h1>SERIE TV</h1>
      <ul class="row">
        <CardComponent v-for="(tvSeriesItem, i) in db.serieTv" :key="db.id" :Item="tvSeriesItem" />
      </ul>
    </div>
    <div :class="db.hideActors === true ? 'actors d-blockAct': 'actors'" >
      <div  v-for="(actor, i) in db.actorsList" :key="db.actorsList[i].id">
        <p>Personaggio: {{ actor.characterAct }}</p>
        <p>Nome: {{ actor.nameAct }}</p>
        <p>Nome completo: {{ actor.originaNameAct }}</p>
        <img
          :src="`${actor.imgPathAct}` !== `https://image.tmdb.org/t/p/w185/null` ? `${actor.imgPathAct}` : '/img/imgNd.png'"
          width="185" height="250" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style/general.scss';
.actors {
  background-color: black;
    display: none;
    position: absolute;
    width: 150px;
    height: 150px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 1;
    z-index: 1;
    flex-wrap: wrap;



}



.d-blockAct {
    display: flex;
}
</style>
