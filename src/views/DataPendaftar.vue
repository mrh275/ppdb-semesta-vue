<template>
  <div
    class="px-4 pt-20 pb-10 wrapper data-pendaftar-wrapper lg:pt-32 lg:px-10 bg-zinc-200"
  >
    <div class="relative px-6 py-8 bg-white shadow-md rounded-xl">
      <h2 class="data-pendaftar-title">Data Pendaftar</h2>
      <div class="card">
        <DataTable
          :value="siswa"
          v-model:filters="filters"
          paginator
          :rows="10"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          :globalFilterFields="['nama', 'noreg_ppdb', 'nisn', 'tempat_lahir']"
          dataKey="id"
          stripedRows
          tableStyle="min-width: 50rem"
        >
          <template #header>
            <div class="flex justify-content-end">
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText
                  class="py-2 pl-5 pr-2 border-gray-400 border-1"
                  v-model="filters['global'].value"
                  placeholder="Keyword Search"
                />
              </span>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>
          <Column field="noreg_ppdb" sortable header="No Pendaftaran"></Column>
          <Column field="nisn" sortable header="NISN"></Column>
          <Column field="nama" sortable header="Nama"></Column>
          <Column
            field="tempat_lahir"
            sortable
            header="Tempat Tanggal Lahir"
          ></Column>
          <template #footer>
            In total there are {{ siswa ? siswa.length : 0 }} products.
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { FilterMatchMode } from "primevue/api";

export default {
  name: "DataPendaftar",
  data() {
    return {
      siswa: [],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        nama: { value: null, matchMode: FilterMatchMode.CONTAINS },
        noreg_ppdb: { value: null, matchMode: FilterMatchMode.CONTAINS },
        nisn: { value: null, matchMode: FilterMatchMode.CONTAINS },
        tempat_lahir: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
    };
  },
  mounted() {
    const API_url = "http://127.0.0.1:8000/api/data-pendaftar";
    axios
      .request({
        headers: {
          Authorization: `Bearer 1|SSawcSZK4a6WnpwCCL1PKg2FABu7ayYmRmsJfR70`,
        },
        method: "GET",
        url: API_url,
      })
      .then((response) => {
        this.siswa = response.data.data;
      });
  },
};
</script>
