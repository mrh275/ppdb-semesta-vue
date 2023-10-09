<script setup>
const emit = defineEmits(["search"]);

const search = (e) => {
  emit("search", e.target.value);
};
</script>
<template>
  <input
    type="text"
    @input="search"
    id="table-search"
    class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Search for items"
  />
</template>
