<script>
import SearchFormTable from "../forms/SearchFormTable.vue";
import axios from "axios";

export default {
  data() {
    return {
      filterIcon: "bxs-down-arrow",
      itemIndex: 1,
      dataItems: "",
      currentPage: 1,
      lastPage: "",
      firstPage: "",
      itemPerPage: 10,
      displayFilterDropdown: "hidden",
      itemFilterList: [10, 25, 50, 100],
      previousButton: "",
      nextButton: "",
      pageNumber: [],
      searchQuery: "",
    };
  },
  components: {
    SearchFormTable,
  },
  methods: {
    fetchData(url) {
      const API_url = url
        ? url + `&search=${this.searchQuery}&itemPerPage=${this.itemPerPage}`
        : `http://127.0.0.1:8000/api/data-pendaftar?page=1&search=${this.searchQuery}&itemPerPage=${this.itemPerPage}`;
      axios
        .request({
          method: "GET",
          url: API_url,
        })
        .then((response) => {
          this.dataItems = response.data.data;
          this.previousButton = response.data.data.links[0].url;
          this.nextButton = response.data.data.links[11].url;
          this.pageNumber = response.data.data.links;
          this.lastPage = response.data.data.last_page;
          this.currentPage = response.data.data.current_page;
          this.firstPage = parseInt(response.data.data.links[1].label);
          // console.log(response.data.data.links);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search(query) {
      this.searchQuery = query ? query : "";
      this.fetchData();
    },
  },
  computed: {},
  beforeMount() {
    this.fetchData();
  },
  mounted() {
    document.title = "Data Pendaftar | PPDB SMAN 1 Rawamerta";
  },
};
</script>

<template>
  <div class="relative overflow-x-auto">
    <div
      class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900"
    >
      <div>
        Show
        <select
          name="filterItemShow"
          id="filterItemShow"
          class="border border-gray-500 rounded-md dark:border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:outline-none"
          v-model="itemPerPage"
          :value="itemPerPage"
          @change="fetchData()"
        >
          <option :value="itemPerPage">{{ itemPerPage }}</option>
          <option v-for="item in itemFilterList" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
        entries
      </div>
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
        <SearchFormTable @search="search($event)" />
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
          v-for="item in dataItems.data"
          :key="item.nisn"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.from }}
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
        <span class="font-semibold text-gray-900 dark:text-white"
          >{{ dataItems.from }}-{{ dataItems.to }}</span
        >
        of
        <span class="font-semibold text-gray-900 dark:text-white">{{
          dataItems.total
        }}</span></span
      >
      <!-- Pagination -->
      <ul class="inline-flex h-8 -space-x-px text-sm" id="pagination-list">
        <li>
          <button
            type="button"
            id="prev-button"
            @click.prevent="fetchData(previousButton)"
            class="flex items-center justify-center h-8 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        <li>
          <button
            type="button"
            @click.prevent="fetchData(dataItems.first_page_url)"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </button>
        </li>
        <li>
          <button
            v-if="currentPage - firstPage > 2"
            type="button"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            ...
          </button>
        </li>
        <li
          v-for="item in pageNumber.slice(
            currentPage > 3 ? currentPage : 2,
            currentPage + 3 >= 9 ? 10 : currentPage + 3
          )"
          :key="item.label"
        >
          <button
            type="button"
            @click.prevent="fetchData(item.url)"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {{ item.label }}
          </button>
        </li>
        <li>
          <button
            v-if="currentPage + 4 < lastPage"
            type="button"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            ...
          </button>
        </li>
        <li>
          <button
            type="button"
            @click.prevent="fetchData(dataItems.last_page_url)"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {{ dataItems.last_page }}
          </button>
        </li>
        <li>
          <button
            type="button"
            id="next-button"
            @click.prevent="fetchData(nextButton)"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
      <!-- End of Pagination -->
    </nav>
  </div>
</template>
