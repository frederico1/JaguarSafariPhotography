/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import "@fontsource-variable/nunito";
import "@fontsource-variable/montserrat";
import "@mdi/font/css/materialdesignicons.css";
import "@fontsource-variable/dosis";
import "@fontsource/merriweather";
import "@fontsource-variable/literata";
import "@fontsource-variable/assistant";
import "@fontsource/didact-gothic";
import "@fontsource-variable/league-spartan";
import "@fontsource/alegreya-sans";
import "@fontsource/actor";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");
