<script setup>
import { storeToRefs } from "pinia";
import { basicInfoStore } from "./../../stores/basicDetails";
const info = basicInfoStore();
const { basicDetails } = storeToRefs(info);
</script>
<template>
  <v-card class="mt-6">
    {{ basicDetails }}
  </v-card>
</template>
