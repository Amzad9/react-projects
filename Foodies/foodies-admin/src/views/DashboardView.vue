<script setup>
import { RouterView } from "vue-router";
import SideBar from "@/components/Sidebar.vue";
import Navigation from "../components/Navigation.vue";
</script>
<template>
  <v-theme-provider theme="high-contrast">
    <v-card class="h-100">
      <v-layout class="h-100">
        <SideBar />
        <v-main>
          <v-card class="pa-md-4" elevation="0">
            <Navigation />
            <RouterView />
          </v-card>
        </v-main>
      </v-layout>
    </v-card>
  </v-theme-provider>
</template>
