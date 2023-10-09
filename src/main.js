import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import axios from "axios";
import 'boxicons'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
