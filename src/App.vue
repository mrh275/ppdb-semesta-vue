<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/layout/NavbarComponent.vue";
import LoginComponent from "./components/forms/LoginComponent.vue";
</script>

<template>
  <header>
    <NavbarComponent />
    <LoginComponent />
  </header>

  <RouterView />
</template>
