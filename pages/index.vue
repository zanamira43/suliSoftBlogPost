<script setup>
const statusFilter = ref("all");
const { data } = await useFetchPost().getPosts();

// filter by status function
const filteredPosts = computed(() => {
  if (statusFilter.value === "all") {
    return data.value.data;
  } else {
    return data.value.data.filter((post) => post.status === statusFilter.value);
  }
});

// delete post function
const deletePost = async (id) => {
  console.log("delete post", id);
  await useFetchPost().deletePost(id);
  // refresh the page
  location.reload();
};
</script>
<template>
  <!--  list of all blog posts component-->
  <div class="flex flex-col md:flex-row md:justify-between mb-5 items-center">
    <div class="flex md:gap-20 justify-center">
      <!-- title of the page -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-700 py-4">List of Posts</h2>
      </div>

      <!-- filter by status -->
      <div class="flex items-center justify-center">
        <select
          class="border border-gray-300 rounded-md px-4 py-2"
          v-model="statusFilter"
        >
          <option value="all">All Statuses</option>
          <option v-for="post in data.data" :key="post.id" :value="post.status">
            {{ post.status }}
          </option>
        </select>
      </div>
    </div>

    <div>
      <NuxtLink to="/addpost" class="bg-blue-500 text-white text-sm px-4 py-2 rounded-md">
        Add New Post
      </NuxtLink>
    </div>
  </div>

  <div class="max-w-auto bg-white shadow-md rounded-md overflow-hidden">
    <!--  blog posts component  -->
    <PostList :posts="filteredPosts" @deletePost="deletePost" />
  </div>
</template>
