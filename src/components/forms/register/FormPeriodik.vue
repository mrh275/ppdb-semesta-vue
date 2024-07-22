<script>
import Swal from "sweetalert2";
import useRegisterStore from "@/stores/register";
import { mapState, mapActions } from "pinia";

export default {
  name: "FormPeriodik",
  data() {
    return {
      dataPeriodik: {
        noreg_ppdb: sessionStorage.noRegister ? sessionStorage.noRegister : "",
        jenjang: "",
        nama_sekolah: "",
        alamat_sekolah: "",
        nomor_ijazah: "",
        nopes_ujian: "",
        hobi: "",
        cita_cita: "",
        tinggi_badan: "",
        berat_badan: "",
        jarak_rumah: "",
        waktu_tempuh: "",
        anak_ke: "",
        jumlah_saudara: "",
        kip: "",
        kis: "",
        kks: "",
        kps: "",
        pkh: "",
        is_kip: "",
        is_kis: "",
        is_kks: "",
        is_kps: "",
        is_pkh: "",
      },
    };
  },
  beforeMount() {
    this.getDataPeriodik();
  },
  computed: {
    ...mapState(useRegisterStore, [
      "currentDataPeriodik",
      "currentDataKesejahteraan",
      "currentAsalSekolah",
    ]),
  },
  methods: {
    ...mapActions(useRegisterStore, ["storeDataPeriodik", "getCurrentBiodata"]),
    promptDataPeriodik() {
      Swal.fire({
        title: "Apa anda sudah yakin?",
        text: "Pastikan data yang anda masukkan sudah benar.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yakin!",
        cancelButtonText: "Belum",
      }).then((result) => {
        if (result.value) {
          console.log(this.dataPeriodik);
          this.submitDataPeriodik();
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
              title: "Data periodik berhasil disimpan!",
            });
            this.$emit("nextForm", {
              status: "",
              isComplete: "completed",
              isBackWard: "current-item",
            });
            document
              .querySelector(".form-periodik-wrapper")
              .classList.add("completed");
            document
              .querySelector(".form-periodik-wrapper")
              .classList.remove("show");
            document
              .querySelector(".form-kesejahteraan-wrapper")
              .classList.add("show");
            document
              .querySelector(".form-wrapper-responsive")
              .classList.remove("periodik");
            document
              .querySelector(".form-wrapper-responsive")
              .classList.add("kesejahteraan");
            const stepWizardList = document.querySelectorAll(
              "ul.step-wizard-list li"
            );
            stepWizardList.forEach((step) => {
              step.firstElementChild.style.cursor = "pointer";
            });
          });
        }
      });
    },
    async submitDataPeriodik() {
      try {
        await this.storeDataPeriodik(this.dataPeriodik);
      } catch (error) {
        console.log(error);
      }
    },
    async getDataPeriodik() {
      try {
        await this.getCurrentBiodata(this.dataPeriodik.noreg_ppdb);
        if (this.currentDataPeriodik) {
          const newData = {
            ...this.currentAsalSekolah,
            ...this.currentDataPeriodik,
            ...this.currentDataKesejahteraan,
          };
          this.dataPeriodik = newData;
        }
      } catch (error) {
        console.log(error);
      }
    },
    backToDataOrangTua() {
      this.$emit("previousForm", {
        status: "current-item",
        isComplete: "",
        isBackWard: "",
      });
      document
        .querySelector(".form-orang-tua-wrapper")
        .classList.remove("completed");
      document.querySelector(".form-orang-tua-wrapper").classList.add("show");
      document.querySelector(".form-periodik-wrapper").classList.remove("show");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.add("orang-tua");
      document
        .querySelector(".form-wrapper-responsive")
        .classList.remove("periodik");
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
  <div class="form-periodik-wrapper" :class="isCompleted">
    <h3 class="form-title form-biodata-title">Formulir Data Periodik</h3>
    <form
      action="{{ url('data-periodik') }}"
      method="post"
      id="form-data-periodik"
    >
      <div class="form-wrapper form-biodata">
        <input type="hidden" name="noreg_ppdb" />
        <div class="form-section-left">
          <div class="form-group">
            <label for="jenjang">Jenjang</label>
            <select
              name="jenjang"
              id="jenjang"
              class="form-select"
              v-model="dataPeriodik.jenjang"
            >
              <option value="">Pilih :</option>
              <option value="1">SMP</option>
              <option value="2">MTs</option>
            </select>
          </div>
          <div class="form-group">
            <label for="nama_sekolah">Nama Sekolah Asal</label>
            <input
              type="text"
              class="form-control"
              id="nama_sekolah"
              name="nama_sekolah"
              v-model="dataPeriodik.nama_sekolah"
            />
          </div>
          <div class="form-group">
            <label for="alamat_sekolah">Alamat Sekolah</label>
            <textarea
              name="alamat_sekolah"
              id="alamat_sekolah"
              cols="30"
              rows="3"
              class="form-control"
              v-model="dataPeriodik.alamat_sekolah"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="nomor_ijazah">Nomor Ijazah</label>
            <input
              type="text"
              class="form-control"
              id="nomor_ijazah"
              name="nomor_ijazah"
              v-model="dataPeriodik.nomor_ijazah"
            />
          </div>
          <div class="form-group">
            <label for="nopes_ujian">Nomor Peserta Ujian Sekolah</label>
            <input
              type="text"
              class="form-control"
              id="nopes_ujian"
              name="nopes_ujian"
              v-model="dataPeriodik.nopes_ujian"
            />
          </div>
        </div>
        <div class="form-section-right">
          <div class="address-group">
            <div class="form-group hobi">
              <label for="hobi">Hobi</label>
              <select
                name="hobi"
                id="hobi"
                class="form-select"
                v-model="dataPeriodik.hobi"
              >
                <option value="">Pilih :</option>
                <option value="1">Belanja</option>
                <option value="2">Berkemah</option>
                <option value="3">Bermain Bola</option>
                <option value="4">Bermain Biola</option>
                <option value="5">Main Musik</option>
                <option value="6">Futsal</option>
                <option value="7">Membaca</option>
                <option value="8">Menulis</option>
                <option value="9">Mendaki</option>
                <option value="10">Menyanyi</option>
                <option value="11">Menari</option>
                <option value="12">Bermain Game</option>
                <option value="13">Fotografi</option>
                <option value="14">Videografi</option>
                <option value="15">Memancing</option>
                <option value="16">Traveling</option>
                <option value="17">Berenang</option>
                <option value="18">Olahraga</option>
                <option value="19">Kesenian</option>
                <option value="20">Lainnya</option>
              </select>
            </div>

            <div class="form-group cita-cita">
              <label for="cita_cita">Cita-cita</label>
              <select
                name="cita_cita"
                id="cita_cita"
                class="form-select"
                v-model="dataPeriodik.cita_cita"
              >
                <option value="">Pilih :</option>
                <option value="1">Arsitek</option>
                <option value="2">Atlet</option>
                <option value="3">Astronot</option>
                <option value="4">Bidan</option>
                <option value="5">Content Creator Musik</option>
                <option value="6">Desainer</option>
                <option value="7">Dokter</option>
                <option value="8">Entertainer</option>
                <option value="9">Guru/Dosen</option>
                <option value="10">Koki/Chef</option>
                <option value="11">PNS/TNI/Polri</option>
                <option value="12">Pembalap</option>
                <option value="13">Fotographer</option>
                <option value="14">Videographer</option>
                <option value="15">Pembawa Acara</option>
                <option value="16">Pengacara</option>
                <option value="17">Penulis</option>
                <option value="18">Pengusaha</option>
                <option value="19">Politikus</option>
                <option value="20">Lainnya</option>
              </select>
            </div>
          </div>
          <div class="address-group">
            <div class="form-group desa">
              <label for="tinggi_badan">Tinggi Badan (cm)</label>
              <input
                type="number"
                class="form-control"
                id="tinggi_badan"
                name="tinggi_badan"
                v-model="dataPeriodik.tinggi_badan"
              />
            </div>
            <div class="form-group kecamatan">
              <label for="berat_badan">Berat Badan (kg)</label>
              <input
                type="number"
                class="form-control"
                id="berat_badan"
                name="berat_badan"
                v-model="dataPeriodik.berat_badan"
              />
            </div>
          </div>
          <div class="address-group">
            <div class="form-group kabupaten">
              <label for="jarak_rumah">Jarak Rumah ke Sekolah (m)</label>
              <input
                type="number"
                class="form-control"
                id="jarak_rumah"
                name="jarak_rumah"
                v-model="dataPeriodik.jarak_rumah"
              />
            </div>
            <div class="form-group provinsi">
              <label for="waktu_tempuh">Waktu Tempuh (menit)</label>
              <input
                type="number"
                class="form-control"
                id="waktu_tempuh"
                name="waktu_tempuh"
                v-model="dataPeriodik.waktu_tempuh"
              />
            </div>
          </div>
          <div class="address-group">
            <div class="form-group anak-ke">
              <label for="anak_ke">Anak ke berapa</label>
              <input
                type="number"
                class="form-control"
                id="anak_ke"
                name="anak_ke"
                v-model="dataPeriodik.anak_ke"
              />
            </div>
            <div class="form-group jumlah-saudara">
              <label for="jumlah_saudara">Jumlah Saudara</label>
              <input
                type="number"
                class="form-control"
                id="jumlah_saudara"
                name="jumlah_saudara"
                v-model="dataPeriodik.jumlah_saudara"
              />
            </div>
          </div>
          <hr class="my-2 border-t-0 border-b-2 border-solid border-zinc-400" />
          <h4 class="title-kesejahteraan">Data Kesejahteraan</h4>
          <div class="address-group">
            <div class="form-group kip">
              <label for="is_kip">Apakah kamu memiliki KIP?</label>
              <select
                name="is_kip"
                id="is_kip"
                class="form-select"
                v-model="dataPeriodik.is_kip"
              >
                <option value="">Pilih :</option>
                <option value="1" id="kip-1">Ya</option>
                <option value="0">Tidak</option>
              </select>
            </div>
            <div class="form-group nomor-kip">
              <label for="kip">Nomor KIP</label>
              <input
                type="number"
                class="form-control"
                id="kip"
                name="kip"
                :disabled="is_kip == 1 ? disabled : ''"
              />
            </div>
          </div>
          <div class="address-group">
            <div class="form-group kis">
              <label for="is_kis">Apakah kamu memiliki KIS?</label>
              <select
                name="is_kis"
                id="is_kis"
                class="form-select"
                v-model="dataPeriodik.is_kis"
              >
                <option value="">Pilih :</option>
                <option value="1" id="kis-1">Ya</option>
                <option value="0">Tidak</option>
              </select>
            </div>
            <div class="form-group nomor-kis">
              <label for="kis">Nomor KIS</label>
              <input
                type="number"
                class="form-control"
                id="kis"
                name="kis"
                :disabled="is_kis == 1 ? disabled : ''"
              />
            </div>
          </div>
          <div class="address-group">
            <div class="form-group kks">
              <label for="is_kks">Apakah kamu memiliki KKS?</label>
              <select
                name="is_kks"
                id="is_kks"
                class="form-select"
                v-model="dataPeriodik.is_kks"
              >
                <option value="">Pilih :</option>
                <option value="1" id="kks-1">Ya</option>
                <option value="0">Tidak</option>
              </select>
            </div>
            <div class="form-group nomor-kks">
              <label for="kks">Nomor KKS</label>
              <input
                type="number"
                class="form-control"
                id="kks"
                name="kks"
                :disabled="is_kks == 1 ? disabled : ''"
              />
            </div>
          </div>
          <div class="address-group">
            <div class="form-group kps">
              <label for="is_kps">Apakah kamu memiliki KPS?</label>
              <select
                name="is_kps"
                id="is_kps"
                class="form-select"
                v-model="dataPeriodik.is_kps"
              >
                <option value="">Pilih :</option>
                <option value="1" id="kps-1">Ya</option>
                <option value="0">Tidak</option>
              </select>
            </div>
            <div class="form-group nomor-kps">
              <label for="kps">Nomor KPS</label>
              <input
                type="number"
                class="form-control"
                id="kps"
                name="kps"
                :disabled="is_kps == 1 ? disabled : ''"
              />
            </div>
          </div>
          <div class="address-group">
            <div class="form-group pkh">
              <label for="is_pkh">Apakah kamu memiliki PKH?</label>
              <select
                name="is_pkh"
                id="is_pkh"
                class="form-select"
                v-model="dataPeriodik.is_pkh"
              >
                <option value="">Pilih :</option>
                <option value="1" id="pkh-1">Ya</option>
                <option value="0">Tidak</option>
              </select>
            </div>
            <div class="form-group nomor-pkh">
              <label for="pkh">Nomor PKH</label>
              <input
                type="number"
                class="form-control"
                id="pkh"
                name="pkh"
                :disabled="is_pkh == 1 ? disabled : ''"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="form-btn">
        <button
          type="button"
          class="btn btn-secondary"
          @click.prevent="backToDataOrangTua()"
        >
          Kembali
        </button>
        <button
          class="btn btn-primary"
          type="button"
          id="btn-data-periodik"
          @click.prevent="promptDataPeriodik()"
        >
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>
