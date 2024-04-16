<script >
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';
import {db} from './store.js'
export default {
  components:{
    HeaderComponent,
    CardComponent,
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
    <CardComponent v-for="(filmItem,i) in movies" :key="i" :filmItem="filmItem" />
    <h1>SERIE TV</h1>
    <!-- <CardComponent v-for="(tvSeriesItem,i) in tvSeries" :key="i" :tvSeriesItem="tvSeriesItem" />  -->
  </div>
</template>

<style >

</style>
