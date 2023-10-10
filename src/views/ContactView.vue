<script>
import depanSekolah from "../assets/img/depan-sekolah.png";
export default {
  beforeMount() {
    document.title = "Contact Us | PPDB SMAN 1 Rawamerta";
  },
  data() {
    return {
      imgHeader: depanSekolah,
    };
  },
};
</script>

<template>
  <div class="relative pt-12 wrapper lg:pt-20 contact-wrapper">
    <!-- Contact Section -->
    <div class="relative overflow-hidden contact-header">
      <img
        :src="imgHeader"
        alt="Halaman Depan Sekolah"
        class="relative z-0 img-header h-96 mx-auto scale-[2.5]"
      />
      <div
        class="absolute top-0 w-full h-full bg-gray-800 opacity-70 img-header-wrapper"
      ></div>
      <h1
        class="absolute bottom-0 left-0 right-0 text-5xl font-bold text-center text-white top-1/2 contact-title"
      >
        Kontak Kami
      </h1>
    </div>

    <div
      class="flex justify-between px-16 py-12 bg-gray-200 dark:bg-gray-700 contact-form-wrapper"
    >
      <div class="w-1/2 contact-form">
        <h3 class="text-2xl font-bold contact-form-title dark:text-white">
          Contact Form
        </h3>
        <form class="pt-4">
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Nama Anda</label
            >
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tuliskan nama anda"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="emailanda@email.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Pesan anda</label
            >
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tuliskan pesan anda disini..."
            ></textarea>
          </div>
          <div class="flex justify-end w-full submit-contact-wrapper">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
      <div class="w-1/2 px-16 contact-info">
        <div class="flex items-center justify-start brand-contact-wrapper">
          <img
            src="/assets/img/LOGO-SMALL.png"
            alt="Logo PPDB SMA Negeri 1 Rawamerta"
            class="footer-img-brand"
          />
          <span class="footer-brand-text">SMA Negeri 1 Rawamerta</span>
        </div>
        <div class="footer-text">
          <p class="py-2">
            <strong>Address</strong> <br />
            Jl. Raya Garunggung - Panyingkiran Kec. Rawamerta Kab. Karawang,
            Jawa Barat 41382
          </p>
          <p><i class="fa-solid fa-phone"></i>&nbsp; -</p>
          <p>
            <i class="fa-solid fa-globe"></i>&nbsp;
            <a
              href="https://sman1rawamerta.sch.id"
              target="_blank"
              class="border-zinc-800 hover:border-b-2 hover:border-dotted"
              >https://sman1rawamerta.sch.id</a
            >
          </p>
          <p>
            <i class="fa-brands fa-instagram"></i>&nbsp;
            <a
              href="https://www.instagram.com/sman1rawamerta/"
              target="_blank"
              class="border-zinc-800 hover:border-b-2 hover:border-dotted"
              >@sman1rawamerta</a
            >
          </p>
          <p>
            <i class="fa-brands fa-youtube"></i>&nbsp;
            <a
              href="https://www.youtube.com/channel/UCvTaB-4bPPasVnUf7QYI3tg"
              target="_blank"
              class="border-zinc-800 hover:border-b-2 hover:border-dotted"
              >SMAN 1 RAWAMERTA</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
