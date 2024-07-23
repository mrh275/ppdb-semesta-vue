<script>
// eslint-disable-next-line no-unused-vars
import { RouterView } from "vue-router";
import { mapWritableState } from "pinia";
import NavbarComponent from "@/components/layout/NavbarComponent.vue";
import LoginComponent from "@/components/forms/LoginComponent.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";
import CekPendaftar from "./components/forms/CekPendaftar.vue";
import useUserStore from "@/stores/user";
import useRegisterStore from "@/stores/register";

export default {
  components: {
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    CekPendaftar,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
    ...mapWritableState(useRegisterStore, ["currentBiodata"]),
  },
  created() {
    if (sessionStorage.accessToken) {
      this.userLoggedIn = true;
    }
  },
};
</script>

<template>
  <header>
    <NavbarComponent />
  </header>

  <div class="main-wrapper">
    <RouterView />
  </div>
  <FooterComponent />
  <LoginComponent />
  <CekPendaftar />
</template>
