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
  </div>
</template>
