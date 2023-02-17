<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/layout/NavbarComponent.vue";
import LoginComponent from "./components/forms/LoginComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
</script>

<template>
  <header>
    <NavbarComponent />
    <LoginComponent />
  </header>

  <div class="main-wrapper">
    <RouterView />
  </div>

  <FooterComponent />
</template>
