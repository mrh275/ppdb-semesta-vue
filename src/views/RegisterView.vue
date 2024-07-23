<script>
import FormBiodata from "@/components/forms/register/FormBiodata.vue";
import FormOrangTua from "@/components/forms/register/FormOrangTua.vue";
import FormPeriodik from "@/components/forms/register/FormPeriodik.vue";
import FormUploadDocument from "@/components/forms/register/FormUploadDocument.vue";
import BuktiPendaftaran from "../components/forms/register/BuktiPendaftaran.vue";

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
    const stepWizardList = document.querySelectorAll("ul.step-wizard-list li");
    stepWizardList.forEach((step) => {
      step.firstElementChild.style.cursor = "pointer";
    });

    // check status registration
    if (sessionStorage.getItem("currentStatusRegister") == "orangtua") {
      this.jumpToDataOrangTua();
    } else if (sessionStorage.getItem("currentStatusRegister") == "periodik") {
      this.jumpToDataPeriodik();
    } else if (
      sessionStorage.getItem("currentStatusRegister") == "upload-files"
    ) {
      this.jumpToUploadFiles();
    } else if (
      sessionStorage.getItem("currentStatusRegister") == "bukti-daftar"
    ) {
      this.jumpToBuktiDaftar();
    }

    // Remove some menu when on register page
    if (url == "/register") {
      document.getElementById("menu-terms").remove();
      document.getElementById("menu-kuota").remove();
      document.getElementById("menu-faq").remove();
    }
  },
  components: {
    FormBiodata,
    FormOrangTua,
    FormPeriodik,
    FormUploadDocument,
    BuktiPendaftaran,
  },
  data() {
    return {
      statusBiodata: "current-item",
      statusDataOrangTua: "",
      statusDataPeriodik: "",
      statusUploadDocuments: "",
      isBiodataCompleted: "",
      isOrangTuaCompleted: "",
      isPeriodikCompleted: "",
      isUploadDocumentsCompleted: "",
      registerStatus: false,
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
    changeStatusPeriodik({ status, isComplete, isBackWard }) {
      this.statusDataPeriodik = status;
      this.isPeriodikCompleted = isComplete;
      this.statusUploadDocuments = isBackWard;
    },
    registrationStatus({ status, isComplete, isBackWard }) {
      this.statusUploadDocuments = status;
      this.isUploadDocumentsCompleted = isComplete;
      this.registerStatus = true;
    },
    jumpToDataDiri() {
      this.changeStatusBiodata({
        status: "current-item",
        isComplete: "",
        isBackWard: "",
      });
      this.changeStatusOrangTua({
        status: "",
        isComplete: "",
        isBackWard: "",
      });
      this.changeStatusPeriodik({
        status: "",
        isComplete: "",
        isBackWard: "",
      });
      document
        .querySelector(".form-biodata-wrapper")
        .classList.remove("completed");
      document
        .querySelector(".form-orang-tua-wrapper")
        .classList.remove("completed");
      document
        .querySelector(".form-periodik-wrapper")
        .classList.remove("completed");
      document
        .querySelector(".form-kesejahteraan-wrapper")
        .classList.remove("completed");
      document
        .querySelector(".form-orang-tua-wrapper")
        .classList.remove("show");
      document.querySelector(".form-periodik-wrapper").classList.remove("show");
      document
        .querySelector(".form-kesejahteraan-wrapper")
        .classList.remove("show");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("orang-tua");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("periodik");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("kesejahteraan");
    },
    jumpToDataOrangTua() {
      this.changeStatusBiodata({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      this.changeStatusOrangTua({
        status: "current-item",
        isComplete: "show",
        isBackWard: "",
      });
      this.changeStatusPeriodik({
        status: "",
        isComplete: "",
        isBackWard: "",
      });
      document.querySelector(".form-orang-tua-wrapper").classList.add("show");
      document.querySelector(".form-biodata-wrapper").classList.remove("show");
      document.querySelector(".form-periodik-wrapper").classList.remove("show");
      document
        .querySelector(".form-kesejahteraan-wrapper")
        .classList.remove("show");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.add("orang-tua");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("periodik");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("kesejahteraan");
    },
    jumpToDataPeriodik() {
      this.changeStatusBiodata({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      this.changeStatusOrangTua({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      this.changeStatusPeriodik({
        status: "current-item",
        isComplete: "show",
        isBackWard: "",
      });
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
    jumpToUploadFiles() {
      this.changeStatusBiodata({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      this.changeStatusOrangTua({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      this.changeStatusPeriodik({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      this.registrationStatus({
        status: "current-item",
        isComplete: "show",
        isBackWard: "",
      });
      document.querySelector(".form-biodata-wrapper").classList.remove("show");
      document
        .querySelector(".form-orang-tua-wrapper")
        .classList.remove("show");
      document.querySelector(".form-periodik-wrapper").classList.remove("show");
      document
        .querySelector(".form-kesejahteraan-wrapper")
        .classList.add("show");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("orang-tua");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("periodik");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.add("kesejahteraan");
    },
    jumpToBuktiDaftar() {
      this.changeStatusBiodata({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      this.changeStatusOrangTua({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      this.changeStatusPeriodik({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      this.registrationStatus({
        status: "",
        isComplete: "completed",
        isBackWard: "current-item",
      });
      document.querySelector(".form-biodata-wrapper").classList.remove("show");
      document
        .querySelector(".form-orang-tua-wrapper")
        .classList.remove("show");
      document.querySelector(".form-periodik-wrapper").classList.remove("show");
      document
        .querySelector(".form-kesejahteraan-wrapper")
        .classList.remove("show");
      document
        .querySelector(".cetak-pendaftaran-wrapper")
        .classList.add("show");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("orang-tua");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("periodik");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("kesejahteraan");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.add("cetak-bukti");
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
                @click.prevent="jumpToDataDiri()"
                ><i class="fa-solid fa-user"></i
              ></span>
              <span class="progress-label">Data Diri</span>
            </li>
            <li
              class="step-wizard-item"
              :class="statusDataOrangTua"
              id="data-orang-tua"
            >
              <span
                class="progress-count"
                :class="isOrangTuaCompleted"
                @click.prevent="jumpToDataOrangTua()"
                ><i class="fa-solid fa-users"></i
              ></span>
              <span class="progress-label">Data Orang Tua</span>
            </li>
            <li
              class="step-wizard-item"
              :class="statusDataPeriodik"
              id="data-periodik"
            >
              <span
                class="progress-count"
                :class="isPeriodikCompleted"
                @click.prevent="jumpToDataPeriodik()"
                ><i class="fa-solid fa-clipboard-user"></i
              ></span>
              <span class="progress-label">Data Periodik</span>
            </li>
            <li
              class="step-wizard-item"
              :class="statusUploadDocuments"
              id="data-kesejahteraan"
            >
              <span
                class="progress-count"
                :class="isUploadDocumentsCompleted"
                @click.prevent="jumpToUploadFiles()"
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
          <FormBiodata
            @nextForm="changeStatusBiodata"
            :isCompleted="isBiodataCompleted"
          />
          <FormOrangTua
            @previousForm="changeStatusBiodata"
            @nextForm="changeStatusOrangTua"
            :isCompleted="isOrangTuaCompleted"
          />
          <FormPeriodik
            @previousForm="changeStatusOrangTua"
            @nextForm="changeStatusPeriodik"
            :isCompleted="isPeriodikCompleted"
          />
          <FormUploadDocument
            @previousForm="changeStatusPeriodik"
            @finishRegistration="registrationStatus"
            :isCompleted="isUploadDocumentsCompleted"
          />
          <BuktiPendaftaran :registrationStatus="registerStatus" />
        </div>
      </div>
    </div>
  </div>
</template>
