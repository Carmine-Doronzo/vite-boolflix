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
      hideActors: db.hideActors
      //hide: db.hide
    }
  },
  methods:{
    
    hideActor(){
      this.db.hideFilm = false
            this.db.hideTv = false
            this.db.hideActors = false
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
    <div :class="db.hideActors === true ? 'actors d-flexAct' : 'actors'">
      <div class="row-act">
        <h1 class="section_title">Personaggi ed interpreti</h1>
        <p @click="hideActor()" class="close_act-path">&cross;</p>
        <div v-for="(actor, i) in db.actorsList" :key="db.actorsList[i].id" class="card_act">

          <p>Personaggio: {{ actor.characterAct }}</p>
          <p>Nome: {{ actor.nameAct }}</p>
          <p>Nome completo: {{ actor.originaNameAct }}</p>
          <img
            :src="`${actor.imgPathAct}` !== `https://image.tmdb.org/t/p/w185/null` ? `${actor.imgPathAct}` : '/img/imgNd.png'"
            width="185" height="250" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style/general.scss';

.actors {
  color: white;
  //margin-top: 100px;
  padding-top:100px ;
  background-color: black;
  display: none;
  position: absolute;
  //width: 1200px;
  height: 100vh;
  overflow: scroll;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  //opacity: 1;
  z-index: 1;
  flex-wrap: wrap;
  gap: 20px;

  .row-act {
    padding-top: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-height: 100px;

  }

  //justify-content: center;
  //align-items: center;
}

.card_act {

  width: calc(((3 * 100%) / 12) - 20px);
  
  max-height: 400px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-overflow: ellipsis;

}

.section_title {
  padding-top: 100px;
  position: absolute;
  top: 20px;
  right: 270px;
  //left: 1000px;
}

.close_act-path {
  padding-top: 100px;
  position: absolute;
  z-index: 2;
  top: 20px;
  right: 20px;
  font-size: 30px;
}

.d-flexAct {
  display: flex;
}
</style>
