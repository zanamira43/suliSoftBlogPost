<template>
  <p class="mt-2 text-sm text-red-600" v-if="errorMessage">{{ errorMessage }}</p>
</template>

<script setup>
const props = defineProps({
  errorMessage: {
    type: String,
    default: "",
  },
});
</script>
