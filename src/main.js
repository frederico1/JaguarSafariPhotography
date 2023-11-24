/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import "@fontsource-variable/nunito";
import "@fontsource-variable/lora";
import "@fontsource-variable/outfit";
import "@fontsource-variable/red-hat-text";
import "@fontsource-variable/playfair-display";

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
