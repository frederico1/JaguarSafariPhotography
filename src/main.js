/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import "@fontsource-variable/nunito";

createApp(App).use(store).use(router).mount("#app");
