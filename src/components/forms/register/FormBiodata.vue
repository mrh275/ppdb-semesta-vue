<script>
import { mapActions, mapState } from "pinia";
import Swal from "sweetalert2";
import useRegisterStore from "../../../stores/register";
import Calendarify from "calendarify";
import axios from "axios";

export default {
  name: "FormBiodata",
  data() {
    return {
      noRegister: sessionStorage.getItem("noRegister"),
      biodata: {
        nisn: "",
        nik: "",
        nama: "",
        jenis_kelamin: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        tahun_lulus: "",
        kelas: "",
        asal_sekolah: "",
        gelombang: "",
        alamat: "",
        dusun: "",
        rt: "",
        rw: "",
        desa: "",
        kecamatan: "",
        kabupaten: "",
        provinsi: "",
        kode_pos: "",
      },
    };
  },
  computed: {
    ...mapState(useRegisterStore, ["currentBiodata", "currentAsalSekolah"]),
  },
  beforeMount() {
    this.getBiodata();
  },
  methods: {
    ...mapActions(useRegisterStore, ["storeBiodata", "getCurrentBiodata"]),
    promptBiodata() {
      Swal.fire({
        title: "Apa anda sudah yakin?",
        text: "Pastikan data yang anda masukkan sudah benar.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yakin!",
        cancelButtonText: "Belum",
      }).then((result) => {
        if (result.value) {
          console.log(this.biodata);
          this.submitBiodata().then(() => {
            Swal.fire({
              title: "Sedang menyimpan data...",
              timer: 2000,
              showConfirmButton: false,
              didOpen: () => {
                Swal.showLoading();
              },
            }).then(() => {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                showCloseButton: true,
                timer: 1000,
                timerProgressBar: true,
              });
              Toast.fire({
                icon: "success",
                title: "Data berhasil disimpan!",
              }).then(() => {
                window.location.reload();
              });
              // this.$emit("nextForm", {
              //   status: "",
              //   isComplete: "completed",
              //   isBackWard: "current-item",
              // });
              // document
              //   .querySelector(".form-biodata-wrapper")
              //   .classList.add("completed");
              // document
              //   .querySelector(".form-orang-tua-wrapper")
              //   .classList.add("show");
              // document
              //   .querySelector(".form-wrapper-responsive")
              //   .classList.add("orang-tua");
            });
          });
        }
      });
    },
    async submitBiodata() {
      try {
        await this.storeBiodata(this.biodata);
      } catch (error) {
        Swal.fire({
          title: error.name,
          text: error.message,
        });
      }
    },
    async getBiodata() {
      try {
        await this.getCurrentBiodata(this.noRegister);
        if (this.currentBiodata) {
          this.biodata = this.currentBiodata;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async cekNISN() {
      const url =
        "https://disdik.muhamadramdani.my.id/api/siswa/" + this.biodata.nisn;
      await axios
        .get(url, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    },
    async cekNIK() {
      const url =
        "https://dukcapil.muhamadramdani.my.id/api/ambil-data-penduduk/" +
        this.biodata.nik;
      await axios
        .get(url, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    },
  },
  props: {
    isCompleted: {
      type: String,
      required: false,
    },
  },
  mounted() {
    const calendarify = new Calendarify(".date-input", {
      isDark: true,
      zIndex: 9999,
    });
    calendarify.init(); // Initialize calendarify
  },
};
</script>

<template>
  <div class="form-biodata-wrapper" :class="isCompleted">
    <h3 class="form-title form-biodata-title">Formulir Data Diri</h3>
    <form action="" method="post" id="biodata-cpd">
      <div class="form-wrapper form-biodata">
        <div class="form-section-left">
          <div class="form-group">
            <label for="nisn">Nomor Induk Siswa Nasional (NISN)</label>
            <input
              type="text"
              class="form-control"
              id="nisn"
              v-model="biodata.nisn"
              name="nisn"
            />
            <button class="btn btn-primary" @click.prevent="cekNISN">
              Cek
            </button>
            <div class="invalid-feedback">
              <span class="nisn tooltiptext"></span>
            </div>
          </div>
          <div class="form-group">
            <label for="nik">Nomor Induk Kependudukan (NIK)</label>
            <input
              type="text"
              class="form-control"
              v-model="biodata.nik"
              id="nik"
              name="nik"
            />
            <button class="btn btn-primary" @click.prevent="cekNIK">Cek</button>
          </div>
          <div class="form-group">
            <label for="nama">Nama Lengkap</label>
            <input
              type="text"
              class="form-control"
              id="nama"
              name="nama"
              v-model="biodata.nama"
            />
          </div>
          <div class="form-group">
            <label for="jenis_kelamin">Jenis Kelamin</label>
            <select
              name="jenis_kelamin"
              v-model="biodata.jenis_kelamin"
              class="form-select"
              id="jenis_kelamin"
            >
              <option value="">Pilih :</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          <div class="form-group">
            <label for="tempat_lahir">Tempat Lahir</label>
            <input
              type="text"
              class="form-control"
              id="tempat_lahir"
              v-model="biodata.tempat_lahir"
              name="tempat_lahir"
            />
          </div>
          <div class="form-group">
            <label for="tanggal_lahir">Tanggal Lahir</label>
            <input
              type="text"
              class="form-control date-input"
              id="tanggal_lahir"
              v-model="biodata.tanggal_lahir"
              name="tanggal_lahir"
            />
          </div>
          <div class="form-group">
            <label for="asal_sekolah">Asal Sekolah</label>
            <input
              type="text"
              class="form-control"
              id="asal_sekolah"
              name="asal_sekolah"
              v-model="biodata.asal_sekolah"
            />
          </div>
          <div class="form-group">
            <label for="tahun_lulus">Tahun Lulus</label>
            <select
              name="tahun_lulus"
              v-model="biodata.tahun_lulus"
              id="tahun_lulus"
              class="form-select"
            >
              <option value="">Pilih :</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div class="form-group">
            <label for="kelas">Kelas</label>
            <select
              name="kelas"
              v-model="biodata.kelas"
              id="kelas"
              class="form-select"
            >
              <option value="">Pilih :</option>
              <option value="9A">9A</option>
              <option value="9B">9B</option>
              <option value="9C">9C</option>
              <option value="9D">9D</option>
              <option value="9E">9E</option>
              <option value="9F">9F</option>
              <option value="9G">9G</option>
              <option value="9H">9H</option>
              <option value="9I">9I</option>
              <option value="9J">9J</option>
            </select>
          </div>
        </div>
        <div class="form-section-right">
          <div class="form-group">
            <label for="jalur_pendaftaran">Gelombang</label>
            <select
              name="gelombang"
              id="jalur_pendaftaran"
              class="form-select"
              v-model="biodata.gelombang"
            >
              <option value="">Pilih :</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="form-group">
            <label for="alamat">Alamat</label>
            <textarea
              name="alamat"
              id="alamat"
              v-model="biodata.alamat"
              class="form-control"
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div class="address-group">
            <div class="form-group dusun">
              <label for="dusun">Dusun</label>
              <input
                type="text"
                class="form-control"
                id="dusun"
                v-model="biodata.dusun"
                name="dusun"
              />
            </div>
            <div class="form-group rt">
              <label for="rt">RT</label>
              <input
                type="text"
                class="form-control"
                id="rt"
                v-model="biodata.rt"
                name="rt"
              />
            </div>
            <div class="form-group rw">
              <label for="rw">RW</label>
              <input
                type="text"
                class="form-control"
                id="rw"
                v-model="biodata.rw"
                name="rw"
              />
            </div>
          </div>
          <div class="address-group">
            <div class="form-group desa">
              <label for="desa">Desa</label>
              <input
                type="text"
                class="form-control"
                v-model="biodata.desa"
                id="desa"
                name="desa"
              />
            </div>
            <div class="form-group kecamatan">
              <label for="kecamatan">Kecamatan</label>
              <input
                type="text"
                class="form-control"
                id="kecamatan"
                v-model="biodata.kecamatan"
                name="kecamatan"
              />
            </div>
          </div>
          <div class="address-group">
            <div class="form-group kabupaten">
              <label for="kabupaten">Kabupaten</label>
              <input
                type="text"
                class="form-control"
                id="kabupaten"
                v-model="biodata.kabupaten"
                name="kabupaten"
              />
            </div>
            <div class="form-group provinsi">
              <label for="provinsi">Provinsi</label>
              <input
                type="text"
                class="form-control"
                id="provinsi"
                v-model="biodata.provinsi"
                name="provinsi"
              />
            </div>
            <div class="form-group kode-pos">
              <label for="kode_pos">Kode POS</label>
              <input
                type="text"
                class="form-control"
                id="kode_pos"
                v-model="biodata.kode_pos"
                name="kode_pos"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="form-btn-biodata">
        <button
          class="btn btn-primary"
          type="button"
          id="btn-data-diri"
          @click.prevent="promptBiodata()"
        >
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>
