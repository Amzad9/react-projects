<script setup>
import { onMounted, watch, watchEffect } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { counter } from "../store/counter";
const countValue = counter();
const { count, double, increment } = storeToRefs(countValue);
</script>

<template>
  <main> 
    <div class="container py-5 mt-5">
      <div class="mb-4">
        {{ count }}
        {{ double }}
      </div>
      <button :class="classes.red" @click="countValue.increment">
        Increment
      </button>
    </div>
  </main>
</template>

<style module="classes">
.red {
  color: #000;
  border: 0;
  background: white;
  padding: 10px;
  border-radius: 15px;
}
</style>