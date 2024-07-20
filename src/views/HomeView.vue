<script>
import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  beforeMount() {
    document.title = "Portal | PPDB SMK Ar-Raihan Cikampek";
    this.checkAuth();
  },
  computed: {
    ...mapState(useUserStore, ["userLoggedIn"]),
  },
  methods: {
    checkAuth() {
      if (this.userLoggedIn) {
        this.$router.push("/register");
      }
    },
  },
};
</script>
<template>
  <div class="relative pt-20 wrapper lg:pt-32">
    <!-- {{-- Hero Section --}} -->
    <div class="hero-section">
      <div class="hero-img">
        <img src="/assets/img/hero-ppdb.svg" alt="Hero Img" />
      </div>
      <div class="hero-splash">
        <h1 class="hero-title">
          <span class="lg:text-5xl">Selamat Datang!</span><br />
          di Portal
          <span class="ppdb">Penerimaan Peserta Didik Baru (PPDB)</span> <br />
          SMK Ar-Raihan Cikampek
        </h1>
      </div>
    </div>
    <!-- {{-- End Hero --}} -->

    <!-- {{-- CTA Section --}} -->
    <div class="cta-section">
      <div class="container mx-auto">
        <div class="cta-content">
          <p class="cta-desc">
            Portal ini dibuat untuk memudahkan calon peserta didik baru untuk
            melakukan pendaftaran pada SMK Ar-Raihan Cikampek
          </p>
          <a
            href="/register"
            @click.prevent="checkUser"
            class="btn btn-primary cta-btn"
          >
            Daftar Sekarang!
          </a>
        </div>
      </div>
    </div>
    <!-- {{-- End CTA --}} -->

    <!-- {{-- Persyaratan --}} -->
    <div class="terms-section" id="terms">
      <h1 class="terms-title">Persyaratan Pendaftaran</h1>
      <p class="terms-desc">
        Sebelum melakukan pendaftaran, silahkan persiapkan berkas persyaratan
        sesuai dengan ketentuan yang ada dibawah ini.
      </p>
      <div class="terms-content">
        <div class="regular-terms">
          <h3 class="regular-terms-title">A. Syarat Umum</h3>
          <ul class="regular-terms-list">
            <li>
              Ijazah/Surat Keterangan Lulus/Kartu Peserta Ujian Sekolah <br />
              <strong
                >*(Untuk CPD yang lulus 2024 jika belum ada ijazah, bisa
                dilengkapi ketika Ijazah sudah terbit.)</strong
              >
            </li>
            <li>Kartu Keluarga</li>
            <li>Akta Kelahiran/Surat Keterangan Lahir</li>
            <li>KTP Orang Tua</li>
            <li>Rapor (Semester 1 s/d 5)</li>
            <li>Surat Pertanggung Jawaban Mutlak (SPTJM) Orang Tua</li>
          </ul>
        </div>
        <div class="special-terms">
          <h3 class="special-terms-title">B. Syarat Khusus</h3>
          <ul class="special-terms-list">
            <li>Sertifikat Juara</li>
            <li>Kartu Kesejahteraan (KIP/KIS/KPS/KKS/PKH)/Terdaftar di DTKS</li>
            <li>Surat Keterangan Domisili</li>
            <li>Surat Tugas Orang Tua</li>
          </ul>
        </div>
      </div>
      <span class="keterangan">
        <span class="text-red-500">*</span> Persyaratan khusus disesuaikan
        dengan Jalur Pendaftaran yang dipilih. <br />
        <span class="text-red-500">**</span> Untuk melihat persyaratan
        berdasarkan Jalur Pendaftaran, silahkan klik tombol dibawah ini.
      </span>

      <div class="terms-btn-wrapper">
        <a href="/#terms" class="terms-btn btn btn-primary"
          >Baca Persyaratan Pendaftaran</a
        >
      </div>
    </div>
    <!-- {{-- End Persyaratan --}} -->

    <!-- {{-- Jalur Pendaftaran --}} -->
    <div class="jalur-section" id="jurusan">
      <h1 class="jalur-title">Program Keahlian dan Gelombang Pendaftaran</h1>
      <div class="jalur-content">
        <div class="kuota-wrapper">
          <h3 class="kuota-title">A. Program Keahlian</h3>
          <ul class="kuota-list">
            <li>Asisten Keperawatan</li>
            <li>Teknologi Laboratorium Medik</li>
          </ul>
          <p class="kuota-desc">
            <span class="text-red-500">*</span> Informasi lebih lengkap tentang
            Program Keahlian, silahkan klik tombol dibawah ini.
          </p>
          <div class="kuota-btn-wrapper">
            <a href="{{ url('kuota-jalur') }}" class="btn btn-primary btn-kuota"
              >Program Keahlian</a
            >
          </div>
        </div>
        <div class="jalur-wrapper">
          <h3 class="jalur-list-title">B. Gelombang Pendaftaran</h3>
          <ul class="jalur-list">
            <li>Gelombang 1 : Januari s/d Maret 2024</li>
            <li>Gelumbang 2 : April s/d Juni 2024</li>
          </ul>
          <p class="jalur-desc">
            <span class="text-red-500">*</span> Informasi lebih lengkap tentang
            Pendaftaran, silahkan klik tombol dibawah ini.
          </p>
          <div class="jalur-btn-wrapper">
            <a href="{{ url('kuota-jalur') }}" class="btn btn-primary btn-jalur"
              >Pendaftaran</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- {{-- End Jalur --}} -->

    <!-- {{-- Fasilitas Section --}} -->
    <div class="fasilitas-section">
      <div class="fasilitas-wrapper">
        <h1 class="fasilitas-title">Fasilitas Sekolah</h1>
        <div class="splide">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <i class="fa-solid fa-school-flag"></i>
                <br />
                <span class="fasilitas-sub"> Gedung Permanen </span>
              </li>
              <li class="splide__slide">
                <i class="fa-solid fa-book"></i>
                <br />
                <span class="fasilitas-sub"> Perpustakaan </span>
              </li>
              <li class="splide__slide">
                <i class="fa-solid fa-computer"></i>
                <br />
                <span class="fasilitas-sub"> Laboratorium Komputer </span>
              </li>
              <li class="splide__slide">
                <i class="fa-solid fa-flask-vial"></i>
                <br />
                <span class="fasilitas-sub"> Laboratorium IPA </span>
              </li>
              <li class="splide__slide">
                <i class="fa-solid fa-mosque"></i>
                <br />
                <span class="fasilitas-sub"> Tempat Ibadah </span>
              </li>
              <li class="splide__slide">
                <i class="fa-solid fa-wifi"></i>
                <br />
                <span class="fasilitas-sub"> WiFi </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- {{-- End Fasilitas --}} -->
    <!-- {{-- FAQ --}} -->
    <div class="faq-section" id="faq"></div>
    <!-- {{-- End FAQ --}} -->
  </div>
</template>
