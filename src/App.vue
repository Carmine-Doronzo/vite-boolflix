<script >
import HeaderComponent from './components/HeaderComponent.vue';
import {db} from './store.js'
export default {
  components:{
    HeaderComponent
  },
  data(){
    return{
      movie:db.film
    }
  }
}

</script>

<template>
  <HeaderComponent/>
</template>

<style >

</style>
