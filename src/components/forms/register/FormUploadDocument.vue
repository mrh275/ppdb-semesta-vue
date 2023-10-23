<script>
import Swal from "sweetalert2";

export default {
  name: "FormUploadDocument",
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
            });
            this.$emit("finishRegistration", {
              status: "",
              isComplete: "completed",
              isBackWard: "current-item",
            });
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
};
</script>

<template>
  <div class="form-kesejahteraan-wrapper">
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
              @csrf
              <input type="hidden" name="noreg_ppdb" />
              <div class="dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                  </div>
                  <span class="block text-sm text-zinc-700"
                    >Klik untuk memilih file</span
                  >
                  <span class="block my-1 text-xs text-zinc-600">atau</span>
                  <span class="block text-sm text-zinc-700"
                    >Drag and Drop file</span
                  >
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
              @csrf
              <input type="hidden" name="noreg-ppdb" />
              <div class="dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                  </div>
                  <span class="block text-sm text-zinc-700"
                    >Klik untuk memilih file</span
                  >
                  <span class="block my-1 text-xs text-zinc-600">atau</span>
                  <span class="block text-sm text-zinc-700"
                    >Drag and Drop file</span
                  >
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
              @csrf
              <input type="hidden" name="noreg-ppdb" />
              <div class="dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                  </div>
                  <span class="block text-sm text-zinc-700"
                    >Klik untuk memilih file</span
                  >
                  <span class="block my-1 text-xs text-zinc-600">atau</span>
                  <span class="block text-sm text-zinc-700"
                    >Drag and Drop file</span
                  >
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
              @csrf
              <input type="hidden" name="noreg-ppdb" />
              <div class="dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                  </div>
                  <span class="block text-sm text-zinc-700"
                    >Klik untuk memilih file</span
                  >
                  <span class="block my-1 text-xs text-zinc-600">atau</span>
                  <span class="block text-sm text-zinc-700"
                    >Drag and Drop file</span
                  >
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
              @csrf
              <input type="hidden" name="noreg-ppdb" />
              <div class="dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                  </div>
                  <span class="block text-sm text-zinc-700"
                    >Klik untuk memilih file</span
                  >
                  <span class="block my-1 text-xs text-zinc-600">atau</span>
                  <span class="block text-sm text-zinc-700"
                    >Drag and Drop file</span
                  >
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
              @csrf
              <input type="hidden" name="noreg-ppdb" />
              <div class="dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                  </div>
                  <span class="block text-sm text-zinc-700"
                    >Klik untuk memilih file</span
                  >
                  <span class="block my-1 text-xs text-zinc-600">atau</span>
                  <span class="block text-sm text-zinc-700"
                    >Drag and Drop file</span
                  >
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
              @csrf
              <input type="hidden" name="noreg-ppdb" />
              <div class="dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                  </div>
                  <span class="block text-sm text-zinc-700"
                    >Klik untuk memilih file</span
                  >
                  <span class="block my-1 text-xs text-zinc-600">atau</span>
                  <span class="block text-sm text-zinc-700"
                    >Drag and Drop file</span
                  >
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
              @csrf
              <input type="hidden" name="noreg-ppdb" />
              <div class="dz-message">
                <div class="mb-4">
                  <div class="text-center">
                    <i
                      class="fa-solid fa-cloud-arrow-up text-[2rem] text-[#0099ff]"
                    ></i>
                  </div>
                  <span class="block text-sm text-zinc-700"
                    >Klik untuk memilih file</span
                  >
                  <span class="block my-1 text-xs text-zinc-600">atau</span>
                  <span class="block text-sm text-zinc-700"
                    >Drag and Drop file</span
                  >
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
