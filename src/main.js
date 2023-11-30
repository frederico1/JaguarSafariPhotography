/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import "@fontsource-variable/nunito";
import "@fontsource-variable/outfit";
import "@fontsource-variable/red-hat-text";
import "@fontsource-variable/playfair-display";
import AOS from "aos";
import "@mdi/font/css/materialdesignicons.css";
import "aos/dist/aos.css";
import PrimeVue from "primevue/config";
import { MotionPlugin } from "@vueuse/motion";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(MotionPlugin)
  .use(PrimeVue)
  .mount("#app");
