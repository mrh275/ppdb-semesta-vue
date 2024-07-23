<template>
  <div
    class="px-4 pt-20 pb-10 wrapper data-pendaftar-wrapper lg:pt-32 lg:px-10 bg-zinc-200"
  >
    <div class="relative px-6 py-8 bg-white shadow-md rounded-xl">
      <h2 class="data-pendaftar-title">Data Pendaftar</h2>
      <div class="table-wrapper">
        <DataTable :items="siswa" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DataTable from "../components/tables/NewDataTable.vue";

export default {
  name: "DataPendaftar",
  components: {
    DataTable,
  },
  beforeMount() {
    document.title = "Data Pendaftar | PPDB SMK Ar-Raihan Cikampek";
  },
  data() {
    return {
      siswa: [],
    };
  },
  mounted() {
    const API_url = "http://127.0.0.1:8000/api/data-pendaftar";
    axios
      .request({
        method: "GET",
        url: API_url,
      })
      .then((response) => {
        this.siswa = response.data.data;
      });
  },
};
</script>
