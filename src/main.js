import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import InputText from "primevue/inputtext";
import Paginator from 'primevue/paginator';

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);
app.component("InputText", InputText);
app.component("Paginator", Paginator);

app.mount("#app");
