<script>
import { mapState, mapActions } from "pinia";
import useRegisterStore from "@/stores/register";
import Swal from "sweetalert2";

export default {
  name: "CekPendaftar",
  data() {
    return {
      noRegister: "",
    };
  },
  computed: {
    ...mapState(useRegisterStore, ["currentBiodata"]),
  },
  methods: {
    ...mapActions(useRegisterStore, ["getCurrentBiodata"]),
    closeLoginForm() {
      document.querySelector("#cek-pendaftar-form").classList.add("invisible");
      document.querySelector("#cek-pendaftar-form").classList.add("opacity-0");
    },

    // Login attempt
    async cekPendaftar() {
      try {
        // Attemp to check data pendaftar
        await this.getCurrentBiodata(this.noRegister);
        if (this.currentBiodata) {
          sessionStorage.setItem("noRegister", this.noRegister);

          Swal.fire({
            title: "Data ditemukan!",
            icon: "success",
            text: "Pastikan anda mengisi data dengan benar.",
          }).then((dismiss) => {
            window.location.href = "/register";
          });
        } else {
          Swal.fire({
            title: "Data tidak ditemukan!",
            icon: "warning",
            text: "Periksa kembali nomor pendaftaran anda.",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Data tidak ditemukan!",
          icon: "warning",
          text: "Periksa kembali nomor pendaftaran anda.",
        });
      }
    },
  },
};
</script>
<template>
  <div
    class="fixed top-0 z-50 invisible w-full transition-all duration-300 ease-in-out opacity-0 login-form"
    id="cek-pendaftar-form"
  >
    <div
      class="flex items-center justify-center h-screen py-6 bg-opacity-50 bg-zinc-700"
    >
      <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
        <form
          method="POST"
          id="login-form"
          class="max-w-lg mx-auto overflow-hidden bg-white border rounded-lg"
        >
          <div
            class="relative flex items-center justify-center p-4 bg-gray-100"
          >
            <h2
              class="text-2xl font-bold text-center text-gray-800 lg:text-3xl"
            >
              Cek Pendaftar
            </h2>
            <button
              type="button"
              id="close-login-btn"
              class="close-login-form absolute text-2xl text-zinc-600 cursor-pointer font-bold top-0.5 right-2"
              @click.prevent="closeLoginForm"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="flex flex-col gap-4 px-8 pt-4 pb-8">
            <div>
              <label
                for="email"
                class="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >Nomor Pendaftaran PPDB</label
              >
              <input
                name="noreg_ppdb"
                id="noreg_ppdb"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-[#0099ff] rounded outline-none transition duration-100 px-3 py-2"
                v-model="noRegister"
              />
            </div>

            <button
              class="block btn btn-primary"
              type="button"
              @click.prevent="cekPendaftar"
              id="login-btn-form"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
