<script>
import FormBiodata from "@/components/forms/register/FormBiodata.vue";
import FormOrangTua from "@/components/forms/register/FormOrangTua.vue";

export default {
  name: "RegisterView",
  beforeMount() {
    document.title = "Daftar | PPDB SMAN 1 Rawamerta";
  },
  mounted() {
    const url = window.location.pathname;
    if (url == "/register") {
      const body = document.getElementsByTagName("BODY")[0];
      body.style.display = "none";
      if (window.innerWidth < 1024) {
        alert("Silahkan buka halaman ini dengan menggunakan laptop/pc");
      } else {
        body.style.display = "block";
      }
    }

    // Remove some menu when on register page
    if (url == "/register") {
      document.getElementById("menu-terms").remove();
      document.getElementById("menu-kuota").remove();
      document.getElementById("menu-faq").remove();
    }

    // Progress Bar fixed on scroll
    const progressBar = document.querySelector(".progress-bar");
    const offsetProgressBar = 91;
    if (window.location.pathname == "/register") {
      window.addEventListener("scroll", function () {
        let st = window.pageYOffset;
        if (st > offsetProgressBar) {
          progressBar.classList.add("fixed-nav");
        } else {
          progressBar.classList.remove("fixed-nav");
        }
      });
    }
  },
  components: {
    FormBiodata,
    FormOrangTua,
  },
  data() {
    return {
      statusBiodata: "current-item",
      statusDataOrangTua: "",
      statusDataPeriodik: "",
      isBiodataCompleted: "",
      isOrangTuaCompleted: "",
      isPeriodikCompleted: "",
    };
  },
  methods: {
    changeStatusBiodata({ status, isComplete, isBackWard }) {
      this.statusBiodata = status;
      this.isBiodataCompleted = isComplete;
      this.statusDataOrangTua = isBackWard;
    },
    changeStatusOrangTua({ status, isComplete, isBackWard }) {
      this.statusDataOrangTua = status;
      this.isOrangTuaCompleted = isComplete;
      this.statusDataPeriodik = isBackWard;
    },
  },
};
</script>

<template>
  <div class="relative wrapper pt-28">
    <div class="register-section">
      <h2 class="register-title">Pendaftaran PPDB</h2>
      <!-- {{-- Progress Bar --}} -->
      <div class="progress-bar">
        <section class="step-wizard">
          <ul class="step-wizard-list">
            <li class="step-wizard-item" :class="statusBiodata" id="data-diri">
              <span
                class="progress-count"
                :class="isBiodataCompleted"
                onclick="jumpToDataDiri()"
                ><i class="fa-solid fa-user"></i
              ></span>
              <span class="progress-label">Data Diri</span>
            </li>
            <li
              class="step-wizard-item"
              :class="statusDataOrangTua"
              id="data-orang-tua"
            >
              <span class="progress-count" onclick="jumpToDataOrangTua()"
                ><i class="fa-solid fa-users"></i
              ></span>
              <span class="progress-label">Data Orang Tua</span>
            </li>
            <li class="step-wizard-item" id="data-periodik">
              <span class="progress-count" onclick="jumpToDataPeriodik()"
                ><i class="fa-solid fa-clipboard-user"></i
              ></span>
              <span class="progress-label">Data Periodik</span>
            </li>
            <li class="step-wizard-item" id="data-kesejahteraan">
              <span class="progress-count" onclick="jumpToUploadFiles()"
                ><i class="fa-solid fa-arrow-up-from-bracket"></i
              ></span>
              <span class="progress-label">Upload Dokumen</span>
            </li>
          </ul>
        </section>
      </div>
      <!-- {{-- End Progress Bar --}} -->
      <div class="form-section">
        <div class="form-wrapper-responsive">
          <FormBiodata @nextForm="changeStatusBiodata" />
          <FormOrangTua
            @previousForm="changeStatusBiodata"
            @nextForm="changeStatusOrangTua"
          />
        </div>
      </div>
    </div>
  </div>
</template>
