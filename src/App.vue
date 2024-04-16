<script >
import HeaderComponent from './components/HeaderComponent.vue';
import {db} from './store.js'
export default {
  components:{
    HeaderComponent
  },
  data(){
    return{
      movies:db.film,
      tvSeries:db.serieTv
    }
  }
}
//title,originalTitle,language,vote
</script>

<template>
  <HeaderComponent/>
  <div>
    <h1>FILM</h1>
    <ul v-for="movie in movies">
      <li>{{ movie.title }}</li>
      <li>{{ movie.originalTitle }}</li>
      <li>{{ movie.language }}</li>
      <li>{{ movie.vote }}</li>
    </ul>
    <h1>SERIE TV</h1>
    <ul v-for="serie in tvSeries">
      <li>{{ serie.title }}</li>
      <li>{{ serie.originalTitle }}</li>
      <li>{{ serie.language }}</li>
      <li>{{ serie.vote }}</li>
    </ul>
  </div>
</template>

<style >

</style>
