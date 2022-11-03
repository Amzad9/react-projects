<script>
import VegetarianVue from '../components/Vegetarian.vue'
import PopularVue from '../components/Popular.vue';
export default{
  data(){
    return{ }
  },
  //   computed:{
  //      getPopularList(){
  //       return this.recipes.filter( popupar =>{
  //         return  (popupar.veryPopular == true)
  //       });;
  //     },
  //     getHealthFood(){
  //       return this.recipes.filter( popupar => {
  //         return (popupar.veryHealthy == true)
  //       });;
  //     },
  //     searchItem(){  
  //        return this.recipes.filter(ser => {
  //          return ser.title.toLowerCase().includes(this.search.toLowerCase());
  //        });;
  //     }
  // },

  components: {
    VegetarianVue ,
    PopularVue,
  },
}
 
</script>

<template>
  <main>
    <div class="container py-5">
      <PopularVue />
      <VegetarianVue />
    </div>
  
  </main>
</template>

<style>
  @import "@/assets/main.css";
</style>
