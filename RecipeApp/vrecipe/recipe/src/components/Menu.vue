
<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue';

 const carts = ref([]);

 function cartdata(){
     if(localStorage.getItem('addcart')){
      carts.value = JSON.parse(localStorage.getItem('addcart'));
     }
 }

 onMounted( () => {
    cartdata()
 })

const countLenght = computed( () => carts.value.length)

  watchEffect(() => {
    cartdata()
    console.log(carts.value)
  })

</script>
<template>
<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Food Recipe</a>
     <div class="navbar">
         <RouterLink to="/" class="nav-link text-light">Home</RouterLink>
         <RouterLink to="/viewcart" class="nav-link text-light">View Cart</RouterLink>
         <RouterLink to="/cuisine/Italian" class="nav-link text-light">Cuisine</RouterLink>
         <RouterLink to="/product" class="nav-link text-light">Product</RouterLink>
         <RouterLink to="/contact" class="nav-link text-light">contact</RouterLink>
         <button class="btn btn-primary">
           {{countLenght}}
         </button>
     </div>
  </div>
</nav>
</template>
