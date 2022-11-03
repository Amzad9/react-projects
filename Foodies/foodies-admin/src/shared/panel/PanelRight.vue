<script setup>
import { store } from "./../../reactive/index";
</script>
<template>
  <v-navigation-drawer
    class="h-screen pa-md-4 w-25"
    style="position: fixed"
    v-model="store.drawer"
    top
    temporary
    location="right"
  >
    <slot></slot>
  </v-navigation-drawer>
</template>
<style scoped>
</style>
