<script setup>
// getting api url & api key form run time config
const { APIURL } = useURl();
const { APIKEY } = useAPIKey();
const title = ref("");
const content = ref("");
const status = ref("");
const author_id = ref(0);

// calling  authors composables function
const { data } = await useFetchAuthors().getAuthors();

const formErrors = ref({});

// add post function
const addPost = async () => {
  const post = {
    title: title.value,
    content: content.value,
    status: status.value,
    author_id: author_id.value,
  };

  try {
    await $fetch(`${APIURL}/blogs`, {
      method: "POST",
      body: post,
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
  title.value = "";
  content.value = "";
  status.value = "";
  author_id.value = "";
};
</script>

<template>
  <!-- Add New Post Page -->
  <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden px-4">
    <h2 class="text-2xl font-semibold text-center text-gray-700 py-4">Add New Post</h2>

    <form @submit.prevent="addPost">
      <!-- title -->
       <div class="mb-4">
        <FormLabel for="title" Title="Title" />
        <FormInput Title="Title" type="text" name="title" v-model="title" />
       </div>
       
       <!-- Content -->
      <div class="mb-4">
        <FormLabel for="content" Title="Content" />
        <FormTextArea Title="Content" name="content" v-model="content" rows="5" />
      </div>
     
       
       <!-- Author -->
      <div class="mb-4">
        <FormLabel for="authors" Title="Authors" />
        <FormSelect Title="Authors" name="authors" :authors="data.data" v-model="author_id" />
      </div>

      <!-- Status -->
      <div class="mb-4">
        <span class="block text-sm font-medium text-gray-600">Status</span>
        <div class="flex items-center space-x-6">
          <label class="inline-flex items-center text-sm text-gray-600">
            <FormInput type="radio" id="publish" name="status" v-model="status" value="published" class="form-radio text-blue-500" />
            <FormLabel class="ml-2 font-normal" Title="Publish" />
          </label>
          <label class="inline-flex items-center text-sm text-gray-600">
            <FormInput type="radio" id="unpublish" name="status" v-model="status" value="unpulished" class="form-radio text-blue-500" />
            <FormLabel class="ml-2 font-normal" Title="Unpublish" />
          </label>
        </div>
      </div>

      <div class="mt-4 flex flex-row justify-center items-center">
        <ErrorMessage :errorMessage="formErrors[0]" />
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
