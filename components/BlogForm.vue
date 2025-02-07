<template>
  <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <h2 class="text-2xl font-semibold text-center text-gray-700 py-4">
      Add or Edit Post
    </h2>

    <form id="postForm" onsubmit="validateForm(event)">
      <!-- Title -->
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-600">Title</label>
        <input
          type="text"
          id="title"
          name="title"
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
          rows="5"
          class="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <!-- Author -->
      <div class="mb-4">
        <label for="author" class="block text-sm font-medium text-gray-600">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          class="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
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
              value="publish"
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
              value="unpublish"
              class="form-radio text-blue-500"
              required
            />
            <span class="ml-2">Unpublish</span>
          </label>
        </div>
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

<script setup></script>
