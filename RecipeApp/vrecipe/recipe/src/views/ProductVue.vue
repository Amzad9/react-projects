<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue';
import CardVue from "../components/Card.vue";
const api = import.meta.env.VITE_NYT_API_KEY;

    // useing composition API

    const productdata = ref([]);
    const selected = ref('pizza');
    const optionsData = ref(['greek yogurt','pizza']);
    const searchValue = ref('');


    async function product(name){
      const url = await fetch(`https://api.spoonacular.com/food/products/search?apiKey=${api}&query=${name}&number=100`);
      const data = await url.json();
      productdata.value = data.products;
      console.log("data", data.products);
    }
    const filterData = computed(()=>{
           return productdata.value.filter( val => val.title.toLowerCase().includes(searchValue.value.toLowerCase()));
    })


  

    watchEffect( () => {
      console.log(selected.value)
      product(selected.value);
    })

    // onMounted(() => {
    //   console.log(selected.value)
    //   product(selected.value);
    // })

// export default {
  // name: "Cuisine",
  // data() {
  //   return {
  //     productdata: null,
  //     selected: 'pizza',
  //     optionsData : ['greek yogurt','pizza'],
  //   };
  // },
  // methods: {
  //   async product(name) {
  //     const url = await fetch(
  //       `https://api.spoonacular.com/food/products/search?apiKey=${api}&query=${name}&number=100`
  //     );
  //     const data = await url.json();
  //     this.productdata = data.products;
  //     console.log("data", data.products);
  //   },
  // },
  // mounted() {

  //   this.$watch('selected', (selected) => {
  //     this.product(this.selected)
  //   })
      
    //   this.$watch(
    //   () => this.selected,
    //   () => {
    //     this.product(this.selected)
    //   },
    //   { immediate: true }
    // )
//   },
//   components: {
//     CardVue,
//   },
// };
</script>
<template>
  <div class="container py-5 mt-5">
    <div class="row mb-5">
      <div class="col-4">
        <select class="form-select bg-dark text-light"  v-model="selected">
          <option v-for="(option, index) in optionsData" :value="option" :key="index">
            {{ option }}
          </option>
        </select>
        {{ selected }}
      </div>
      <div class="col-4">
        <form class="d-flex">
        <input class="form-control me-2" type="search" v-model="searchValue" placeholder="Search" aria-label="Search">
        {{searchValue}}
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
      </form>
      </div>
      
    </div>
    <div class="row">
      <CardVue
        v-for="(product, index) in filterData"
        :key="index"
        cardClass="card bg-dark position-relative rounded shadow-lg col-3"
        bodyClass="card-body p-2"
        titleClass="text-light position-absolute title"
        :title="product.title"
        :image="product.image"
      />
    </div>
  </div>
</template>