<script>
import logoArraihan from "../../../assets/img/Logo-SMK-Ar-Raihan-S.png";
import ttd from "../../../assets/img/ttd.png";
import useRegisterStore from "@/stores/register";
import { mapState, mapActions } from "pinia";
import Swal from "sweetalert2";
import html2pdf from "html2pdf.js";

export default {
  name: "BuktiPendaftaran",
  data() {
    return {
      logoArraihan,
      ttd,
      noRegister: sessionStorage.getItem("noRegister"),
      buktiDaftar: {
        noreg_ppdb: "",
        nik: "",
        nisn: "",
        nama: "",
        jenis_kelamin: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        alamat: "",
        dusun: "",
        rt: "",
        rw: "",
        desa: "",
        kecamatan: "",
        kabupaten: "",
        gelombang: "",
        user: "",
      },
      register_date: "",
      asal_sekolah: "",
      print_date: "",
    };
  },
  mounted() {
    this.getDataRegister();
  },
  computed: {
    ...mapState(useRegisterStore, ["currentBiodata", "currentAsalSekolah"]),
  },
  watch: {
    registrationStatus(value) {
      if (value == true) {
        this.getDataRegister();
      }
    },
  },
  props: {
    registrationStatus: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(useRegisterStore, ["getCurrentBiodata", "resetRegister"]),
    async getDataRegister() {
      await this.getCurrentBiodata(this.noRegister);
      if (this.currentBiodata) {
        this.buktiDaftar = this.currentBiodata;
        this.asal_sekolah = this.currentAsalSekolah;
        const date = new Date(this.buktiDaftar.created_at).toLocaleDateString(
          "id-ID",
          {
            month: "long",
            day: "numeric",
            year: "numeric",
          }
        );

        const hour = new Date(this.buktiDaftar.created_at).toLocaleTimeString(
          "id-ID",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        );
        this.register_date = date + " " + hour + " WIB";

        const printDate = new Date().toLocaleDateString("id-ID", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        const printHour = new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        });
        this.print_date = printDate + " " + printHour + " WIB";
      }
    },
    async resetPendaftaran() {
      await this.resetRegister();
      this.$router.push("/");
    },
    cetakBukti() {
      let element = document.getElementById("cetak-bukti-pendaftaran");
      document.documentElement.scrollTop = 0;
      Swal.fire({
        title: "Cetak Bukti Pendaftaran",
        text: "Apakah anda yakin ingin mencetak bukti pendaftaran ini?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, cetak!",
      }).then((result) => {
        if (result.value) {
          let option = {
            margin: [0, 0, 0, 0],
            filename: "bukti-pendaftaran-ppdb-2-2223001.pdf",
            image: {
              type: "jpeg",
              quality: 1,
            },
            html2canvas: {
              scale: 2,
            },
            jsPDF: {
              unit: "in",
              format: "A4",
              orientation: "portrait",
            },
          };

          html2pdf().set(option).from(element).save();
        }
      });
    },
  },
};
</script>

<template>
  <div
    class="transition-all duration-300 ease-in-out cetak-pendaftaran-wrapper"
  >
    <h3 class="cetak-pendaftaran-title">Bukti Pendaftaran PPDB</h3>

    <button class="btn btn-primary" type="button" @click.prevent="cetakBukti">
      Cetak Bukti Pendaftaran
    </button>
    <button
      type="button"
      @click.prevent="resetPendaftaran"
      class="btn btn-secondary"
    >
      Tutup Halaman
    </button>
    <div class="card-bukti-pendaftaran my-4 px-[11rem] 2xl:px-[12rem]">
      <div
        class="w-full mx-auto bg-white rounded-lg card-body"
        id="cetak-bukti-pendaftaran"
      >
        <div
          class="flex items-center justify-start px-8 pt-6 pb-4 cetak-header"
        >
          <img
            :src="logoArraihan"
            alt="Logo Sekolah"
            class="w-20 h-20 cetak-logo"
          />
          <div class="mx-4 cetak-brand">
            <p class="leading-3 cetak-brand-title">
              <span class="block text-xl font-semibold leading-6">
                BUKTI PENDAFTARAN
              </span>
              <span class="block text-xl font-semibold leading-6">
                PENERIMAAN PESERTA DIDIK BARU (PPDB)
              </span>
              <span class="block text-xl font-semibold leading-6">
                SMK AR-RAIHAN CIKAMPEK
              </span>
              <span class="block text-xl font-semibold leading-6">
                TAHUN PELAJARAN 2024/2025
              </span>
            </p>
          </div>
        </div>
        <div class="px-8 pt-2 pb-6 cetak-body">
          <div class="w-full px-6 py-3 biodata-cpd bg-zinc-300">
            <h3
              class="text-lg font-semibold align-middle biodata-cpd-title text-zinc-700"
            >
              Biodata Calon Peserta Didik
            </h3>
          </div>
          <div
            class="flex items-start justify-between px-6 pt-4 pb-8 text-sm register-wrapper text-zinc-700"
          >
            <div class="w-3/5 pr-2 left-register">
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>No. Pendaftaran</span>
                </div>
                <div class="w-3/5 register-value">
                  <span
                    >:
                    <span class="noreg_ppdb">{{
                      buktiDaftar.noreg_ppdb
                    }}</span></span
                  >
                </div>
              </div>
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>NIK</span>
                </div>
                <div class="w-3/5 register-value">
                  <span
                    >: <span class="nik">{{ buktiDaftar.nik }}</span></span
                  >
                </div>
              </div>
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>NISN</span>
                </div>
                <div class="w-3/5 register-value">
                  <span
                    >: <span class="nisn">{{ buktiDaftar.nisn }}</span></span
                  >
                </div>
              </div>
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>Nama Lengkap</span>
                </div>
                <div class="register-separator">
                  <span>&nbsp;:&nbsp;</span>
                </div>
                <div class="w-3/5 register-value">
                  <span class="nama">{{ buktiDaftar.nama }}</span>
                </div>
              </div>
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>Jenis Kelamin</span>
                </div>
                <div class="w-3/5 register-value">
                  <span
                    >:
                    <span class="jenis_kelamin">{{
                      buktiDaftar.jenis_kelamin
                    }}</span></span
                  >
                </div>
              </div>
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>TTL</span>
                </div>
                <div class="w-3/5 register-value">
                  <span
                    >:
                    <span class="tempat_lahir">{{
                      buktiDaftar.tempat_lahir
                    }}</span
                    >,
                    <span class="tanggal_lahir">{{
                      buktiDaftar.tanggal_lahir
                    }}</span></span
                  >
                </div>
              </div>
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>Asal Sekolah</span>
                </div>
                <div class="w-3/5 register-value">
                  <span
                    >:
                    <span class="asal_sekolah">{{
                      asal_sekolah.nama_sekolah
                    }}</span></span
                  >
                </div>
              </div>
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>Alamat Lengkap</span>
                </div>
                <div class="register-separator">
                  <span>&nbsp;:&nbsp;</span>
                </div>
                <div class="w-3/5 whitespace-normal register-value">
                  <span class="alamat"></span> Dusun
                  <span class="dusun">{{ buktiDaftar.dusun }}</span> RT.<span
                    class="rt"
                    >{{ buktiDaftar.rt }}</span
                  >
                  RW.<span class="rw">{{ buktiDaftar.rw }}</span> Ds.
                  <span class="desa">{{ buktiDaftar.desa }}</span> Kec.
                  <span class="kecamatan">{{ buktiDaftar.kecamatan }}</span>
                  <span class="kabupaten">
                    Kab. {{ buktiDaftar.kabupaten }}</span
                  >
                </div>
              </div>
            </div>
            <div class="w-2/5 pl-2 right-register">
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>Gelombang</span>
                </div>
                <div class="register-separator">
                  <span>&nbsp;:&nbsp;</span>
                </div>
                <div class="w-3/5 register-value">
                  <span class="jalur_pendaftaran">{{
                    buktiDaftar.gelombang
                  }}</span>
                </div>
              </div>
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>Advisor</span>
                </div>
                <div class="w-3/5 register-value">
                  <span>: <span class="user">Verifikator</span></span>
                </div>
              </div>
              <div class="flex items-start justify-start w-full register-item">
                <div class="w-2/5 register-key">
                  <span>Tanggal Pendaftaran</span>
                </div>
                <div class="w-3/5 register-value">
                  <span
                    >:
                    <span class="register_date">{{ register_date }}</span></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-10 py-3 peryaratan-cpd bg-zinc-300">
            <h3
              class="text-lg font-semibold align-middle peryaratan-cpd-title text-zinc-700"
            >
              Persyaratan Calon Peserta Didik
            </h3>
          </div>
          <div
            class="flex items-start justify-between px-6 pt-4 pb-8 text-sm peryaratan-cpd-wrapper text-zinc-700"
          >
            <div class="w-1/2 pr-4 left-terms-cpd">
              <h4 class="mb-4 text-lg font-semibold reguler-terms-cpd-title">
                Persyaratan Umum
              </h4>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/5 terms-cpd-key">
                  <span>Foto</span>
                </div>
                <div class="w-2/5 terms-cpd-value">
                  <span>: Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/5 terms-cpd-key">
                  <span>Kartu Keluarga</span>
                </div>
                <div class="w-2/5 terms-cpd-value">
                  <span>: Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/5 terms-cpd-key">
                  <span>KTP Orang Tua</span>
                </div>
                <div class="w-2/5 terms-cpd-value">
                  <span>: Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/5 terms-cpd-key">
                  <span>Akta Kelahiran</span>
                </div>
                <div class="w-2/5 terms-cpd-value">
                  <span>: Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/5 terms-cpd-key">
                  <span>Ijazah/Surat Kelulusan</span>
                </div>
                <div class="w-2/5 terms-cpd-value">
                  <span>: Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/5 terms-cpd-key">
                  <span>SKKB</span>
                </div>
                <div class="w-2/5 terms-cpd-value">
                  <span>: Ada</span>
                </div>
              </div>
            </div>
            <div class="w-1/2 pl-4 right-terms-cpd">
              <h4 class="mb-4 text-lg font-semibold specified-terms-cpd-title">
                Persyaratan Khusus
              </h4>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/4 terms-cpd-key">
                  <span>Sertifikat Juara</span>
                </div>
                <div class="w-1/4 terms-cpd-value">
                  <span>: Tidak Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/4 terms-cpd-key">
                  <span>Rapor</span>
                </div>
                <div class="w-1/4 terms-cpd-value">
                  <span>: Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/4 terms-cpd-key">
                  <span>Kartu Indonesia Pintar</span>
                </div>
                <div class="w-1/4 terms-cpd-value">
                  <span>: Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/4 terms-cpd-key">
                  <span>Kartu Indonesia Sehat</span>
                </div>
                <div class="w-1/4 terms-cpd-value">
                  <span>: Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/4 terms-cpd-key">
                  <span>Kartu Keluarga Sejahtera</span>
                </div>
                <div class="w-1/4 terms-cpd-value">
                  <span>: Tidak Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/4 terms-cpd-key">
                  <span>Kartu Perlindungan Sosial</span>
                </div>
                <div class="w-1/4 terms-cpd-value">
                  <span>: Tidak Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              >
                <div class="w-3/4 terms-cpd-key">
                  <span>Program Keluarga Harapan</span>
                </div>
                <div class="w-1/4 terms-cpd-value">
                  <span>: Tidak Ada</span>
                </div>
              </div>
              <div
                class="flex items-center justify-start w-full terms-cpd-item"
              ></div>
            </div>
          </div>
          <div class="w-full h-2 mb-4 separator bg-zinc-300"></div>
          <div class="signature">
            <div class="flex items-start justify-start barcode-wrapper">
              <img :src="ttd" class="w-[8rem] h-[8rem]" alt="TTD" />
              <ul class="px-8 text-base font-semibold list-disc barcode-list">
                <li class="barcode-list-item">
                  Tanggal Cetak
                  <span class="print_date">{{ print_date }}</span>
                </li>
                <li class="barcode-list-item">
                  Untuk mendapatkan informasi lebih lanjut, silahkan hubungi
                  kami di instagram
                  <a
                    href="https://www.instagram.com/smkarraihancikampekofficial/"
                    class="text-[#0077ff]"
                    >@smkarraihancikampekofficial</a
                  >
                </li>
                <li class="barcode-list-item">
                  Atau kunjungi website resmi PPDB SMK AR-RAIHAN CIKAMPEK
                  <a
                    href="https://ppdb.smkarraihan.sch.id"
                    class="text-[#0077ff]"
                    >https://ppdb.smkarraihan.sch.id</a
                  >
                </li>
              </ul>
            </div>
            <div class="sign-additional">
              <p
                class="py-4 text-base font-semibold text-red-400 sign-additional-desc"
              >
                * Dilarang menyebarkan bukti pendaftaran serta QRCode ini kepada
                pihak lain selain pendaftar dan sekolah tujuan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
