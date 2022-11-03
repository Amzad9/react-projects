<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <v-btn type="submit" flat color="primary w-100" size="large">
    {{ title }}
  </v-btn>
</template>
