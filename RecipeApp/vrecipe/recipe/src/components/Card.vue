<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  cardClass:{
    type: String,
  },
  titleClass:{
     type: String,
  },
  bodyClass:{
    type: String,
  }
});
</script>

<template>
  <div :class="[cardClass]">
    <div :class="[bodyClass]">
      <img :src="image" alt="" class="rounded" />
      <h6 :class="[titleClass]">{{title }}</h6>
    </div>
  </div>
</template>

<style scoped>
</style>
