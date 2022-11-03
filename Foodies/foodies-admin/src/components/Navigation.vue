<script setup>
import DarkModeVue from "./DarkMode.vue";
import ProfileVue from "./Profile.vue";
</script>
<template>
  <v-card class="rounded-md" elevation="3">
    <v-toolbar color="light" flat class="d-flex items-center">
      <v-toolbar-title>Title</v-toolbar-title>
      <DarkModeVue />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <ProfileVue />
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
