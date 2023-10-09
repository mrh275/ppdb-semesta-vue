<script>
import SearchFormTable from "../forms/SearchFormTable.vue";
import { ref } from "vue";

const searchFilter = ref("");

const handleSearch = (search) => {
  searchFilter.value = search;
};

export default {
  data() {
    return {
      filterIcon: "bxs-down-arrow",
      searchFilter: ref(""),
    };
  },
  components: {
    SearchFormTable,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleSearch,
  },
  computed: {
    filteredItems() {
      if (searchFilter.value != "") {
        return this.items.filter(
          (item) =>
            item.nama
              .toLowerCase()
              .includes(searchFilter.value.toLowerCase()) ||
            item.noreg_ppdb.includes(searchFilter.value)
        );
      }
      return this.items;
    },
  },
};
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="pb-4 bg-white dark:bg-gray-900">
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative mt-1">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <SearchFormTable @search="handleSearch" />
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr class="text-gray-700">
          <th scope="col" class="px-6 py-3">No</th>
          <th scope="col" class="px-6 py-3">
            No Pendaftaran
            <i
              class="bx {{ filterIcon }} text-[0.7rem] text-gray-400 hover:text-gray-500"
            ></i>
          </th>
          <th scope="col" class="px-6 py-3">
            NISN
            <i
              class="bx bxs-down-arrow text-[0.7rem] text-gray-400 hover:text-gray-500"
            ></i>
          </th>
          <th scope="col" class="px-6 py-3">
            Nama
            <i
              class="bx bxs-down-arrow text-[0.7rem] text-gray-400 hover:text-gray-500"
            ></i>
          </th>
          <th scope="col" class="px-6 py-3">
            Jalur Pendaftaran
            <i
              class="bx bxs-down-arrow text-[0.7rem] text-gray-400 hover:text-gray-500"
            ></i>
          </th>
          <th scope="col" class="px-6 py-3">
            Asal Sekolah
            <i
              class="bx bxs-down-arrow text-[0.7rem] text-gray-400 hover:text-gray-500"
            ></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          v-for="(item, index) in filteredItems"
          :key="item.nisn"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ index + 1 }}
          </th>
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.noreg_ppdb }}
          </td>
          <td class="px-6 py-4">
            {{ item.nisn }}
          </td>
          <td class="px-6 py-4">
            {{ item.nama }}
          </td>
          <td class="px-6 py-4">
            {{ item.jalur_pendaftaran }}
          </td>
          <td class="px-6 py-4">
            {{ item.asal_sekolah }}
          </td>
        </tr>
      </tbody>
    </table>
    <nav
      class="flex items-center justify-between px-4 pt-4 pb-4"
      aria-label="Table navigation"
    >
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
        >Showing
        <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of
        <span class="font-semibold text-gray-900 dark:text-white"
          >1000</span
        ></span
      >
      <ul class="inline-flex h-8 -space-x-px text-sm">
        <li>
          <a
            href="#"
            class="flex items-center justify-center h-8 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Previous</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >1</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >2</a
          >
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            class="flex items-center justify-center h-8 px-3 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >3</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >4</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >5</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
