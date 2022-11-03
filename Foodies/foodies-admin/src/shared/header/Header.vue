<script setup>
</script>
<template>
  <div class="flex py-3 justify-between px-4 items-center">
    <div>
      <h4 class="text-xl font-medium">Admin User List</h4>
    </div>
    <div>
      <v-btn @click="$emit('open')">Add User</v-btn>
    </div>
  </div>
</template>
