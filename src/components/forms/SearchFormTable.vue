<script>
export default {
  methods: {
    search(event) {
      this.$emit("search", event.target.value);
    },
  },
};
</script>
<template>
  <input
    type="text"
    @input="search"
    id="table-search"
    class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Cari nama siswa"
  />
</template>
