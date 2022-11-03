<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import CardVue from '../components/Card.vue'
const api = import.meta.env.VITE_NYT_API_KEY;
export default{
    name: 'Halal',
  data(){
    return{
      popularRecipes: [],
      addCart: [],
    }
  },
  methods: { 
      async halalData(){
        const check = localStorage.getItem('popularRecipe');
        if(check){
          this.popularRecipes = JSON.parse(check);
          console.log(this.popularRecipes);
        }else{
          console.log(import.meta.env.VITE_NYT_API_KEY)
          const url = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api}&number=40`);
          const data = await url.json();
          this.popularRecipes = data.recipes;
          // console.log(this.popularRecipes.cuisines)
          localStorage.setItem('popularRecipe', JSON.stringify(this.popularRecipes))
        } 
      },

      addCarttoCart(product){
          this.addCart = [...this.addCart, product];
          localStorage.setItem('addcart', JSON.stringify(this.addCart))
          console.log(this.addCart);
      }
  },  
   mounted() {
     this.halalData();  
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
            <h4>Popular Recipe</h4>
          </div>
          <div class="col-12">
            <Splide :options="{ rewind: true,arrows: false, perPage: 3, type: 'loop', gap: 60, drag: 'free' }">
              <SplideSlide v-for="(halal, index) in popularRecipes" :key="index">
                <CardVue 
                  cardClass="card bg-dark position-relative rounded shadow-lg" 
                  bodyClass="card-body p-2" 
                  titleClass="text-light position-absolute title" 
                  :title="halal.title" 
                  :image="halal.image"/>
                  <button class="btn btn-success" @click="addCarttoCart(halal)">Add To Cart</button>
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
</style>>


