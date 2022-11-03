<script>
import { watchEffect } from "vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { useRoute } from 'vue-router'
import CardVue from '../components/Card.vue'
import CategoryVue from  '../components/Category.vue'
const api = import.meta.env.VITE_NYT_API_KEY;
const route = useRoute();
export default{
    name: 'Cuisine',
  data(){
    return{
      cuisinedata: null,
      url:'',
    }
  },
  methods: {  
      async cuiData(name){
        // const check = localStorage.getItem('cuisine2');
        // if(check){
        //   this.cuisinedata = JSON.parse(check);
        //   console.log(this.cuisinedata);
        // }else{
          const url = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&query=${name}&number=100`);
          const data = await url.json();
          this.cuisinedata = data.results;
          console.log("data",data.results);
           localStorage.setItem('cuisine', JSON.stringify(this.cuisinedata))
        // }
      },

  },
   created() {
      this.$watch(
      () => this.$route.params.id,
      () => {
        this.cuiData(this.$route.params.id)
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
      
   },
  components: {
    Splide,
    SplideSlide,
    CardVue,
    CategoryVue,
  },
}
 
</script>

<template>
<div class="container mt-5 py-5">
      <div class="row mt-5">
          <div class="col-12">
              <CategoryVue />
          </div>
          <div class="col-12 pb-5">
            <h4>{{this.$route.params.id}} Recipe</h4>
          
          </div>
        </div>
        <div class="row d-flex justify-content-between">
            <CardVue  v-for="(halal, index) in cuisinedata" :key="index"
                  cardClass="card bg-dark position-relative rounded shadow-lg col-3" 
                  bodyClass="card-body p-2" 
                  titleClass="text-light position-absolute title" 
                  :title="halal.title" 
                  :image="halal.image"/>
        </div>
</div>
  

</template>

<style>
 @import "@/assets/main.css";
   .title{
      bottom: 30px;
      left: 30px;
      right: 20;
      z-index: 10;
      /* background: #1a1a1a91; */
      padding: 10px;
   }
   .card-body{
     position: relative;
     z-index: 0;
   }
   .card-body::after{
     content: '';
     position: absolute;
     width: 100%;
     height: 100%;
     background: linear-gradient(to top,#1a1a1a59,#f0f8ff00);
     z-index: 1;
     left: 0;
     top: 0;
   }
   .rounded{
     border-radius: 20px !important;
   }
</style>>


