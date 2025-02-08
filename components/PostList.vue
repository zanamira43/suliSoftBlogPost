<script setup>
const props = defineProps({
  posts: Object,
});
const deleteModal = ref(0);

const emits = defineEmits(["deletePost"]);
const openDeleteModal = (id) => {
  deleteModal.value = id;
};
</script>
<template>
  <table class="min-w-full table-auto">
    <thead class="bg-gray-200">
      <tr>
        <th class="py-3 px-4 text-left text-sm font-bold text-gray-600">Title</th>
        <th class="py-3 px-4 text-left text-sm font-bold text-gray-600">Status</th>
        <th class="py-3 px-4 text-left text-sm font-bold text-gray-600">Options</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-t" v-for="post in posts" :key="post.id">
        <td class="py-3 px-4 text-sm text-gray-700">{{ post.title }}</td>
        <td
          :class="`py-3 px-4 text-sm ${
            post.status === 'published' ? 'text-green-500' : 'text-red-500'
          } `"
        >
          {{ post.status }}
        </td>
        <td class="py-3 px-4 text-sm flex gap-3">
          <NuxtLink :to="`${post.id}/update`">
            <Icon name="material-symbols:edit" size="20" class="text-green-500" />
          </NuxtLink>
          <button @click="openDeleteModal(post.id)">
            <Icon name="material-symbols:delete" size="20" class="text-red-500" />
          </button>
        </td>

        <!-- delete modal component -->

        <DeleteModal
          v-if="deleteModal === post.id"
          @closeModal="deleteModal = 0"
          @delete="emits('deletePost', post.id)"
        />
      </tr>
    </tbody>
  </table>
</template>
