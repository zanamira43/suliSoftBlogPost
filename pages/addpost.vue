<script setup>
const title = ref("");
const content = ref("");
const status = ref("");
const author_id = ref(0);

// calling  authors composables function
const { data } = await useFetchAuthors().getAuthors();

const { validateError } = await useFetchPost();

// add post function
const addPost = async () => {
  const post = {
    title: title.value,
    content: content.value,
    status: status.value,
    author_id: author_id.value,
  };

  // calling add post function from composabless
  await useFetchPost().addPost(post);

  title.value = "";
  content.value = "";
  status.value = "";
  author_id.value = "";

  // router.push("/"); // redirect to home page
};
</script>

<template>
  <!-- Add New Post Page -->
  <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden px-4">
    <h2 class="text-2xl font-semibold text-center text-gray-700 py-4">Add New Post</h2>

    <form @submit.prevent="addPost">
      <!-- Title -->
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-600">Title</label>
        <input
          type="text"
          name="title"
          v-model="title"
          class="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <!-- Content -->
      <div class="mb-4">
        <label for="content" class="block text-sm font-medium text-gray-600"
          >Content</label
        >
        <textarea
          id="content"
          name="content"
          v-model="content"
          rows="5"
          class="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <!-- Author -->
      <div class="mb-4">
        <label for="author" class="block text-sm font-medium text-gray-600">Author</label>
        <select
          id="author"
          name="author"
          v-model="author_id"
          class="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select an author</option>
          <option v-for="author in data.data" :key="author.id" :value="author.id">
            {{ author.name }}
          </option>
        </select>
      </div>

      <!-- Status -->
      <div class="mb-4">
        <span class="block text-sm font-medium text-gray-600">Status</span>
        <div class="flex items-center space-x-6">
          <label class="inline-flex items-center text-sm text-gray-600">
            <input
              type="radio"
              id="publish"
              name="status"
              v-model="status"
              value="published"
              class="form-radio text-blue-500"
              required
            />
            <span class="ml-2">Publish</span>
          </label>
          <label class="inline-flex items-center text-sm text-gray-600">
            <input
              type="radio"
              id="unpublish"
              name="status"
              v-model="status"
              value="unpublished"
              class="form-radio text-blue-500"
              required
            />
            <span class="ml-2">Unpublish</span>
          </label>
        </div>
      </div>

      <div class="mb-4 flex flex-row justify-center items-center" v-if="validateError">
        <!-- <ErrorMessage :errorMessage="validateError" class="mt-2" /> -->
        <p class="text-red-500 text-sm mt-2">{{ validateError }}</p>
      </div>

      <!-- Submit Button -->
      <div class="mb-4 flex justify-center">
        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
