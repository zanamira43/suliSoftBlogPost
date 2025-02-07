<template>
  <!--  list of all blog posts component-->
  <div class="flex flex-col md:flex-row md:justify-between mb-5 items-center">
    <div class="flex md:gap-20 justify-center">
      <div>
        <h2 class="text-2xl font-semibold text-gray-700 py-4">List of Posts</h2>
      </div>

      <div class="flex items-center justify-center">
        <select class="border border-gray-300 rounded-md px-4 py-2">
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="unpublished">Unpublished</option>
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
    <table class="min-w-full table-auto">
      <thead class="bg-gray-200">
        <tr>
          <th class="py-3 px-4 text-left text-sm font-bold text-gray-600">Title</th>
          <th class="py-3 px-4 text-left text-sm font-bold text-gray-600">Status</th>
          <th class="py-3 px-4 text-left text-sm font-bold text-gray-600">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t">
          <td class="py-3 px-4 text-sm text-gray-700">How to Learn Web Development</td>
          <td class="py-3 px-4 text-sm text-green-600">Published</td>
          <td class="py-3 px-4 text-sm flex gap-3">
            <NuxtLink :to="`${1}/update`">
              <Icon name="material-symbols:edit" size="20" class="text-green-500" />
            </NuxtLink>
            <button>
              <Icon name="material-symbols:delete" size="20" class="text-red-500" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>
