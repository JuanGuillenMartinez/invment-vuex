import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

createApp(App).use(store).use(router).component('Datepicker', Datepicker).mount("#app");
