<template>
  <nav class="navbar">
    <div class="brand">
      <img src="/assets/img/LOGO-XS.png" alt="Logo Sekolah" class="brand-img" />
      <a href="/" class="brand-title">PPDB SMAN 1 RAWAMERTA</a>
    </div>
    <div class="menu-wrapper">
      <ul class="nav-menu">
        <li class="nav-item" v-if="sectionPage == 'not-home'">
          <a class="nav-link" href="/"> Beranda </a>
        </li>
        <li class="nav-item" v-else>
          <a class="nav-link" href="#"> Beranda </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register" @click.prevent="checkUser">
            Daftar
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="menu-terms" href="/#terms"> Persyaratan </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="menu-kuota" href="/#kuota-jalur">
            Kuota dan Jalur
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/data-pendaftar"> Data Pendaftar </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="menu-faq" href="/#faq">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="menu-contact" href="/contact">Kontak</a>
        </li>
        <li class="nav-item" v-if="userStore.userLoggedIn == true">
          <a
            class="nav-link"
            href="javascript:void(0)"
            @click.prevent="userStore.logout"
            >Logout</a
          >
        </li>
        <li class="nav-item" v-else>
          <a
            href="javascript:void(0)"
            class="nav-link"
            @click.prevent="showLoginForm"
            >Login</a
          >
        </li>
      </ul>
      <div
        class="toggle-darkMode"
        id="toggle-darkMode"
        @click.prevent="toggleDarkMode"
      >
        <span class="flex w-4 overflow-x-hidden darkMode-btn">
          <i class="text-white bx bxs-moon"></i>
          <i class="text-yellow-600 bx bxs-sun"></i>
        </span>
      </div>
    </div>
    <div class="toggle-menu" @click.prevent="toggleMenu">
      <span class="burger"></span>
      <span class="burger"></span>
      <span class="burger"></span>
    </div>
  </nav>
</template>

<script>
import { mapStores } from "pinia";
import useUserStore from "@/stores/user";
import Swal from "sweetalert2";
export default {
  mounted() {
    // Fixed navbar
    let navbar = document.querySelector(".navbar");
    let offset = 0;
    window.addEventListener("scroll", function () {
      let st = window.pageYOffset;
      if (st > offset) {
        navbar.classList.add("fixed-nav");
      } else {
        navbar.classList.remove("fixed-nav");
      }
    });
    // End Fixed navbar

    // Check pathname url
    if (
      window.location.pathname == "/data-pendaftar" ||
      window.location.pathname == "/register" ||
      window.location.pathname == "/contact"
    ) {
      this.sectionPage = "not-home";
    } else {
      this.sectionPage = "home";
    }
    // End Check pathname url
  },
  data() {
    return {
      sectionPage: "home",
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    showLoginForm() {
      document.querySelector("#login-form").classList.remove("invisible");
      document.querySelector("#login-form").classList.remove("opacity-0");
    },
    toggleDarkMode() {
      document.body.classList.toggle("dark");
    },
    toggleMenu() {
      document.querySelector(".nav-menu").classList.toggle("show");
      document.querySelector(".navbar").classList.toggle("show");
    },
    checkUser() {
      if (this.userStore.userLoggedIn) {
        window.location.href = "/register";
      } else {
        Swal.fire({
          icon: "warning",
          title: "Oops... <br> Anda belum login!",
          text: "Silahkan login terlebih dahulu.",
          confirmButtonText: "Tutup",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
      }
    },
  },
};
</script>
