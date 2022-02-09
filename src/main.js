import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount("#app");
