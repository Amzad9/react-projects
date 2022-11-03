<script>
import HalalVue from "../components/Popular.vue";
import CardVue from "../components/Card.vue";
export default {
  data() {
    return {
      carts: null,
    };
  },
  methods: {
    removeItem(id) {
      this.carts = JSON.parse(localStorage.getItem('addcart'))
      this.carts.splice(id, 1)
      localStorage.setItem('addcart', JSON.stringify(this.carts))
      this.carts = JSON.parse(localStorage.getItem("addcart"));
    },
  },
  mounted() {
    if (localStorage.getItem("addcart")) {
      this.carts = JSON.parse(localStorage.getItem("addcart"));
      console.log("items", this.carts);
    }
  },
  components: {
    CardVue,
  },
};
</script>

<template>
  <div class="view-cart container mt-5 py-5">
    <div class="row">
      <div v-for="(cartitem, index) in carts" :key="cartitem.id" class="col-3">
        <CardVue
          cardClass="card bg-dark position-relative rounded shadow-lg"
          bodyClass="card-body p-2"
          titleClass="text-light position-absolute title"
          :title="cartitem.title"
          :image="cartitem.image"
        />
        <button class="btn btn-info" @click="removeItem(index)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
