<script setup>
import { storeToRefs } from "pinia";
import { useBranchStore } from "@/stores/branch";
import BaseInputVue from "@/shared/input/BaseInput.vue";
import ButtonVue from "@/shared/button/Button.vue";
const branch = useBranchStore();
const {
  name,
  nameLocalized,
  address,
  landmark,
  locality,
  city,
  state,
  country,
  pincode,
  dialCode,
  contact,
  contactName,
} = storeToRefs(branch);
</script>
<template>
  <div>
    <form @submit.prevent="branch.addBranch">
      <BaseInputVue v-model="name" type="text" name="name" />
      <BaseInputVue v-model="nameLocalized" type="text" name="nameLocalized" />
      <BaseInputVue v-model="address" type="text" name="address" />
      <BaseInputVue v-model="landmark" type="text" name="landmark" />
      <BaseInputVue v-model="locality" type="text" name="locality" />
      <BaseInputVue v-model="city" type="text" name="city" />
      <BaseInputVue v-model="state" type="text" name="state" />
      <BaseInputVue v-model="country" type="text" name="country" />
      <BaseInputVue v-model="pincode" type="text" name="pincode" />
      <BaseInputVue v-model="dialCode" type="text" name="dialCode" />
      <BaseInputVue v-model="contact" type="text" name="contact" />
      <BaseInputVue v-model="contactName" type="text" name="contactName" />
      <BaseInputVue
        v-model="deliveryCharge"
        type="text"
        name="deliveryCharge"
      />
      <ButtonVue title="Submit" />
    </form>
  </div>
</template>
