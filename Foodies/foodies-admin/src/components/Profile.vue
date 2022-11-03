<script setup>
import { ref, watchEffect } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useLoginAuthStore } from "./../stores/Auth";
const auth = useLoginAuthStore();
const toggle = ref(false);
const el = ref();

const onToggle = () => {
  toggle.value = !toggle.value;
};
onClickOutside(el, onToggle);
const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log(getUserInfo.name);
</script>

<template>
  <div>
    <v-menu bottom min-width="200px" rounded offset-y>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="brown" size="small">
            <span class="white--text">{{ getUserInfo.name.slice(0, 1) }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card color="white">
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="white--text text-h5">{{
                getUserInfo.name.slice(0, 1)
              }}</span>
            </v-avatar>
            <h3>{{ getUserInfo.name }}</h3>
            <p class="text-caption mt-1">{{ getUserInfo.email }}</p>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text"> Edit Account </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text" @click="auth.logout"> Logout </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>
