<script setup>
defineProps({
	Title: String,
	name: String,
	authors: Array,
});

const model = defineModel()

</script>
<template>
<div>
    <select
        :id="name"
        :name="name"
        v-model="model"
        class="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
    >
        <option value="">Select an author</option>
        <option v-for="author in authors" :key="author.id" :value="author.id">
        {{ author.name }}
        </option>
    </select>
</div>
</template>
