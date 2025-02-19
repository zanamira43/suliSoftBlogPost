<script setup>
defineProps({
	Title: String,
	name: String,
	rows: String

});

const model = defineModel()
</script>
<template>
<div >
	<textarea
		:id="name"
		:name="name"
		v-model="model"
		:rows="rows"
		class="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
		required
	></textarea>
	</div>
</template>
