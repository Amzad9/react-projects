<script setup>
import { storeToRefs } from "pinia";
import { useMenuStore } from "./../../stores/menu";
import BaseInputVue from "@/shared/input/BaseInput.vue";
import ButtonVue from "@/shared/button/Button.vue";
const menuInfo = useMenuStore();
const { name, sku, price, calories } = storeToRefs(menuInfo);
</script>
<template>
  <div>
    <form @submit.prevent="menuInfo.addMenu">
      <v-row class="mt-3">
        <v-col cols="12">
          <BaseInputVue v-model="sku" type="text" name="sku" />
        </v-col>
        <v-col cols="12">
          <BaseInputVue v-model="name" type="text" name="name" />
        </v-col>
        <v-col cols="12">
          <BaseInputVue v-model="price" type="text" name="price" />
        </v-col>
        <v-col cols="12">
          <BaseInputVue v-model="calories" type="text" name="calories" />
        </v-col>
        <v-col cols="12">
          <ButtonVue title="Submit" />
        </v-col>
      </v-row>
    </form>
  </div>
</template>
