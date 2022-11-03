<script setup>
defineProps({
  name: {
    type: String,
  },
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
  type: {
    type: String,
  },
});
</script>
<template>
  <v-text-field
    :v-model="modelValue"
    :label="name"
    color="primary"
    @input="$emit('update:modelValue', $event.target.value)"
  ></v-text-field>
</template>
