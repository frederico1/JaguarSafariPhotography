<template>
  <div class="p-3 md:p-10">
    <!-- NAVIGATION -->

    <JaguarNavigation></JaguarNavigation>
    <!-- NAVIGATION -->

    <!-- CARDS -->

    <div class="pt-60 flex flex-col justify-center items-center mx-auto">
      <div>
        <h1 class="text-6xl">JAGUAR TOURS</h1>
      </div>
      <div class="pt-10 sm:flex sm:flex-col md:grid md:grid-cols-3">
        <router-link to="/jaguar-safari"
          ><JaguarCard4></JaguarCard4
        ></router-link>
        <JaguarCard6></JaguarCard6>
        <JaguarCard7></JaguarCard7>
      </div>
    </div>

    <!-- CARDS -->
  </div>
  <router-view />
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";
import JaguarCard4 from "../components/JaguarCard4.vue";
import JaguarCard6 from "../components/JaguarCard6.vue";
import JaguarCard7 from "../components/JaguarCard7.vue";
import JaguarNavigation from "../components/JaguarNavigation.vue";

export default {
  components: {
    Icon,
    JaguarCard4,
    JaguarCard6,
    JaguarCard7,
    JaguarNavigation,
  },
};
/* eslint-disable */
</script>
