<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import CardVue from '../components/Card.vue'
const api = import.meta.env.VITE_NYT_API_KEY;

export default{
  name: 'Vegetarian',
  data(){
    return{
      recipes: null,
    }
  },
  methods: { 
      async fetchData(name){
        const check = localStorage.getItem('recipe2');
        if(check){
          this.recipes = JSON.parse(check);
        }else{
          const url = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api}&number=10&tags=${name}`);
          const data = await url.json();
          this.recipes = data.recipes;
          localStorage.setItem('recipe2', JSON.stringify(this.recipes))
          console.log(this.recipes);
        } 
      },
  },
   created() {
     this.fetchData('vegetarian');
   }, 
  components: {
    Splide,
    SplideSlide,
    CardVue,
  },
}
 
</script>

<template>
        <div class="row mt-5">
          <div class="col-12 pb-5">
            <h4>Vegetarian Recipe</h4>
          </div>
          <div class="col-12">
            <Splide :options="{ rewind: true,arrows: false, perPage: 3, type: 'loop', gap: 70, drag: 'free' }">
              <SplideSlide v-for="(recipe, index) in recipes" :key="index">
                <CardVue 
                 cardClass="card bg-dark position-relative rounded shadow-lg" 
                 bodyClass="card-body p-2" 
                 titleClass="text-light position-absolute title" 
                :title="recipe.title" 
                :image="recipe.image"/>
              </SplideSlide>
            </Splide>
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
</style>
