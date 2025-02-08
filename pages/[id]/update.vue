<template>
  <!-- <BlogForm formTitle="Update Post" /> -->

  <div>
    <h1>Update Post</h1>
    <p>Post ID: {{ id }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
</script>
