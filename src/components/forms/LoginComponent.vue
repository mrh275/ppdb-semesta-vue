<script>
import { mapActions } from "pinia";
import useUserStore from "@/stores/user";
import Swal from "sweetalert2";

export default {
  name: "LoginComponent",
  data() {
    return {
      typeField: "password",
      credentials: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["login"]),
    closeLoginForm() {
      document.querySelector("#login-form").classList.add("invisible");
      document.querySelector("#login-form").classList.add("opacity-0");
    },
    showPassword() {
      if (this.typeField === "password") {
        this.typeField = "text";
      } else {
        this.typeField = "password";
      }
    },
    async loginAttempt(credentials) {
      try {
        await this.login(credentials);
      } catch (error) {
        Swal.fire({
          title: error.name,
          text: error.message,
        });
      }
    },
  },
};
</script>
<template>
  <div
    class="fixed top-0 z-50 invisible w-full transition-all duration-300 ease-in-out opacity-0 login-form"
    id="login-form"
  >
    <div
      class="flex items-center justify-center h-screen py-6 bg-opacity-50 bg-zinc-700"
    >
      <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
        <form
          method="POST"
          id="login-form"
          class="max-w-lg mx-auto overflow-hidden bg-white border rounded-lg"
        >
          <div
            class="relative flex items-center justify-center p-4 bg-gray-100"
          >
            <h2
              class="text-2xl font-bold text-center text-gray-800 lg:text-3xl"
            >
              Login PPDB
            </h2>
            <button
              type="button"
              id="close-login-btn"
              class="close-login-form absolute text-2xl text-zinc-600 cursor-pointer font-bold top-0.5 right-2"
              @click.prevent="closeLoginForm"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="flex flex-col gap-4 px-8 pt-4 pb-8">
            <div>
              <label
                for="email"
                class="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >Username</label
              >
              <input
                name="username"
                id="username"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-[#0099ff] rounded outline-none transition duration-100 px-3 py-2"
                v-model="credentials.username"
              />
            </div>

            <div>
              <label
                for="password"
                class="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >Password</label
              >
              <input
                name="password"
                :type="typeField"
                id="password"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-[#0099ff] rounded outline-none transition duration-100 px-3 py-2"
                v-model="credentials.password"
              />
            </div>

            <div class="flex items-center">
              <input
                type="checkbox"
                @change="showPassword(event)"
                name="showPassword"
                id="showPassword"
              />
              <label for="showPassword" class="ml-1">Show Password</label>
            </div>

            <button
              class="block btn btn-primary"
              type="button"
              @click="loginAttempt(credentials)"
              id="login-btn-form"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
