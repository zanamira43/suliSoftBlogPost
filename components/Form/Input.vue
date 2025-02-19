<script  setup>
defineProps({
  Title: String,
  type: String,
  name: String,
  value: {
    type: String,
    default: "",
  }
});

const model = defineModel()
</script>
<template>
  <div>
    <input
      :type="type"
      :name="name"
      v-model="model"
      :value="value"
      class="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>
</template>
