<script setup>
import MenuVue from "./components/Menu.vue";
import FooterVue from "./views/Footer.vue";
</script>

<template>
   <MenuVue />
    <RouterView />
    <FooterVue />
</template>

<style>
@import "@/assets/base.css";


</style>
