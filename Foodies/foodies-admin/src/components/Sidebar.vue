<script setup>
import { ref } from "vue";
const drawer = ref(true);
const rail = ref(true);
</script>

<template>
  <v-navigation-drawer
    style="position: fixed"
    fixed="top"
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
    color="primary"
    elevation="7"
    border="0"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        to="/dashboard"
        prepend-icon="mdi-home-city"
        title="Dashboard"
        value="home"
      ></v-list-item>
      <v-list-item
        to="/admin"
        prepend-icon="mdi-account"
        title="Admin"
        value="admin"
      ></v-list-item>
      <v-list-item
        to="/basic"
        prepend-icon="mdi-account-group-outline"
        title="Basic"
        value="basic"
      ></v-list-item>
      <v-list-item
        to="/branch"
        prepend-icon="mdi-account-group-outline"
        title="Branch"
        value="Branch"
      ></v-list-item>
      <v-list-item
        to="/category"
        prepend-icon="mdi-account-group-outline"
        title="Category"
        value="category"
      ></v-list-item>
      <v-list-item
        to="/menu"
        prepend-icon="mdi-account-group-outline"
        title="Menu"
        value="menu"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
