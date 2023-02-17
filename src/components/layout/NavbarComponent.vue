<template>
  <nav class="navbar">
    <div class="brand">
      <img src="/assets/img/LOGO-XS.png" alt="Logo Sekolah" class="brand-img" />
      <a href="/" class="brand-title">PPDB SMAN 1 RAWAMERTA</a>
    </div>
    <div class="menu-wrapper">
      <ul class="nav-menu">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Beranda</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Daftar</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Persyaratan</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Kuota dan Jalur</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Data Pendaftar</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">FAQ</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Kontak</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/" @click.prevent="showLoginForm"
            >Login</RouterLink
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
export default {
  mounted() {
    let navbar = document.querySelector(".navbar");
    let offset = 0;
    window.addEventListener("scroll", function () {
      console.log(window.pageYOffset);
      let st = window.pageYOffset;
      if (st > offset) {
        navbar.classList.add("fixed-nav");
      } else {
        navbar.classList.remove("fixed-nav");
      }
    });
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
  },
};
</script>
