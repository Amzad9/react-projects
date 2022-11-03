<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
</script>
<template>
  <v-btn color="primary" @click.stop="toggleTheme">
    {{ theme.global.name }}</v-btn
  >
</template>
