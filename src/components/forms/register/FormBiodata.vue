<script>
import Swal from "sweetalert2";

export default {
  name: "FormBiodate",
  methods: {
    submitBiodata() {
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
              title: "Data berhasil disimpan!",
            });
            this.$emit("nextForm", {
              status: "",
              isComplete: "completed",
              isBackWard: "current-item",
            });
            document
              .querySelector(".form-biodata-wrapper")
              .classList.add("completed");
            document
              .querySelector(".form-orang-tua-wrapper")
              .classList.add("show");
            document
              .querySelector(".form-wrapper-responsive")
              .classList.add("orang-tua");
          });
        }
      });
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
  <div class="form-biodata-wrapper" :class="isCompleted">
    <h3 class="form-title form-biodata-title">Formulir Data Diri</h3>
    <form action="" method="post" id="biodata-cpd">
      <div class="form-wrapper form-biodata">
        <div class="form-section-left">
          <div class="form-group">
            <label for="nisn">Nomor Induk Siswa Nasional (NISN)</label>
            <input type="number" class="form-control" id="nisn" name="nisn" />
            <div class="invalid-feedback">
              <span class="nisn tooltiptext"></span>
            </div>
          </div>
          <div class="form-group">
            <label for="nik">Nomor Induk Kependudukan (NIK)</label>
            <input type="number" class="form-control" id="nik" name="nik" />
          </div>
          <div class="form-group">
            <label for="nama">Nama Lengkap</label>
            <input type="text" class="form-control" id="nama" name="nama" />
          </div>
          <div class="form-group">
            <label for="jenis_kelamin">Jenis Kelamin</label>
            <select name="jenis_kelamin" class="form-select" id="jenis_kelamin">
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
              name="tempat_lahir"
            />
          </div>
          <div class="form-group">
            <label for="tanggal_lahir">Tanggal Lahir</label>
            <input
              type="text"
              class="form-control date-input"
              id="tanggal_lahir"
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
            />
          </div>
          <div class="form-group">
            <label for="tahun_lulus">Tahun Lulus</label>
            <select name="tahun_lulus" id="tahun_lulus" class="form-select">
              <option value="">Pilih :</option>
              <option value="3">2022</option>
              <option value="2">2021</option>
              <option value="1">2020</option>
            </select>
          </div>
          <div class="form-group">
            <label for="kelas">Kelas</label>
            <select name="kelas" id="kelas" class="form-select">
              <option value="">Pilih :</option>
              <option value="1">9A</option>
              <option value="2">9B</option>
              <option value="3">9C</option>
              <option value="4">9D</option>
              <option value="5">9E</option>
              <option value="6">9F</option>
              <option value="7">9G</option>
              <option value="8">9H</option>
              <option value="9">9I</option>
              <option value="10">9J</option>
            </select>
          </div>
        </div>
        <div class="form-section-right">
          <div class="form-group">
            <label for="jalur_pendaftaran">Jalur Pendaftaran</label>
            <select
              name="jalur_pendaftaran"
              id="jalur_pendaftaran"
              class="form-select"
            >
              <option value="">Pilih :</option>
              <option value="1">KETM</option>
              <option value="2">Disabilitas</option>
              <option value="3">Kondisi Tertentu</option>
              <option value="4">Prestasi Rapor</option>
              <option value="5">Prestasi Kejuaraan</option>
              <option value="6">Perpindahan Orang Tua/Anak Guru</option>
              <option value="7">Zonasi</option>
            </select>
          </div>
          <div class="form-group">
            <label for="alamat">Alamat</label>
            <textarea
              name="alamat"
              id="alamat"
              class="form-control"
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div class="address-group">
            <div class="form-group dusun">
              <label for="dusun">Dusun</label>
              <input type="text" class="form-control" id="dusun" name="dusun" />
            </div>
            <div class="form-group rt">
              <label for="rt">RT</label>
              <input type="text" class="form-control" id="rt" name="rt" />
            </div>
            <div class="form-group rw">
              <label for="rw">RW</label>
              <input type="text" class="form-control" id="rw" name="rw" />
            </div>
          </div>
          <div class="address-group">
            <div class="form-group desa">
              <label for="desa">Desa</label>
              <input type="text" class="form-control" id="desa" name="desa" />
            </div>
            <div class="form-group kecamatan">
              <label for="kecamatan">Kecamatan</label>
              <input
                type="text"
                class="form-control"
                id="kecamatan"
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
                name="kabupaten"
              />
            </div>
            <div class="form-group provinsi">
              <label for="provinsi">Provinsi</label>
              <input
                type="text"
                class="form-control"
                id="provinsi"
                name="provinsi"
              />
            </div>
            <div class="form-group kode-pos">
              <label for="kode_pos">Kode POS</label>
              <input
                type="text"
                class="form-control"
                id="kode_pos"
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
          @click.prevent="submitBiodata()"
        >
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>
