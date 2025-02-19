<script setup>
defineProps({
  Title: String,
  forLabel: String,
});
</script>
<template>
   <label :for="forLabel" class="block text-sm font-medium text-gray-600">{{ Title }}</label>
</template>

