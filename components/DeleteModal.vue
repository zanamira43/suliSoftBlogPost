<script setup>
const emits = defineEmits(["closeModal", "delete"]);

const close = () => {
  emits("closeModal");
};
</script>
<template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="container mx-auto mt-20 p-3 bg-white rounded-md w-[50%]">
        <div class="flex justify-end items-center px-5 mb-5">
          <button @click="close">X</button>
        </div>

        <div class="flex flex-col justify-center items-center px-5 mb-5">
          <h1>Are you sure you want to delete?</h1>
          <div class="flex flex-row justify-center items-center gap-5 mt-5">
            <button
              class="bg-red-500 text-white px-5 py-2 rounded-md"
              @click="emits('delete')"
            >
              Delete
            </button>
            <button @click="close" class="bg-gray-500 text-white px-5 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
