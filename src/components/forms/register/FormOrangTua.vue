<script>
import Swal from "sweetalert2";
import { mapActions, mapState } from "pinia";
import useRegisterStore from "@/stores/register";

export default {
  name: "FormOrangTua",

  data() {
    return {
      dataOrangTua: {
        noreg_ppdb: sessionStorage.noRegister ? sessionStorage.noRegister : "",
        nama_ayah: "",
        tempat_lahir_ayah: "",
        tahun_lahir_ayah: "",
        pendidikan_ayah: "",
        pekerjaan_ayah: "",
        penghasilan_ayah: "",
        alamat_ayah: "",
        nama_ibu: "",
        tempat_lahir_ibu: "",
        tahun_lahir_ibu: "",
        pendidikan_ibu: "",
        pekerjaan_ibu: "",
        penghasilan_ibu: "",
        alamat_ibu: "",
      },
    };
  },
  computed: {
    ...mapState(useRegisterStore, ["currentDataOrangTua"]),
  },
  beforeMount() {
    this.getDataOrangTua();
  },
  methods: {
    ...mapActions(useRegisterStore, ["storeDataOrangTua", "getCurrentBiodata"]),
    promptDataOrangTua() {
      Swal.fire({
        title: "Apa anda sudah yakin?",
        text: "Pastikan data yang anda masukkan sudah benar.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yakin!",
        cancelButtonText: "Belum",
      }).then((result) => {
        if (result.value) {
          this.dataOrangTua.noreg_ppdb = sessionStorage.noRegister;
          console.log(this.dataOrangTua);
          this.submitDataOrangTua().then(() => {
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
                timer: 3000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "success",
                title: "Data orang tua berhasil disimpan!",
              });
              this.$emit("nextForm", {
                status: "",
                isComplete: "completed",
                isBackWard: "current-item",
              });
              document
                .querySelector(".form-orang-tua-wrapper")
                .classList.add("completed");
              document
                .querySelector(".form-orang-tua-wrapper")
                .classList.remove("show");
              document
                .querySelector(".form-periodik-wrapper")
                .classList.add("show");
              document
                .querySelector(".form-wrapper-responsive")
                .classList.remove("orang-tua");
              document
                .querySelector(".form-wrapper-responsive")
                .classList.add("periodik");
            });
          });
        }
      });
    },
    async submitDataOrangTua() {
      try {
        await this.storeDataOrangTua(this.dataOrangTua);
      } catch (error) {
        console.log(error);
      }
    },
    backToBiodata() {
      this.$emit("previousForm", {
        status: "current-item",
        isComplete: "",
        isBackWard: "",
      });
      document
        .querySelector(".form-biodata-wrapper")
        .classList.remove("completed");
      document
        .querySelector(".form-orang-tua-wrapper")
        .classList.remove("show");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("orang-tua");
    },
    async getDataOrangTua() {
      try {
        await this.getCurrentBiodata(this.dataOrangTua.noreg_ppdb);
        if (this.currentDataOrangTua) {
          this.dataOrangTua = this.currentDataOrangTua;
        }
      } catch (error) {
        console.log(error);
      }
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
  <div class="form-orang-tua-wrapper" :class="isCompleted">
    <h3 class="form-title form-biodata-title">Formulir Data Orang Tua</h3>
    <form
      action="{{ url('/data-orangtua') }}"
      method="post"
      id="form-data-orang-tua"
    >
      <div class="form-wrapper form-biodata">
        <input type="hidden" name="noreg_ppdb" />
        <div class="form-section-left">
          <div class="form-group">
            <label for="nama_ayah">Nama Ayah</label>
            <input
              type="text"
              class="form-control"
              id="nama_ayah"
              name="nama_ayah"
              v-model="dataOrangTua.nama_ayah"
            />
          </div>
          <div class="form-group">
            <label for="tempat_lahir_ayah">Tempat Lahir Ayah</label>
            <input
              type="text"
              class="form-control"
              id="tempat_lahir_ayah"
              name="tempat_lahir_ayah"
              v-model="dataOrangTua.tempat_lahir_ayah"
            />
          </div>
          <div class="form-group">
            <label for="tanggal_lahir_ayah">Tahun Lahir Ayah</label>
            <input
              type="text"
              class="form-control"
              id="tanggal_lahir_ayah"
              name="tahun_lahir_ayah"
              v-model="dataOrangTua.tahun_lahir_ayah"
            />
          </div>
          <div class="form-group">
            <label for="pendidikan_ayah">Pendidikan Ayah</label>
            <select
              name="pendidikan_ayah"
              id="input-pendidikan-ayah"
              class="form-select"
              v-model="dataOrangTua.pendidikan_ayah"
            >
              <option value="">Pilih :</option>
              <option value="1">Tidak Bersekolah</option>
              <option value="2">SD</option>
              <option value="3">SMP</option>
              <option value="4">SMA</option>
              <option value="5">D1</option>
              <option value="6">D2</option>
              <option value="7">D3</option>
              <option value="8">D4/S1</option>
              <option value="9">S2</option>
              <option value="10">S3</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pekerjaan_ayah">Pekerjaan Ayah</label>
            <select
              name="pekerjaan_ayah"
              id="input-pekerjaan-ayah"
              class="form-select"
              v-model="dataOrangTua.pekerjaan_ayah"
            >
              <option value="">Pilih :</option>
              <option value="1">Tidak Bekerja</option>
              <option value="2">PNS</option>
              <option value="3">TNI</option>
              <option value="4">Polri</option>
              <option value="5">Pegawai Swasta</option>
              <option value="6">Wiraswasta</option>
              <option value="7">Petani</option>
              <option value="8">Buruh</option>
              <option value="9">Nelayan</option>
              <option value="10">Pedagang</option>
              <option value="11">Pensiunan</option>
              <option value="12">Peternak</option>
              <option value="13">Pengusaha</option>
              <option value="99">Lainnya</option>
            </select>
          </div>
          <div class="form-group">
            <label for="penghasilan_ayah">Penghasilan Ayah</label>
            <select
              name="penghasilan_ayah"
              id="input-penghasilan-ayah"
              class="form-select"
              v-model="dataOrangTua.penghasilan_ayah"
            >
              <option value="">Pilih :</option>
              <option value="1">Tidak Berpenghasilan</option>
              <option value="2">Kurang dari Rp. 1.000.000</option>
              <option value="3">Rp. 1.000.000 - Rp. 3.000.000</option>
              <option value="4">Rp. 3.000.000 - Rp. 5.000.000</option>
              <option value="5">Rp. 5.000.000 - Rp. 10.000.000</option>
              <option value="6">Rp. 10.000.000 - Rp. 20.000.000</option>
              <option value="7">Lebih dari Rp. 20.000.000</option>
            </select>
          </div>
          <div class="form-group">
            <label for="alamat_ayah">Alamat Ayah</label>
            <textarea
              name="alamat_ayah"
              class="form-control"
              id="input-alamat-ayah"
              rows="3"
              v-model="dataOrangTua.alamat_ayah"
            ></textarea>
          </div>
        </div>
        <div class="form-section-right">
          <div class="form-group">
            <label for="nama_ibu">Nama Ibu</label>
            <input
              type="text"
              class="form-control"
              id="nama_ibu"
              name="nama_ibu"
              v-model="dataOrangTua.nama_ibu"
            />
          </div>
          <div class="form-group">
            <label for="tempat_lahir_ibu">Tempat Lahir Ibu</label>
            <input
              type="text"
              class="form-control"
              id="tempat_lahir_ibu"
              name="tempat_lahir_ibu"
              v-model="dataOrangTua.tempat_lahir_ibu"
            />
          </div>
          <div class="form-group">
            <label for="tanggal_lahir_ibu">Tahun Lahir Ibu</label>
            <input
              type="text"
              class="form-control"
              id="tanggal_lahir_ibu"
              name="tahun_lahir_ibu"
              v-model="dataOrangTua.tahun_lahir_ibu"
            />
          </div>
          <div class="form-group">
            <label for="pendidikan_ibu">Pendidikan Ibu</label>
            <select
              name="pendidikan_ibu"
              id="input-pendidikan-ibu"
              class="form-select"
              v-model="dataOrangTua.pendidikan_ibu"
            >
              <option value="">Pilih :</option>
              <option value="1">Tidak Bersekolah</option>
              <option value="2">SD</option>
              <option value="3">SMP</option>
              <option value="4">SMA</option>
              <option value="5">D1</option>
              <option value="6">D2</option>
              <option value="7">D3</option>
              <option value="8">D4/S1</option>
              <option value="9">S2</option>
              <option value="10">S3</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pekerjaan_ibu">Pekerjaan Ibu</label>
            <select
              name="pekerjaan_ibu"
              id="input-pekerjaan-ibu"
              class="form-select"
              v-model="dataOrangTua.pekerjaan_ibu"
            >
              <option value="">Pilih :</option>
              <option value="1">Tidak Bekerja</option>
              <option value="2">PNS</option>
              <option value="3">TNI</option>
              <option value="4">Polri</option>
              <option value="5">Pegawai Swasta</option>
              <option value="6">Wiraswasta</option>
              <option value="7">Petani</option>
              <option value="8">Buruh</option>
              <option value="9">Nelayan</option>
              <option value="10">Pedagang</option>
              <option value="11">Pensiunan</option>
              <option value="12">Peternak</option>
              <option value="13">Pengusaha</option>
              <option value="99">Lainnya</option>
            </select>
          </div>
          <div class="form-group">
            <label for="penghasilan_ibu">Penghasilan Ibu</label>
            <select
              name="penghasilan_ibu"
              id="input-penghasilan-ibu"
              class="form-select"
              v-model="dataOrangTua.penghasilan_ibu"
            >
              <option value="">Pilih :</option>
              <option value="1">Tidak Berpenghasilan</option>
              <option value="2">Kurang dari Rp. 1.000.000</option>
              <option value="3">Rp. 1.000.000 - Rp. 3.000.000</option>
              <option value="4">Rp. 3.000.000 - Rp. 5.000.000</option>
              <option value="5">Rp. 5.000.000 - Rp. 10.000.000</option>
              <option value="6">Rp. 10.000.000 - Rp. 20.000.000</option>
              <option value="7">Lebih dari Rp. 20.000.000</option>
            </select>
          </div>
          <div class="form-group">
            <label for="alamat_ibu">Alamat Ibu</label>
            <textarea
              name="alamat_ibu"
              class="form-control"
              id="input-alamat-ibu"
              rows="3"
              v-model="dataOrangTua.alamat_ibu"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="form-btn">
        <button
          type="button"
          class="btn btn-secondary"
          @click.prevent="backToBiodata"
        >
          Kembali
        </button>
        <button
          class="btn btn-primary"
          type="button"
          id="btn-data-orang-tua"
          @click.prevent="promptDataOrangTua"
        >
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>
