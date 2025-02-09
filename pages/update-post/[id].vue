<script setup>
// getting api url & api key form run time config
const { APIURL } = useURl();
const { APIKEY } = useAPIKey();
const router = useRouter();
const route = useRoute();
const id = route.params.id;

//
const title = ref("");
const content = ref("");
const status = ref("");
const author_id = ref(0);

// calling  authors composables function
const { data: authors } = await useFetchAuthors().getAuthors();

// callling post composables function
const { data: post } = await useFetchPost().getPost(id);

const postauthor = computed(() => {
  return (
    authors.value.data.find((author) =>
      author.name.toLowerCase().includes(post.value.author.toLowerCase())
    ) || null
  );
});

title.value = post.value.title;
content.value = post.value.content;
status.value = post.value.status;
author_id.value = postauthor.value.id;

const formErrors = ref({});

// update blog post by id ==> function
const updatePost = async () => {
  const editedPost = {
    title: title.value,
    content: content.value,
    status: status.value,
    author_id: author_id.value,
  };

  try {
    await $fetch(`${APIURL}/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify(editedPost),
      headers: {
        Accept: "application/json",
        "x-key": APIKEY,
      },
    });
    navigateTo("/");
  } catch (error) {
    if (error) {
      // handle validation errors
      formErrors.value = error.data?.errors;
    }
  }
};
</script>

<template>
  <!-- Update Post Page -->
  <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden px-4">
    <h2 class="text-2xl font-semibold text-center text-gray-700 py-4">Update Post</h2>

    <form @submit.prevent="updatePost">
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
          <!-- <option :value="postauthor.id">{{ postauthor }}</option> -->
          <option v-for="author in authors.data" :key="author.id" :value="author.id">
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

      <div class="mt-4 flex flex-row justify-center items-center" v-if="formErrors">
        <ErrorMessage :errorMessage="formErrors[0]" />
      </div>

      <!-- Submit Button -->
      <div class="mb-4 flex justify-center">
        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</template>
