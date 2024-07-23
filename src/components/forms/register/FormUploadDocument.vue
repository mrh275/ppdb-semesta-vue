<script>
import Swal from "sweetalert2";
import Dropzone from "dropzone";
import axios from "axios";

Dropzone.autoDiscover = false;

export default {
  name: "FormUploadDocument",
  data() {
    return {
      noRegister: sessionStorage.getItem("noRegister"),
      urlIjazah: axios.defaults.baseURL + "upload-files/ijazah",
      urlKk: axios.defaults.baseURL + "upload-files/kk",
      urlAkte: axios.defaults.baseURL + "upload-files/akte",
      urlKtp: axios.defaults.baseURL + "upload-files/ktp",
      urlKip: axios.defaults.baseURL + "upload-files/kip",
      urlKis: axios.defaults.baseURL + "upload-files/kis",
      urlKks: axios.defaults.baseURL + "upload-files/kks",
      urlPkh: axios.defaults.baseURL + "upload-files/pkh",
    };
  },
  mounted() {
    // Upload ijazah
    const ijazahUpload = new Dropzone("#ijazah-upload", {
      url: this.urlIjazah,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      acceptedFiles: ".jpg, .jpeg, .png",
      maxFilesize: 1,
      paramName: "ijazahFile",
      thumbnailWidth: 180,
      thumbnailHeight: 180,
      addRemoveLinks: true,
      dictRemoveFile: '<span class="tooltiptext ">Hapus</span>',
      dictCancelUpload: "",
      previewTemplate: document.querySelector("div#dropzoneItemTemplate")
        .innerHTML,
      dictFileTooBig: "Ukuran file terlalu besar! Maksimal 1024KB",
      dictInvalidFileType:
        "Tipe file tidak sesuai. Hanya file .jpg, .jpeg, .png yang diperbolehkan",
    });
    // End Upload ijazah

    // Upload kk
    const kkUpload = new Dropzone("#kk-upload", {
      url: this.urlKk,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      acceptedFiles: ".jpg, .jpeg, .png",
      maxFilesize: 1,
      paramName: "kkFile",
      thumbnailWidth: 180,
      thumbnailHeight: 180,
      addRemoveLinks: true,
      dictRemoveFile: '<span class="tooltiptext ">Hapus</span>',
      dictCancelUpload: "",
      previewTemplate: document.querySelector("div#dropzoneItemTemplate")
        .innerHTML,
      dictFileTooBig: "Ukuran file terlalu besar! Maksimal 1024KB",
      dictInvalidFileType:
        "Tipe file tidak sesuai. Hanya file .jpg, .jpeg, .png yang diperbolehkan",
    });
    // End Upload kk

    // Upload akte
    const akteUpload = new Dropzone("#akte-upload", {
      url: this.urlAkte,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      acceptedFiles: ".jpg, .jpeg, .png",
      maxFilesize: 1,
      paramName: "akteFile",
      thumbnailWidth: 180,
      thumbnailHeight: 180,
      addRemoveLinks: true,
      dictRemoveFile: '<span class="tooltiptext ">Hapus</span>',
      dictCancelUpload: "",
      previewTemplate: document.querySelector("div#dropzoneItemTemplate")
        .innerHTML,
      dictFileTooBig: "Ukuran file terlalu besar! Maksimal 1024KB",
      dictInvalidFileType:
        "Tipe file tidak sesuai. Hanya file .jpg, .jpeg, .png yang diperbolehkan",
    });
    // End Upload akte

    // Upload ktp
    const ktpUpload = new Dropzone("#ktp-upload", {
      url: this.urlKtp,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      acceptedFiles: ".jpg, .jpeg, .png",
      maxFilesize: 1,
      paramName: "ktpFile",
      thumbnailWidth: 180,
      thumbnailHeight: 180,
      addRemoveLinks: true,
      dictRemoveFile: '<span class="tooltiptext ">Hapus</span>',
      dictCancelUpload: "",
      previewTemplate: document.querySelector("div#dropzoneItemTemplate")
        .innerHTML,
      dictFileTooBig: "Ukuran file terlalu besar! Maksimal 1024KB",
      dictInvalidFileType:
        "Tipe file tidak sesuai. Hanya file .jpg, .jpeg, .png yang diperbolehkan",
    });
    // End Upload ktp

    // Upload kip
    const kipUpload = new Dropzone("#kip-upload", {
      url: this.urlKip,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      acceptedFiles: ".jpg, .jpeg, .png",
      maxFilesize: 1,
      paramName: "kipFile",
      thumbnailWidth: 180,
      thumbnailHeight: 180,
      addRemoveLinks: true,
      dictRemoveFile: '<span class="tooltiptext ">Hapus</span>',
      dictCancelUpload: "",
      previewTemplate: document.querySelector("div#dropzoneItemTemplate")
        .innerHTML,
      dictFileTooBig: "Ukuran file terlalu besar! Maksimal 1024KB",
      dictInvalidFileType:
        "Tipe file tidak sesuai. Hanya file .jpg, .jpeg, .png yang diperbolehkan",
    });
    // End Upload kip

    // Upload kis
    const kisUpload = new Dropzone("#kis-upload", {
      url: this.urlKis,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      acceptedFiles: ".jpg, .jpeg, .png",
      maxFilesize: 1,
      paramName: "kisFile",
      thumbnailWidth: 180,
      thumbnailHeight: 180,
      addRemoveLinks: true,
      dictRemoveFile: '<span class="tooltiptext ">Hapus</span>',
      dictCancelUpload: "",
      previewTemplate: document.querySelector("div#dropzoneItemTemplate")
        .innerHTML,
      dictFileTooBig: "Ukuran file terlalu besar! Maksimal 1024KB",
      dictInvalidFileType:
        "Tipe file tidak sesuai. Hanya file .jpg, .jpeg, .png yang diperbolehkan",
    });
    // End Upload kis

    // Upload kks/kps
    const kksUpload = new Dropzone("#kks-upload", {
      url: this.urlKks,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      acceptedFiles: ".jpg, .jpeg, .png",
      maxFilesize: 1,
      paramName: "kksFile",
      thumbnailWidth: 180,
      thumbnailHeight: 180,
      addRemoveLinks: true,
      dictRemoveFile: '<span class="tooltiptext ">Hapus</span>',
      dictCancelUpload: "",
      previewTemplate: document.querySelector("div#dropzoneItemTemplate")
        .innerHTML,
      dictFileTooBig: "Ukuran file terlalu besar! Maksimal 1024KB",
      dictInvalidFileType:
        "Tipe file tidak sesuai. Hanya file .jpg, .jpeg, .png yang diperbolehkan",
    });
    // End Upload kks/kps

    // Upload pkh
    const pkhUpload = new Dropzone("#pkh-upload", {
      url: this.urlPkh,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      acceptedFiles: ".jpg, .jpeg, .png",
      maxFilesize: 1,
      paramName: "pkhFile",
      thumbnailWidth: 180,
      thumbnailHeight: 180,
      addRemoveLinks: true,
      dictRemoveFile: '<span class="tooltiptext ">Hapus</span>',
      dictCancelUpload: "",
      previewTemplate: document.querySelector("div#dropzoneItemTemplate")
        .innerHTML,
      dictFileTooBig: "Ukuran file terlalu besar! Maksimal 1024KB",
      dictInvalidFileType:
        "Tipe file tidak sesuai. Hanya file .jpg, .jpeg, .png yang diperbolehkan",
    });
    // End Upload pkh
  },
  methods: {
    submitDocuments() {
      Swal.fire({
        title: "Apa anda sudah yakin?",
        text: "Pastikan data yang anda masukkan sudah benar.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yakin!",
        cancelButtonText: "Belum",
      }).then((result) => {
        if (result.value) {
          sessionStorage.setItem("currentStatusRegister", "bukti-daftar");
          Swal.fire({
            title: "Sedang menyimpan data...",
            timer: 2000,
            showConfirmButton: false,
            didOpen: () => {
              Swal.showLoading();
            },
          }).then(() => {
            Swal.fire({
              icon: "success",
              title: "Pendaftaran berhasil!",
              text: "Silahkan lakukan verifikasi pendaftaran pada meja Verifikator.",
            }).then((dismiss) => {
              window.location.reload();
            });
            this.$emit("finishRegistration", {
              status: "",
              isComplete: "completed",
              isBackWard: "current-item",
            });
            // document
            //   .querySelector(".form-kesejahteraan-wrapper")
            //   .classList.remove("show");
            // document
            //   .querySelector(".cetak-pendaftaran-wrapper")
            //   .classList.add("show");
            // document
            //   .querySelector(".form-wrapper-responsive")
            //   .classList.remove("kesejahteraan");
            // document
            //   .querySelector(".form-wrapper-responsive")
            //   .classList.add("cetak-bukti");
          });
        }
      });
    },
    backToDataPeriodik() {
      this.$emit("previousForm", {
        status: "current-item",
        isComplete: "",
        isBackWard: "",
      });
      document
        .querySelector(".form-periodik-wrapper")
        .classList.remove("completed");
      document
        .querySelector(".form-kesejahteraan-wrapper")
        .classList.remove("completed");
      document.querySelector(".form-biodata-wrapper").classList.remove("show");
      document
        .querySelector(".form-orang-tua-wrapper")
        .classList.remove("show");
      document.querySelector(".form-periodik-wrapper").classList.add("show");
      document
        .querySelector(".form-kesejahteraan-wrapper")
        .classList.remove("show");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("orang-tua");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.add("periodik");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("kesejahteraan");
    },
  },
  props: {
    isCompleted: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <div class="form-kesejahteraan-wrapper" :class="isCompleted">
    <h3 class="form-title form-biodata-title">Upload Dokumen</h3>

    <div class="mb-6 form-wrapper form-biodata">
      <div class="w-full">
        <div class="flex items-start w-full mb-6 left-upload justify-evenly">
          <div class="upload-group">
            <label
              for="ijazah-upload"
              class="inline-block mb-1 text-lg font-semibold"
              >Ijazah/Surat Kelulusan</label
            >
            <form
              method="post"
              enctype="multipart/form-data"
              class="dropzone w-[13rem] h-[15rem] flex items-center justify-center rounded-lg border-[#0099ff]"
              id="ijazah-upload"
            >
              <input type="hidden" name="noreg_ppdb" v-model="noRegister" />
              <div class="flex flex-col items-center justify-center dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                    <span class="block text-sm text-zinc-700"
                      >Klik untuk memilih file</span
                    >
                    <span class="block my-1 text-xs text-zinc-600">atau</span>
                    <span class="block text-sm text-zinc-700"
                      >Drag and Drop file</span
                    >
                  </div>
                </div>
                <span class="btn-sm btn-primary">Browse files</span>
              </div>
            </form>
          </div>
          <div class="upload-group">
            <label
              for="ijazah-upload"
              class="inline-block mb-1 text-lg font-semibold"
              >Kartu Keluarga</label
            >
            <form
              method="post"
              enctype="multipart/form-data"
              class="dropzone w-[13rem] h-[15rem] flex items-center justify-center rounded-lg border-[#0099ff]"
              id="kk-upload"
            >
              <input type="hidden" name="noreg_ppdb" v-model="noRegister" />
              <div class="flex flex-col items-center justify-center dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                    <span class="block text-sm text-zinc-700"
                      >Klik untuk memilih file</span
                    >
                    <span class="block my-1 text-xs text-zinc-600">atau</span>
                    <span class="block text-sm text-zinc-700"
                      >Drag and Drop file</span
                    >
                  </div>
                </div>
                <span class="btn-sm btn-primary">Browse files</span>
              </div>
            </form>
          </div>
          <div class="upload-group">
            <label
              for="ijazah-upload"
              class="inline-block mb-1 text-lg font-semibold"
              >Akte Kelahiran</label
            >
            <form
              method="post"
              enctype="multipart/form-data"
              class="dropzone w-[13rem] h-[15rem] flex items-center justify-center rounded-lg border-[#0099ff]"
              id="akte-upload"
            >
              <input type="hidden" name="noreg_ppdb" v-model="noRegister" />
              <div class="flex flex-col items-center justify-center dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                    <span class="block text-sm text-zinc-700"
                      >Klik untuk memilih file</span
                    >
                    <span class="block my-1 text-xs text-zinc-600">atau</span>
                    <span class="block text-sm text-zinc-700"
                      >Drag and Drop file</span
                    >
                  </div>
                </div>
                <span class="btn-sm btn-primary">Browse files</span>
              </div>
            </form>
          </div>
          <div class="upload-group">
            <label
              for="ijazah-upload"
              class="inline-block mb-1 text-lg font-semibold"
              >KTP Orang Tua</label
            >
            <form
              method="post"
              enctype="multipart/form-data"
              class="dropzone w-[13rem] h-[15rem] flex items-center justify-center rounded-lg border-[#0099ff]"
              id="ktp-upload"
            >
              <input type="hidden" name="noreg_ppdb" v-model="noRegister" />
              <div class="flex flex-col items-center justify-center dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                    <span class="block text-sm text-zinc-700"
                      >Klik untuk memilih file</span
                    >
                    <span class="block my-1 text-xs text-zinc-600">atau</span>
                    <span class="block text-sm text-zinc-700"
                      >Drag and Drop file</span
                    >
                  </div>
                </div>
                <span class="btn-sm btn-primary">Browse files</span>
              </div>
            </form>
          </div>
        </div>
        <div class="flex items-start w-full right-upload justify-evenly">
          <div class="upload-group">
            <label
              for="kip-upload"
              class="inline-block mb-1 text-lg font-semibold"
              >Kartu Indonesia Pintar</label
            >
            <form
              method="post"
              enctype="multipart/form-data"
              class="dropzone w-[13rem] h-[15rem] flex items-center justify-center rounded-lg border-[#0099ff]"
              id="kip-upload"
            >
              <input type="hidden" name="noreg_ppdb" v-model="noRegister" />
              <div class="flex flex-col items-center justify-center dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                    <span class="block text-sm text-zinc-700"
                      >Klik untuk memilih file</span
                    >
                    <span class="block my-1 text-xs text-zinc-600">atau</span>
                    <span class="block text-sm text-zinc-700"
                      >Drag and Drop file</span
                    >
                  </div>
                </div>
                <span class="btn-sm btn-primary">Browse files</span>
              </div>
            </form>
          </div>
          <div class="upload-group">
            <label
              for="kis-upload"
              class="inline-block mb-1 text-lg font-semibold"
              >Kartu Indonesia Sehat</label
            >
            <form
              method="post"
              enctype="multipart/form-data"
              class="dropzone w-[13rem] h-[15rem] flex items-center justify-center rounded-lg border-[#0099ff]"
              id="kis-upload"
            >
              <input type="hidden" name="noreg_ppdb" v-model="noRegister" />
              <div class="flex flex-col items-center justify-center dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                    <span class="block text-sm text-zinc-700"
                      >Klik untuk memilih file</span
                    >
                    <span class="block my-1 text-xs text-zinc-600">atau</span>
                    <span class="block text-sm text-zinc-700"
                      >Drag and Drop file</span
                    >
                  </div>
                </div>
                <span class="btn-sm btn-primary">Browse files</span>
              </div>
            </form>
          </div>
          <div class="upload-group">
            <label
              for="kks-upload"
              class="inline-block mb-1 text-lg font-semibold"
              >KKS/KPS</label
            >
            <form
              method="post"
              enctype="multipart/form-data"
              class="dropzone w-[13rem] h-[15rem] flex items-center justify-center rounded-lg border-[#0099ff]"
              id="kks-upload"
            >
              <input type="hidden" name="noreg_ppdb" v-model="noRegister" />
              <div class="flex flex-col items-center justify-center dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                    <span class="block text-sm text-zinc-700"
                      >Klik untuk memilih file</span
                    >
                    <span class="block my-1 text-xs text-zinc-600">atau</span>
                    <span class="block text-sm text-zinc-700"
                      >Drag and Drop file</span
                    >
                  </div>
                </div>
                <span class="btn-sm btn-primary">Browse files</span>
              </div>
            </form>
          </div>
          <div class="upload-group">
            <label
              for="pkh-upload"
              class="inline-block mb-1 text-lg font-semibold"
              >Kartu PKH</label
            >
            <form
              method="post"
              enctype="multipart/form-data"
              class="dropzone w-[13rem] h-[15rem] flex items-center justify-center rounded-lg border-[#0099ff]"
              id="pkh-upload"
            >
              <input type="hidden" name="noreg_ppdb" v-model="noRegister" />
              <div class="flex flex-col items-center justify-center dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                    <span class="block text-sm text-zinc-700"
                      >Klik untuk memilih file</span
                    >
                    <span class="block my-1 text-xs text-zinc-600">atau</span>
                    <span class="block text-sm text-zinc-700"
                      >Drag and Drop file</span
                    >
                  </div>
                </div>
                <span class="btn-sm btn-primary">Browse files</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="form-btn">
      <button
        type="button"
        class="btn btn-secondary"
        @click.prevent="backToDataPeriodik()"
      >
        Kembali
      </button>
      <button
        class="btn btn-primary"
        type="button"
        id="btn-upload-files"
        @click.prevent="submitDocuments()"
      >
        Simpan
      </button>
    </div>
  </div>

  <!-- Dropzone -->
  <div id="dropzoneItemTemplate" style="display: none">
    <div class="dz-preview dz-file-preview">
      <div class="dz-image"><img data-dz-thumbnail="" /></div>
      <div class="dz-details">
        <div class="dz-size">
          <span data-dz-size=""><strong>3.7</strong> MB</span>
        </div>
        <div class="dz-filename">
          <span data-dz-name="">PPDB SMANR1.png</span>
        </div>
      </div>
      <div class="dz-progress progress" style="height: 4px">
        <div
          class="dz-upload progress-bar bg-success"
          role="progressbar"
          style="width: 0"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          data-dz-uploadprogress
        ></div>
      </div>
      <div class="d-flex align-items-center">
        <div class="dz-success-mark">
          <span class="fa fa-check-circle"></span>
        </div>
        <div class="dz-error-mark">
          <span class="fa fa-times-circle"></span>
        </div>
        <div class="dz-error-message">
          <small data-dz-errormessage></small>
        </div>
      </div>
    </div>
  </div>

  <!-- End Dropzone -->
</template>
