<script setup>
import { storeToRefs } from "pinia";
import { useAdminListStore } from "@/stores/adminList";
import BaseInputVue from "@/shared/input/BaseInput.vue";
import ButtonVue from "@/shared/button/Button.vue";
const user = useAdminListStore();
const { name, email, contact, dialCode, type, password } = storeToRefs(user);
</script>
<template>
  <div>
    <form @submit.prevent="user.addUser">
      <BaseInputVue v-model="name" name="Name" />
      <BaseInputVue v-model="email" type="email" name="Email" />
      <BaseInputVue
        v-model="dialCode"
        type="number"
        name="Dial Code"
        class="w-24"
      />
      <BaseInputVue v-model="contact" type="tel" name="Contact Number" />
      <BaseInputVue v-model="type" type="text" name="type" />
      <BaseInputVue v-model="password" type="password" name="Password" />
      <ButtonVue title="Submit" />
    </form>
  </div>
</template>
